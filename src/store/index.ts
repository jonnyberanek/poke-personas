import {
  combineReducers,
  configureStore,
  getDefaultMiddleware
} from "@reduxjs/toolkit"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"
import mainScreen from "./mainScreen"
import pokemon from "./pokemon"

const rootReducer = combineReducers({
  mainScreen,
  pokemon
})

const persistConfig = {
  key: "root",
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
    immutableCheck: false
  })
})

export const persistor = persistStore(store)

export default store
