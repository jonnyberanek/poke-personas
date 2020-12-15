import React, { useEffect, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import store, { RootState } from "../store"
import {
  BlockState,
  MainScreenSchemaItem,
  schemaInitialized
} from "../store/mainScreen"
import ShowcaseBlock from "./ShowcaseBlock"
import { BlockComponentProps } from "./useBlock"

interface User {
  id: string
  age: number
  numVisits: number
}

export class HomeScreenSchemaService {
  static generateHash = () => new Date().getMinutes().toString()
  static isHashFresh = (hash: string) => this.generateHash() === hash

  static determineSchema(user: User): MainScreenSchemaItem[] {
    if (user.numVisits < 2) {
      return [
        {
          type: "showcase",
          params: { pokemonId: 1 }
        },
        {
          type: "showcase",
          params: { pokemonId: 4 }
        },
        {
          type: "showcase",
          params: { pokemonId: 7 }
        }
      ]
    } else {
      return [
        {
          type: "showcase",
          params: { pokemonId: 3 }
        },
        {
          type: "showcase",
          params: { pokemonId: 6 }
        },
        {
          type: "showcase",
          params: { pokemonId: 9 }
        }
      ]
    }
  }

  static mapSchema(schema: MainScreenSchemaItem[]): BlockRenderConfig[] {
    return schema.map((item) => {
      // Do actual mapping in real impl
      return {
        block: ShowcaseBlock,
        args: item.params
      } as BlockRenderConfig
    })
  }
}

type BlockRenderConfig = {
  block: (props: BlockComponentProps) => JSX.Element
  args: any
}

interface BlockControllerProps {
  // list: BlockRenderConfig[]
}

export const BlockController: React.FC<BlockControllerProps> = () => {
  // const dispatch = useDispatch()

  const schema = useSelector((state: RootState) => state.mainScreen.schema)

  const blockRenderConfigList = useMemo(() => {
    if (!schema) return null
    return HomeScreenSchemaService.mapSchema(schema)
  }, [schema])

  if (!blockRenderConfigList) return null

  return (
    <div>
      {blockRenderConfigList.map(({ block: Block, args }, id) => (
        <Block key={id} {...{ id, args }} />
      ))}
    </div>
  )
}

interface HomeScreenControllerProps {}

export const HomeScreenController: React.FC<HomeScreenControllerProps> = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const { hash, schema: existingSchema } = store.getState().mainScreen
    console.log(hash)

    if (existingSchema && HomeScreenSchemaService.isHashFresh(hash)) return

    const schema = HomeScreenSchemaService.determineSchema({
      id: "1234231412",
      numVisits: 1,
      age: 23
    })
    dispatch(schemaInitialized(schema))
  }, [])

  return <BlockController />
}
