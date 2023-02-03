import React from 'react'
import '../styles/global.css'
import type { AppProps } from 'next/app'
import Layout from '../components/common/Layout'
import Footer from '../components/common/Footer'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
      <Footer />
    </Layout>
  )
}

export default App