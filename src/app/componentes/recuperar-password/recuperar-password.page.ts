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
      //SI EXISTE EL CORREO - TE ENVÍA UN LINK DE RESETEO DE PASSWORD A LA CUENTA
      //SI NO EXISTE DA ERROR
      this.router.navigate(["/login"]);
    } catch (error) {
      console.log("Error->", error);
    }
  }
}
