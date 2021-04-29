import { Message } from './Message';

type sendMessageFunction = {
  (messageBody: string): void;
};

export type useChatType = {
  readonly messages: readonly Message[];
  readonly sendMessage: sendMessageFunction;
};

export type chatUser = {
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
};
