import { format, Locale } from 'date-fns';
import kk from 'date-fns/locale/kk';
import ru from 'date-fns/locale/ru';

const localizedMonthFrom = (date: Date, lang: string): string => {
  const localToFNSLangMap: { readonly [ru: string]: Locale; readonly kk: Locale } = {
    ru: ru,
    kk: kk,
  };

  return format(
    date,
    'MMMM',
    { locale: localToFNSLangMap[lang] }, // Pass the locale as an option
  );
};

export const parseDate = (isoDate: string, lang: string): string => {
  const dateObj = new Date(isoDate);
  return `${dateObj.getDate()} ${localizedMonthFrom(dateObj, lang)}, ${dateObj.getFullYear()}`;
};
