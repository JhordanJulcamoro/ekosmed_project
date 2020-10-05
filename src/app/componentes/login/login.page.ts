import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;
  constructor() {}

  ngOnInit() {}
  onLogin(email, password) {
    console.log("Email->", email);
    console.log("Password->", password);
  }
  onLoginGoogle() {
    console.log("Logueo con google");
  }
}
