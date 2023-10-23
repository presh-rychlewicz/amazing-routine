import dayjs from 'dayjs'

const getTimeStringFromUnix = (unix: number) => dayjs.unix(unix).format('HH:ss')

export default getTimeStringFromUnix
