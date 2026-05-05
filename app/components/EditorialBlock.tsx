import type { ReactNode } from "react";
import Image from "next/image";

type EditorialLink = {
  href: string;
  label: string;
};

type EditorialBlockProps = {
  id?: string;
  image: string;
  alt: string;
  caption: string;
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  body: string;
  links: EditorialLink[];
  reverse?: boolean;
  alternate?: boolean;
};

export function EditorialBlock({
  id,
  image,
  alt,
  caption,
  eyebrow,
  title,
  subtitle,
  body,
  links,
  reverse,
  alternate,
}: EditorialBlockProps) {
  const className = [
    "editorial",
    reverse ? "reverse" : "",
    alternate ? "alt-bg" : "",
    "reveal",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className} id={id}>
      <div className="editorial-img">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
        />
        <div className="editorial-img-caption">{caption}</div>
      </div>
      <div className="editorial-text">
        <p className="editorial-eyebrow">{eyebrow}</p>
        <h2 className="editorial-title">{title}</h2>
        <p className="editorial-subtitle">{subtitle}</p>
        <p className="editorial-body">{body}</p>
        <div className="editorial-links">
          {links.map((link) => (
            <a href={link.href} className="editorial-link" key={link.label}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SectionDivider({ label }: { label: string }) {
  return (
    <div className="section-divider reveal">
      <hr />
      <span className="divider-text">{label}</span>
      <hr />
    </div>
  );
}
