import Link from "next/link";

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-bg-left" />
        <div className="hero-bg-right" />
      </div>
      <div className="hero-bottom-fade" />
      <div className="hero-content reveal">
        <p className="hero-eyebrow">
          Premium Ethiopian Green Coffee Supplier
        </p>
        <h1 className="hero-title">
          <em>Yohanes Tesfaye</em>
          <br />
          Raw Coffee Export
        </h1>
        <p className="hero-sub">
          Exporting Ethiopia&apos;s finest green coffee to importers, roasters,
          and distributors worldwide.
        </p>
        <div className="hero-actions">
          <Link href="/offerings" className="btn-primary">
            Explore Our Coffee
          </Link>
          <Link href="/contact" className="btn-ghost">
            Request Samples
          </Link>
        </div>
      </div>
      <div className="scroll-hint" aria-hidden="true">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
