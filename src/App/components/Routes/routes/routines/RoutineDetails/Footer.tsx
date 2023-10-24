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

  const addTaskLargeButton: ButtonElementProps = {
    color: 'success',
    fullWidth: true,
    label: 'Add task',
    onClick: addTaskOnClick,
    variant: 'solid',
  }

  const runButton: ButtonElementProps = {
    color: 'success',
    fullWidth: true,
    label: 'Run',
    onClick: () =>
      navigate(paths.pilot.children.index.absolute, undefined, {
        routineId,
      }),
    variant: 'solid',
  }

  return (
    <FooterGeneric
      smallButton={hasAnyTasksInProgress ? addTaskSmallButton : undefined}
      largeButton={hasAnyTasksInProgress ? runButton : addTaskLargeButton}
    />
  )
}

export default Footer
