import { RootState } from '..'
import { counter, routines } from '../reducers'
import { useAppSelector } from './internal'

const useStoreState = (): UseStoreState => ({
  counter: useAppSelector(counter.selectCount),
  routines: useAppSelector(routines.selectRoutines),
})

type UseStoreState = RootStateAsValues<RootState>
type StateValueBase = { value: unknown }
type StateValue<StateT extends StateValueBase> = StateT['value']
type RootStateAsValues<RootStateT extends Record<string, StateValueBase>> = {
  [Property in keyof RootStateT]: StateValue<RootStateT[Property]>
}

export default useStoreState
