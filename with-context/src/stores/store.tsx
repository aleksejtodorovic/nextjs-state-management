import { createContext, useContext, useMemo, useState } from 'react';
import { Pokemon } from '../interfaces/pokemon';

const NEXT_PUBLIC_API_URL = 'http://localhost:3000';

export async function getServerSideProps() {
    const response = await fetch(`${NEXT_PUBLIC_API_URL}/api/pokemon`);

    return {
        props: {
            pokemons: await response.json()
        }
    };
}

const usePokemonController = (pokemons: Array<Pokemon>) => {
    const [filter, setFilter] = useState('');

    const filteredPokemons = useMemo(
        () =>
            pokemons.filter((pokemon) =>
                pokemon.name.toLowerCase().includes(filter.toLowerCase())
            ),
        [pokemons, filter]
    );

    return {
        filter,
        setFilter,
        pokemons: filteredPokemons
    };
};

const PokemonContext = createContext<ReturnType<typeof usePokemonController>>({
    filter: '',
    setFilter: () => {},
    pokemons: []
});

export const PokemonProvider = ({
    pokemons,
    children
}: {
    pokemons: Array<Pokemon>;
    children: any;
}) => (
    <PokemonContext.Provider value={usePokemonController(pokemons)}>
        {children}
    </PokemonContext.Provider>
);

export const usePokemon = () => useContext(PokemonContext);
