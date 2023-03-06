import type { AppProps } from 'next/app'
import "../assets/main.css";
import "../assets/chrome-bug.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
