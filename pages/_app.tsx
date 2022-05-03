import "styles/global.scss"; // Global styles
import Head from "next/head";
import Script from 'next/script'
import StateProvider from "state"; // Global state provider
import type { AppProps } from "next/app"; // Types
import Layout from "../components/Layout"
import Preloader from 'components/Preloader';
import { ToastContainer } from 'react-toastify'
import { useEffect, useState } from "react" // React
import 'react-toastify/dist/ReactToastify.css'

// Export application
export default function MyApp({
  Component,
  pageProps,
}: AppProps) {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
      setTimeout(function(){
        setLoading(false)
          
      }, 1000); //Time before execution
  }, [loading])
  return (
    
    <StateProvider>
      {!loading ?
      <Layout>
        <Head>
          <title>PeojectX competition</title>
          <meta
            name="Description"
            content=""
          />
          {/* Favicon */}
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
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
      :
      <Preloader />
      }
    </StateProvider>
  );
}
