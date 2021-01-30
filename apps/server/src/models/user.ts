import { Document, model, Schema } from 'mongoose';

import UserType from '../types/user';

const UserSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

export default model<Document & UserType>('User', UserSchema);
