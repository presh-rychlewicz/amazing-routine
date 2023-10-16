import { useLocation, useParams } from 'react-router-dom'
import { OptionsGeneric } from '../../../../components'
import { useNavigate } from '../../../../hooks'
import { routes } from '../../../../types'

const Options = () => {
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

  return <OptionsGeneric options={options} />
}

export default Options
