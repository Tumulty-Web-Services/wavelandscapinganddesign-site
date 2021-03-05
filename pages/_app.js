import Head from 'next/head';
import Header from 'components/header';
import Footer from 'components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/global.css';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          content="width=device-width,initial-scale=1,shrink-to-fit=no"
          name="viewport"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/images/favicon/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#2e3a52" />
        <meta name="theme-color" content="#2e3a52" />
        <link
          rel="preload"
          href="/fonts/EBGaramond-Regular.ttf"
          as="font"
          crossOrigin=" "
        />
        <link
          rel="preload"
          href="/fonts/EBGaramond-Bold.ttf"
          as="font"
          crossOrigin=" "
        />
        <link
          rel="preload"
          href="/fonts/EBGaramond-Italic.ttf"
          as="font"
          crossOrigin=" "
        />
        <link
          rel="preload"
          href="/fonts/proxima-nova-bold.ttf"
          as="font"
          crossOrigin=" "
        />
      </Head>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default App;
