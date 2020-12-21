import React, { FC } from 'react';
import { ThemeProvider } from '@emotion/react'
import styled from '@emotion/styled'

import { Button, defaultTheme, Theme } from 'zdzz'

const theme: Theme = {
  ...defaultTheme,
  palette: {
    ...defaultTheme.palette,
    primary: {
      main: 'red',
      light: 'orange',
      dark: 'orange',
      contrastText: 'white'
    }
  }
}

const StyledApp = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 1rem;
  background-color: #fff;
  margin: 0 auto;
  padding-bottom: 500px;
  width: 95%;
`

const App: FC = () => {
  return (
    <StyledApp>
      <ThemeProvider theme={theme}>
        <div>
          <h2>Buttons with Theme Provider</h2>
          <p>
            <Button variant="contained" size="md" color="primary">
              Hello World
            </Button>
          </p>
          <p>
            <Button variant="contained" size="md" color="success">
              Hello World
            </Button>
          </p>
          <p>
            <Button variant="contained" size="lg" color="warning">
              Hello World
            </Button>
          </p>
          <p>
            <Button size="sm" variant="text">
              Primary
            </Button>
          </p>
          <p>
            <Button>Primary</Button>
          </p>
          <p>
            <Button size="lg" variant="outlined">
              Primary
            </Button>
          </p>
          <p>
            <Button size="xl" variant="outlined">
              Primary
            </Button>
          </p>
          <p>
            <Button size="sm">Primary</Button>
          </p>
          <p>
            <Button>Primary</Button>
          </p>
          <p>
            <Button size="lg">Primary</Button>
          </p>
          <p>
            <Button size="xl">
              Primary
            </Button>
          </p> 
        </div>
      </ThemeProvider>

      <div>
          <h2>Buttons without Theme Provider</h2>
          <p>
            <Button variant="contained" size="md" color="primary">
              Hello World
            </Button>
          </p>
          <p>
            <Button variant="contained" size="md" color="success">
              Hello World
            </Button>
          </p>
          <p>
            <Button variant="contained" size="lg" color="warning">
              Hello World
            </Button>
          </p>
          <p>
            <Button size="sm" variant="text">
              Primary
            </Button>
          </p>
          <p>
            <Button>Primary</Button>
          </p>
          <p>
            <Button size="lg" variant="outlined">
              Primary
            </Button>
          </p>
          <p>
            <Button size="xl" variant="outlined">
              Primary
            </Button>
          </p>
          <p>
            <Button size="sm">Primary</Button>
          </p>
          <p>
            <Button>Primary</Button>
          </p>
          <p>
            <Button size="lg">Primary</Button>
          </p>
          <p>
            <Button size="xl">
              Primary
            </Button>
          </p> 
        </div>
    </StyledApp>
  )
}

export default App;
