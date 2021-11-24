/*
 * Mirage JS guide on Factories: https://miragejs.com/docs/data-layer/factories
 */
import { Factory } from 'miragejs';

/*
 * Faker Github repository: https://github.com/Marak/Faker.js#readme
 */
import faker from 'faker';

export default {
  user: Factory.extend({
    name() {
      return faker.name.findName();
    },
    email() {
      return faker.internet.email();
    },
    imageUrl() {
      return faker.internet.avatar();
    },
    role() {
      return faker.random.arrayElement(['admin', 'user']);
    },
    department() {
      return faker.random.arrayElement(['sales', 'development', 'marketing']);
    },
    mobile() {
      return faker.phone.phoneNumber();
    },
    address: {
      country() {
        return faker.address.country();
      },
      state() {
        return faker.address.state();
      },
      city() {
        return faker.address.city();
      },
      zip() {
        return faker.address.zipCode();
      },
      street() {
        return faker.address.streetAddress();
      },
    },
  }),
};
