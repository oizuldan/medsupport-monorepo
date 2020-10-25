import Routes from 'next-routes';

const registry = new Routes().add('home', '/', 'home');

const { Link, Router } = registry;
export { registry, Link, Router };
