import { useState } from 'react'

import styles from './Counter.module.css'
import { useStoreDispatch, useStoreState } from '../../store/hooks'

const Counter = () => {
  const storeState = useStoreState()
  const storeDispatch = useStoreDispatch()

  const [incrementAmount, setIncrementAmount] = useState(2)
  const incrementValue = incrementAmount || 0

  console.log(storeState.routines)

  return (
    <div>
      <div className={styles.row}>
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
      </div>

      <div className={styles.row}>
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
      </div>
    </div>
  )
}

export default Counter
