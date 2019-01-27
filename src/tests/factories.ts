import { Factory } from 'rosie';
import * as faker from 'faker';
import { POKEMON_COLORS } from '../constants/colors';

const types = Object.keys(POKEMON_COLORS);

export const AttackFactory = new Factory()
  .attrs({
    name: () => faker.random.word(),
    type: () => faker.random.word(),
    damage: () => String(faker.random.number()),
  });

export const DimensionFactory = new Factory()
  .attrs({
    minimum: () => faker.random.word(),
    maximum: () => faker.random.word(),
  });

export const PokemonFactory = new Factory()
  .sequence('id')
  .attrs({
    number: () => String(faker.random.number()),
    name: () => faker.random.word(),
    types: () => [faker.helpers.randomize(types)],
    image: () => faker.image.imageUrl(),
  });

export const PokemonDetailsFactory = new Factory()
  .extend(PokemonFactory)
  .attrs({
    resistant: () => [faker.helpers.randomize(types)],
    weaknesses: () => [faker.helpers.randomize(types)],
    evolutions: () => PokemonFactory.buildList(2),
    maxHP: () => String(faker.random.number()),
    maxCP: () => String(faker.random.number()),
    fleeRate: () => String(faker.random.number()),
    classification: () => faker.random.word(),
    attacks: () => ({
      fast: AttackFactory.buildList(2),
      special: AttackFactory.buildList(2),
    }),
    weight: () => DimensionFactory.build(),
    height: () => DimensionFactory.build(),
  });
