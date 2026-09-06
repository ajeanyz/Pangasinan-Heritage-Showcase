import { ArrowDown } from "lucide-react";
import { ButtonLink } from "@/components/atoms/Button";
import { HeaderNavigation } from "@/components/organisms/HeaderNavigation";
import { HeritageGrid } from "@/components/organisms/HeritageGrid";
import { heritageSites } from "@/data/heritage-sites";

export default function Home() {
  return (
    <main>
      <HeaderNavigation />
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-orb hero-orb-one" aria-hidden="true" />
        <div className="hero-orb hero-orb-two" aria-hidden="true" />
        <img className="hero-mascot" src="/images/hello-kitty-travel-hero.webp" alt="Cute white cat traveler with a red bow, tropical islands, flowers, waves, and a lighthouse" width="1200" height="800" loading="eager" fetchPriority="high" decoding="async" />
        <div className="container hero-content">
          <p className="eyebrow">♡ A sweet Pangasinan adventure ♡</p>
          <h1 id="hero-title">Say hello to<span>Pangasinan!</span></h1>
          <p className="hero-copy">Pack your cutest bag and discover dreamy islands, lovely landmarks, and heartwarming local stories.</p>
          <div className="hero-actions">
            <ButtonLink href="#heritage">Explore heritage sites</ButtonLink>
            <a className="text-link" href="#about">Our cultural story <ArrowDown size={18} aria-hidden="true" /></a>
          </div>
          <dl className="hero-stats" aria-label="Showcase highlights">
            <div><dt>Featured places</dt><dd>6</dd></div>
            <div><dt>Coastline</dt><dd>285 km</dd></div>
            <div><dt>Languages</dt><dd>3+</dd></div>
          </dl>
        </div>
      </section>
      <section className="heritage-section" id="heritage" aria-labelledby="heritage-title">
        <div className="container">
          <div className="section-heading">
            <div><p className="eyebrow">Places worth knowing</p><h2 id="heritage-title">Discover Pangasinan</h2></div>
            <p>Search and explore heritage sites selected for their natural, historical, and cultural significance.</p>
          </div>
          <HeritageGrid sites={heritageSites} />
        </div>
      </section>
      <section className="story-section" id="about" aria-labelledby="story-title">
        <div className="container story-grid">
          <div className="story-mark" aria-hidden="true">P</div>
          <div><p className="eyebrow">More than a destination</p><h2 id="story-title">A province told through its people</h2></div>
          <p> Pangasinan is a province of remarkable beauty, where golden beaches, towering lighthouses,
              historic churches, and peaceful hot springs create a diverse collection of unforgettable experiences.</p>
        </div>
      </section>
      <footer id="visit">
        <div className="container footer-grid">
          <div><a className="brand footer-brand" href="#top" aria-label="Hello Pangasinan home"><span className="brand-mark" aria-hidden="true">✿</span><span>Hello<br /><b>Pangasinan!</b></span></a><p>Sweet places. Beautiful stories. Happy memories.</p></div>
          <div><h2>Explore</h2><a href="#heritage">Heritage sites</a><a href="#about">Our story</a></div>
          <div><h2>Visitor note</h2><p>Please check local advisories and respect community guidelines before your trip.</p></div>
        </div>
        <div className="container footer-bottom"><span>© 2026 Pangasinan Heritage Digital Showcase</span><span>YEZZA <span aria-hidden="true">✿</span></span></div>
      </footer>
    </main>
  );
}
