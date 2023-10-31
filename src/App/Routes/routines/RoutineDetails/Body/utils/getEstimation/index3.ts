import { SingleTask } from 'schemas'
import { getDurationString, getPluralPart } from 'utils'
import getDurationTotal from './getDurationTotal'

const getEstimation = (tasks: Array<SingleTask>): string => {
  const { secs, count } = getDurationTotal(tasks)

  const timePart = `${count ? '~' : ''}${getDurationString(secs)}`
  const totalPart = getPluralPart(tasks.length, 'task')

  return `Estimation: ${timePart} (${totalPart})`
}

export default getEstimation
