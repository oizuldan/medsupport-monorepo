export type TokenData = {
  readonly token: string;
  readonly expiresIn: number;
};

export type DataStoredInToken = {
  readonly _id: string;
};
