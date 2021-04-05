import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { Book, BookSchema } from './entity/book.entity';

@Module({
  providers: [BookService],
  controllers: [BookController],
  exports: [BookService],
})
export class BookModule {}
