import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-recuperar-password",
  templateUrl: "./recuperar-password.page.html",
  styleUrls: ["./recuperar-password.page.scss"],
})
export class RecuperarPasswordPage implements OnInit {
  email: string;
  constructor() {}

  ngOnInit() {}
  onResetPassword(email) {
    console.log("Email->", email);
  }
}
