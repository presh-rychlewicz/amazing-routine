import { RootState } from '..'
import { selectCount, selectRoutines } from '../reducers'
import { useAppSelector } from './internal'

const useStoreState = (): UseStoreState => ({
  counter: useAppSelector(selectCount),
  routines: useAppSelector(selectRoutines),
})

type UseStoreState = RootStateAsValues<RootState>
type StateValueBase = { value: unknown }
type StateValue<StateT extends StateValueBase> = StateT['value']
type RootStateAsValues<RootStateT extends Record<string, StateValueBase>> = {
  [Property in keyof RootStateT]: StateValue<RootStateT[Property]>
}

export default useStoreState
