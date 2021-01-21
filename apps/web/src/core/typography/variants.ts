export enum Title {
  Bold60 = 'ti_bold_60',
  Regular60 = 'ti_regular_60',
  Bold34 = 'ti_bold_34',
  Bold24 = 'ti_bold_24',
  Bold20 = 'ti_bold_20',
  Bold16 = 'ti_bold_16',
}

export enum Subtitle {
  Bold24 = 'sub_bold_24',
  Regular24 = 'sub_Regular_24',
}

export enum Main {
  Bold16 = 'main_bold_16',
  Regular16 = 'main_regular_16',
}

export enum Menu {
  Bold14 = 'menu_bold_14',
}

export enum Additional {
  Regular12 = 'add_regular_12',
}

export enum Small {
  Bold12 = 'sm_bold_12',
  Regular12 = 'sm_regular_12',
}

export type AnyTypography = Title | Subtitle | Main | Menu | Additional | Small;
