// import 'bootstrap-4-grid';

import Routes from 'next-routes';

const registry = new Routes().add('home', '/', 'home');
registry.add('document', '/', 'docume');

const { Link, Router } = registry;
export { registry, Link, Router };
