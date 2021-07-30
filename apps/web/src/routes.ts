import Routes from 'next-routes';

const registry = new Routes()
  .add('home', '/', 'home')
  .add('documents', '/documents', 'documents')
  // .add('liveStream', '/live-stream', 'liveStream')
  .add('login', '/login', 'login')
  // .add('signup', '/signup', 'signup')
  // .add('restorePassword', '/restore-password', 'restorePassword')
  .add('articles', '/articles', 'articles')
  .add('article', '/article/:id', 'article')
  // .add('searchArticlesPage', '/search-articles', 'searchArticlesPage')
  .add('documentUpload', '/document-upload', 'documentUpload')
  .add('vaccine', '/vaccine', 'vaccine')
  .add('allQuestions', '/allQuestions', 'allQuestions');

const { Link, Router } = registry;
export { registry, Link, Router };
