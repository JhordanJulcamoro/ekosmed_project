import { Component, OnInit } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { CasosClinicos } from "../../shared/casosclinicos.interface";

@Component({
  selector: "app-casos-clinicos",
  templateUrl: "./casos-clinicos.page.html",
  styleUrls: ["./casos-clinicos.page.scss"],
})
export class CasosClinicosPage implements OnInit {
  private casosCollection: AngularFirestoreCollection<CasosClinicos>;
  casosItems: Observable<CasosClinicos[]>;

  constructor(private afs: AngularFirestore) {
    this.chamarData();
  }

  ngOnInit() {}

  async chamarData() {
    this.casosCollection = this.afs.collection<CasosClinicos>("casos-clinicos");
    this.casosItems = this.casosCollection.valueChanges();
  }
}
