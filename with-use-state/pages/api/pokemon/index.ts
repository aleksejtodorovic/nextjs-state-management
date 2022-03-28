import type { NextApiRequest, NextApiResponse } from 'next';
import { Pokemon } from '../../../interfaces/pokemon';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Array<Pokemon>>
) {
    res.status(200).json([
        {
            id: 1,
            name: 'Bulbasaur',
            image: 'images/bulbasaur.jpg'
        },
        {
            id: 2,
            name: 'Venusaur',
            image: 'images/venusaur.jpg'
        },
        {
            id: 3,
            name: 'Onix',
            image: 'images/onix.jpg'
        },
        {
            id: 4,
            name: 'Charmander',
            image: 'images/charmander.jpg'
        },
        {
            id: 5,
            name: 'Charmeleon',
            image: 'images/charmeleon.jpg'
        },
        {
            id: 6,
            name: 'Charizard',
            image: 'images/charizard.jpg'
        },
        {
            id: 7,
            name: 'Squirtle',
            image: 'images/squirtle.jpg'
        },
        {
            id: 8,
            name: 'Pikachu',
            image: 'images/pikachu.jpg'
        },
        {
            id: 9,
            name: 'Pangoro',
            image: 'images/Pangoro.jpg'
        },
        {
            id: 10,
            name: 'Sandshrew',
            image: 'images/sandshrew.jpg'
        },
        {
            id: 11,
            name: 'Sandsplash',
            image: 'images/sandslash.jpg'
        },
        {
            id: 12,
            name: 'Wartortle',
            image: 'images/wartortle.jpg'
        },
        {
            id: 13,
            name: 'Pancham',
            image: 'images/pancham.jpg'
        }
    ]);
}
