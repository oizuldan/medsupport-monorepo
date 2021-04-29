import { chatUser } from './useChat';

export type MessageRaw = {
  readonly body: string;
  readonly user: chatUser;
};

export type Message = {
  readonly body: string;
  readonly user: chatUser;
  readonly ownedByCurrentUser: boolean;
};
