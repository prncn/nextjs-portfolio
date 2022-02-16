import { useTranslations } from 'next-intl';
import ShowcaseTemplate from '../../components/showcaseTemplate';

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../../locale/${locale}.json`)).default,
    },
  };
}

export default function DegreesShowcase() {
  const raw = useTranslations('DegreesShowcase');
  const t = (message) =>
    raw.rich(message, {
      em: (children) => <em>{children}</em>,
      sup: (children) => <sup>{children}</sup>,
    });

  return (
    <ShowcaseTemplate
      title="Artists' Degrees of Seperation"
      info="Personal Project • Javascript • 2020"
      firstVid="degrees1"
      bgColor="to-stone-50"
      next="canister"
    >
      <h1 className="text-5xl font-medium font-display py-4">{t('t1.h')}</h1>
      <p className="text-justify">{t('t1.p1')}</p>
      <p className="text-justify">{t('t1.p2')}</p>

      <h1 className="text-5xl font-medium font-display py-4">{t('t2.h')}</h1>
      <p className="text-justify">{t('t2.p1')}</p>
      <p className="text-justify">{t('t2.p2')}</p>
      <p className="text-justify">{t('t2.p3')}</p>
    </ShowcaseTemplate>
  );
}
