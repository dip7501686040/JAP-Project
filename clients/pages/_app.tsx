import { AppProps } from "next/app"
import { ChakraProvider } from '@chakra-ui/react'
import Layout from "../src/components/layout/Layout.component"
import '../src/globals.css';
import { store, persistor } from "../src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import ProductProvider from "../src/contexts/product-provider.context";


function MyApp({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider>
      <ProductProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ProductProvider>
    </ChakraProvider>
  )
}

export default MyApp