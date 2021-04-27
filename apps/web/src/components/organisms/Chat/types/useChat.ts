import { Message } from './Message';

type sendMessageFunction = {
  (messageBody: string): void;
};

export type useChatType = {
  readonly messages: readonly Message[];
  readonly sendMessage: sendMessageFunction;
};
