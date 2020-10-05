import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;
  constructor(private authSvc: AuthService, private router: Router) {}

  ngOnInit() {}
  async onLogin(email: string, password: string) {
    try {
      const user = await this.authSvc.login(email, password);
      if (user) {
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
      }
    } catch (error) {
      console.log("Error->", error);
    }
  }
  async onLoginGoogle() {
    try {
      const user = await this.authSvc.loginGoogle();
      if (user) {
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
      }
    } catch (error) {
      console.log("Error->", error);
    }
  }

  onLoginFacebook() {
    console.log("login con Facebook");
  }

  private redirectUser(isVerified: boolean): void {
    if (isVerified) {
      this.router.navigate(["main"]);
    } else {
      this.router.navigate(["verificar-email"]);
    }
  }
}
