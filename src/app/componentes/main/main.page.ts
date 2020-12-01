import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../../services/auth.service";
import { User } from "../../shared/user.interface";
@Component({
  selector: "app-main",
  templateUrl: "./main.page.html",
  styleUrls: ["./main.page.scss"],
})
export class MainPage implements OnInit {
  user$: Observable<User> = this.authSvc.afAuth.user;
  constructor(private authSvc: AuthService, private router: Router) {}

  ngOnInit() {}

  async onlogout() {
    try {
      await this.authSvc.logout();
      this.router.navigate(["/init"]);
      console.log("Cerrando sesión");
    } catch (error) {
      console.log("Error->", error);
    }
  }
}
