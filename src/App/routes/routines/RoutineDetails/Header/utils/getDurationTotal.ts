import { SingleTask } from '../../../../../../store/reducers/tasks/types'

const getDurationTotal = (tasks: Array<SingleTask>) =>
  tasks.reduce((acc: DurationTotal, curr) => {
    const newAcc = { ...acc }

    if (curr.duration !== undefined) {
      newAcc.mins = newAcc.mins + curr.duration
    } else {
      newAcc.count = newAcc.count + 1
    }

    return newAcc
  }, initialDurationTotal)

type DurationTotal = {
  mins: number
  count: number
}

const initialDurationTotal: DurationTotal = { mins: 0, count: 0 }

export default getDurationTotal
