import { CounterState } from './types'

const selectCount = (state: { counter: CounterState }) => state.counter.value

export default selectCount
