import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GiHamburgerMenu } from 'react-icons/gi';

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../locale/${locale}.json`)).default,
    },
  };
}

export default function Navbar({ dark }) {
  const t = useTranslations('Navbar');
  const { route, pathname } = useRouter();

  return (
    <div
      className={`w-full h-20 ${
        !dark ? 'bg-slate-50 text-black' : 'bg-neutral-900 text-white'
      } fixed flex items-center py-4 xl:px-20 px-4 text-sm`}
    >
      <Link href="/">
        <a className="space-x-1">
          <span>Princen Kumar</span>
          <span className="font-semibold">Portfolio</span>
        </a>
      </Link>
      <div className="ml-auto lg:hidden block text-2xl">
        <GiHamburgerMenu />
      </div>
      <div className="ml-auto lg:flex space-x-5 cursor-pointer hidden">
        <Link href={route} locale={t('locale')}>
          <a className={`hover:font-semibold uppercase`}>{t('locale')}</a>
        </Link>
        <Link href="/" className="font-bold">
          <a
            className={`hover:font-semibold uppercase ${
              pathname === '/' ? 'font-bold' : ''
            }`}
          >
            {t('works')}
          </a>
        </Link>
        <Link href="/resume">
          <a
            className={`hover:font-semibold uppercase ${
              pathname === '/resume' ? 'font-bold' : ''
            }`}
          >
            {t('resume')}
          </a>
        </Link>
      </div>
    </div>
  );
}
