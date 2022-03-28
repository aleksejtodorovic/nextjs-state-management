import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { PokemonProvider } from '../src/stores/store';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <PokemonProvider pokemons={pageProps.pokemons}>
            <Component {...pageProps} />
        </PokemonProvider>
    );
}

export default MyApp;
