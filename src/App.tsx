import * as React from "react";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { getOnePokemon } from "./store/pokemon";
import ShowcasePokemonItem from "./components/ShowcasePokemonItem";
import { RootState } from "./store";
import MainScreen from "./main-screen";

export default function App() {
  return (
    <div className="App">
      <MainScreen />
    </div>
  );
}
