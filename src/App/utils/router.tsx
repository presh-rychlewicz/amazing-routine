import { Navigate, createHashRouter } from 'react-router-dom'

import { Typography } from '@mui/joy'
import { routes } from '../../types'
import {
  AddRoutine,
  AddTask,
  Pilot,
  RoutineDetails,
  RoutinesList,
  TasksList,
} from '../routes'

const router = createHashRouter([
  {
    path: '/',
    element: <Navigate to={routes.routines.core} replace={true} />,
  },
  {
    path: routes.pilot.core,
    children: [
      {
        index: true,
        element: <Pilot />,
      },
    ],
  },
  {
    path: routes.routines.core,
    children: [
      {
        index: true,
        element: <RoutinesList />,
      },
      {
        path: routes.routines.children.details.relative,
        element: <RoutineDetails />,
      },
      {
        path: routes.routines.children.add.relative,
        element: <AddRoutine />,
      },
    ],
  },
  {
    path: routes.tasks.core,
    children: [
      {
        index: true,
        element: <TasksList />,
      },
      {
        path: routes.tasks.children.add.relative,
        element: <AddTask />,
      },
    ],
  },
  {
    path: '*',
    element: <Typography>404</Typography>,
  },
])

export default router
