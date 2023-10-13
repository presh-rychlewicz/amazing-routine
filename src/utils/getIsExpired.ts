import dayjs from 'dayjs'

const getIsExpired = (date: string) => dayjs(date).isBefore(undefined, 'day')

export default getIsExpired
