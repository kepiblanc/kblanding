import type { AppProps } from "next/app";
import "../assets/main.css";
import "../assets/chrome-bug.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ModalProvider from "@/contexts/ModalContext";
import { Provider } from "react-redux";
import { reduxStore } from "@/config/reduxStore";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ModalProvider>
        <Provider store={reduxStore}>
          <ToastContainer />
          <Component {...pageProps} />
        </Provider>
      </ModalProvider>
    </>
  );
}
