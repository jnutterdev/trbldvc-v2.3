import { useTina } from 'tinacms/dist/react';

interface SiteSettingsQuery {
  query: string;
  variables: { relativePath: string };
  data: { siteSettings: { about_blurb?: string | null } };
}

interface CurrentlyQuery {
  query: string;
  variables: { relativePath: string };
  data: {
    currently: {
      watching?: { title?: string | null; creator?: string | null; year?: number | null } | null;
      reading?: { title?: string | null; creator?: string | null; year?: number | null } | null;
      listening?: { title?: string | null; creator?: string | null; year?: number | null } | null;
    };
  };
}

interface Props {
  siteSettingsProps: SiteSettingsQuery;
  currentlyProps: CurrentlyQuery;
}

export default function HomepagePanels({ siteSettingsProps, currentlyProps }: Props) {
  const { data: settingsData } = useTina(siteSettingsProps);
  const { data: currentlyData } = useTina(currentlyProps);

  const settings = settingsData.siteSettings;
  const currently = currentlyData.currently;

  const currentlyItems = [
    { label: 'Watching', item: currently.watching },
    { label: 'Reading', item: currently.reading },
    { label: 'Listening', item: currently.listening },
  ];

  return (
    <>
      <div className="panel stat-panel p-sharp-tr" style={{ justifyContent: 'center' }}>
        <p className="panel-meta"><span>&#x25A0;</span> about</p>
        <p className="about-title">Terrible<span>Device</span></p>
        <p className="about-body">{settings.about_blurb}</p>
      </div>

      <div className="panel currently-panel p-sharp-br" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <p className="panel-meta"><span>&#x25A0;</span> currently</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {currentlyItems.map(({ label, item }, i) => (
            <div key={label}>
              {i > 0 && <div className="stat-divider" style={{ marginBottom: '14px' }} />}
              <p className="stat-key" style={{ marginBottom: '6px' }}>{label}</p>
              <p className="currently-title">{item?.title}</p>
              <p className="currently-meta">{item?.creator} &mdash; {item?.year}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
