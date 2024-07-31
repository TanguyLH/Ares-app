import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@mantine/core/styles.css'
import { AppShell, Burger, createTheme, MantineProvider } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import React from 'react'

const theme = createTheme({
  primaryColor: 'blue',
})

function App() {
  const [count, setCount] = useState(0)
  const [opened, { toggle }] = useDisclosure();

  return (
    <MantineProvider theme={theme}>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: 'sm',
          collapsed: { mobile: !opened },
        }}
        footer={{ height: 60 }}
        padding="md"
      >
        <AppShell.Header>
          <Burger onClick={toggle} opened={opened} hiddenFrom="sm" size="sm" />
          <div>Logo</div>
        </AppShell.Header>

        <AppShell.Navbar p="md">

        </AppShell.Navbar>
        <AppShell.Main>
          <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </AppShell.Main>
        <AppShell.Footer>
        </AppShell.Footer>
      </AppShell>
    </MantineProvider>
  )
}

export default App
