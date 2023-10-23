import { useStoreDispatch } from 'hooks'
import { useEffect } from 'react'
import { HashRouter } from 'react-router-dom'
import { Routes } from './components'

const App = () => {
  const storeDispatch = useStoreDispatch()

  useEffect(() => {
    storeDispatch.routines.removeAllExpired()
    storeDispatch.tasks.fixDurationInSeconds()
  }, [storeDispatch.routines, storeDispatch.tasks])

  return (
    <HashRouter>
      <Routes />
    </HashRouter>
  )
}

export default App
