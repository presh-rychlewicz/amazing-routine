const FIRST_INDEX = 0
const SECOND_INDEX = 1

const getFieldLabel = (key: string): string =>
  key[FIRST_INDEX].toUpperCase() + key.slice(SECOND_INDEX)

export default getFieldLabel
