import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const slice = createSlice({
  name: "mainScreen",
  initialState: {
    hash: "",
    blocks: {} as { [id: number]: any }
    // order: []
  },
  reducers: {
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

export const { blockInitialized, blockDataLoaded } = slice.actions
export default slice.reducer
