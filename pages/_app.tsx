import type { AppProps } from "next/app";
import "../assets/main.css";
import "../assets/chrome-bug.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalProvider from "@/contexts/ModalContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ModalProvider>
        <ToastContainer />
        <Component {...pageProps} />
      </ModalProvider>
    </>
  );
}
