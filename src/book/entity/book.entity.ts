import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import mongoose from 'mongoose';

@Schema()
export class Book extends Document {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  authors: string;

  @Prop({ default: false })
  favorite: boolean;

  @Prop()
  fileCover: string;

  @Prop()
  fileName: string;

  @Prop()
  fileBook: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
