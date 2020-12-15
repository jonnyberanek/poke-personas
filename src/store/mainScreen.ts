import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type MainScreenSchemaItem = { type: string; params: any }
export type BlockState = { data: any }

type MainScreenState = {
  hash: string
  schema: MainScreenSchemaItem[] | null
  blocks: { [id: number]: BlockState | null }
}

const slice = createSlice({
  name: "mainScreen",
  initialState: {
    hash: "",
    schema: null,
    blocks: {}
    // order: []
  } as MainScreenState,
  reducers: {
    schemaInitialized: (
      state,
      { payload }: PayloadAction<MainScreenSchemaItem[]>
    ) => {
      state.schema = payload
    },
    blockInitialized: (state, { payload }: PayloadAction<number>) => {
      state.blocks[payload] = null
    },
    blockDataLoaded: (
      state,
      { payload }: PayloadAction<{ id: number; data: any }>
    ) => {
      state.blocks[payload.id] = payload.data
    }
  }
})

export const {
  blockInitialized,
  blockDataLoaded,
  schemaInitialized
} = slice.actions
export default slice.reducer
