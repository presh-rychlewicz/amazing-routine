import { SingleTask } from 'schemas'

const getDurationTotal = (tasks: Array<SingleTask>) =>
  tasks.reduce((acc: DurationTotal, curr) => {
    const newAcc = { ...acc }

    if (curr.durationInSeconds !== undefined) {
      newAcc.secs = newAcc.secs + curr.durationInSeconds
    } else {
      // eslint-disable-next-line @typescript-eslint/no-magic-numbers
      newAcc.count = newAcc.count + 1
    }

    return newAcc
  }, initialDurationTotal)

type DurationTotal = {
  secs: number
  count: number
}

const initialDurationTotal: DurationTotal = {
  count: 0,
  secs: 0,
}

export default getDurationTotal
