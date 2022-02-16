import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/navbar';
import { LiquidDistortionText } from 'react-text-fun';
import { useCallback, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../locale/${locale}.json`)).default,
    },
  };
}

export default function Home() {
  const t = useTranslations('Index');
  const [liquify, setLiquify] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  function HeroBtn({ children }) {
    return (
      <button className="w-28 h-14 border hover:shadow-hard hover:translate-y-1 border-black">
        {children}
      </button>
    );
  }

  function moveHandler(event) {
    const newVol = liquify;
    newVol += Math.abs(event.movementX) * 0.0001;
    newVol += Math.abs(event.movementY) * 0.0001;
    setLiquify(newVol);
  }

  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="bg-slate-50 w-full">
      <Head>
        <title>Princen Kumar | Portfolio</title>
        <meta name="description" content="Portfolio of Code Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="flex justify-center pt-10 bg-gradient-to-b from-slate-50 to-indigo-200">
        <div className="xl:w-3/4 w-full">
          <div className="flex flex-col md:flex-row mt-10 lg:p-10 p-5 justify-center">
            <div className="w-1/2">
              <h1 className="uppercase font-semibold text-sm tracking-wider text-gray-500 mb-5">
                Fullstack Projects
              </h1>
              <span className="text-7xl text-gray-700 font-display font-medium">
                {t('heroHeading')}
              </span>
              <p className="mt-10">{t('heroSubheading')}</p>
              <div className="flex space-x-4 my-10">
                <Link href="https://github.com/prncn">
                  <a target="_blank">
                    <HeroBtn>Github</HeroBtn>
                  </a>
                </Link>
                <Link href="mailto: princen@outlook.de">
                  <a>
                    <HeroBtn>{t('mailLink')}</HeroBtn>
                  </a>
                </Link>
              </div>
            </div>
            <div className="h-full flex items-center">
              <Image
                src="/images/psd_annie_bercy.png"
                alt="Page Illustration"
                width={900}
                height={700}
                objectFit="contain"
              />
              <div className="rotate-90 hover:translate-x-1 w-10 hover:translate-y-1 place-start">
                <Link href={'https://www.artstation.com/prncn'}>
                  <a
                    className="uppercase h-4 max-h-fit text-xl font-display"
                    target="_blank"
                  >
                    {t('artstationLink')}
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full h-72 my-20 flex flex-col lg:flex-row lg:px-0 px-2 space-x-4 overflow-hidden">
            <div className="flex flex-col justify-end items-end text-right h-full lg:w-96 w-full rounded-2xl text-white bg-gradient-to-t from-orange-100 to-violet-300 animate-gradient-y p-2">
              <span className="text-4xl font-semibold w-3/4 lowercase">
                {t('currentProjectHeading')}
              </span>
              <p className="py-4">{t('currentProjectText')}</p>
            </div>
            <div
              className="w-full overflow-hidden"
              onMouseMove={(event) => moveHandler(event)}
            >
              <LiquidDistortionText
                text="case studies &"
                fontFamily="Inter, sans-serif"
                fill="#374151"
                fontSize={100}
                speed={0.01}
                lineHeight={1}
                volatility={Math.min(scrollY / 1000, 2)}
              />
              <LiquidDistortionText
                text={t('caseHeading')}
                fontFamily="Inter, sans-serif"
                fill="#374151"
                fontSize={100}
                speed={0.01}
                lineHeight={1}
                volatility={Math.min(scrollY / 1000, 2)}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-32 overflow-hidden">
            {SHOWCASES.map((showcase) => (
              <ProjectShowcaseCard showcase={showcase} key={showcase.name} />
            ))}
          </div>
          <div className="py-20" />
        </div>
      </div>
      <footer className="bg-black w-full h-40 flex justify-center">
        <div className="xl:w-1/2 w-full h-full flex items-center font-thin text-stone-300 text-sm py-4">
          <div className="w-1/2 flex justify-between">
            <div className="flex flex-col">
              <span className="font-bold mb-4 text-white">LINKS</span>
              <div className="flex flex-col space-y-1">
                <Link href="">
                  <a>Github</a>
                </Link>
                <Link href="">
                  <a>Spotify</a>
                </Link>
                <Link href="">
                  <a>Email</a>
                </Link>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold mb-4 text-white">LINKS</span>
              <div className="flex flex-col space-y-1">
                <Link href="">
                  <a>Github</a>
                </Link>
                <Link href="">
                  <a>Spotify</a>
                </Link>
                <Link href="">
                  <a>Email</a>
                </Link>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold mb-4 text-white">LINKS</span>
              <div className="flex flex-col space-y-1">
                <Link href="">
                  <a>Github</a>
                </Link>
                <Link href="">
                  <a>Spotify</a>
                </Link>
                <Link href="">
                  <a>Email</a>
                </Link>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold mb-4 text-white">LINKS</span>
              <div className="flex flex-col space-y-1">
                <Link href="">
                  <a>Github</a>
                </Link>
                <Link href="">
                  <a>Spotify</a>
                </Link>
                <Link href="">
                  <a>Email</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex flex-col items-end h-full ">
            <span className="text-xl text-white mt-auto">
              Princen Kumar <span className="font-bold">Portfolio</span>
            </span>
            <p className="mt-auto text-xs text-white">Built in NextJS | 2022</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const SHOWCASES = [
  {
    name: 'murdoc',
    git: 'spring-react-progex',
    lang: 'react',
  },
  {
    name: 'mitmdemo',
    git: 'mitm-demo-app',
    lang: 'node',
  },
  {
    name: 'playlists',
    git: 'spotify-playlist-api',
    lang: 'python',
  },
  {
    name: 'degreesofseperation',
    git: 'artist-dos',
    lang: 'javascript',
  },
  {
    name: 'canister',
    git: 'vue-crud-websocket',
    lang: 'vue',
  },
  {
    name: 'scheduler',
    git: 'java-oop-scheduler',
    lang: 'java',
  },
];

function ProjectShowcaseCard({ showcase }) {
  const t = useTranslations('ShowcaseCard');
  return (
    <div className="w-full flex flex-col lg:flex-row">
      <Link href={`/showcase/${showcase.name}`}>
        <a className="h-96 lg:w-3/5 w-full relative lg:rounded-lg overflow-hidden shadow-2xl shadow-gray-900/20 z-50 hover:opacity-70 transition">
          <Image
            src={`/images/${showcase.name.toLowerCase()}-showcase-1.gif`}
            alt="canister"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            className="object-top-left"
          />
        </a>
      </Link>
      <div className="lg:w-2/5 w-full px-8 py-8 lg:py-0 self-end space-y-4">
        <p>{showcase.lang}</p>
        <div className="w-full transition hover:-translate-x-1/4">
          <Link href={`/showcase/${showcase.name}`}>
            <a className="text-9xl font-semibold font-mono ">{showcase.name}</a>
          </Link>
        </div>
        <p className="text-sm text-justify">{t(`${showcase.name}IntroText`)}</p>
        <div className="flex space-x-4">
          <Link href={`https://github.com/prncn/${showcase.git}`}>
            <a>
              <button className="w-28 h-14 border hover:shadow-hard hover:translate-y-1 border-black">
                <span className="text-sm">Github</span>
              </button>
            </a>
          </Link>
          <button className="w-28 h-14 border hover:shadow-hard hover:translate-y-1 border-black">
            <span className="text-sm">Case Study</span>
          </button>
        </div>
      </div>
    </div>
  );
}
