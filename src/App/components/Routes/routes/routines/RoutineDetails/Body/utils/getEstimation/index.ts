import { SingleTask } from 'schemas'
import { getDurationString, getPluralPart } from 'utils'
import getDurationTotal from './getDurationTotal'

const getEstimation = (tasks: Array<SingleTask>): string => {
  const { secs, count } = getDurationTotal(tasks)

  const timePart = getDurationString(secs)
  const countPart = count ? `${count} task${getPluralPart(count)}` : ''

  const partsString = [timePart, countPart].filter((e) => e).join(' + ')
  const result = `Estimation: ${partsString}`

  return result
}

export default getEstimation
