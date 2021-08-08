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
  .add('vaccine', '/vxn', 'vaccine')
  .add('questions', '/questions', 'questions')
  .add('question', '/question/:categoryId/:id?', 'question');

const { Link, Router } = registry;
export { registry, Link, Router };
