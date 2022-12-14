import { Global } from '@emotion/react'
import type { AppProps } from 'next/app'
import { GlobalStyles } from '../components/features/GlobalStyle'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Global styles={GlobalStyles} />
    <Component {...pageProps} />
  </>
}

export default MyApp
