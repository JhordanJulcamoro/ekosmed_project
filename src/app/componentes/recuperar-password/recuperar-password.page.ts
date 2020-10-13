import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
@Component({
  selector: "app-recuperar-password",
  templateUrl: "./recuperar-password.page.html",
  styleUrls: ["./recuperar-password.page.scss"],
})
export class RecuperarPasswordPage implements OnInit {
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
    });
  }

  ngOnInit() {}

  async onResetPassword() {
    try {
      await this.authSvc.resetPassword(this.fGroup.get("email").value);
      this.authSvc.presentAlert("Sucesso", "O envio foi satisfatório.");
      this.router.navigate(["/login"]);
    } catch (error) {
      // console.log("Error->", error);
      this.authSvc.errorsCase(error);
    }
  }
}
