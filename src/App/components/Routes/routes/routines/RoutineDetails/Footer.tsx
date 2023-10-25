import AddTaskIcon from '@mui/icons-material/AddTask'
import { FooterGeneric } from 'components'
import {
  ButtonElementProps,
  IconButtonElementProps,
} from 'components/CommonElement'
import { paths } from 'config'
import { useNavigate } from 'hooks'
import { FC } from 'react'
import { useLocation, useParams } from 'react-router-dom'

type Props = {
  hasAnyTasksInProgress: boolean
}

const Footer: FC<Props> = ({ hasAnyTasksInProgress }) => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const { routineId } = useParams()

  const addTaskOnClick = () =>
    navigate(paths.tasks.children.add.absolute, undefined, {
      returnPath: pathname,
      routineId,
    })

  const addTaskSmallButton: IconButtonElementProps = {
    icon: <AddTaskIcon />,
    onClick: addTaskOnClick,
    variant: 'outlined',
  }

  const runButton: ButtonElementProps = {
    color: 'success',
    disabled: !hasAnyTasksInProgress,
    fullWidth: true,
    label: 'Run',
    onClick: () =>
      navigate(paths.pilot.children.index.absolute, undefined, {
        routineId,
      }),
    variant: 'solid',
  }

  return (
    <FooterGeneric smallButton={addTaskSmallButton} largeButton={runButton} />
  )
}

export default Footer
