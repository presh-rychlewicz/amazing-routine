import { useLocation, useParams } from 'react-router-dom'
import { OptionsGeneric } from '../../../../../components'
import { useNavigate } from '../../../../../hooks'
import { routes } from '../../../../../types'
import { FC } from 'react'

type Props = {
  hasAnyTasksInProgress: boolean
}

const Options: FC<Props> = ({ hasAnyTasksInProgress }) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { routineId } = useParams()

  let options = []
  options.push({
    children: 'Add task',
    onClick: () =>
      navigate(routes.tasks.children.add.absolute, undefined, {
        returnPath: pathname,
        routineId,
      }),
  })

  if (hasAnyTasksInProgress) {
    options.push({
      children: 'Run',
      onClick: () =>
        navigate(routes.pilot.children.index.absolute, undefined, {
          routineId,
        }),
    })
  }

  return <OptionsGeneric options={options} />
}

export default Options
