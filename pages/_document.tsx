import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel={'preload'} href='/home/jumbo-bg.png'/>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
