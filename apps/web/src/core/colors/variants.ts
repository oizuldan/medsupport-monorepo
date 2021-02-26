export enum Text {
  Primary = '#18191F',
  Secondary = '#FFFFFF',
}

export enum Neutral {
  Grey = '#969BAB',
  LightGrey = '#D9DBE1',
  White = '#FFFFFF',
  Black = '#000000',
}

export enum Background {
  Primary = '#FFFFFF',
  Grey = '#18191F',
}

export enum Brand {
  Purple = '#8C30F5',
  DarkPurple = '#6019B7',
  LightPurple = '#D6B1FF',
  ExtraLightPurple = '#F1E4FF',
}

export enum Warning {
  Orange1 = '#F4901E',
  Orange2 = '#FFB965',
  Orange3 = '#FFE3C1',
}

export enum Success {
  Green1 = '#00AA79',
  Green2 = '#00C48C',
  Green3 = '#7FF9D6',
}

export enum Error {
  Red1 = '#ED2F3A',
  Red2 = '#FF646D',
  Red3 = '#FF9CA2',
  Red4 = '#F03333',
}

export type AllColors = Text | Neutral | Background | Brand | Warning | Success | Error;
