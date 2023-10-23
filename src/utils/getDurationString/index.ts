import dayjs from 'dayjs'
import { SingleTask } from 'schemas'
import { DurationParts, presentDuration } from './utils'

const getDurationString = (
  durationInSeconds: SingleTask['durationInSeconds'] | null,
  options: Options = {
    shouldShowEmptyMessage: false,
    shouldShowFullUnits: false,
  }
) => {
  if (!durationInSeconds) {
    if (options.shouldShowEmptyMessage) {
      return 'Missing time'
    } else {
      return undefined
    }
  }

  const durationObject = dayjs.duration(durationInSeconds, 'seconds')
  const durationPartsString = durationObject.format(`{
    ["hours"]: H,
    ["minutes"]: m,
    ["seconds"]: s
  }`)
  const durationParts: DurationParts = JSON.parse(durationPartsString)

  return presentDuration(durationParts, options.shouldShowFullUnits ?? false)
}

type Options = {
  shouldShowEmptyMessage?: boolean
  shouldShowFullUnits?: boolean
}

export default getDurationString
