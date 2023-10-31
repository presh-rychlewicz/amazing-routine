import { ONE } from 'config'

// eslint-disable-next-line @typescript-eslint/no-magic-numbers
const getNewVersion = (currentVersion: number) => currentVersion + ONE

export default getNewVersion
