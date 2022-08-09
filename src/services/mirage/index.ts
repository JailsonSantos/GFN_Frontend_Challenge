import {
  createServer,
  Factory,
  Model,
  Response
} from 'miragejs'

import { faker } from '@faker-js/faker';

type Store = {
  name: string;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
  revenue: number;
}

export function makeServer() {
  const server = createServer({
    models: {
      store: Model.extend<Partial<Store>>({})
    },
    factories: {
      store: Factory.extend({
        id() {
          return faker.datatype.uuid()
        },
        name() {
          return faker.internet.userName()
        },
        city() {
          return faker.internet.userName('São Luis')
        },
        state() {
          return "MA"
        },
        latitude() {
          return -(Number(faker.finance.amount(23, 23.1, 2)))
        },
        longitude() {
          return -(Number(faker.finance.amount(46, 46.1, 2)))
        },
        revenue() {
          return Number(faker.finance.amount(1, 100000, 2)) // 1, 100000, 2, 'R$ ' '$5.85'
        },

      })
    },

    // Criar automaticamente 100 lojas
    seeds(server) {
      server.createList('store', 200)
    },

    //ShortHands
    routes() {
      this.namespace = 'api';
      this.timing = 800; // Time de espera da API

      this.get('/stores', function (schema, request) {

        const { page = 1, per_page = 10 } = request.queryParams

        const total = schema.all('store').length

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const stores = this.serialize(schema.all('store'))
          .stores.slice(pageStart, pageEnd)

        return new Response(
          200,
          { 'x-total-count': String(total) },
          { stores }
        )
      });

      this.namespace = '';
      this.passthrough()
    }
  })

  return server;
}