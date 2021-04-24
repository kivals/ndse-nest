import {Injectable, NotFoundException} from '@nestjs/common';
import {FirebaseFirestoreService} from '../firebase/firebase-firestore.service';
import {CreateBookDto} from "./dto/create-book.dto";

@Injectable()
export class BookService {
  constructor(private firestore: FirebaseFirestoreService) {}
  async findAll() {
    const booksRef = this.firestore.collection('books');
    const snapshot = await booksRef.get();
    const books = [];
    snapshot.forEach((doc) => {
      const book = Object.assign(doc.data(), { id: doc.id })
      books.push(book);
    });
    return books;
  }

  async findById(id: string) {
    const snapshot = await this.firestore.collection('books').doc(id).get();

    if (!snapshot.exists) {
      throw new NotFoundException();
    } else {
      return Object.assign(snapshot.data(), { id: snapshot.id });
    }
  }

  async create(createBookDto: CreateBookDto) {
    const bookRef = this.firestore.collection('books').doc();
    await bookRef.set(createBookDto);

    return bookRef.get().then(book => book.data() && Object.assign(book.data(), { id: book.id }));
  }

  async remove(id: string) {
    return this.firestore.collection('books').doc(id).delete();
  }
}
