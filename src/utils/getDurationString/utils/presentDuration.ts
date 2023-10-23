import presentDurationUnit from '../../presentDurationUnit'

const presentDuration = (
  { hours, minutes, seconds }: DurationParts,
  shouldShowLong = true
) => {
  const hoursPart = hours
    ? presentDurationUnit(hours, 'hours', shouldShowLong)
    : ''
  const minutesPart = minutes
    ? presentDurationUnit(minutes, 'minutes', shouldShowLong)
    : ''
  const secondsPart = seconds
    ? presentDurationUnit(seconds, 'seconds', shouldShowLong)
    : ''

  return [hoursPart, minutesPart, secondsPart].filter((p) => p).join(' ')
}

type DurationParts = {
  hours: number
  minutes: number
  seconds: number
}

export default presentDuration
export type { DurationParts }
