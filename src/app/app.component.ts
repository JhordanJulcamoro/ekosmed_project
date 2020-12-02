import { Component } from "@angular/core";

import { Platform } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { Router } from "@angular/router";
import { AuthService } from "./services/auth.service";
import { User } from "./shared/user.interface";
import { Observable } from "rxjs";
@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  user$: Observable<User> = this.authSvc.afAuth.user;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authSvc: AuthService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async onlogout() {
    try {
      await this.authSvc.logout();
      this.router.navigate(["/init"]);
      console.log("Encerrando Sessão");
    } catch (error) {
      console.log("Error->", error);
    }
  }
  
}
