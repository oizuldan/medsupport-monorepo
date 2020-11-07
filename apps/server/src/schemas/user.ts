import { Document, model, Schema } from 'mongoose';

export type IUser = Document & {
  readonly username: string;
  readonly password: string;
  readonly firstName: string;
  readonly lastName: string;
};

const UserSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
});

export default model<IUser>('User', UserSchema);
