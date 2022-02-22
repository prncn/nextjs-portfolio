import Head from 'next/head';
import Navbar from '../components/navbar';
import '@fontsource/playfair-display';
import Image from 'next/image';
import { LiquidDistortionText } from 'react-text-fun';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { getRepoLangPercentages } from '../gitapi';
import { useMediaQuery } from 'react-responsive';

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../locale/${locale}.json`)).default,
    },
  };
}

export default function Resume() {
  const [liquify, setLiquify] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const workExpHeadingRef = useRef();
  const eduHeadingRef = useRef();
  const raw = useTranslations('Resume');
  const t = (message) =>
    raw.rich(message, { em: (children) => <em>{children}</em> });

  const [showWorkU9, setShowWorkU9] = useState(false);
  const [showWorkXd, setShowWorkXd] = useState(false);
  const [showEdu, setShowEdu] = useState(false);
  const [showLangs, setShowLangs] = useState(false);
  const [gitLangs, setGitLangs] = useState({});

  const SCREEN_SM = useMediaQuery({ query: '(max-width: 640px)' });

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

  useEffect(() => {
    (async () => {
      const langs = await getRepoLangPercentages();
      setGitLangs(langs);
    })();
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'auto';
  }, []);

  return (
    <div className="bg-slate-50">
      <Head>
        <title>Princen Kumar | Resume</title>
        <meta name="description" content="Portfolio of Code Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar dark />
      <div className="min-h-screen items-center flex flex-col pt-10 bg-neutral-900 text-white">
        <div className="lg:w-1/2 w-full">
          <div className="w-96 my-20 self-start px-4 lg:px-0">
            <h1 className="uppercase font-semibold text-sm tracking-wider mb-5 relative">
              Resume
              <div className="rounded-full h-52 w-52 flex items-center justify-center absolute top-0 -left-60 overflow-hidden">
                <div className="bg-gradient-to-t from-orange-100 to-violet-300 animate-gradient-y w-full h-full p-10 absolute top-0 left-0" />
                <div className="relative overflow-hidden w-auto h-auto bg-red-400 rounded-full">
                  {/* <Image
                    src="/images/20190928_230119.jpg"
                    alt="photo"
                    layout="fill"
                  /> */}
                </div>
              </div>
            </h1>
            <span
              className={`xl:text-7xl text-6xl font-display font-medium ${
                SCREEN_SM
                  ? 'bg-gradient-to-t from-orange-100 to-violet-300 animate-gradient-y'
                  : 'bg-transparent'
              }`}
            >
              {t('resumeHeading')}
            </span>
            <p className="mt-10">{t('resumeIntro')}</p>
          </div>
          <div className="my-20 overflow-hidden">
            <LiquidDistortionText
              text="THINGS I LIKE"
              fill="white"
              fontSize={SCREEN_SM ? 50 : 100}
              fontWeight={'bold'}
              speed={0.01}
              lineHeight={1}
              volatility={Math.min(scrollY / 1000, 2)}
              style={{ fontFamily: 'Inter' }}
              id="skills"
            />
            <LiquidDistortionText
              text="TO WORK WITH"
              fill="white"
              fontSize={SCREEN_SM ? 50 : 100}
              fontWeight={'bold'}
              speed={0.01}
              lineHeight={1}
              volatility={Math.min(scrollY / 1000, 2)}
              style={{ fontFamily: 'Inter' }}
              id="skills"
            />
          </div>
          <ul
            className="text-lg px-4 text-justify lg:px-0 max-w-fit"
            onMouseEnter={() => setShowLangs(true)}
            onMouseLeave={() => setShowLangs(false)}
          >
            <li>Framworks: React, Vue, Tailwind</li>
            <li>Databases: MongoDB, Firestore, MySQL, PostgreSQL, Firebird</li>
            <li>Langs: Python, Javascript, C/C++, Java</li>
          </ul>
          <div className="my-20 overflow-hidden" ref={workExpHeadingRef}>
            <LiquidDistortionText
              text="WORK EXPERIENCE"
              fill="white"
              fontSize={SCREEN_SM ? 50 : 100}
              fontWeight={'bold'}
              speed={0.01}
              volatility={Math.min(
                (scrollY - workExpHeadingRef.current?.offsetTop + 500) / 1000,
                2
              )}
              style={{ fontFamily: 'Inter ' }}
              id="work-experience"
            />
          </div>
          <ul className="space-y-8 px-4 text-justify lg:px-0">
            <li>
              2013 &middot; U9 Visuelle Allianz
              <p
                className="pl-4 lg:w-1/3 w-full"
                onMouseEnter={() => setShowWorkU9(true)}
                onMouseLeave={() => setShowWorkU9(false)}
              >
                {t('workExp.u9')}
              </p>
            </li>
            <li>
              2021 &middot; X-Direct Frankfurt
              <p
                className="pl-4 lg:w-1/3 w-full"
                onMouseEnter={() => setShowWorkXd(true)}
                onMouseLeave={() => setShowWorkXd(false)}
              >
                {t('workExp.xD')}
              </p>
            </li>
          </ul>
          <div className="my-20 overflow-hidden" ref={eduHeadingRef}>
            <LiquidDistortionText
              text="EDUCATION"
              fill="white"
              fontSize={SCREEN_SM ? 50 : 100}
              fontWeight={'bold'}
              speed={0.01}
              volatility={Math.min(
                (scrollY - eduHeadingRef.current?.offsetTop + 500) / 1000,
                2
              )}
              style={{ fontFamily: 'Inter ' }}
              id="education"
            />
          </div>
          <ul
            className="my-20 overflow-hidden px-4 lg:px-0 max-w-fit"
            onMouseEnter={() => setShowEdu(true)}
            onMouseLeave={() => setShowEdu(false)}
          >
            <li>2018 &middot; TU Darmstadt</li>
            <li>2019 &middot; Frankfurt University of Applied Sciences</li>
            <li>2022 &middot; Bachelor of Science in Computer Science</li>
          </ul>
        </div>
        {showWorkU9 && (
          <div className="h-96 w-96 fixed right-24">
            <Image
              alt="U9 Showcase"
              src="/images/ezgif-2-737cceff18.gif"
              layout="fill"
              objectFit="contain"
            />
          </div>
        )}
        {showEdu && (
          <div className="h-96 w-96 fixed top-1/2 right-20">
            <Image
              alt="Graduate"
              src="/images/Gz4.gif"
              layout="fill"
              objectFit="contain"
            />
          </div>
        )}
        {showWorkXd && (
          <div className="h-96 w-96 fixed top-1/2 left-20">
            <Image
              alt="Graduate"
              src="/images/50NA7vr.gif"
              layout="fill"
              objectFit="contain"
            />
          </div>
        )}
        {showLangs && (
          <div className="h-96 w-96 bg-gradient-to-t from-orange-100 to-violet-300 animate-gradient-y p-10 text-white fixed top-1/2 right-10 text-lg uppercase text-right font-semibold">
            <span className="mb-4">{t('gitHeader')}</span>
            {Object.keys(gitLangs).map((lang, i) => (
              <div key={lang} className="">
                {lang} : {gitLangs[lang]}%
              </div>
            ))}
          </div>
        )}
        <div className="py-20" />
      </div>
    </div>
  );
}
