export type Props = {
  readonly header: string;
  readonly messages: readonly Message[];
};

export type Message = {
  readonly id: number;
  readonly text: string;
};
