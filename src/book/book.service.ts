import { Injectable } from '@nestjs/common';
import { Book } from './entity/book.interface';

@Injectable()
export class BookService {
  private readonly books: Book[] = [];

  getAll(): Book[] {
    return this.books;
  }

  getBookById(id: string): Book | undefined {
    return this.books.find((b) => b.id === id);
  }

  create(book: Book): void {
    this.books.push(book);
  }
}
