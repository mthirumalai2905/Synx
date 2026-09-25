import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { Reveal } from "@/components/Reveal";

const description =
  "Creators keep ownership of what they make, and most of the revenue it generates.";

export const metadata: Metadata = {
  title: "Pricing",
  description,
  alternates: { canonical: "/pricing" },
  openGraph: { title: "Pricing — Synx tools", description, url: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main>
    <Reveal immediate>
    <section className="price-hero">
      <div className="wrap">
        <h1>Pricing</h1>
        <p className="lede">Creators keep ownership of what they make, and most of the revenue it generates. The same tools, a different layer for each role.</p>
        <div className="price-grid">
          <article className="price-card">
            <h2>Consumer</h2>
            <p className="for">The data layer</p>
            <p className="amount">Yours<span>Not the application around it</span></p>
            <Link className="btn btn-ghost" href="/#roles">See the role</Link>
            <ul>
              <li><i></i><span>You control the data from a source you own.</span></li>
              <li><i></i><span>The network does not keep a stored copy.</span></li>
              <li><i></i><span>Ownership of a source can be transferred.</span></li>
              <li><i></i><span>The next holder receives the data.</span></li>
              <li><i></i><span>The service can keep running its own logic.</span></li>
            </ul>
          </article>
          <article className="price-card featured">
            <h2>Domain owner</h2>
            <p className="for">The root domain</p>
            <p className="amount">Most<span>of the revenue stays with the creator</span></p>
            <Link className="btn btn-primary" href="/#suite">See the tools</Link>
            <ul>
              <li><i></i><span>You name the domain and shape the services.</span></li>
              <li><i></i><span>Synx BIOS operates the layer you own.</span></li>
              <li><i></i><span>Synx Pass secures identity and ownership.</span></li>
              <li><i></i><span>Synx Trade keeps value with the creator.</span></li>
              <li><i></i><span>You do not take the consumer’s data layer.</span></li>
            </ul>
          </article>
          <article className="price-card">
            <h2>Developer</h2>
            <p className="for">The service</p>
            <p className="amount">Linked<span>instead of a private API</span></p>
            <Link className="btn btn-ghost" href="/#process">How it works</Link>
            <ul>
              <li><i></i><span>Build the service on the domain.</span></li>
              <li><i></i><span>Link to a neighbor instead of a new interface.</span></li>
              <li><i></i><span>XML is the default. JSON can be switched live.</span></li>
              <li><i></i><span>A change in one layer does not rewrite the rest.</span></li>
              <li><i></i><span>Creators still own what they make.</span></li>
            </ul>
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
