import { SingleTask } from '../../../../../../store/reducers/tasks/types'
import { getPluralPart } from '../../../../../../utils'

const getDurationString = (duration: SingleTask['duration']) => {
  if (!duration) {
    return 'Missing time'
  }

  return `${duration} min${getPluralPart(duration)}`
}

export default getDurationString
