type SourcedValue = {
  name: string
  url: string
}

export interface Pokemon {
  id: number
  abilities: {
    ability: SourcedValue
    is_hidden: boolean
    slot: number
  }[]
  base_experience: number
  forms: SourcedValue[]
  game_indices: {
    game_index: number
    version: SourcedValue
  }[]
  height: number
  held_items: {
    item: SourcedValue
    version_details: {
      rarity: number
      version: SourcedValue
    }[]
  }[]
  moves: {
    move: SourcedValue
    version_group_details: {
      level_learned_at: number
      move_lean_method: SourcedValue
    }[]
  }[]
  name: string
  order: number
  species: SourcedValue
  sprites: {
    back_default: string
    front_default: string
    front_shiny: string
    back_shiny: string
    other?: {
      // @ts-ignore
      "official-artwork"?: {
        front_default: string
      }
      [key: string]: { front_default: string }
    }
    // not worth doing lol
    versions: unknown[]
  }
  stats: {
    base_state: number
    effort: number
    state: SourcedValue
  }[]
  types: {
    slot: number
    type: SourcedValue
  }[]
  weight: number
}
