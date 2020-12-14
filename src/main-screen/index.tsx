import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getManyPokemon, getOnePokemon } from "../store/pokemon";
import ShowcasePokemonItem from "../components/ShowcasePokemonItem";
import { RootState } from "../store";

const POKE_ID = 13;
const LIST = [20, 21, 22, 23, 24];

const MainScreen = () => {
  const dispatch = useDispatch();

  const showcasePokemon = useSelector((state: RootState) => {
    return state.pokemon[POKE_ID];
  });

  React.useEffect(() => {
    if (showcasePokemon === undefined) {
      dispatch(getOnePokemon(POKE_ID));
    }
  }, [showcasePokemon]);

  const pokemonList = useSelector(({ pokemon }: RootState) => {
    return LIST.map((id) => pokemon[id]);
  });

  const isLoaded = useMemo(
    () => pokemonList.every((x, i) => LIST[i] === x?.id),
    [pokemonList]
  );

  React.useEffect(() => {
    if (isLoaded) return;
    dispatch(getManyPokemon(LIST));
  }, [isLoaded]);

  return (
    <div>
      {showcasePokemon && <ShowcasePokemonItem pokemon={showcasePokemon} />}
      {isLoaded &&
        pokemonList.map((item, i) => {
          return (
            <div
              style={{
                borderTop: i !== 0 ? "black solid 1px" : undefined,
                // display: 'flex',
                // alignItems: 'center',
                padding: 8
              }}
            >
              <span
                style={{ fontWeight: "bold", marginRight: 6, fontSize: 24 }}
              >
                #{item.id}
              </span>
              <span>{item.name}</span>
            </div>
          );
        })}
    </div>
  );
};

export default MainScreen;
