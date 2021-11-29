export default function routes() {
  this.namespace = 'api';
  this.timing = 3000;

  this.resource('users');
  this.resource('products');
}
