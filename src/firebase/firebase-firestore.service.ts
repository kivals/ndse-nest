import { Injectable } from '@nestjs/common';
import admin from 'firebase-admin';

@Injectable()
export class FirebaseFirestoreService {
  constructor(public readonly app: admin.app.App) {}

  get firestore() {
    if (!this.app) {
      throw new Error('Firebase instance is undefined.');
    }
    return this.app.firestore();
  }

  doc(documentPath: string) {
    return this.firestore.doc(documentPath);
  }

  collection(collectionPath: string) {
    return this.firestore.collection(collectionPath);
  }
}
