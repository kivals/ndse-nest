import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import {FirebaseModule} from "../firebase/firebase.module";
const serviceAccount = require('../../ndse-firebase-firebase-adminsdk-ip0u3-1815e3e75f.json');

@Module({
  imports: [FirebaseModule.forRoot(serviceAccount)],
  providers: [BookService],
  controllers: [BookController],
  exports: [BookService],
})
export class BookModule {}
