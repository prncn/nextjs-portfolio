import Head from 'next/head';
import Image from 'next/image';

import GitHubIcon from '@material-ui/icons/GitHub';
import ProjectShowcase from '../components/ProjectShowcase';
import MUIButton from '../components/MUIButton';
import styles from '../styles/Home.module.css';
import Nav from '../components/Nav';

export default function Home() {
  return (
    <div>
      <Nav />
      <div className={styles.container}>
        <Head>
          <title>Princen Kumar | Personal Portfolio</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <div className="container">
            <section className={styles.grid}>
              <div className={styles.heroTypo}>
                <h3>Software Engineer</h3>
                <h1 className={styles.title}>Some selected projects.</h1>
                <p className={styles.description}>
                  Portfolio of developed and upcoming software projects,
                  fullstack and web-based.
                </p>
                <MUIButton color="primary" startIcon={<GitHubIcon />}>
                  GitHub
                </MUIButton>
                <MUIButton color="primary">Contact</MUIButton>
              </div>
              <div>
                <Image
                  src="/images/psd_annie_bercy.png"
                  alt="Page Illustration"
                  width={800}
                  height={800}
                  objectFit="contain"
                />
              </div>
            </section>
          </div>
          <ProjectShowcase
            title="Canister"
            desc="Canister is a CRUD application allowing for twitter-like
                message postings. Users connect with their IP addresses to create anonymous and 
                temporary posts. <br> The web app is build on the MEVN stack: MongoDB, Express, Vue and Node. User posts are
                stored and fetched through a REST API, communicating with a MongoDB Atlas cloud database."
            stack="vue"
            gitUrl="vue-crud-websocket"
          />
          <ProjectShowcase
            title="DegreesOfSeperation"
            desc="Six degrees of seperation is the idea that any two people are on average connected by six social contacts. 
                Given two artists' names, this app fetches each of their networks of similar artists from a music database
                and searches their shared common connections. This is realised through a path-finding algorithm  
                (bidirectional breadth-first search) traversing through the fetched data."
            stack="javascript"
            gitUrl="artist-dos"
            hasDemo={true}
          />
          <ProjectShowcase
            title="Playlists"
            desc="This project started as a Python script to fetch Youtube music to Spotify. Connect your Google and Spotify accounts
                (using OAuth) and bring your recently liked music from Youtube to a Spotify playlist on your account. Further, preview
                your playlists collections and view some stats on your listening habits."
            stack="flask"
            gitUrl="spotify-playlist-api"
          />
          <ProjectShowcase
            title="Scheduler"
            desc="A Java application. Create events and meeting to organise them on your personal calendar and dashboard.
                Invite other users to those events and notify them on changes in planning. <br> The UI is built on Swing and 
                user data is handled on a cloud SQL solution."
            stack="java"
            gitUrl="java-oop-scheduler"
          />
          <ProjectShowcase
            title="ImageSearch"
            desc="A simple flask application to fetch images from a image database and display them. API logic is written in 
                  flask/python and frontend image-displaying features (like lazy loading) in vanilla javascript."
            stack="flask"
            gitUrl="search-image"
          />
        </main>
        <footer className={styles.footer}>
          <p>Built with NEXT.JS</p>
        </footer>
      </div>
    </div>
  );
}
