import { imageStrip, trustStats } from "./site-data";

export function ImageStrip() {
  return (
    <div className="image-strip" aria-label="Coffee moments from origin to cup">
      {imageStrip.map((image) => (
        <div
          key={image}
          className="image-strip-panel"
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
    </div>
  );
}

export function TrustStrip() {
  return (
    <div className="trust-strip" aria-label="Export credentials">
      {trustStats.map((stat) => (
        <div className="trust-item" key={stat.label}>
          <span className="trust-num">{stat.value}</span>
          <span className="trust-label">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
