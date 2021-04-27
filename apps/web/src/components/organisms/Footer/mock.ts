import { SectionData } from './types/SectionData';

export const sectionData: ReadonlyArray<SectionData> = [
  {
    title: 'О нас',
    links: [{ name: 'О Medsupport' }, { name: 'Стать частью команды' }, { name: 'Стажировка' }],
  },
  {
    title: 'Обратная связь',
    links: [{ name: 'Написать нам' }, { name: 'Оставить заявку' }],
  },
  {
    title: 'Реклама',
    links: [{ name: 'Работай с нами' }, { name: 'Политика' }],
  },
  {
    title: 'Пожертвования',
    links: [{ name: 'Написать нам' }, { name: 'Оставить заявку' }],
  },
  {
    title: 'Контакты',
    links: [
      { name: 'hello@medsupport.kz' },
      {
        name: '+77087747886',
        icons: [
          {
            alt: 'phone',
            url: '/static/images/phoneIcon.png',
          },
        ],
      },
      {
        icons: [
          {
            alt: 'instagram',
            url: '/static/images/instagramIcon.png',
          },
          {
            alt: 'dribble',
            url: '/static/images/dribbbleIcon.png',
          },
          {
            alt: 'twitter',
            url: '/static/images/twitterIcon.png',
          },
          {
            alt: 'youtube',
            url: '/static/images/youtubeIcon.png',
          },
        ],
      },
    ],
  },
];
