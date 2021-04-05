import { DynamicModule, Module } from '@nestjs/common';

@Module({})
export class FirebaseModule {
  static forRoot(options: any): DynamicModule {
    return {
      module: FirebaseModule,
    };
  }
}
