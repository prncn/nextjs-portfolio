import { useTranslations } from 'next-intl';
import ShowcaseTemplate from '../../components/showcaseTemplate';

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../../locale/${locale}.json`)).default,
    },
  };
}

export default function CanisterShowcase() {
  const raw = useTranslations('CanisterShowcase');
  const t = (message) =>
    raw.rich(message, { em: (children) => <em>{children}</em> });

  return (
    <ShowcaseTemplate
      title="Canister"
      info="Personal Project • Frontend (Vue) / Backend (Node) • 2020"
      firstVid="canister1"
      bgColor="to-indigo-400"
      next="scheduler"
    >
      <h1 className="text-5xl font-medium font-display py-4">{t('t1.h')}</h1>
      <p className="text-justify">{t('t1.p1')}</p>

      <h1 className="text-5xl font-medium font-display py-4">{t('t2.h')}</h1>
      <p className="text-justify">{t('t2.p1')}</p>
    </ShowcaseTemplate>
  );
}
