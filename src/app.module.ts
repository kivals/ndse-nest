import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { FirebaseModule } from './firebase/firebase.module';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const serviceAccount = require('../ndse-firebase-firebase-adminsdk-ip0u3-1815e3e75f.json');

@Module({
  imports: [FirebaseModule.forRoot(serviceAccount), BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
