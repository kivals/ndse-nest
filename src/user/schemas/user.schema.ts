import mongoose, { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as bcrypt from 'bcryptjs';

//TODO move to config
const HASH_ROUNDS = 10;

@Schema()
export class User extends Document {
  @Prop({
    lowercase: true,
    required: true,
    minLength: 6,
    maxlength: 255,
  })
  email: string;

  @Prop({
    required: true,
    minLength: 5,
    maxlength: 1014,
  })
  password: string;

  @Prop({
    required: true,
    minLength: 6,
    maxlength: 255,
  })
  firstName: string;

  @Prop({
    minLength: 6,
    maxlength: 255,
  })
  lastName: string;
}

const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre('save', async function (next: mongoose.HookNextFunction) {
  if (!this.isModified('password')) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(HASH_ROUNDS);
    this['password'] = await bcrypt.hash(this['password'], salt);
    return next();
  } catch (err) {
    return next(err);
  }
});

export default UserSchema;
