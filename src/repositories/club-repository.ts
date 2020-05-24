import firebase = require('firebase');

import { Repository } from '../abstractions/repository';
import { Club } from './types/club';

export class ClubRepository implements Repository<Club> {
  db = firebase.firestore();

  addItem(item: Club) {
    this.db.collection("clubs").add(item);
  }
  removeItem(id: any) {
    throw new Error("Method not implemented.");
  }
  getItem(id: any): Club {
    throw new Error("Method not implemented.");
  }
}
