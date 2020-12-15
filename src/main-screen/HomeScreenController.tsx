import React from "react"
import { BlockComponentProps } from "./useBlock"

interface HomeScreenControllerProps {
  list: unknown
}

export const HomeScreenController: React.FC<HomeScreenControllerProps> = () => {
  return null
}

interface BlockControllerProps {
  list: {
    block: (props: BlockComponentProps) => JSX.Element
    args: any
  }[]
}

export const BlockController: React.FC<BlockControllerProps> = ({ list }) => {
  return <div>{list.map(({ block, args }, id) => block({ id, args }))}</div>
}
