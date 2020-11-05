import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
export interface User {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  name: string;
  followers: number;
  following: number;
}

@Component({
  selector: "app-casoclinico",
  templateUrl: "./casoclinico.page.html",
  styleUrls: ["./casoclinico.page.scss"],
})
export class CasoclinicoPage implements OnInit {
  public user: User;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    const username = this.route.snapshot.paramMap.get("username");
    const url = "http://api.github.com/users/" + username;
    (this.http.get(url).toPromise() as Promise<User>).then(
      (res) => (this.user = res)
    );
  }
}
