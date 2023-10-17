import { getPluralPart } from '../../../../../../utils'

const getEstimationString = (mins: number, count: number) => {
  let minutesPart: string | undefined = undefined
  if (mins) {
    minutesPart = `${mins} minute${getPluralPart(mins)}`
  }

  let countPart: string | undefined = ''
  if (count) {
    countPart = `${count} task${getPluralPart(count)}`
  }

  const partsString = [minutesPart, countPart].filter((e) => e).join(' + ')
  const result = `Estimation: ${partsString}`

  return result
}

export default getEstimationString
