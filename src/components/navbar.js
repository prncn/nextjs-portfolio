import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgClose } from 'react-icons/cg';

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
    if (!menuOpen) {
      setMenuOpen(true);
      document.body.style.overflow = 'hidden';
    } else {
      setMenuOpen(false);
      document.body.style.overflow = 'auto';
    }
  }

  function MenuIcon() {
    if (!menuOpen) {
      return <GiHamburgerMenu />;
    } else {
      return <CgClose />;
    }
  }

  return (
    <>
      {menuOpen && (
        <div
          className="absolute top-20 left-0 w-screen h-screen bg-black lg:p-20 p-4 flex flex-col text-7xl text-white font-bold"
          style={{
            zIndex: 5000,
          }}
        >
          <Link href="/">
            <a
              className={`hover:font-semibold ${
                pathname === '/' ? 'opacity-60' : ''
              }`}
            >
              {t('works')}
            </a>
          </Link>
          <Link href="/resume">
            <a
              className={`hover:font-semibold ${
                pathname === '/resume' ? 'opacity-60' : ''
              }`}
            >
              {t('resume')}
            </a>
          </Link>
          <Link href="mailto: princen@outlook.de">
            <a>{t('contact')}</a>
          </Link>
        </div>
      )}
      <div
        className={`w-full h-20 ${
          !menuOpen
            ? !dark
              ? 'bg-slate-50 text-black'
              : 'bg-neutral-900 text-white'
            : 'bg-black text-white'
        } fixed flex items-center py-4 lg:px-20 px-4 text-sm`}
      >
        <Link href="/">
          <a className="space-x-1">
            <span>Princen Kumar</span>
            <span className="font-semibold">Portfolio</span>
          </a>
        </Link>
        <button
          className="ml-auto lg:hidden block text-2xl"
          onClick={handleMenuModal}
        >
          {<MenuIcon />}
        </button>
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
    </>
  );
}
