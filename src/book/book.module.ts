import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import {FirebaseModule} from "../firebase/firebase.module";

@Module({
  imports: [FirebaseModule.forRoot()],
  providers: [BookService],
  controllers: [BookController],
  exports: [BookService],
})
export class BookModule {}
