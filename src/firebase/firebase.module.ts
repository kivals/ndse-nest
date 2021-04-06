import { DynamicModule, Module, Provider } from '@nestjs/common';
import { FirebaseFirestoreService } from './firebase-firestore.service';
import admin from 'firebase-admin';

@Module({})
export class FirebaseModule {
  static forRoot(options: any): DynamicModule {
    console.log(options);
    const app =
      admin.apps.length === 0
        ? admin.initializeApp({
            credential: admin.credential.cert(options),
          })
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
