import { GlobalStyles } from '@mui/joy'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import relativeTime from 'dayjs/plugin/relativeTime'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from 'store'
import { ThemeProvider } from 'styled-components'
import App from './App'

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
              '#root': {
                display: 'grid',
                gap: '8px',
                gridTemplateRows: 'auto 1fr auto',
                height: '100%',
                position: 'relative',
              },
              '*': {
                boxSizing: 'border-box',
              },
              body: {
                height: '100%',
                margin: 0,
              },
              html: {
                // height: '100vh',
                height: '100dvh',
                overflowY: 'hidden',
              },
            }}
          />

          <App />
        </ThemeProvider>
      </Provider>
    </StrictMode>
  )
}
