import dayjs from 'dayjs'

const getDateStringFromUnix = (unix: number) =>
  dayjs.unix(unix).format('YYYY-MM-DD')

export default getDateStringFromUnix
