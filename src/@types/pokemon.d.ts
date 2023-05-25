export interface Name {
fr: string
en: string
jp: string
}

export interface Gmax {
regular: string
shiny: string
}

export interface Sprites {
regular: string
shiny: string
gmax: Gmax
}

export interface Sprites2 {
regular: string
shiny: string
}

export interface Type {
name: string
image: string
}

export interface Talent {
name: string
tc: boolean
}

export interface Stats {
hp: number
atk: number
def: number
spe_atk: number
spe_def: number
vit: number
}

export interface Resistance {
name: string
multiplier: number
}

export interface Pre {
pokedexId: number
name: string
}

export interface Next extends Pre {
condition: string
}

export interface Mega {
orbe: string
sprites: Sprites2
}

export interface Evolution {
pre: Pre[]
next: Next[]
mega: Mega[]
}

export interface Sexe {
male: number
female: number
}

export interface Pokemon {
pokedexId: number
generation: number
category: string
name: Name
sprites: Sprites
types: Type[]
talents: Talent[]
stats: Stats
resistances: Resistance[]
evolution: Evolution
height: string
weight: string
egg_groups: string[]
sexe: Sexe
catch_rate: number
level_100: number
forme: any
}
