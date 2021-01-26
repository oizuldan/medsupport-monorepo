export enum Heading {
  SemiBold34 = 'heading_semi_bold_34',
  SemiBold28 = 'heading_semi_bold_28',
  SemiBold22 = 'heading_semi_bold_22',
  SemiBold17 = 'heading_semi_bold_17',
  Bold34 = 'heading_bold_34',
  Bold28 = 'heading_bold_28',
  Bold22 = 'heading_bold_22',
  Bold17 = 'heading_bold_17',
  Medium34 = 'heading_medium_34',
  Medium28 = 'heading_medium_28',
  Medium22 = 'heading_medium_22',
  Medium17 = 'heading_medium_17',
  Regular34 = 'heading_regular_34',
  Regular28 = 'heading_regular_28',
  Regular22 = 'heading_regular_22',
  Regular17 = 'heading_regular_17',
}

export enum Content {
  Regular24 = 'content_regular_24',
  Regular20 = 'content_regular_20',
  Regular16 = 'content_regular_16',
}

export enum Element {
  Regular20 = 'element_regular_20',
  Regular16 = 'element_regular_16',
  Regular12 = 'element_regular_12',
  SemiBold20 = 'element_semi_bold_20',
  SemiBold16 = 'element_semi_bold_16',
  SemiBold12 = 'element_semi_bold_12',
  Bold20 = 'element_bold_20',
  Bold16 = 'element_bold_16',
  Bold12 = 'element_bold_12',
}

export type AnyTypography = Heading | Content | Element;
