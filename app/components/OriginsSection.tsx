import { origins } from "./site-data";

export function OriginsSection() {
  return (
    <section className="origins-section reveal" id="origins">
      <div className="origins-header">
        <p className="origins-eyebrow">Origin & Varieties</p>
        <h2 className="origins-title">
          Ethiopia&apos;s Celebrated
          <br />
          Coffee Regions
        </h2>
        <p className="origins-desc">
          Our coffees are sourced from Ethiopia&apos;s renowned growing regions.
          All coffees are 100% Arabica, primarily heirloom varieties unique to
          Ethiopia.
        </p>
      </div>
      <div className="origins-grid">
        {origins.map((origin) => (
          <article className="origin-card" key={origin.name}>
            <h3 className="origin-name">{origin.name}</h3>
            <p className="origin-region">{origin.region}</p>
            <p className="origin-notes">{origin.notes}</p>
            <div className="origin-tags">
              {origin.tags.map((tag) => (
                <span className="origin-tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
