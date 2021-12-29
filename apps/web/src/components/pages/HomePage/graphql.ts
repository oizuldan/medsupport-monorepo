import { gql } from '@apollo/client';

export const queryMainPage = gql`
  query MainPage($locale: String!) {
    headerBanners(locale: $locale) {
      banners {
        title
        subtitle
        image {
          url
          name
        }
        buttonLink
        buttonTitle
      }
    }
    headerButtons(locale: $locale) {
      buttons {
        title
        link
      }
    }
    footerSections(locale: $locale) {
      sections {
        title
        links {
          title
          link
          image {
            url
            name
          }
        }
      }
    }
    headerLinks(locale: $locale) {
      links {
        title
        link
      }
    }
    homePageSpecialSection(locale: $locale) {
      title
      interactiveCard {
        id
        title
        description
        link
        buttonText
      }
    }
  }
`;
