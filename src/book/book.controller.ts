import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './entity/book.interface';

@Controller('books')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get()
  getAll(): Book[] {
    return this.bookService.getAll();
  }

  @Post()
  create(@Body() book: Book) {
    this.bookService.create(book);
  }

  @Get(':id')
  getBookById(@Param('id') id: string): Book | undefined {
    return this.bookService.getBookById(id);
  }
}
