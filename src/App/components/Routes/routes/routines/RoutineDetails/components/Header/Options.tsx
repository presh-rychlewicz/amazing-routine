import { useLocation, useParams } from 'react-router-dom'
import { OptionsGeneric } from 'components'
import { useNavigate } from 'hooks'
import { paths } from 'config'
import { FC } from 'react'

type Props = {
  hasAnyTasksInProgress: boolean
}

const Options: FC<Props> = ({ hasAnyTasksInProgress }) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { routineId } = useParams()

  const options = []

  if (hasAnyTasksInProgress) {
    options.push({
      children: 'Run',
      onClick: () =>
        navigate(paths.pilot.children.index.absolute, undefined, {
          routineId,
        }),
    })
  }

  options.push({
    children: 'Add task',
    onClick: () =>
      navigate(paths.tasks.children.add.absolute, undefined, {
        returnPath: pathname,
        routineId,
      }),
  })

  return <OptionsGeneric options={options} />
}

export default Options
