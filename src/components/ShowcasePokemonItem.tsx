import React, { useState } from "react";
import { Pokemon } from "../types";

interface ShowcasePokemonItemProps {
  pokemon: Pokemon;
}

const ShowcasePokemonItem: React.FC<ShowcasePokemonItemProps> = ({
  pokemon
}) => {
  const [showShiny, setShowShiny] = useState(false);

  return (
    <div style={{ padding: 14, backgroundColor: "#e2e2e2", borderRadius: 10 }}>
      <img
        style={{
          padding: 8,
          borderRadius: 12,
          borderColor: "#aaa",
          borderWidth: 1,
          borderStyle: "solid"
        }}
        src={
          showShiny
            ? pokemon.sprites.front_shiny
            : pokemon.sprites.front_default
        }
      />
      <div style={{ fontWeight: "bold" }}>{pokemon.name.toUpperCase()}</div>
      <input
        type="checkbox"
        id="is-shiny"
        value={setShowShiny ? "on" : "off"}
        onChange={({ target }) => {
          setShowShiny(target.checked);
        }}
      />
      <label htmlFor="is-shiny">Shiny</label>
    </div>
  );
};

export default ShowcasePokemonItem;
