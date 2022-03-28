import { computed, makeObservable, observable } from 'mobx';
import { Pokemon } from '../interfaces/pokemon';

class PokemonsStore {
    pokemons: Array<Pokemon> = [];
    filter: string = '';

    constructor() {
        makeObservable(this, {
            pokemons: observable,
            filter: observable,
            filteredPokemons: computed
        });
    }

    setPokemons(pokemons: Array<Pokemon>) {
        this.pokemons = pokemons;
    }

    get filteredPokemons() {
        return this.pokemons.filter(({ name }) =>
            name.toLowerCase().includes(this.filter.toLowerCase())
        );
    }
}

const store = new PokemonsStore();

export default store;
