import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [BookModule, MongooseModule.forRoot(process.env.MONGODB_URL)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
