import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { QuiroService } from "../../services/quiro.service";
import { Quiropraxia } from "../../shared/quiropraxia.interface";

@Component({
  selector: "app-quiropraxia",
  templateUrl: "./quiropraxia.page.html",
  styleUrls: ["./quiropraxia.page.scss"],
})
export class QuiropraxiaPage implements OnInit {
  private quiroCollection: AngularFirestoreCollection<Quiropraxia>;
  quiroItems: Observable<Quiropraxia[]>;
  constructor(private http: HttpClient, private afs: AngularFirestore) {
    this.chamarData();
  }
  ngOnInit() {}

  chamarData() {
    this.quiroCollection = this.afs.collection<Quiropraxia>("quiropraxia");
    this.quiroItems = this.quiroCollection.valueChanges();
  }
}
