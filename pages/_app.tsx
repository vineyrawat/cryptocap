import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MoralisProvider
        serverUrl={`${process.env.MORALIS_SERVER_URL}`}
        appId={`${process.env.MORALIS_APP_ID}`}
      >
        <Component {...pageProps} />
      </MoralisProvider>
    </>
  )
}

export default MyApp
