import Link from "next/link";

function Wave() {
  return (
    <svg className="hero-wave" viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden="true">
      <path fill="#22c55e" opacity="0.85">
        <animate
          attributeName="d"
          dur="4.8s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0;0.5;1"
          keySplines="0.45 0 0.55 1;0.45 0 0.55 1"
          values="M0,150 C120,40 240,230 360,150 C480,70 600,240 720,150 C840,50 960,230 1080,150 C1200,70 1320,220 1440,150 L1440,320 L0,320 Z;M0,150 C120,240 240,50 360,150 C480,250 600,40 720,150 C840,240 960,60 1080,150 C1200,230 1320,50 1440,150 L1440,320 L0,320 Z;M0,150 C120,40 240,230 360,150 C480,70 600,240 720,150 C840,50 960,230 1080,150 C1200,70 1320,220 1440,150 L1440,320 L0,320 Z"
        />
      </path>
      <path fill="#4ade80" opacity="0.55">
        <animate
          attributeName="d"
          dur="6.4s"
          repeatCount="indefinite"
          calcMode="spline"
          keyTimes="0;0.5;1"
          keySplines="0.45 0 0.55 1;0.45 0 0.55 1"
          values="M0,180 C160,250 320,90 480,180 C640,270 800,80 960,180 C1120,260 1280,100 1440,180 L1440,320 L0,320 Z;M0,180 C160,90 320,260 480,180 C640,80 800,270 960,180 C1120,100 1280,250 1440,180 L1440,320 L0,320 Z;M0,180 C160,250 320,90 480,180 C640,270 800,80 960,180 C1120,260 1280,100 1440,180 L1440,320 L0,320 Z"
        />
      </path>
    </svg>
  );
}

export function Footer({ home = false }: { home?: boolean }) {
  const section = (hash: string) => (home ? hash : `/${hash}`);
  return (
    <footer className="footer">
      <Wave />
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/img/symbol.png" alt="" />
              <span>Synx</span>
            </div>
            <p>Helping domain owners run live services, with each layer kept by the people who own it.</p>
            <p className="footer-note">Configure, secure, and operate.</p>
            <a className="btn btn-primary btn-sm" href={section("#suite")}>
              See the tools
            </a>
          </div>
          <div className="footer-cols">
            <div>
              <h4>Menu</h4>
              <a href={section("#tools")}>Tools</a>
              <a href={section("#process")}>How it works</a>
              <a href={section("#layers")}>Layers</a>
              <a href={section("#questions")}>Questions</a>
              <Link href="/who">Who we are</Link>
              <Link href="/pricing">Pricing</Link>
            </div>
            <div>
              <h4>Explore Synx</h4>
              <a href={section("#suite")}>Synx BIOS</a>
              <a href={section("#suite")}>Synx DNS</a>
              <a href={section("#suite")}>Synx Pass</a>
              <a href={section("#suite")}>Synx Trade</a>
              <a href="https://realtimeweb.org" target="_blank" rel="noreferrer">
                Real Time Web
              </a>
              <a href="https://morph.space" target="_blank" rel="noreferrer">
                Morph Space
              </a>
            </div>
          </div>
        </div>
        <div className="legal">
          <span>© 2026 Synx tools</span>
        </div>
      </div>
      <p className="footer-type">Synx</p>
    </footer>
  );
}
