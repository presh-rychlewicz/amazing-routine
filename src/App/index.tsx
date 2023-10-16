import { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import { useStoreDispatch } from '../store'
import { router } from './utils'

const App = () => {
  const storeDispatch = useStoreDispatch()

  useEffect(() => {
    storeDispatch.routines.removeAllExpired()
  }, [storeDispatch.routines])

  return <RouterProvider router={router} />
}

export default App
