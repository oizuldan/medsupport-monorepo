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
}

export enum Primary {
  Purple1 = '#6019B7',
  Purple2 = '#8F27D7',
  Purple3 = '#BF63FF',
  Purple4 = '#D6B1FF',
  Purple5 = '#F1E4FF',
  Purple6 = '#8C30F5',
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

export enum Button {
  Primary1 = '#8C30F5',
  Secondary1 = '#F1E4FF',
  Secondary2 = '#FFFFFF',
  Hover = '#F4901E',
  Click = '#6100D0',
  Disabled = '#D9DBE1',
}
export type AnyColor = Text | Neutral | Background | Primary | Warning | Success | Error | Button;
