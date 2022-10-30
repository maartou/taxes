import Head from "next/head"
import About from "../components/about/About"
import Header from "../components/header/Header"
import Hero from "../components/hero/Hero"
import Services from "../components/services/Services"

export default function Home() {
  return (
    <>
    <Head>
      <title>JMJ taxes</title>
      <link rel="shortcut icon" href="/favicon.jpg" type="image/x-icon" />
    </Head>
    <Header />
    <main>
      <Hero />
      <About />
      <Services />
    </main>
    </>
  )
}
