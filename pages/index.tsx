import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Navigation } from "../components/Navigation";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Daniel Han</title>
        <meta name="description" content="Daniel Han" />
        <link rel="icon" href="/favicon.ivo" />
        <link href="/dist/output.css" rel="stylesheet" />
      </Head>

      <Header name="universal header" style="border-solid"></Header>
      <main>
        <h1 className="text-3xl text-green text-center">
          Hi, my name is <b>Daniel Han</b>,
        </h1>
        <p className="text-2xl text-blue text-center">
          and I build things for the web. <br />
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. <br />
          Currently, I’m focused on building accessible, human-centered products
          at Haldi.
        </p>
      </main>
      <Navigation name="contact info"></Navigation>

      <Footer />
    </div>
  );
}
