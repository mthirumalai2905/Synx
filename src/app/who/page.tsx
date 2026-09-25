import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";

const description =
  "Paal Kristian Levang and Henrik Silverkant introduced Synx in 2008. Synaptic Technologies later became Nornir.";

export const metadata: Metadata = {
  title: "Who we are",
  description,
  alternates: { canonical: "/who" },
  openGraph: { title: "Who we are — Synx tools", description, url: "/who" },
};

export default function WhoPage() {
  return (
    <>
      <Nav />
      <main>
    <Reveal immediate>
    <section className="who-hero">
      <div className="wrap">
        <h1>Who we <em>are</em></h1>
        <p className="who-pill"><i></i> Synaptic Technologies, 2008</p>
        <div className="who-split">
          <div className="who-copy">
            <p>We believe in a web that rewards the people who create value. Everyone should have the chance to develop their ideas and benefit from what they create.</p>
            <p><strong>Synx</strong> is how a domain is configured, secured, and operated. Creators keep ownership of what they make, and most of the revenue it generates.</p>
          </div>
          <div className="who-facts">
            <article>
              <strong>2008</strong>
              <span>Architecture introduced</span>
              <small>Synx and the Real Time Web</small>
            </article>
            <article>
              <strong>2013</strong>
              <span>First prototype</span>
              <small>Synx BIOS</small>
            </article>
            <article>
              <strong>2014</strong>
              <span>Taken to market</span>
              <small>Nornir was funded</small>
            </article>
            <article>
              <strong>Open</strong>
              <span>How we work</span>
              <small>Creative, and generous</small>
            </article>
          </div>
        </div>
      </div>
      <div className="who-globe">
        <div className="who-globe-stage">
          <img src="/img/who-globe.png?v=2" alt="Dotted world map with Norway and India marked" />
          <span className="who-pin">
            <span className="who-pin-mark" aria-hidden="true"></span>
            India
            <i aria-hidden="true"></i>
          </span>
        </div>
      </div>
    </section>
    </Reveal>

    <Reveal>
    <section className="who-team">
      <div className="wrap">
        <h2>The people who started it</h2>
        <p className="who-lead">Two inventors, and the company they built to carry the work.</p>
        <div className="people">
          <article className="person">
            <img className="portrait" src="/img/team-paal.png" alt="" />
            <div className="person-copy">
              <h3>Paal Kristian Levang</h3>
              <p>Founder and CEO. Norwegian technology inventor.</p>
              <span className="mark"><img src="/img/symbol.png" alt="" /> Synx</span>
            </div>
          </article>
          <article className="person company">
            <img className="portrait" src="/img/team-nornir.png" alt="" />
            <div className="person-copy">
              <h3>2008</h3>
              <p>Synaptic Technologies, later Nornir Holding.</p>
              <span className="mark"><img src="/img/symbol.png" alt="" /> Nornir</span>
            </div>
          </article>
          <article className="person">
            <img className="portrait" src="/img/team-henrik.png" alt="" />
            <div className="person-copy">
              <h3>Henrik Silverkant</h3>
              <p>Co-inventor. Swedish computer security specialist.</p>
              <span className="mark"><img src="/img/symbol.png" alt="" /> Synx</span>
            </div>
          </article>
        </div>

        <h2>The team</h2>
        <div className="people">
          <article className="person">
            <img className="portrait" src="/img/team-vijay.png" alt="" />
            <div className="person-copy">
              <h3>Vijaykumar Dudhbhate</h3>
              <span className="mark"><img src="/img/symbol.png" alt="" /> Synx</span>
            </div>
          </article>
          <article className="person">
            <img className="portrait" src="/img/team-asveig.png" alt="" />
            <div className="person-copy">
              <h3>Asveig Marie</h3>
              <span className="mark"><img src="/img/symbol.png" alt="" /> Synx</span>
            </div>
          </article>
          <article className="person">
            <img className="portrait" src="/img/team-jevgeni.png" alt="" />
            <div className="person-copy">
              <h3>Jevgeni Glazunov</h3>
              <span className="mark"><img src="/img/symbol.png" alt="" /> Synx</span>
            </div>
          </article>
          <article className="person">
            <img className="portrait" src="/img/team-nazia.png" alt="" />
            <div className="person-copy">
              <h3>Nazia Khawaja</h3>
              <span className="mark"><img src="/img/symbol.png" alt="" /> Synx</span>
            </div>
          </article>
          <article className="person">
            <img className="portrait" src="/img/team-jp.png" alt="" />
            <div className="person-copy">
              <h3>JP</h3>
              <span className="mark"><img src="/img/symbol.png" alt="" /> Synx</span>
            </div>
          </article>
          <article className="person">
            <img className="portrait" src="/img/team-pontus.png" alt="" />
            <div className="person-copy">
              <h3>Pontus</h3>
              <span className="mark"><img src="/img/symbol.png" alt="" /> Synx</span>
            </div>
          </article>
          <article className="person">
            <img className="portrait" src="/img/team-bledi.png" alt="" />
            <div className="person-copy">
              <h3>Bledi Deda</h3>
              <span className="mark"><img src="/img/symbol.png" alt="" /> Synx</span>
            </div>
          </article>
          <article className="person">
            <img className="portrait" src="/img/team-atle.png" alt="" />
            <div className="person-copy">
              <h3>Atle Engen</h3>
              <span className="mark"><img src="/img/symbol.png" alt="" /> Synx</span>
            </div>
          </article>
          <article className="person">
            <img className="portrait" src="/img/team-thiru.png" alt="" />
            <div className="person-copy">
              <h3>Thiru</h3>
              <span className="mark"><img src="/img/symbol.png" alt="" /> Synx</span>
            </div>
          </article>
        </div>
        <p className="who-note">Portraits are illustrations, not photographs.</p>

        <div className="values">
          <article className="value">
            <h3>Reciprocity</h3>
            <p>What we give comes back. Positive actions answered with positive actions, in the company and in the technology.</p>
          </article>
          <article className="value">
            <h3>Simplicity</h3>
            <p>The work is complex. Simplifying it is what makes it possible, accessible, and worth using.</p>
          </article>
          <article className="value">
            <h3>Community</h3>
            <p>We grow by cooperating. Ideas are shared, and each person builds on what someone else started.</p>
          </article>
        </div>
      </div>
    </section>
    </Reveal>
  </main>
      <Footer />
    </>
  );
}
