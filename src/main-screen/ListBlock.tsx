import React from "react"
import ShowcasePokemonItem from "../components/ShowcasePokemonItem"
import { RootState } from "../store"
import { getManyPokemon, getOnePokemon } from "../store/pokemon"
import { Pokemon } from "../types"
import { Block } from "./types"

const listBlock: Block<Pokemon[], { offset: number; size: number }> = {
  fetchContent: ({ offset, size }, { dispatch }) => {
    dispatch(getManyPokemon([1, 2, 3, 4, 5]))
  },
  renderContent: (pokemon) => <ShowcasePokemonItem pokemon={pokemon} />,
  selectContent: (id: number) => {
    return (state: RootState) => state.pokemon[id]
  }
}

export default showcaseBlock
