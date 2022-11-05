import Head from "next/head";
import About from "../components/about/About";
import Header from "../components/header/Header";
import Hero from "../components/hero/Hero";
import Services from "../components/services/Services";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Preparación de documentos y formularios migratorios | JMJ Taxes
        </title>
        <meta
          name="description"
          content="Gestionamos de una manera muy fácil y segura todos tus trámites, desde taxes, creación de empresas, asilo politico, TPS y mucho más!"
        />
        <meta
          name="keywords"
          content="tps, asilo politico, taxes individuales, creacion de empresas, parole humanitario, ciudadania y naturalizacion, taxes jmj, formularios migratorios"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jmjtaxes.vercel.app/" />
        <meta
          property="og:title"
          content="Somos preparadores de documentos y formularios migratorios"
        />
        <meta
          property="og:description"
          content="Gestionamos de una manera muy fácil y segura todos tus trámites, desde taxes, creación de empresas, asilo politico, TPS y mucho más!"
        />
        <meta property="og:image" content="https://jmjtaxes.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo2.fcffb0a2.jpg&w=1920&q=75" />

        <meta name="robots" content="index, follow" />
        <meta name="language" content="Spanish" />

        <link rel="shortcut icon" href="/favicon.jpg" type="image/x-icon" />
      </Head>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
