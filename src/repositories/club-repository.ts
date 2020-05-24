import firebase = require('firebase');

import { Repository } from '../abstractions/repository';
import { Club } from './types/club';

export class ClubRepository implements Repository<Club> {
  db = firebase.firestore();

  async addItem(item: Club) {
    let clubAlreadyExists = false;

    await this.db
      .collection("clubs")
      .get()
      .then((snapshot) => {
        snapshot.forEach((club) => {
          if (club.data().id === item.id) {
            clubAlreadyExists = true;
          }
        });
      });

    if (clubAlreadyExists) {
      return "";
    }

    this.db.collection("clubs").add(item);
    return item.id;
  }
  removeItem(id: any) {
    throw new Error("Method not implemented.");
  }
  getItem(id: any): Club {
    throw new Error("Method not implemented.");
  }
}
