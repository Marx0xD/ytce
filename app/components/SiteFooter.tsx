import Link from "next/link";

const footerColumns = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/about#mission", label: "Mission & Vision" },
      { href: "/processing#why", label: "Why Choose Us" },
    ],
  },
  {
    title: "Coffee",
    links: [
      { href: "/offerings#specialty", label: "Specialty Grade" },
      { href: "/offerings#commercial", label: "Commercial Grade" },
      { href: "/origins", label: "Origins" },
      { href: "/processing", label: "Processing" },
    ],
  },
  {
    title: "Contact",
    links: [
      { href: "/contact", label: "Contact Details" },
      { href: "/contact", label: "Request Samples" },
      { href: "mailto:jonitesfish21@gmail.com", label: "Email Us" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">
            Yohanes Tesfaye
            <br />
            <span>Raw Coffee Export</span>
          </div>
          <p className="footer-tagline">
            &quot;Exporting Ethiopia&apos;s Finest Green Coffee to the World&quot;
          </p>
        </div>
        <div className="footer-nav">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <div className="footer-col-title">{column.title}</div>
              <div className="footer-col-links">
                {column.links.map((link) => (
                  link.href.startsWith("mailto:") ? (
                    <a href={link.href} key={link.label}>
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} key={link.label}>
                      {link.label}
                    </Link>
                  )
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copy">
          Copyright 2025 Yohanes Tesfaye Raw Coffee Export . Addis Ababa,
          Ethiopia . All rights reserved
        </p>
        <p className="footer-closing">
          We don&apos;t just export coffee - we deliver the essence of Ethiopia
          to the world.
        </p>
      </div>
    </footer>
  );
}
