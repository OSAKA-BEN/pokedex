import { Pokemon } from '@/@types/pokemon';
import PokemonCard from '@/components/PokemonCard';

async function getData() {
  const res = await fetch('https://api-pokemon-fr.vercel.app/api/v1/pokemon');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json() as Promise<Pokemon[]>;
}

export default async function Home() {
  const pokemons = await getData();
  const pokemonsFiltered = pokemons.slice(0, 50);
  return (
    <main className="bg-[#f0f]} min-h-screen">
      <h1 className="font-bold text-cyan-400 text-4xl p-12">Pokedex</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2 p-2">
        {pokemonsFiltered.map((pokemon) => (
          <a
            key={`${pokemon.pokedexId}${pokemon.name.fr}`}
            href={`/pokemon/${pokemon.name.fr.toLowerCase()}`}
            className="flex"
          >
            <PokemonCard pokemon={pokemon} />
          </a>
        ))}
      </div>
    </main>
  );
}
