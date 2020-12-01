import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  public fGroup: FormGroup;

  constructor(
    private fBuilder: FormBuilder,
    private authSvc: AuthService,
    private router: Router
  ) {
    this.fGroup = this.fBuilder.group({
      email: [
        null,
        Validators.compose([
          Validators.required,
          Validators.pattern(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ),
        ]),
      ],
      password: [
        null,
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
    });
  }

  ngOnInit() {}

  async onLogin() {
    try {
      const user = await this.authSvc.login(
        this.fGroup.get("email").value,
        this.fGroup.get("password").value
      );
      if (user) {
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
      }
    } catch (error) {
      this.authSvc.errorsCase(error);
      //console.log("Error->", error);
    }
  }
  async onLoginGoogle() {
    console.log("LoginGoogle");
    try {
      const user = await this.authSvc.loginGoogle();
      if (user) {
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
      }
    } catch (error) {
      console.log("Error->", error);
      // this.authSvc.errorsCase(error);
    }
  }

  async onLoginFacebook() {
    console.log("LoginFacebook");
    this.authSvc.presentAlert(
      "Informação",
      "Esta seção ainda está em construção."
    );
    // try {
    //   const user = await this.authSvc.loginFacebook();
    //   if (user) {
    //     const isVerified = this.authSvc.isEmailVerified(user);
    //     this.redirectUser(isVerified);
    //   }
    // } catch (error) {
    //   console.log("Error->", error);
    // }
  }

  private redirectUser(isVerified: boolean): void {
    if (isVerified) {
      this.router.navigate(["main"]);
    } else {
      this.router.navigate(["verificar-email"]);
    }
  }
}
