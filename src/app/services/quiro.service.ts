import { Injectable } from "@angular/core";
import { Quiropraxia } from "../shared/quiropraxia.interface";
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from "@angular/fire/firestore";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class QuiroService {
  private quiroCollection: AngularFirestoreCollection<Quiropraxia>;
  quiroItems: Observable<Quiropraxia[]>;

  constructor(public afs: AngularFirestore) {
    this.quiroCollection = afs.collection<Quiropraxia>("quiropraxia");
    this.quiroItems = this.quiroCollection.valueChanges();
  }

  getItems(): Observable<Quiropraxia[]> {
    return this.quiroItems;
  }
}
