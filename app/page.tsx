import Reveal from './components/Reveal';
import ScrollProgress from './components/ScrollProgress';
import HeroGrid from './components/HeroGrid';
import ContactForm from './components/ContactForm';

const services = [
  ['Custom software development', 'Web and mobile applications, internal tools and APIs, built around how your business actually works.'],
  ['Cloud and DevOps', 'Migrations, infrastructure as code, CI/CD pipelines and monitoring, so releases are routine and outages are rare.'],
  ['Architecture and code reviews', 'An independent look at your system: where it is fragile, what it will cost to scale, and what to fix first.'],
  ['Embedded engineering teams', 'Senior engineers who join your team, follow your process and ship alongside you for as long as you need them.'],
];
const steps = [
  ['Discover', 'We learn your goals, users and constraints, then agree on what success looks like.'],
  ['Design', 'We propose an architecture and a plan, with estimates you can hold us to.'],
  ['Build', 'We ship in small increments. You see working software every week or two.'],
  ['Hand over', 'Documentation, training and support, so your team owns what we built.'],
];
const work = [
  ['Legacy system, no one left who understands it', 'We document it, stabilise it and plan a safe path to modernise.'],
  ['A product idea that needs a first version', 'We scope a minimum release and build it, usually within a quarter.'],
  ['Slow releases and frequent incidents', 'We automate the pipeline and add the monitoring that was missing.'],
  ['Cloud costs growing faster than usage', 'We find the waste and re-architect the parts that drive it.'],
];
const ribbon = ['Custom software', 'Cloud migration', 'DevOps', 'API design', 'Architecture reviews', 'Data platforms', 'Mobile apps', 'Team augmentation'];
const headline = 'Software that holds its shape under load.';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <div className="wrap">
        <header className="top">
          <a className="logo" href="#top" aria-label="Redgrid Software home">
            <i aria-hidden="true"><b /><b /><b /><b /></i>Redgrid
          </a>
          <nav>
            <a href="#services">Services</a><a href="#process">How we work</a>
            <a href="#work">Engagements</a><a href="#contact">Contact</a>
          </nav>
        </header>
        <div className="hero" id="top">
          <div>
            <h1 aria-label={headline}>
              {headline.split(' ').map((w, i) => (
                <span key={i}>
                  <span className="w" aria-hidden="true"><span style={{ ['--i' as string]: i }}>{w}</span></span>{' '}
                </span>
              ))}
            </h1>
            <p className="lede">Redgrid is a software consultancy. We design, build and rescue the systems your business runs on, and we hand them over in a state your own team can maintain.</p>
            <a className="btn" href="#contact">Book a discovery call</a>
            <a className="btn ghost" href="#services">See what we do</a>
          </div>
          <HeroGrid />
        </div>
      </div>

      <div className="ribbon" aria-hidden="true">
        <div className="track">
          {[0, 1].map((g) => (
            <div className="grp" key={g}>{ribbon.map((t) => <span key={t}>{t}</span>)}</div>
          ))}
        </div>
      </div>

      <section id="services"><div className="wrap">
        <Reveal as="h2">What we do</Reveal>
        <Reveal as="p" className="sub">Four ways to work with us, from a single architecture review to a full product build.</Reveal>
        <div className="services">
          {services.map(([t, d], i) => (
            <Reveal as="article" delay={i} key={t}><h3>{t}</h3><p>{d}</p></Reveal>
          ))}
        </div>
      </div></section>

      <section id="process"><div className="wrap">
        <Reveal as="h2">How an engagement runs</Reveal>
        <Reveal as="p" className="sub">The same four stages every time, so you always know what happens next.</Reveal>
        <ol className="steps">
          {steps.map(([t, d], i) => (
            <Reveal as="li" delay={i} key={t}><h3>{t}</h3><p>{d}</p></Reveal>
          ))}
        </ol>
      </div></section>

      <section id="work"><div className="wrap split">
        <div>
          <Reveal as="h2">Where we are usually called in</Reveal>
          <Reveal as="p" className="sub">Typical problems we are hired to solve.</Reveal>
        </div>
        <div className="work">
          {work.map(([t, d], i) => (
            <Reveal delay={i} key={t}><b>{t}</b><span>{d}</span></Reveal>
          ))}
        </div>
      </div></section>

      <section className="cta" id="contact"><div className="wrap">
        <Reveal as="h2">Tell us what you are building.</Reveal>
        <Reveal as="p" className="sub">Send a short note about your project. We reply within two working days.</Reveal>
        <Reveal delay={2}><ContactForm /></Reveal>
      </div></section>

      <footer><div className="wrap">
        <span>© {new Date().getFullYear()} Redgrid Software</span><span>Software consultancy</span>
      </div></footer>
    </>
  );
}
