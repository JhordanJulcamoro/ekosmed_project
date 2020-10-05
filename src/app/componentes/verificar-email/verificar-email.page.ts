import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-verificar-email",
  templateUrl: "./verificar-email.page.html",
  styleUrls: ["./verificar-email.page.scss"],
})
export class VerificarEmailPage implements OnInit {
  constructor() {}

  ngOnInit() {}
  onSendEmail() {
    console.log("Re-envio de verificación de email");
  }
}
