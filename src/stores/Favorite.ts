import { action, observable, runInAction } from 'mobx';
import { AsyncStorage } from 'react-native';

const KEY = 'FAVORITE_POKEMONS';

export class FavoriteStore {
  @observable pokemons: string[] = [];

  constructor() {
    this.loadPokemons();
  }

  @action
  async loadPokemons() {
    try {
      const key = await AsyncStorage.getItem(KEY);
      if (!key) {
        return;
      }

      runInAction(() => {
        this.pokemons = JSON.parse(key);
      });
    } catch (e) {
      console.error(e);
    }
  }

  @action
  async addPokemon(pokemonId) {
    const pokemons = [...this.pokemons, pokemonId];
    await AsyncStorage.setItem(KEY, JSON.stringify(pokemons));
    runInAction(() => {
      this.pokemons = pokemons;
    });
  }

  @action
  async removePokemon(pokemonId) {
    const pokemons = this.pokemons.filter(pokemon => pokemon !== pokemonId);
    await AsyncStorage.setItem(KEY, JSON.stringify(pokemons));
    runInAction(() => {
      this.pokemons = pokemons;
    });
  }
}

export default new FavoriteStore();
