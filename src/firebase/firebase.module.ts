import { DynamicModule, Module, Provider } from '@nestjs/common';
import { FirebaseFirestoreService } from './firebase-firestore.service';
import admin from 'firebase-admin';

@Module({})
export class FirebaseModule {
  static forRoot(): DynamicModule {
    const app =
      admin.apps.length === 0
        ? admin.initializeApp()
        : admin.apps[0];

    const provider = this.createProvider(app);

    return {
      module: FirebaseModule,
      providers: [provider],
      exports: [provider],
    };
  }

  private static createProvider(app: admin.app.App): Provider {
    return {
      provide: FirebaseFirestoreService,
      useFactory: () => new FirebaseFirestoreService(app),
    };
  }
}
