import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private AFauth: AngularFireAuth) {}
  login(email: string, password: string) {
    this.AFauth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log("Error:" + err);
      });
  }
}
