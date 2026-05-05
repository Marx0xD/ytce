const contactDetails = [
  {
    label: "Location",
    value: "Addis Ababa, Ethiopia - Akaki Kality Subcity, around Total, Kafdm Plaza, 4th Floor",
  },
  { label: "Phone", value: "0912502336" },
  { label: "WeChat", value: "Youhan1221" },
  { label: "Email", value: "jonitesfish21@gmail.com" },
  { label: "LinkedIn", value: "0912502336" },
];

export function ContactSection() {
  return (
    <section className="contact-section reveal" id="contact">
      <div className="contact-left">
        <p className="contact-eyebrow">Let&apos;s Work Together</p>
        <h2 className="contact-title">Partner with a Premium Ethiopian Exporter</h2>
        <p className="contact-body">
          We invite importers, roasters, and distributors to partner with us and
          experience authentic Ethiopian coffee at its finest.
        </p>
        <div className="contact-details">
          {contactDetails.map((detail) => (
            <div className="contact-detail" key={detail.label}>
              <span className="contact-detail-label">{detail.label}</span>
              <span>{detail.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
