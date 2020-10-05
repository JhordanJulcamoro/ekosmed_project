import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-registro",
  templateUrl: "./registro.page.html",
  styleUrls: ["./registro.page.scss"],
})
export class RegistroPage implements OnInit {
  email: string;
  password: string;

  constructor() {}

  ngOnInit() {}

  onRegister(email, password) {
    console.log("Email->", email);
    console.log("Password->", password);
  }
}
