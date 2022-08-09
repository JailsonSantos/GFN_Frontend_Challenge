import { Home } from './pages/Home'
import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'

// QueryClient
import { QueryClientProvider, QueryClient } from 'react-query';
const queryClient = new QueryClient()

//Ferramante do devtools
//import { ReactQueryDevtools } from 'react-query/devtools'

export function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={defaultTheme}>
        <Home />
        <GlobalStyle />
      </ThemeProvider>
      {/*   <ReactQueryDevtools /> */}
    </QueryClientProvider>
  )
}