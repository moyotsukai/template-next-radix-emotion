import React from 'react'
import '../styles/global.css'
import type { AppProps } from 'next/app'
import Layout from '../components/common/Layout'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App