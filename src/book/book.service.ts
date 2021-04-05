import { Injectable } from '@nestjs/common';
// import { CreateBookDto } from './dto/create-book.dto';
// import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BookService {
  findAll() {
    return [];
  }

  // async findById(id: string) {
  //   const book = await this.bookModel.findById(id).exec();
  //   if (!book) {
  //     throw new NotFoundException(`Book #${id} not found`);
  //   }
  //   return book;
  // }
  //
  // async create(createBookDto: CreateBookDto) {
  //   return await this.bookModel.create(createBookDto);
  // }
  //
  // async update(id: string, updateBookDto: CreateBookDto) {
  //   const existBook = await this.bookModel
  //     .findByIdAndUpdate(id, { $set: updateBookDto }, { new: true })
  //     .exec();
  //   if (!existBook) {
  //     throw new NotFoundException(`Book #${id} not found`);
  //   }
  //   return existBook;
  // }
  //
  // async remove(id: string) {
  //   const existBook = await this.bookModel.findById(id);
  //   if (!existBook) {
  //     throw new NotFoundException(`Book #${id} not found`);
  //   }
  //   return existBook.remove();
  // }
}
