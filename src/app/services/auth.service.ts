import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from "../shared/user.interface";
import { AlertBody } from "../shared/alert.interface";
import { auth } from "firebase/app";
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from "@angular/fire/firestore";
import { Observable, of } from "rxjs";
import { switchMap } from "rxjs/operators";
import { AlertController } from "@ionic/angular";
@Injectable({
  providedIn: "root",
})
export class AuthService {
  public user$: Observable<User>;
  public alertBody$: Observable<AlertBody>;

  constructor(
    public afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private alertController: AlertController
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        return of(null);
      })
    );
  }

  async resetPassword(email: string): Promise<void> {
    try {
      // this.presentAlert("Sucess", "O envío foi satisfatorio");
      return this.afAuth.sendPasswordResetEmail(email);
    } catch (error) {
      // console.log("Error ->", error);
      this.errorsCase(error);
    }
  }

  async loginGoogle(): Promise<User> {
    try {
      const { user } = await this.afAuth.signInWithPopup(
        new auth.GoogleAuthProvider()
      );
      this.updateUserData(user);
      return user;
    } catch (error) {
      // console.log("Error ->", error);
      this.errorsCase(error);
    }
  }

  async loginFacebook(): Promise<User> {
    try {
      const { user } = await this.afAuth.signInWithPopup(
        new auth.FacebookAuthProvider()
      );
      this.updateUserData(user);
      return user;
    } catch (error) {
      // console.log("Error ->", error);
      this.errorsCase(error);
    }
  }

  async register(email: string, password: string): Promise<User> {
    try {
      const { user } = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      await this.sendVerificationEmail();
      return user;
    } catch (error) {
      // console.log("Error ->", error);
      this.errorsCase(error);
    }
  }

  async login(email: string, password: string): Promise<User> {
    try {
      const { user } = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );
      this.updateUserData(user);
      return user;
    } catch (error) {
      this.errorsCase(error);
    }
  }

  async sendVerificationEmail(): Promise<void> {
    try {
      return (await this.afAuth.currentUser).sendEmailVerification();
    } catch (error) {
      // console.log("Error ->", error);
      this.errorsCase(error);
    }
  }

  isEmailVerified(user: User): boolean {
    return user.emailVerified === true ? true : false;
  }

  async logout(): Promise<void> {
    try {
      await this.afAuth.signOut();
    } catch (error) {
      // console.log("Error ->", error);
      this.errorsCase(error);
    }
  }

  private updateUserData(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
    );
    const data: User = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
      displayName: user.displayName,
    };
    return userRef.set(data, { merge: true });
  }

  errorsCase(error: Error) {
    switch (error.message) {
      case "There is no user record corresponding to this identifier. The user may have been deleted.":
        this.presentAlert(
          "Error",
          "Este email não está registrado em nosso banco de dados, tente novamente."
        );
        break;
      case "The password is invalid or the user does not have a password.":
        this.presentAlert("Error", "A senha é inválida.");
        break;
      case "A network error (such as timeout, interrupted connection or unreachable host) has occurred.":
        this.presentAlert(
          "Error",
          "Ocorreu um erro de rede (como tempo limite, conexão interrompida ou host inacessível). Verifique sua conexão de internet."
        );
        break;
      default:
        this.presentAlert("Error", "Entre em contato com um assistente.");
    }
  }
  async presentAlert(alertHeader: string, alertMessage: string) {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: alertHeader, //"Alert",
      // subHeader: alertSubHeader, //"Subtitle",
      message: alertMessage, //"This is an alert message.",
      buttons: ["OK"],
    });

    await alert.present();
  }
}
