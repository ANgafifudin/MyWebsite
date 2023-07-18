import "@/styles/globals.css"
import Head from "next/head"
import Link from "next/link"

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-gradient-to-br from-indigo-950 to-indigo-900 min-h-screen relative">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Fira+Mono&family=Poiret+One&display=swap"
          rel="stylesheet"
        />
        <title>Ma-Web</title>
        <link rel="icon" href="./logo-2.svg" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}
