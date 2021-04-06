import { Injectable } from '@nestjs/common';
import { FirebaseFirestoreService } from './firebase/firebase-firestore.service';

@Injectable()
export class AppService {
  constructor(private firestore: FirebaseFirestoreService) {}

  async getHello() {
    const citiesRef = this.firestore.collection('books');
    const snapshot = await citiesRef.get();
    snapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data());
    });
    return 'Hello Worlsadfsadfasdfd112!';
  }
}
