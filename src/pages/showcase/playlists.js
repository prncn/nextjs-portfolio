import ShowcaseTemplate from '../../components/showcaseTemplate';
import { useTranslations } from 'next-intl';

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../../locale/${locale}.json`)).default,
    },
  };
}

export default function PlaylistsShowcase() {
  const raw = useTranslations('PlaylistsShowcase');
  const t = (message) =>
    raw.rich(message, { em: (children) => <em>{children}</em> });

  return (
    <ShowcaseTemplate
      title="Tubify Playlists"
      info="Personal Project • Fullstack (Python / Flask) • 2020"
      firstVid="playlists1"
      secondVid="playlists2"
      bgColor="to-orange-50"
      next="degreesofseperation"
    >
      <h1 className="text-5xl font-medium font-display py-4">{t('t1.h')}</h1>
      <p className="text-justify">{t('t1.p1')}</p>

      <h1 className="text-5xl font-medium font-display py-4">{t('t2.h')}</h1>
      <p className="text-justify">{t('t2.p1')}</p>
    </ShowcaseTemplate>
  );
}
