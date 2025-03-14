import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Gabriele Fasano - Frontend Developer Portfolio | Bari</title>
        <meta name="description" content="Portfolio professionale di Gabriele Fasano, Frontend Developer di 20 anni da Bari, specializzato in React e Next.js" />
        <meta name="keywords" content="frontend developer, react, next.js, web development, portfolio, bari, puglia" />
        <meta name="author" content="Gabriele Fasano" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Gabriele Fasano - Frontend Developer da Bari" />
        <meta property="og:description" content="Portfolio professionale di Gabriele Fasano, giovane sviluppatore frontend da Bari" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
