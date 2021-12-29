import { gql } from '@apollo/client';

export const queryResistancePageData = gql`
  query ResistancePageData($locale: String) {
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
    resistancePage(locale: $locale) {
      title
      ResistanceArticles {
        title
        articles {
          description
          id
          title
        }
        buttonText
      }
      Videos {
        title
        YoutubeVideos {
          videoId
        }
      }
    }
  }
`;
