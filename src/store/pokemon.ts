import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Pokemon } from "../types"
import axios from "axios"

type State = { [key: number]: Pokemon }

const pokaxios = axios.create({
  baseURL: "https://pokeapi.co/api/v2"
})

export const getOnePokemon = createAsyncThunk(
  "pokemon/getOnePokemon",
  async (id: number) => {
    return [(await pokaxios.get("/pokemon/" + id)).data]
  }
)

export const getManyPokemon = createAsyncThunk(
  "pokemon/getManyPokemon",
  async (ids: number[]) => {
    return Promise.all(
      ids.map(async (id) => (await pokaxios.get("/pokemon/" + id)).data)
    )
  }
)

export const getPokemonSubset = createAsyncThunk(
  "pokemon/getPokemonSubset",
  async (args: { offset: number; limit: number }) => {
    const response = await pokaxios.get(`/pokemon/`, {
      data: args
    })
    const data = response.data as { results: { url: string }[] }
    return Promise.all(data.results.map((item) => pokaxios.get(item.url)))
  }
)

const updateLoadedPokemon = (
  state: State,
  { payload }: PayloadAction<Pokemon[]>
) => {
  payload.forEach((item) => {
    state[item.id] = item
  })
}

const slice = createSlice({
  name: "pokemon",
  initialState: {} as State,
  reducers: {
    pokemonLoaded: updateLoadedPokemon
  },
  extraReducers: {
    [getOnePokemon.fulfilled.type]: updateLoadedPokemon,
    [getManyPokemon.fulfilled.type]: updateLoadedPokemon
  }
})

export const { pokemonLoaded } = slice.actions
export default slice.reducer
