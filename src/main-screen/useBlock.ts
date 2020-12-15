import { useCallback, useEffect } from "react"
import { useDispatch } from "react-redux"
import { blockInitialized, blockDataLoaded } from "../store/mainScreen"

export type BlockComponentProps<A = any> = {
  id: number
  args: A
}

type UseBlockArgs = {
  id: number
}

const useBlock = ({ id }: UseBlockArgs) => {
  const dispatch = useDispatch()

  useEffect(() => {
    // On mount, run that this block has been initialized
    dispatch(blockInitialized(id))
  }, [id])

  const setData = useCallback((data: any) => blockDataLoaded({ id, data }), [
    id
  ])

  return {
    setData
  }
}

export default useBlock
