import { ONE } from 'config'

const getPluralPart = (value: number, core: string) =>
  `${value} ${core}${value === ONE ? '' : 's'}`

export default getPluralPart
