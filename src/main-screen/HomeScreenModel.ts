import { createSelector } from "@reduxjs/toolkit"
import store, { RootState } from "../store"

type MainScreenContentSchema = {
  hash: string
  blocks: {
    [key: string]: {
      title?: string
      type: string
      args: { [key: string | number]: any }
    }
  }
  order: string[]
}

const registry = {
  showcase: "",
  list: ""
}

interface User {
  id: string
  age: number
  numVisits: number
}

class HomeScreenViewModel {
  generateHash = () => new Date().getMinutes().toString()

  determineSchema(user: User): MainScreenContentSchema {
    const hash = this.generateHash()

    if (user.numVisits < 2) {
      return {
        hash,
        blocks: {
          "123": {
            title: "Today's Thing",
            args: {
              id: Date.now() % 900
            },
            type: "showcase"
          },
          "234": {
            title: "Choose a starter",
            type: "list",
            args: {
              offset: 0,
              size: 9
            }
          }
        },
        order: ["123", "234"]
      }
    } else {
      return {
        hash,
        blocks: {
          "123": {
            title: "Today's Thing",
            args: {
              id: Date.now() % 900
            },
            type: "showcase"
          },
          "234": {
            title: "The boys",
            type: "list",
            args: {
              offset: 6,
              size: 3
            }
          }
        },
        order: ["123", "234"]
      }
    }
  }

  private mapSchema(schema: MainScreenContentSchema) {
    schema.blocks
  }
}

export default HomeScreenViewModel
