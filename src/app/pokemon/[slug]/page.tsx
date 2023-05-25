'use client';

import { useRouter } from 'next/navigation';
import { Pokemon } from '@/@types/pokemon';

// template literals type
type Slug = `${number}-${string}`;

interface SingleProps {
  params: {
    slug: Slug,
  };
}

async function getData(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pokemon/${id}`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json() as Promise<Pokemon>;
}

export default async function Single({ params }: SingleProps) {
  const router = useRouter();

  const [id] = params.slug.split('-');

  const pokemon = await getData(id);

  return (
    <main className="bg-cyan-950 min-h-screen">
      <h1 className="font-bold text-cyan-400 text-4xl p-12">
        {pokemon.name.fr}
      </h1>

      <button type="button" onClick={() => router.back()} className="text-slate-300">← Accueil</button>

      <img
        src={pokemon.sprites.shiny || pokemon.sprites.regular}
        alt={pokemon.name.fr}
      />
    </main>
  );
}
