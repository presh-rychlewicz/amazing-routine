import { useState } from 'react'

import styles from './Counter.module.css'
import { useStoreDispatch, useStoreState } from '../../store'
import { Stack, Typography } from '@mui/joy'

const Counter = () => {
  const storeState = useStoreState()
  const storeDispatch = useStoreDispatch()

  const [incrementAmount, setIncrementAmount] = useState(2)
  const incrementValue = incrementAmount || 0

  return (
    <Stack spacing={3}>
      <Typography level="h2">Counter</Typography>

      <Stack direction="row" justifyContent="center">
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => storeDispatch.counter.decrement()}
        >
          -
        </button>

        <span className={styles.value}>{storeState.counter}</span>

        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => storeDispatch.counter.increment()}
        >
          +
        </button>
      </Stack>

      <Stack spacing={1} alignItems="center">
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value))}
        />

        <button
          className={styles.button}
          onClick={() =>
            storeDispatch.counter.incrementByAmount(incrementValue)
          }
        >
          Add Amount
        </button>

        <button
          className={styles.asyncButton}
          onClick={() => storeDispatch.counter.incrementAsync(incrementValue)}
        >
          Add Async
        </button>

        <button
          className={styles.button}
          onClick={() => storeDispatch.counter.incrementIfOdd(incrementValue)}
        >
          Add If Odd
        </button>
      </Stack>
    </Stack>
  )
}

export default Counter
