export type MessageRaw = {
  readonly body: string;
  readonly senderId: string;
};

export type Message = {
  readonly body: string;
  readonly senderId: string;
  readonly ownedByCurrentUser: boolean;
};
