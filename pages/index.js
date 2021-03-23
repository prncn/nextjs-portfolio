import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PKUMAR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.grid}>
          <div className={styles.heroTypo}>
            <h3>Software Engineer</h3>
            <h1 className={styles.title}>Princen Kumar</h1>
            <p className={styles.description}>
              Portfolio of developed and upcoming software projects, fullstack
              and web-based.
            </p>
          </div>
          <div className={styles.heroImg}>
            <Image
              src="/taxi-searching.png"
              alt="Page Illustration"
              width={500}
              height={500}
            />
          </div>
        </section>
        <div className={styles.card}></div>

        <div className={styles.grid}>
          <div className={styles["hero-img"]}>
            <Image
              src="/README.png"
              alt="Code Stock"
              width={700}
              height={500}
            />
          </div>
          <div className={styles["hero-typo"]}>
            <h3>
              <Image
                src="/javascript-logo.svg"
                alt="JavaScript"
                width={30}
                height={30}
              />
              JAVASCRIPT
            </h3>
            <h1>artist-degrees</h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles["hero-typo"]}>
            <h3>
              <Image
                src="/javascript-logo.svg"
                alt="JavaScript"
                width={30}
                height={30}
              />
              JAVASCRIPT
            </h3>
            <h1>artist-degrees</h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </div>
          <div className={styles["hero-img"]}>
            <Image
              src="/README.png"
              alt="Code Stock"
              width={700}
              height={500}
            />
          </div>
        </div>


      </main>
      <footer className={styles.footer}>
        <p>Built with NEXT.JS</p>
      </footer>
    </div>
  );
}
