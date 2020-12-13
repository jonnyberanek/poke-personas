import {
  combineReducers,
  configureStore,
  getDefaultMiddleware
} from "@reduxjs/toolkit"
import mainScreen from "./mainScreen"
import pokemon from "./pokemon"

const rootReducer = combineReducers({
  mainScreen,
  pokemon
})

export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
  reducer: rootReducer
})

export default store
