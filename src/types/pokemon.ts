export interface PokemonProps {
  id: string;
  number: string;
  name: string;
  types: string[];
  image: string;
}

interface PokemonDimensionProps {
  minimum: String;
  maximum: String;
}

export interface AttackProps {
  name: string;
  type: string;
  damage: number;
}

export interface PokemonAttacksProps {
  fast: AttackProps[];
  special: AttackProps[];
}

export interface PokemonDetailsProps extends PokemonProps {
  weight: PokemonDimensionProps;
  height: PokemonDimensionProps;
  maxHP: number;
  maxCP: number;
  fleeRate: number;
  resistant: string[];
  weaknesses: string[];
  evolutions: PokemonProps[] | void;
  classification: string;
  attacks: PokemonAttacksProps;
}
