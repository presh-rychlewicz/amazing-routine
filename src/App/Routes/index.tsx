/* eslint-disable sort-keys */

import { Navigate, useRoutes } from 'react-router-dom'

import { Typography } from '@mui/joy'
import { paths } from 'config'
import { AddOrEditContext, ContextList } from './contexts'
import { Dashboard } from './dashboard'
import { Pilot, Summary } from './pilot'
import { AddRoutine, RoutineDetails, RoutineList } from './routines'
import { Settings } from './settings'
import { Statistics } from './statistics'
import { AddOrEditTask, TaskList } from './tasks'

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
          element: <AddOrEditContext />,
        },
        {
          path: paths.contexts.children.edit.relative,
          element: <AddOrEditContext isEdit={true} />,
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
          element: <AddOrEditTask isEdit={false} />,
        },
        {
          path: paths.tasks.children.edit.relative,
          element: <AddOrEditTask isEdit />,
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
