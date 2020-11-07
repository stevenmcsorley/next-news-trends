// import { jsx } from 'theme-ui'
// import { ThemeProvider } from 'theme-ui'
import React from "react";
import { ChakraProvider } from "@chakra-ui/core"
// import theme from '../../theme'
import Nav from '../../components/nav'
import '../../css/styles.css'

export default function App({ Component, pageProps }) {


  return (
  
      <ChakraProvider>
   
        <Nav />
        <Component {...pageProps} />
    
      </ChakraProvider>
  )
}
