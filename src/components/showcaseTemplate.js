import Head from 'next/head';
import ReactPlayer from 'react-player';
import Navbar from './navbar';
import { useTranslations } from 'next-intl';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../locale/${locale}.json`)).default,
    },
  };
}

export default function ShowcaseTemplate({
  title,
  info,
  bgColor,
  children,
  firstVid,
  secondVid,
  thirdVid,
  next,
}) {
  const t = useTranslations('ShowcaseCard');
  return (
    <>
      <Navbar />
      <Head>
        <title>{title} Showcase</title>
      </Head>
      <div
        className={`bg-gradient-to-b from-slate-50 ${bgColor} flex flex-col items-center pt-10 text-black`}
      >
        <Link href={`/showcase/${next}`}>
          <a className="absolute top-40 right-20 hover:translate-x-1 hover:-translate-y-1 z-0">
            <span className="lowercase text-xl">
              {t('next')}
              <br />
              {next}
            </span>
            <BsArrowRight />
          </a>
        </Link>
        <div className="w-4/5">
          <div className="h-96" />
          <h1 className="text-8xl lowercase font-display font-medium w-32 my-10">
            {title}
          </h1>
          <p className="text-justify">{info}</p>
          <div
            className="relative overflow-hidden rounded-xl my-20"
            style={{ paddingTop: '56.25%' }}
          >
            <ReactPlayer
              url={`/videos/${firstVid}.mp4`}
              controls={false}
              loop
              muted
              playing={true}
              width="100%"
              height="100%"
              className="rounded-xl overflow-hidden absolute top-0 left-0"
            />
          </div>

          <div className="flex justify-center">
            <div className="w-1/2 flex flex-col space-y-4 my-10">
              {children}
            </div>
          </div>
          {secondVid && (
            <div
              className="relative overflow-hidden rounded-xl my-20"
              style={{ paddingTop: '56.25%' }}
            >
              <ReactPlayer
                url={`/videos/${secondVid}.mp4`}
                controls={false}
                loop
                muted
                playing={true}
                width="100%"
                height="100%"
                className="rounded-xl overflow-hidden absolute top-0 left-0"
              />
            </div>
          )}
          {thirdVid && (
            <div
              className="relative overflow-hidden rounded-xl my-20"
              style={{ paddingTop: '56.25%' }}
            >
              <ReactPlayer
                url={`/videos/${thirdVid}.mp4`}
                controls={false}
                loop
                muted
                playing={true}
                width="100%"
                height="100%"
                className="rounded-xl overflow-hidden absolute top-0 left-0"
              />
            </div>
          )}
          <div className="h-96 w-full" />
        </div>
      </div>
    </>
  );
}
