import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { Book, BookSchema } from './entity/book.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Book.name,
        schema: BookSchema,
      },
    ]),
  ],
  providers: [BookService],
  controllers: [BookController],
})
export class BookModule {}
