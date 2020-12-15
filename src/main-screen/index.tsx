import React, { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getManyPokemon, getOnePokemon } from "../store/pokemon"
import ShowcasePokemonItem from "../components/ShowcasePokemonItem"
import { RootState } from "../store"
import { BlockController } from "./HomeScreenController"
import ShowcaseBlock from "./ShowcaseBlock"

const POKE_ID = 13
const LIST = [20, 21, 22, 23, 24]

const MainScreen = () => {
  return (
    <div>
      <BlockController
        list={[
          {
            block: ShowcaseBlock,
            args: { pokemonId: 1 }
          },
          {
            block: ShowcaseBlock,
            args: { pokemonId: 4 }
          },
          {
            block: ShowcaseBlock,
            args: { pokemonId: 7 }
          }
        ]}
      />
      {/* {showcasePokemon && <ShowcasePokemonItem pokemon={showcasePokemon} />}
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
        })} */}
    </div>
  )
}

export default MainScreen
