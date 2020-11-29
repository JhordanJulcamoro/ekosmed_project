import { Component, OnInit } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
@Component({
  selector: "app-chatbot",
  templateUrl: "./chatbot.page.html",
  styleUrls: ["./chatbot.page.scss"],
})
export class ChatbotPage implements OnInit {
  vidUrl: SafeResourceUrl;

  constructor(private domSatizer: DomSanitizer) {}

  ngOnInit() {
    this.vidUrl = this.domSatizer.bypassSecurityTrustResourceUrl(
      "https://console.dialogflow.com/api-client/demo/embedded/62dcc198-5fca-4928-8b3a-de5fe78c1508"
    );
  }
}
