import getPluralPart from './getPluralPart'

const presentDurationUnit = (
  value: number,
  unit: Unit,
  shouldShowLong = false
) => {
  const mapping = shouldShowLong ? longUnitMapping : shortUnitMapping
  const unitString = mapping[unit]

  return getPluralPart(value, unitString)
}

type Unit = 'hours' | 'minutes' | 'seconds'

const shortUnitMapping: Record<Unit, string> = {
  hours: 'hr',
  minutes: 'min',
  seconds: 'sec',
}

const longUnitMapping: Record<Unit, string> = {
  hours: 'hour',
  minutes: 'minute',
  seconds: 'second',
}

export default presentDurationUnit
