import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

export interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

@Component({
  selector: "app-casos-clinicos",
  templateUrl: "./casos-clinicos.page.html",
  styleUrls: ["./casos-clinicos.page.scss"],
})
export class CasosClinicosPage implements OnInit {
  public question = "";
  public users: User[];

  constructor(private http: HttpClient) {
    this.chamarHttp();
  }

  ngOnInit() {}

  async chamarHttp() {
    const url =
      "https://api.github.com/repos/mcf1110/ionic-anhembi-2020-2/stargazers";
    this.users = (await this.http.get(url).toPromise()) as User[];
  }
}
