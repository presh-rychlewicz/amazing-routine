import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import App from './App'
import { store } from './store'
import './styles/index.css'

import { GlobalStyles } from '@mui/joy'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(duration)
dayjs.extend(relativeTime)

const container = document.getElementById('root')
if (container) {
  const root = createRoot(container)

  root.render(
    <StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={{}}>
          <GlobalStyles
            styles={{
              html: {
                height: '100%',
              },
              body: {
                height: '100%',
              },
              '*': {
                boxSizing: 'border-box',
              },
              '#root': {
                height: '100%',
              },
            }}
          />

          <App />
        </ThemeProvider>
      </Provider>
    </StrictMode>
  )
}
