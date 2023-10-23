import dayjs from 'dayjs'
import getDateStringFromUnix from './getDateStringFromUnix'

const getIsExpired = (unix: number) => {
  const dateString = getDateStringFromUnix(unix)

  return dayjs(dateString).isBefore(undefined, 'day')
}

export default getIsExpired
