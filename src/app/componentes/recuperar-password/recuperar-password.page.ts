import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
@Component({
  selector: "app-recuperar-password",
  templateUrl: "./recuperar-password.page.html",
  styleUrls: ["./recuperar-password.page.scss"],
})
export class RecuperarPasswordPage implements OnInit {
  email: string;
  constructor(private authSvc: AuthService, private router: Router) {}

  ngOnInit() {}
  async onResetPassword(email: string) {
    try {
      await this.authSvc.resetPassword(email);
      this.authSvc.presentAlert("Sucesso", "O envio foi satisfatório.");
      this.router.navigate(["/login"]);
    } catch (error) {
      // console.log("Error->", error);
      this.authSvc.errorsCase(error);
    }
  }
}
