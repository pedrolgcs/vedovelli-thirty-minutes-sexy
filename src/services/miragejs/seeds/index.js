/*
 * Mirage JS guide on Seeds: https://miragejs.com/docs/data-layer/factories#in-development
 */

export default function seeds(server) {
  server.createList('user', 10);
  server.createList('product', 10);
}
