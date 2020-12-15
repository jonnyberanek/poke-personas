import { AsyncThunkPayloadCreator, createAsyncThunk } from "@reduxjs/toolkit"

export interface Block<T, Args> {
  defaultVisibility?: unknown
  fetchContent: AsyncThunkPayloadCreator<any, Args>
  selectContent: (args: Args) => (...args: any) => T
  renderContent: (item: T) => JSX.Element
}
