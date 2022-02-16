import ShowcaseTemplate from '../../components/showcaseTemplate';
import { useTranslations } from 'next-intl';

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../../locale/${locale}.json`)).default,
    },
  };
}

export default function MurdocShowcase() {
  const raw = useTranslations('MurdocShowcase');
  const t = (message) =>
    raw.rich(message, { em: (children) => <em>{children}</em> });

  return (
    <ShowcaseTemplate
      title="Murdoc Document Sharing"
      info="University Project • UI (React) / Backend (Spring Boot) • 2021"
      firstVid="murdoc1"
      secondVid="murdoc2"
      bgColor="to-indigo-300"
      next="mitmdemo"
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
