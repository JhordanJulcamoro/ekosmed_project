import { ValueConverter } from "@angular/compiler/src/render3/view/template";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { equalValueValidator } from "../../shared/equalValueValidator";
@Component({
  selector: "app-registro",
  templateUrl: "./registro.page.html",
  styleUrls: ["./registro.page.scss"],
})
export class RegistroPage implements OnInit {
  public fGroup: FormGroup;

  constructor(
    private fBuilder: FormBuilder,
    private authSvc: AuthService,
    private router: Router
  ) {
    this.fGroup = this.fBuilder.group(
      {
        nomes: [
          null,
          Validators.compose([Validators.required, Validators.minLength(2)]),
        ],
        sobrenomes: [
          null,
          Validators.compose([Validators.required, Validators.minLength(4)]),
        ],
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
        confirmPassword: [
          null,
          Validators.compose([Validators.required, Validators.minLength(6)]),
        ],
        termConditions: [null, Validators.compose([Validators.requiredTrue])],
      },
      { validator: equalValueValidator("password", "confirmPassword") }
    );
  }

  ngOnInit() {}

  async onRegister() {
    try {
      const user = await this.authSvc.register(
        this.fGroup.get("email").value,
        this.fGroup.get("password").value
      );
      if (user) {
        // console.log("User->", user);
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
      }
    } catch (error) {
      console.log("Error", error);
    }
  }

  private redirectUser(isVerified: boolean): void {
    if (isVerified) {
      this.router.navigate(["home"]);
    } else {
      this.router.navigate(["verificar-email"]);
    }
  }
}
