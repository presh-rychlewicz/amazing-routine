/* eslint-disable @typescript-eslint/no-unused-vars */
import { CssVarsProvider, GlobalStyles, extendTheme } from '@mui/joy'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import relativeTime from 'dayjs/plugin/relativeTime'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from 'store'
import App from './App'
// import { CssVarsProvider } from '@mui/joy/styles'

dayjs.extend(duration)
dayjs.extend(relativeTime)

const theme = extendTheme()
const container = document.getElementById('root')
if (container) {
  const SPACING = '8px'
  const root = createRoot(container)

  root.render(
    <StrictMode>
      <Provider store={store}>
        {/* <ThemeProvider theme={{}}> */}
        <GlobalStyles
          styles={{
            '#root': {
              display: 'grid',
              gap: SPACING,
              gridTemplateRows: '1fr auto',
              height: '100%',
              paddingBottom: `calc(${SPACING} / 2)`,
              paddingTop: SPACING,
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
              userSelect: 'none',
            },
          }}
        />

        {/* <CssVarsProvider theme={theme} defaultMode="light"> */}
        <App />
        {/* </CssVarsProvider> */}
        {/* </ThemeProvider> */}
      </Provider>
    </StrictMode>
  )
}
