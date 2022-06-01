import { AppProps } from "next/app"
import { ChakraProvider } from '@chakra-ui/react'
import Layout from "../src/components/layout/Layout.component"
import '../src/globals.css';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp