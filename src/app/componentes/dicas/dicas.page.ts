import { Component, OnInit } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { Dicas } from "../../shared/dicas.interface";
@Component({
  selector: "app-dicas",
  templateUrl: "./dicas.page.html",
  styleUrls: ["./dicas.page.scss"],
})
export class DicasPage implements OnInit {
  private dicasCollection: AngularFirestoreCollection<Dicas>;
  dicasItems: Observable<Dicas[]>;

  constructor(private afs: AngularFirestore) {
    this.chamarData();
  }

  ngOnInit() {}

  async chamarData() {
    this.dicasCollection = this.afs.collection<Dicas>("dicas");
    this.dicasItems = this.dicasCollection.valueChanges();
  }
}
