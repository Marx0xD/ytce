import { reasons } from "./site-data";

export function WhySection() {
  return (
    <section className="why-section reveal" id="why">
      <div className="why-inner">
        <div className="why-left">
          <p className="why-eyebrow">Why Choose YTCE</p>
          <h2 className="why-title">Authenticity, Consistency, and Trust</h2>
          <p className="why-intro">
            We combine strong origin access, reliable export execution,
            competitive value, and personalized customer service to build
            long-term partnerships with international buyers.
          </p>
        </div>
        <div className="why-list">
          {reasons.map((reason) => (
            <article className="why-item" key={reason.title}>
              <h3 className="why-item-title">{reason.title}</h3>
              <p className="why-item-body">{reason.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
