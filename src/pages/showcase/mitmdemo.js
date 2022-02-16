import { useTranslations } from 'next-intl';
import ShowcaseTemplate from '../../components/showcaseTemplate';

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../../locale/${locale}.json`)).default,
    },
  };
}

export default function MitmShowcase() {
  const raw = useTranslations('MitmDemoShowcase');
  const t = (message) =>
    raw.rich(message, { em: (children) => <em>{children}</em> });

  return (
    <ShowcaseTemplate
      title="Mitm Demo Proxy"
      info="University Project • UI (React) / Backend (Node) • 2022"
      firstVid="mitmdemo1"
      secondVid="mitmdemo2"
      thirdVid="mitmdemo3"
      bgColor="to-red-300"
      next="playlists"
    >
      <h1 className="text-5xl font-medium font-display py-4">{t('t1.h')}</h1>
      <p className="text-justify">{t('t1.p1')}</p>
      <p className="text-justify">{t('t1.p2')}</p>
      <p className="text-justify">{t('t1.p3')}</p>

      <h1 className="text-5xl font-medium font-display py-4">{t('t2.h')}</h1>
      <p className="text-justify">{t('t2.p1')}</p>
      <p className="text-justify">{t('t2.p2')}</p>
    </ShowcaseTemplate>
  );
}
