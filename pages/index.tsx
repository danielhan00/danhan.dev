import Head from "next/head";
import Image from "next/image";
import { Children } from "react";
import { Button } from "../components/Button";
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
        <link rel="icon" href="favicon.ivo" />
      </Head>

      <Header name="universal header"></Header>

      <Navigation />
      <main className={styles.main}>
        Hi, my name is Daniel Han. I build things for the web. I’m a software
        engineer specializing in building (and occasionally designing)
        exceptional digital experiences. Currently, I’m focused on building
        accessible, human-centered products at Haldi.
      </main>

      <Footer />
    </div>
  );
}
