/* eslint-disable sort-keys */

import { Navigate, useRoutes } from 'react-router-dom'

import { Typography } from '@mui/joy'
import { paths } from 'config'
import { AddContext, ContextList } from './contexts'
import { Pilot, Summary } from './pilot'
import { AddRoutine, RoutineDetails, RoutineList } from './routines'
import { Settings } from './settings'
import { AddTask, TaskList } from './tasks'
import { Dashboard } from './dashboard'
import { Statistics } from './statistics'

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
        {
          path: paths.contexts.children.add.relative,
          element: <AddContext />,
        },
      ],
    },
    {
      path: paths.dashboard.core,
      children: [
        {
          index: true,
          element: <Dashboard />,
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
      path: paths.settings.core,
      children: [
        {
          index: true,
          element: <Settings />,
        },
      ],
    },
    {
      path: paths.statistics.core,
      children: [
        {
          index: true,
          element: <Statistics />,
        },
      ],
    },
    {
      path: '*',
      element: <Typography>404</Typography>,
    },
  ])

export default Routes
