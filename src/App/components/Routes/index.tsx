/* eslint-disable sort-keys */
import { Navigate, useRoutes } from 'react-router-dom'

import { Typography } from '@mui/joy'
import { paths } from 'config'
import {
  AddRoutine,
  AddTask,
  ContextList,
  Pilot,
  RoutineDetails,
  RoutineList,
  Summary,
  TaskList,
} from './routes'

const Routes = () =>
  useRoutes([
    {
      path: '/',
      element: <Navigate to={paths.routines.core} replace={true} />,
    },
    {
      path: paths.contexts.core,
      children: [
        {
          index: true,
          element: <ContextList />,
        },
      ],
    },
    {
      path: paths.pilot.core,
      children: [
        {
          index: true,
          element: <Pilot />,
        },
        {
          path: paths.pilot.children.summary.relative,
          element: <Summary />,
        },
      ],
    },
    {
      path: paths.routines.core,
      children: [
        {
          index: true,
          element: <RoutineList />,
        },
        {
          path: paths.routines.children.details.relative,
          element: <RoutineDetails />,
        },
        {
          path: paths.routines.children.add.relative,
          element: <AddRoutine />,
        },
      ],
    },
    {
      path: paths.tasks.core,
      children: [
        {
          index: true,
          element: <TaskList />,
        },
        {
          path: paths.tasks.children.add.relative,
          element: <AddTask />,
        },
      ],
    },
    {
      path: '*',
      element: <Typography>404</Typography>,
    },
  ])

export default Routes
