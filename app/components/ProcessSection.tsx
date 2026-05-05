import { processMethods } from "./site-data";

export function ProcessSection() {
  return (
    <section className="process-section reveal" id="processing">
      <div className="process-header">
        <p className="process-eyebrow">Processing Methods</p>
        <h2 className="process-title">
          Options for
          <br />
          Diverse Market Demands
        </h2>
      </div>
      <div className="process-grid">
        {processMethods.map((method) => (
          <article className="process-card" key={method.name}>
            <div className="process-num">{method.number}</div>
            <h3 className="process-name">{method.name}</h3>
            <p className="process-sub">{method.sub}</p>
            <p className="process-body">{method.body}</p>
            {method.badge ? (
              <span className="process-badge">{method.badge}</span>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
