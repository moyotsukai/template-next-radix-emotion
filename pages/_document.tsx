import { Html, Head, Main, NextScript } from 'next/document'

export const Document: React.FC = () => {
  return (
    <Html>
      <Head >
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document