interface CounterState {
  value: number
  status: 'idle' | 'loading' | 'failed'
}

export type { CounterState }
