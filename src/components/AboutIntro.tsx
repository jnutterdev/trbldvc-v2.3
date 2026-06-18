import { useTina } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

interface Props {
  query: string;
  variables: { relativePath: string };
  data: { siteSettings: { about_intro?: unknown } };
}

export default function AboutIntro(props: Props) {
  const { data } = useTina(props);
  const { about_intro } = data.siteSettings;

  return (
    <div className="panel p-sharp-tl">
      <p className="panel-meta"><span>&#x25A0;</span> Signal origin</p>
      <h2 className="panel-heading">What this is</h2>
      <div className="panel-body">
        {about_intro ? <TinaMarkdown content={about_intro} /> : null}
      </div>
    </div>
  );
}
