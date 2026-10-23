import React from "react";
import "./SusuProjectCard.css";

/**
 * Drop-in React/Vite portfolio feature card.
 * Copy portfolio/public/projects/susu/ images to your app's public/projects/susu/.
 * Pass actual links only after publishing. No fake demo/repo links are rendered.
 */
export default function SusuProjectCard({ demoUrl, githubUrl }) {
  return (
    <article className="susu-project" aria-label="SUSU The Circle portfolio project">
      <div className="susu-project__content">
        <span className="susu-project__eyebrow">VAULTBORN LABS · PRODUCT PROTOTYPE</span>
        <h2>SUSU <span>— The Circle</span></h2>
        <p className="susu-project__lead">Rotating savings, beautifully organized.</p>
        <p className="susu-project__body">
          A mobile-first, offline-first tracker for family and community savings
          circles. One banker can manage contributions, track payout order,
          archive cycles, and export records—without accounts or plugins.
        </p>
        <div className="susu-project__tags" aria-label="Technology tags">
          <span>HTML / CSS</span><span>JavaScript</span><span>LocalStorage</span><span>Offline-first</span>
        </div>
        <div className="susu-project__actions">
          {demoUrl && <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="susu-project__button">Live demo ↗</a>}
          {githubUrl && <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="susu-project__link">View source ↗</a>}
        </div>
        <small>Prototype only · No money transfers or shared cloud accounts</small>
      </div>
      <div className="susu-project__visual" aria-label="SUSU dashboard preview">
        <img src="/projects/susu/home-light.png" alt="SUSU mobile dashboard showing a $100 sample savings pot and contribution checklist" loading="lazy" />
      </div>
    </article>
  );
}