import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../../services/auth.service";
import { User } from "../../shared/user.interface";

@Component({
  selector: "app-verificar-email",
  templateUrl: "./verificar-email.page.html",
  styleUrls: ["./verificar-email.page.scss"],
})
export class VerificarEmailPage implements OnInit {
  user$: Observable<User> = this.authSvc.afAuth.user;
  constructor(private authSvc: AuthService, private router: Router) {}

  ngOnInit() {}
  async onSendEmail() {
    try {
      this.authSvc.sendVerificationEmail();
      this.router.navigate(["login"]);
    } catch (error) {
      console.log("Error->", error);
    }
  }

  async onBackLogin() {
    try {
      await this.authSvc.logout();
      this.router.navigate(["login"]);
    } catch (error) {
      console.log("Error->", error);
    }
  }
  ngOnDestroy(): void {
    this.authSvc.logout();
  }
}
