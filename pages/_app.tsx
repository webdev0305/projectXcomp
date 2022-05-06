import "styles/global.scss"; // Global styles
import Head from "next/head";
import StateProvider from "state"; // Global state provider
import type { AppProps } from "next/app"; // Types
import Layout from "../components/Layout"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Script from 'next/script'

// Export application
export default function MyApp({
  Component,
  pageProps,
}: AppProps) {
  return (
    <StateProvider>
      <Layout>
        <Head>
          <title>CompetitionX</title>
          <meta
            name="Description"
            content=""
          />
          {/* Favicon */}
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <Script src="/assets/js/vendor/jquery-3.5.1.min.js"></Script>
        <Script src="/assets/js/vendor/bootstrap.bundle.min.js"></Script>
        <Script src="/assets/js/vendor/wow.min.js"></Script>
        <Script src="/assets/js/vendor/slick.min.js"></Script>
        <Script src="/assets/js/app.js"></Script>
        {/* Wrap application in global state provider */}
        <Component {...pageProps} />
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Layout>
    </StateProvider>
  );
}