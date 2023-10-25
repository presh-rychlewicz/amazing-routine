import { Typography } from '@mui/joy'
import { ElementList, SmallCard } from 'components'
import { FC } from 'react'
import { TaskDataElem } from 'schemas'
import {
  getDurationString,
  getTaskDataSections,
  presentDurationUnit,
} from 'utils'

type Props = {
  taskData: Array<TaskDataElem>
}
const Body: FC<Props> = ({ taskData }) => {
  const sections = getTaskDataSections(taskData)

  return (
    <ElementList
      component="main"
      elements={sections}
      renderElement={(s) => (
        <ElementList
          key={s.name}
          title={s.name}
          subtitle={`Count: ${s.tasks.length}`}
          shouldShowEmptyState={false}
          elements={s.tasks}
          renderElement={({
            id,
            name,
            isDone,
            completionSeconds,
            durationInSeconds,
          }) => {
            let subtitle = undefined
            if (isDone && durationInSeconds) {
              const diffInSeconds = completionSeconds - durationInSeconds
              const diffFormatted = getDurationString(Math.abs(diffInSeconds))
              // TODO: missing x factor
              const isNegative = diffInSeconds < 0
              const minusCharacter = isNegative ? '-' : ''
              const inParens = `(${minusCharacter}${diffFormatted})`

              subtitle = (
                <>
                  <Typography endDecorator=" ">
                    {presentDurationUnit(completionSeconds, 'seconds')}
                  </Typography>

                  <Typography color={isNegative ? 'success' : 'danger'}>
                    {inParens}
                  </Typography>
                </>
              )
            }

            return <SmallCard key={id} title={name} subtitle={subtitle} />
          }}
        />
      )}
    />
  )
}

export default Body
