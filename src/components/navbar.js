import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
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
  const [menuOpen, setMenuOpen] = useState(false);
  const { route, pathname } = useRouter();

  function handleMenuModal() {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = 'hidden';
    dark = false;
  }

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
      <div
        className="ml-auto lg:hidden block text-2xl"
        onClick={handleMenuModal}
      >
        <GiHamburgerMenu />
      </div>
      {menuOpen && (
        <div
          className="absolute top-20 left-0 w-screen h-screen bg-black"
          style={{ zIndex: 500 }}
        ></div>
      )}
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
