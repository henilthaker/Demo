import '@/styles/globals.css';
import Script from 'next/script';
import Layout from '../components/Layout.js'
export default function App({ Component, pageProps}) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js"/>
    </Layout>
  )
}
