import { useTina } from "tinacms/dist/react";

interface SocialLink {
  platform?: string | null;
  url?: string | null;
  icon?: string | null;
}

interface SiteSettingsQuery {
  query: string;
  variables: { relativePath: string };
  data: {
    siteSettings: {
      social?: SocialLink[] | null;
    };
  };
}

export default function AboutContact(props: SiteSettingsQuery) {
  const { data } = useTina(props);
  const social = data.siteSettings.social ?? [];

  return (
    <div className="panel p-sharp-br">
      <p className="panel-meta">
        <span>&#x25A0;</span> Reach out
      </p>
      <div className="contact-panel">
        <div className="contact-text">
          <h2 className="panel-heading">Contact</h2>
          <p>
            Corrections, recommendations, shout outs — all welcome. Response
            times vary. Signal quality not guaranteed.
          </p>
        </div>
        <div className="contact-links">
          {social.map((link, i) => {
            if (!link.url || !link.platform) return null;
            const isEmail = link.url.startsWith("mailto:");
            return (
              <a
                key={i}
                href={link.url}
                className="contact-link"
                target={isEmail ? undefined : "_blank"}
                rel={isEmail ? undefined : "noopener"}
              >
                <span className="contact-link-icon">
                  {link.icon ? <i className={link.icon}></i> : null}
                </span>
                <span className="contact-link-label">{link.platform}</span>
                <span className="contact-link-val">↗</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
