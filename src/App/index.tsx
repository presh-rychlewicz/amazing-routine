import { Stack, Typography } from '@mui/joy'
import { useRouteContext } from '../providers'
import { AddRoutine, RoutinesList } from './routes'
import { useStoreDispatch } from '../store'
import { useEffect } from 'react'

export enum View {
  'ROUTINES_LIST' = 'ROUTINES_LIST',
  'ADD_ROUTINE' = 'ADD_ROUTINE',
}

const App = () => {
  const { view } = useRouteContext()
  const storeDispatch = useStoreDispatch()

  useEffect(() => {
    storeDispatch.routines.removeAllExpired()
  }, [storeDispatch.routines])

  let content
  switch (view) {
    case View.ROUTINES_LIST:
      content = <RoutinesList />
      break

    case View.ADD_ROUTINE:
      content = <AddRoutine />
      break

    default:
      content = <Typography>404</Typography>
      break
  }

  return <Stack spacing={5}>{content}</Stack>
}

export default App
