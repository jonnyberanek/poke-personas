import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOnePokemon } from "../store/pokemon";
import ShowcasePokemonItem from "../components/ShowcasePokemonItem";
import { RootState } from "../store";

const POKE_ID = 13;

const MainScreen = () => {
  const dispatch = useDispatch();

  const pokemon = useSelector((state: RootState) => {
    return state.pokemon[POKE_ID];
  });

  React.useEffect(() => {
    if (pokemon === undefined) {
      dispatch(getOnePokemon(POKE_ID));
    }
  }, [pokemon]);

  return <div>{pokemon && <ShowcasePokemonItem pokemon={pokemon} />}</div>;
};

export default MainScreen;
