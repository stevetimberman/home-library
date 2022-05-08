import React from 'react'
import {
  ChakraProvider,
} from '@chakra-ui/react'
import { Layout } from './Layout'
import theme from './theme'

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Layout />
    </ChakraProvider>
  )
}

export default App
