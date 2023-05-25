import { Pokemon } from '@/@types/pokemon';
import PokemonList from '@/components/PokemonList';

async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pokemon`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json() as Promise<Pokemon[]>;
}

export default async function Home() {
  const pokemons = await getData();
  /*
    ATTENTION ici, nous sommes dans un _Server component_
    tout le travail, rendu… se passe côté serveur ;
    le `console.log` de fait côté serveur (visible dans le terminal)
  */
  // console.log(pokemons);

  return (
    <main className="bg-cyan-950 min-h-screen">
      <h1 className="font-bold text-cyan-400 text-4xl p-12">Pokedex</h1>

      <PokemonList pokemons={pokemons} />
    </main>
  );
}
