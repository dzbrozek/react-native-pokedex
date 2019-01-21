import { Factory } from 'rosie';
import * as faker from 'faker';

export const pokemonFactory = new Factory()
  .sequence('id')
  .attrs({
    number: () => String(faker.random.number()),
    name: () => faker.random.word(),
    types: () => [faker.random.word()],
    image: () => faker.image.imageUrl(),
  });
