import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
@Component({
  selector: "app-main",
  templateUrl: "./main.page.html",
  styleUrls: ["./main.page.scss"],
})
export class MainPage implements OnInit {
  constructor(private authSvc: AuthService, private router: Router) {}

  ngOnInit() {}

  async onlogout() {
    try {
      await this.authSvc.logout();
      this.router.navigate(["/login"]);
      console.log("Cerrando sesión");
    } catch (error) {
      console.log("Error->", error);
    }
  }
}
