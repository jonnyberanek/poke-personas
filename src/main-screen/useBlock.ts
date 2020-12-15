import { useCallback, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../store"
import { blockInitialized, blockDataLoaded } from "../store/mainScreen"

export type BlockComponentProps<A = any> = {
  id: number
  args: A
}

type UseBlockArgs = {
  id: number
}

const useBlock = ({ id }: UseBlockArgs) => {
  // const dispatch = useDispatch()

  // const block = useSelector((state: RootState) => state.mainScreen.blocks[id])

  // useEffect(() => {
  //   if (!block)
  //     // On mount, run that this block has been initialized
  //     dispatch(blockInitialized(id))
  // }, [id, block])

  const setData = useCallback((data: any) => blockDataLoaded({ id, data }), [
    id
  ])

  return {
    setData
  }
}

export default useBlock
