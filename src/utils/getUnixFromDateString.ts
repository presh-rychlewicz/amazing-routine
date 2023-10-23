import dayjs from 'dayjs'

const getUnixFromDateString = (dateString: string) => dayjs(dateString).unix()

export default getUnixFromDateString
