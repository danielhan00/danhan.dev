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
        <link rel="icon" href="/sunLogo.png" />
        <link href="/dist/output.css" rel="stylesheet" />
      </Head>

      <main className="bg-sky-100 w-full flex-wrap items-center">
        <Header name="universal header" style="border-solid"></Header>
        <h1 className="text-3xl text-green text-center pt-20 font-con">
          Hi! My name is <b className="font-con text-5xl">Daniel Han</b>,
        </h1>
        <p className="text-2xl text-blue text-center pb-16">
          and I build things for the web. <br />
          I’m a Full-stack Software Engineer specializing in building
          exceptional digital experiences. <br />
          Currently, I’m focused on building accessible, human-centered products
          at Haldi.
        </p>
        <Navigation name="contact info"></Navigation>

        <Footer />
      </main>
    </div>
  );
}
