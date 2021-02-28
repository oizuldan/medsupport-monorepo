// import 'bootstrap-4-grid';

import Routes from 'next-routes';

const registry = new Routes()
  .add('home', '/', 'home')
  .add('documents', '/documents', 'documents')
  .add('liveStream', '/live-stream', 'liveStream')
  .add('login', '/login', 'login')
  .add('signup', '/signup', 'signup')
  .add('restorePassword', '/restore-password', 'restorePassword')
  .add('userDocuments', '/user-documents', 'userDocuments');

const { Link, Router } = registry;
export { registry, Link, Router };
