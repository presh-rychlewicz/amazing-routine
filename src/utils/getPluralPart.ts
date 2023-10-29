const getPluralPart = (value: number, core: string) =>
  `${core}${value === ONE ? '' : 's'}`
const ONE = 1

export default getPluralPart
