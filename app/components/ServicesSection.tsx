import { qualityPoints, services } from "./site-data";

export function ServicesSection() {
  return (
    <section className="services-section reveal" id="services">
      <div className="services-inner">
        <div className="services-header">
          <p className="services-eyebrow">Our Services</p>
          <h2 className="services-title">
            Export Support from
            <br />
            Origin to Shipment
          </h2>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-item" key={service}>
              {service}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function QualitySection() {
  return (
    <section className="quality-section reveal" id="quality">
      <div className="quality-inner">
        <p className="quality-eyebrow">Quality Assurance</p>
        <h2 className="quality-title">Quality Is the Foundation of Our Business</h2>
        <p className="quality-body">
          Every batch is handled with precision to preserve the authentic
          character of Ethiopian coffee and align with international export
          requirements.
        </p>
        <div className="quality-list">
          {qualityPoints.map((point) => (
            <span className="quality-point" key={point}>
              {point}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
