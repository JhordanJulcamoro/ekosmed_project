import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
@Component({
  selector: "app-registro",
  templateUrl: "./registro.page.html",
  styleUrls: ["./registro.page.scss"],
})
export class RegistroPage implements OnInit {
  email: string;
  password: string;

  constructor(private authSvc: AuthService, private router: Router) {}

  ngOnInit() {}

  async onRegister(email, password) {
    try {
      const user = await this.authSvc.register(email, password);
      if (user) {
        console.log("User->", user);
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
