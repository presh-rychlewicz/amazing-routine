import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store'
import './styles/index.css'
import App from './App'
import { ThemeProvider } from 'styled-components'
import { RouteProvider } from './providers'

const container = document.getElementById('root')
if (container) {
  const root = createRoot(container)

  root.render(
    <StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={{}}>
          <RouteProvider>
            <App />
          </RouteProvider>
        </ThemeProvider>
      </Provider>
    </StrictMode>
  )
}
