import { Dispatch } from "@reduxjs/toolkit"
import axios from "axios"
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import ShowcasePokemonItem from "../components/ShowcasePokemonItem"
import { RootState } from "../store"
import { getOnePokemon, pokemonLoaded } from "../store/pokemon"
import { Pokemon } from "../types"
import { Block } from "./types"
import useBlock, { BlockComponentProps } from "./useBlock"

// const showcaseBlock: Block<Pokemon, number> = {
//   fetchContent: (id: number, { dispatch }) => {
//     dispatch(getOnePokemon(id))
//   },
//   renderContent: (pokemon) => <ShowcasePokemonItem pokemon={pokemon} />,
//   selectContent: (id: number) => {
//     return (state: RootState) => state.pokemon[id]
//   }
// }

interface ShowcaseBlockProps
  extends BlockComponentProps<{
    pokemonId: number
  }> {}

const pokaxios = axios.create({
  baseURL: "https://pokeapi.co/api/v2"
})

const ShowcaseBlock: React.FC<ShowcaseBlockProps> = ({
  id,
  args: { pokemonId }
}) => {
  const { setData } = useBlock({ id })
  const dispatch = useDispatch()

  const pokemon = useSelector((state: RootState) => state.pokemon[pokemonId])

  useEffect(() => {
    if (!pokemon) {
      dispatch(async (dispatch: Dispatch) => {
        const items = [(await pokaxios.get("/pokemon/" + pokemonId)).data]
        dispatch(pokemonLoaded(items))
        dispatch(setData(pokemonId))
      })
    }
  }, [pokemon, pokemonId])

  if (!pokemon?.sprites) return null

  return <ShowcasePokemonItem pokemon={pokemon} />
}

export default ShowcaseBlock
