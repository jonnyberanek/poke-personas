import React from "react"
import ShowcasePokemonItem from "../components/ShowcasePokemonItem"
import { RootState } from "../store"
import { getOnePokemon } from "../store/pokemon"
import { Pokemon } from "../types"
import { Block } from "./types"

const showcaseBlock: Block<Pokemon, number> = {
  fetchContent: (id: number, { dispatch }) => {
    dispatch(getOnePokemon(id))
  },
  renderContent: (pokemon) => <ShowcasePokemonItem pokemon={pokemon} />,
  selectContent: (id: number) => {
    return (state: RootState) => state.pokemon[id]
  }
}

export default showcaseBlock
