import React, { useEffect, useState } from 'react';

import { createRoot } from 'react-dom/client';

import {

  ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Download, Menu, X,

  ChevronRight, Server, Cloud, Database, BrainCircuit, Code2, Layers3,

  MapPin, FileText, ExternalLink

} from 'lucide-react';

import './styles.css';



const PROFILE = {

  name: 'Prachi Singh Rawal',

  title: 'Software Engineer · Java · Spring Boot · Microservices',

  email: 'prachi.21rawal@gmail.com',

  location: 'Bengaluru, India',

  linkedin: 'https://www.linkedin.com/in/prachi213',

  github: 'https://github.com/prachisingh2',

  resume: '/Prachi-Singh-Rawal-Resume.pdf',

  photo: '/images/prachi-office.jpg',

  mountainPhoto: '/images/prachi-mountains.jpg'

};



const experience = [

  {

    company: 'Accenture',

    role: 'Associate Software Engineer',

    period: 'Oct 2024 — Present',

    location: 'Bengaluru',

    scope: 'Building enterprise applications across Java/Spring Boot microservices, React workflows, Kafka-based processing and Azure cloud delivery.',

    wins: [

      ['35%', 'faster API response time', 'through 15+ Java/Spring Boot services, REST APIs and JPA optimization'],

      ['40%', 'faster page loads', 'through React dashboards and reusable UI workflows'],

      ['~30%', 'higher async throughput', 'through Kafka-based event-driven claims and notification processing'],

      ['3 days', 'release cycle', 'after Docker, Kubernetes, Azure and Jenkins CI/CD automation']

    ],

    stack: 'Java · Spring Boot · React · Kafka · SQL · Azure · Docker · Kubernetes · Jenkins'

  },

  {

    company: 'Cisco Systems',

    role: 'Software Engineer',

    period: 'Sep 2023 — Sep 2024',

    location: 'Bengaluru',

    scope: 'Worked across network telemetry, device monitoring, backend services, Angular dashboards, AWS workflows and application security.',

    wins: [

      ['20%', 'faster incident response', 'through real-time network monitoring and telemetry services'],

      ['30%', 'better query performance', 'through MySQL schema and SQL optimization'],

      ['8 hrs/week', 'less manual log work', 'through AWS S3/Lambda automation'],

      ['OAuth 2.0', 'secure access', 'through Spring Security and role-based authorization']

    ],

    stack: 'Java · Spring Boot · Kafka · Angular · MySQL · AWS · Spring Security · OAuth2'

  },

  {

    company: 'Persistent Systems',

    role: 'Software Developer Intern',

    period: 'Dec 2022 — Jun 2023',

    location: 'Pune',

    scope: 'Started my engineering career building Java enterprise features and learning how software moves from development through testing and release.',

    wins: [

      ['5+', 'features shipped', 'across Java enterprise applications'],

      ['20+', 'defects resolved', 'through debugging, validation and root-cause analysis'],

      ['Agile', 'team delivery', 'through Git, Jenkins, reviews and collaboration with senior engineers and QA']

    ],

    stack: 'Java · SQL · Git · Jenkins · Agile'

  }

];



const projects = [

  {

    number: '01',

    category: 'AI · FULL STACK',

    title: 'AI-Powered Claims Processing Platform',

    intro: 'A claims workflow where asynchronous processing, human review and AI-assisted summarization work together.',

    story: 'Built around Java/Spring Boot services, Kafka, React and Azure OpenAI. The system explores how AI can remove repetitive work without turning the architecture into a black box.',

    metrics: '15+ services · 35% faster APIs · ~50% less manual review',

    tags: 'Java · Spring Boot · Kafka · React · Azure OpenAI',

    architecture: ['CLIENT', 'API', 'CLAIMS SERVICES', 'KAFKA', 'AI WORKER', 'DATA'],

    github: '',

    live: ''

  },

  {

    number: '02',

    category: 'DISTRIBUTED SYSTEMS',

    title: 'Event-Driven Order & Payment Platform',

    intro: 'Order, payment, inventory and notification services coordinated through events instead of tight synchronous coupling.',

    story: 'A systems project focused on domain boundaries, Kafka events, PostgreSQL transactions, Redis caching, idempotency and failure-aware workflows.',

    metrics: 'Event-driven · idempotent · failure-aware',

    tags: 'Java · Spring Boot · Kafka · PostgreSQL · Redis · Kubernetes',

    architecture: ['CLIENT', 'ORDER API', 'KAFKA', 'PAYMENT', 'INVENTORY', 'DATA'],

    github: '',

    live: ''

  },

  {

    number: '03',

    category: 'SYSTEM DESIGN',

    title: 'Distributed Job Scheduling Platform',

    intro: 'A scheduler and worker model designed for retries, distributed locking and failure recovery.',

    story: 'The project explores what changes when scheduled work must survive worker failures, duplicate execution and coordination across multiple instances.',

    metrics: 'Retries · Redis locking · Kafka recovery',

    tags: 'Java · Spring Boot · Kafka · Redis · PostgreSQL',

    architecture: ['SCHEDULER', 'REDIS LOCK', 'KAFKA', 'WORKERS', 'RETRY', 'DATA'],

    github: '',

    live: ''

  },

  {

    number: '04',

    category: 'REAL-TIME WEB',

    title: 'Live Chat Web Application',

    intro: 'A real-time communication experience where the interface updates as conversations happen.',

    story: 'React, Node.js, REST APIs and WebSockets come together in a compact full-stack application focused on live events and state.',

    metrics: 'WebSockets · real-time events · full stack',

    tags: 'React · Node.js · WebSocket · REST APIs',

    architecture: ['REACT', 'REST', 'WEBSOCKET', 'NODE.JS', 'STATE'],

    github: '',

    live: ''

  }

];



const superpowers = [

  [Server, 'BACKEND & APIs', 'Designing service boundaries, business logic and reliable REST APIs around real product workflows.'],

  [Layers3, 'EVENT-DRIVEN THINKING', 'Breaking tightly coupled workflows into asynchronous services with events, retries and failure-aware processing.'],

  [Code2, 'PRODUCT ENGINEERING', 'Connecting backend systems with React and Angular experiences that turn APIs into usable products.'],

  [Cloud, 'SHIP & OPERATE', 'Taking software from local development through CI/CD, containers, cloud deployment and production support.'],

  [Database, 'PERFORMANCE MINDSET', 'Looking for bottlenecks across APIs, queries, caching and data access instead of treating symptoms.'],

  [BrainCircuit, 'AI-ENABLED SOFTWARE', 'Applying AI where it removes repetitive work while keeping the surrounding system explainable and controllable.']

];



const skills = {

  Programming: ['Java', 'JavaScript', 'TypeScript', 'SQL'],

  Backend: ['Spring Boot', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'REST APIs', 'Microservices'],

  Frontend: ['React.js', 'Angular', 'HTML5', 'CSS3'],

  'Messaging & Distributed': ['Apache Kafka', 'Event-driven architecture', 'Async processing', 'Data pipelines'],

  'Cloud & DevOps': ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Jenkins', 'Git', 'CI/CD'],

  Data: ['MySQL', 'PostgreSQL', 'Redis', 'SQL optimization'],

  'AI / GenAI': ['Azure OpenAI', 'LLM integration', 'Prompt engineering', 'Semantic search', 'Vector retrieval'],

  Engineering: ['OOP', 'API design', 'Caching', 'Authentication', 'Authorization', 'RCA', 'Performance', 'Agile']

};



// const books = [

//   ['The Kite Runner', 'Khaled Hosseini'],

//   ['The Murder of Roger Ackroyd', 'Agatha Christie'],

//   ['The Mom Test', 'Rob Fitzpatrick'],

//   ['Build', 'Tony Fadell'],

//   ['Measure What Matters', 'John Doerr'],

//   ['The Liberation of Sita', 'Volga']

// ];



const proofOfWork = [
  {
    label: 'GITHUB',
    title: 'Code, experiments & engineering practice',
    text: 'A growing collection of Java, Spring Boot, full-stack, DSA and system-design work.',
    href: PROFILE.github,
    action: 'VIEW GITHUB'
  },
  {
    label: 'LEARNING IN PUBLIC',
    title: 'DSA · System Design · Backend Architecture',
    text: 'Sharing my engineering journey while building depth in algorithms, distributed systems, cloud engineering and AI-enabled software.',
    stats: [
      ['1.7K+', 'LinkedIn followers'],
      ['2.5K+', 'impressions in 1 week']
    ],
    href: PROFILE.linkedin,
    action: 'VIEW LINKEDIN'
  },
  {
    label: 'WRITING',
    title: 'Technical notes & case studies',
    text: 'A future space for practical notes on Java, Spring Boot, APIs, Kafka, system design and debugging.',
    href: '#',
    action: 'COMING SOON'
  }
];


const recognition = [
  {
    number: '01',
    type: 'CLIENT APPRECIATION',
    title: 'Client Recognition',
    text: 'Recognized by the client for outstanding performance, dedication and contribution to successful project delivery.'
  },
  {
    number: '02',
    type: 'PROFESSIONAL RECOGNITION',
    title: 'Outstanding Performance',
    text: 'Recognized for outstanding performance, ownership, dedication and contribution to team success.'
  },
  {
    number: '03',
    type: 'HACKATHON',
    title: 'BuildVerse · Runner-Up',
    text: 'Secured Runner-Up position in the BuildVerse Hackathon.'
  },
  {
    number: '04',
    type: 'IIT BOMBAY',
    title: 'Mood Indigo · PR Representative',
    text: 'Selected as a Public Relations Representative for IIT Bombay’s annual cultural festival.'
  },
  {
    number: '05',
    type: 'EVENT ORGANIZING',
    title: 'SRISHTI 2019 · LNCT',
    text: 'Organized and coordinated events as part of SRISHTI 2019 at Lakshmi Narain College of Technology.'
  },
  {
    number: '06',
    type: 'TECHNICAL · IIT ROORKEE',
    title: 'ML & AI Competition',
    text: 'Selected for the second round following participation in a Machine Learning & AI workshop.'
  }
];

const learning = [

  'DSA', 'System Design', 'Distributed Systems',

  'Cloud Engineering', 'AI Engineering', 'Performance Engineering'

];



function Reveal({ children, className = '' }) {

  return <div className={`reveal ${className}`}>{children}</div>;

}



function SectionTitle({ eyebrow, title, text }) {

  return (

    <div className="section-title">

      <span className="eyebrow">{eyebrow}</span>

      <h2>{title}</h2>

      {text && <p>{text}</p>}

    </div>

  );

}



function App() {

  const [menu, setMenu] = useState(false);

  const [active, setActive] = useState('home');

  const [cursor, setCursor] = useState({ x: -100, y: -100 });

  const [activeProject, setActiveProject] = useState(null);



  const nav = [

    ['home', 'HOME'],

    ['about', 'ABOUT'],

    ['experience', 'EXPERIENCE'],

    ['projects', 'WORK'],

    ['engineering', 'ENGINEERING'],

    ['proof', 'PROOF OF WORK'],

    ['beyond', 'BEYOND CODE'],

    ['contact', 'CONTACT']

  ];



  useEffect(() => {

    const onMove = e => setCursor({ x: e.clientX, y: e.clientY });



    const onScroll = () => {

      const current = nav.map(([id]) => id).find(id => {

        const el = document.getElementById(id);

        if (!el) return false;

        const r = el.getBoundingClientRect();

        return r.top <= 160 && r.bottom >= 160;

      });



      if (current) setActive(current);



      document.querySelectorAll('.reveal').forEach(el => {

        if (el.getBoundingClientRect().top < window.innerHeight * 0.88) {

          el.classList.add('visible');

        }

      });

    };



    window.addEventListener('mousemove', onMove);

    window.addEventListener('scroll', onScroll, { passive: true });

    onScroll();



    return () => {

      window.removeEventListener('mousemove', onMove);

      window.removeEventListener('scroll', onScroll);

    };

  }, [nav]);



  useEffect(() => {

    if (!activeProject) return;



    const onKey = e => {

      if (e.key === 'Escape') setActiveProject(null);

    };



    document.addEventListener('keydown', onKey);

    document.body.style.overflow = 'hidden';



    return () => {

      document.removeEventListener('keydown', onKey);

      document.body.style.overflow = '';

    };

  }, [activeProject]);



  const go = id => {

    setMenu(false);

    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  };



  return (

    <div className="site" style={{ '--mx': `${cursor.x}px`, '--my': `${cursor.y}px` }}>

      <div className="cursor-glow" />

      <div className="grain" />



      <header className="nav">

        <button className="brand" onClick={() => go('home')} aria-label="Go home">

          PSR<span>.</span>

        </button>



        <nav className={menu ? 'open' : ''}>

          {nav.map(([id, label]) => (

            <button

              className={active === id ? 'active' : ''}

              key={id}

              onClick={() => go(id)}

            >

              {label}

            </button>

          ))}

        </nav>



        <div className="nav-actions">

          <a className="resume-mini" href={PROFILE.resume} download>

            <Download size={13} /> RESUME

          </a>

          <button

            className="menu-btn"

            onClick={() => setMenu(!menu)}

            aria-label="Toggle navigation"

            aria-expanded={menu}

          >

            {menu ? <X /> : <Menu />}

          </button>

        </div>

      </header>



      <main>

        <section className="hero" id="home">

          <div className="hero-orbit orbit-a" />

          <div className="hero-orbit orbit-b" />



          <div className="hero-top">

            <span>SOFTWARE ENGINEER</span>

            <span>JAVA · SPRING BOOT · MICROSERVICES</span>

            <span>3+ YEARS · BENGALURU</span>

          </div>



          <div className="hero-layout">

            <Reveal className="hero-left">

              <p className="eyebrow">HEY, I'M</p>

              <h1>PRACHI SINGH <br /><em>RAWAL</em></h1>

              <h2>Building scalable systems,<br />one product at a time.</h2>

              <p className="hero-description">

                Software Engineer with 3+ years of experience building enterprise

                applications, backend services, microservices and full-stack

                experiences using Java, Spring Boot, React and cloud technologies.

              </p>



              <div className="hero-actions">

                <button className="pill dark" onClick={() => go('projects')}>

                  VIEW MY WORK <ArrowDown size={15} />

                </button>

                <a className="pill" href={PROFILE.linkedin} target="_blank" rel="noreferrer">

                  LET'S CONNECT <ArrowUpRight size={15} />

                </a>

              </div>

            </Reveal>



            <Reveal className="hero-visual">

              <div className="hero-photo-frame" />

              <div className="hero-photo-card">

                <img src={PROFILE.photo} alt="Prachi Singh Rawal" />

                <div className="hero-photo-label">

                  <span>SOFTWARE ENGINEER</span>

                  <strong>BENGALURU, INDIA</strong>

                </div>

              </div>

              <div className="hero-photo-badge">

                <span>3+</span>

                <small>YEARS<br />EXPERIENCE</small>

              </div>

            </Reveal>

          </div>



          <div className="hero-scroll">SCROLL TO EXPLORE <ArrowDown size={13} /></div>

        </section>



        <section className="about section" id="about">

          <div className="wide">

            <Reveal>

              <SectionTitle

                eyebrow="ABOUT ME"

                title={<>I build software that has to <em>work in the real world.</em></>}

                text="My work sits at the intersection of backend engineering, full-stack development and distributed systems. I enjoy taking a problem from API design and data modelling through deployment, debugging and production support."

              />

            </Reveal>



            <div className="about-grid">

              {[

                ['01', 'Build', 'Java and Spring Boot services, APIs, microservices and product workflows.'],

                ['02', 'Connect', 'Kafka, asynchronous processing, integrations and event-driven systems.'],

                ['03', 'Improve', 'Performance, database optimization, reliability, security and debugging.'],

                ['04', 'Ship', 'Docker, Kubernetes, cloud infrastructure and CI/CD delivery.']

              ].map(([n, title, text]) => (

                <Reveal key={title}>

                  <div><span>{n}</span><h3>{title}</h3><p>{text}</p></div>

                </Reveal>

              ))}

            </div>

          </div>

        </section>



        <section className="experience-section section" id="experience">
  <div className="wide">
    <Reveal>
      <SectionTitle
        eyebrow="WHERE I'VE MADE IMPACT"
        title={<>From enterprise platforms to <em>scalable systems.</em></>}
        text="Three chapters across Persistent Systems, Cisco and Accenture — each adding another layer of backend, full-stack and production engineering."
      />
    </Reveal>

    <div className="experience-timeline">
      {experience.map((job, index) => (
        <Reveal key={job.company}>
          <article className="experience-item">
            <div className="experience-marker">
              <span>
                {job.company
                  .split(' ')
                  .map(word => word[0])
                  .join('')
                  .slice(0, 2)}
              </span>
              {index < experience.length - 1 && <div className="experience-line" />}
            </div>

            <div className="experience-card">
              <div className="experience-card-header">
                <div>
                  <h3>{job.role}</h3>
                  <a href="#" onClick={(e) => e.preventDefault()} className="experience-company">
                    {job.company}
                  </a>
                </div>

                <div className="experience-meta">
                  <span>◷ {job.period}</span>
                  <span>⌖ {job.location}, India</span>
                  <small>
                    {job.role.toLowerCase().includes('intern') ? 'internship' : 'full-time'}
                  </small>
                </div>
              </div>

              <div className="experience-scope">
                <span className="experience-label">SCOPE OF WORK</span>
                <p>{job.scope}</p>
              </div>

              <div className="experience-wins">
                <span className="experience-label">KEY WINS</span>
                <ul>
                  {job.wins.map(([value, title, detail]) => (
                    <li key={`${value}-${title}`}>
                      <strong>{value}</strong> {title}{detail && ` — ${detail}`}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="experience-stack">
                {job.stack.split(' · ').map(tech => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  </div>
</section>

<section className="superpowers section">

          <div className="wide">

            <Reveal>

              <SectionTitle

                eyebrow="MY SUPERPOWERS"

                title={<>The areas where I like to <em>go deep.</em></>}

                text="Not a list of every technology I’ve touched — the engineering themes I actually want to be known for."

              />

            </Reveal>



            <div className="superpower-grid">

              {superpowers.map(([Icon, title, text], i) => (

                <Reveal key={title}>

                  <article>

                    <span>0{i + 1}</span><Icon size={25}/><h3>{title}</h3><p>{text}</p>

                  </article>

                </Reveal>

              ))}

            </div>

          </div>

        </section>



        <section className="skills section" id="skills">

          <div className="wide">

            <Reveal>

              <SectionTitle eyebrow="TECHNICAL SKILLS" title={<>The stack behind the <em>work.</em></>} />

            </Reveal>



            <div className="skills-grid">

              {Object.entries(skills).map(([group, items]) => (

                <Reveal key={group}>

                  <article className="skill-card">

                    <span className="eyebrow">{group}</span>

                    <div>{items.map(item => <span className="skill-pill" key={item}>{item}</span>)}</div>

                  </article>

                </Reveal>

              ))}

            </div>

          </div>

        </section>



        <section className="projects section" id="projects">

          <div className="wide">

            <Reveal>

              <SectionTitle

                eyebrow="PRODUCTS I'VE BUILT"

                title={<>Real systems, <em>real questions.</em></>}

                text="Projects are where I turn architecture ideas into something that can actually be explained, tested and improved."

              />

            </Reveal>



            <div className="project-list">

              {projects.map(p => (

                <Reveal key={p.number}>

                  <article

                    className="project-card"

                    onClick={() => setActiveProject(p)}

                    tabIndex={0}

                    onKeyDown={e => e.key === 'Enter' && setActiveProject(p)}

                  >

                    <div className="project-number">{p.number}</div>

                    <div className="project-body">

                      <span className="eyebrow">{p.category}</span>

                      <h3>{p.title}</h3>

                      <h4>{p.intro}</h4>

                      <p>{p.story}</p>

                      <div className="project-meta"><span>{p.metrics}</span><span>{p.tags}</span></div><div className="project-cta">VIEW CASE STUDY <ArrowUpRight size={14}/></div>

                    </div>

                    <ArrowUpRight className="project-arrow" size={22}/>

                  </article>

                </Reveal>

              ))}

            </div>

          </div>

        </section>



        <section className="systems section" id="engineering">

          <div className="wide">

            <Reveal>

              <SectionTitle

                eyebrow="ENGINEERING & SYSTEM DESIGN"

                title={<>I like asking <em>“what happens when…?”</em></>}

                text="Good engineering is not only about the happy path. I think about boundaries, failure, observability, performance, security and what the next engineer will need to understand."

              />

            </Reveal>



            <div className="system-board">

              <div className="system-board-head"><span>REFERENCE PATTERN</span><b>EVENT-DRIVEN SERVICE FLOW</b></div>

              <div className="system-flow">

                {['CLIENT','API','DOMAIN','KAFKA','WORKER','DATA'].map((x, i) => (

                  <React.Fragment key={x}>

                    <div><b>{x}</b><span>{['REQUEST','ROUTING','LOGIC','EVENT','ASYNC','STATE'][i]}</span></div>

                    {i < 5 && <ChevronRight size={17}/>}

                  </React.Fragment>

                ))}

              </div>

            </div>



            <div className="engineering-grid">

              {[

                ['API DESIGN', 'Contracts, validation, authentication and clean service boundaries.'],

                ['ASYNC PROCESSING', 'Events, consumers, retries and failure-aware workflows.'],

                ['DATA', 'Transactions, indexes, query performance and caching.'],

                ['RELIABILITY', 'Logs, debugging, RCA, monitoring and recovery paths.']

              ].map(([title, text]) => (

                <Reveal key={title}>

                  <div className="engineering-card"><span className="eyebrow">{title}</span><p>{text}</p></div>

                </Reveal>

              ))}

            </div>

          </div>

        </section>



        



        <section className="proof section" id="proof">
          <div className="wide">
            <Reveal>
              <SectionTitle
                eyebrow="PROOF OF WORK"
                title={<>More than a resume. <em>Show the work.</em></>}
                text="The portfolio should make it easy to see what I build, what I am learning and where the next layer of my engineering journey is going."
              />
            </Reveal>

            <div className="proof-grid">
              {proofOfWork.map((item, i) => (
                <Reveal key={item.label}>
                  <article className="proof-card">
                    <span className="proof-number">0{i + 1}</span>
                    <span className="eyebrow">{item.label}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>

                    {item.stats && (
                      <div className="proof-stats">
                        {item.stats.map(([value, label]) => (
                          <div className="proof-stat" key={label}>
                            <strong>{value}</strong>
                            <span>{label}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {item.href === '#' ? (
                      <span className="proof-action muted">{item.action}</span>
                    ) : (
                      <a className="proof-action" href={item.href} target="_blank" rel="noreferrer">
                        {item.action} <ArrowUpRight size={14} />
                      </a>
                    )}
                  </article>
                </Reveal>
              ))}
            </div>

            
<div className="recognition-block">
  <div className="recognition-heading">
    <div>
      <span className="eyebrow">RECOGNITION & MILESTONES</span>
      <h3>A few moments that made the journey <em>worth remembering.</em></h3>
    </div>
    <span className="recognition-count">06</span>
  </div>

  <div className="recognition-grid">
    {recognition.map(item => (
      <Reveal key={item.number}>
        <article className="recognition-card">
          <div className="recognition-card-top">
            <span>{item.number}</span>
            <small>{item.type}</small>
          </div>
          <h4>{item.title}</h4>
          <p>{item.text}</p>
          <div className="recognition-line" />
        </article>
      </Reveal>
    ))}
  </div>
</div>

<div className="proof-bottom">
              <div>
                <span className="eyebrow">OPEN SOURCE · PROJECTS · WRITING</span>
                <strong>More links will appear here as the work becomes public.</strong>
              </div>
              <a className="pill dark" href={PROFILE.github} target="_blank" rel="noreferrer">
                <Github size={15} /> GITHUB PROFILE <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </section>



        <section className="life section" id="beyond">
  <div className="wide">
    <Reveal>
      <SectionTitle
        eyebrow="LIFE BEYOND WORK"
        title={<>What keeps me <em>inspired.</em></>}
        text="Software is a big part of my life. It isn’t all of it."
      />
    </Reveal>

    <div className="life-feature">
      <Reveal className="life-copy">
        <span className="eyebrow">TRAVEL · NATURE · PHOTOGRAPHY</span>
        <h3>Give me a cold place, mountains and a camera.</h3>
        <p>
          I’m drawn to colder destinations and mountain landscapes. I love clicking
          sunsets, trees, skies, landscapes and small details in nature.
        </p>
        <div className="life-links">
          <span>🏔 MOUNTAINS</span>
          <span>📷 PHOTOGRAPHY</span>
          <span>🌅 SUNSETS</span>
          <span>🌲 NATURE</span>
        </div>
      </Reveal>

      <Reveal className="mountain-card">
        <img src={PROFILE.mountainPhoto} alt="Prachi in the mountains" />
        <div>
          <span>ONE OF MY FAVOURITE PLACES TO BE</span>
          <b>Somewhere colder, higher and quieter.</b>
        </div>
      </Reveal>
    </div>

    <Reveal>
      <div className="life-interests-simple">
        <div className="life-interests-heading">
          <span className="eyebrow">ALSO INTO</span>
          <h3>A few things I enjoy beyond code.</h3>
        </div>

        <div className="life-interests-list">
          <div className="life-interest-item">
            <span className="life-interest-title">F1</span>
            <span className="life-interest-description">Formula 1 and the excitement of race weekends.</span>
          </div>
          <div className="life-interest-item">
            <span className="life-interest-title">DANCE</span>
            <span className="life-interest-description">Kathak and semi-classical dance.</span>
          </div>
          <div className="life-interest-item">
            <span className="life-interest-title">BASKETBALL</span>
            <span className="life-interest-description">Following and enjoying the game.</span>
          </div>
          <div className="life-interest-item">
            <span className="life-interest-title">BADMINTON</span>
            <span className="life-interest-description">Playing whenever I get the chance.</span>
          </div>
        </div>
      </div>
    </Reveal>
  </div>
</section>

<section className="learning section">

          <div className="wide">

            <Reveal><SectionTitle eyebrow="CURRENTLY CURIOUS ABOUT" title={<>Still learning. <em>Always.</em></>} text="The next layer of the engineer I want to become." /></Reveal>

            <div className="learning-grid">

              {learning.map((x, i) => <div key={x}><span>0{i + 1}</span><b>{x}</b></div>)}

            </div>

          </div>

        </section>



        <section className="now section">

          <div className="wide">

            <Reveal><SectionTitle eyebrow="NOW" title={<>What I'm focused on <em>right now.</em></>} /></Reveal>

            <div className="now-grid">

              <div><span className="eyebrow">01 · CAREER</span><h3>Growing deeper as a Java / Full-Stack Engineer through real product work.</h3></div>

              <div><span className="eyebrow">02 · BUILDING</span><h3>Creating architecture-led projects that make backend and system-design decisions visible.</h3></div>

              <div><span className="eyebrow">03 · SHARING</span><h3>Publishing engineering learnings and building a stronger technical presence in public.</h3></div>

            </div>

          </div>

        </section>



        <section className="education section" id="education">

          <div className="wide">

            <Reveal><SectionTitle eyebrow="WHERE IT ALL BEGAN" title={<>The foundation behind the <em>work.</em></>} /></Reveal>

            <div className="education-grid">

              <div className="edu-main">

                <span className="eyebrow">RGPV · BHOPAL</span>

                <h3>Bachelor of Technology</h3>

                <p>Computer Engineering · CGPA 8.75 / 10</p>

              </div>

              <div className="certs">

                <span className="eyebrow">CERTIFICATIONS</span>

                <div>Oracle Certified Java SE 21 Developer</div>

                <div>Microsoft Certified: Azure Fundamentals · AZ-900</div>

                <div>Cisco Certified Network Associate · CCNA</div>

              </div>

            </div>

          </div>

        </section>



        <section className="contact section" id="contact">

          <div className="contact-glow" />

          <div className="wide">

            <Reveal>

              <span className="eyebrow">LET'S TALK</span>

              <h2>Let’s build<br /><em>something interesting.</em></h2>

              <p>Open to software engineering opportunities, backend and full-stack work, interesting product problems and engineering conversations.</p>



              <div className="contact-actions">

                <a className="pill light" href={`mailto:${PROFILE.email}`}><Mail size={15}/> EMAIL</a>

                <a className="pill outline-light" href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Linkedin size={15}/> LINKEDIN</a>

                <a className="pill outline-light" href={PROFILE.github} target="_blank" rel="noreferrer"><Github size={15}/> GITHUB</a>

                <a className="pill outline-light" href={PROFILE.resume} download><FileText size={15}/> RESUME</a>

              </div>

            </Reveal>



            <div className="footer">

              <span>{PROFILE.name.toUpperCase()}</span>

              <span>{PROFILE.location} · {PROFILE.email}</span>

              <span>BUILT WITH CURIOSITY · PSR.</span>

            </div>

          </div>

        </section>

      </main>



      {activeProject && (

        <div className="modal" role="dialog" aria-modal="true" aria-label={activeProject.title} onClick={() => setActiveProject(null)}>

          <div className="modal-inner" onClick={e => e.stopPropagation()}>

            <button className="modal-close" onClick={() => setActiveProject(null)} aria-label="Close project details"><X /></button>

            <span className="eyebrow">{activeProject.category}</span>

            <h2>{activeProject.title}</h2>

            <p>{activeProject.story}</p>

            <div className="modal-stat">{activeProject.metrics}</div>



            <div className="modal-architecture">

              {activeProject.architecture.map((item, i) => (

                <React.Fragment key={item}>

                  <span>{item}</span>

                  {i < activeProject.architecture.length - 1 && <ChevronRight />}

                </React.Fragment>

              ))}

            </div>



            <div className="modal-links">

              {activeProject.github && <a href={activeProject.github} target="_blank" rel="noreferrer">GitHub <ExternalLink size={14}/></a>}

              {activeProject.live && <a href={activeProject.live} target="_blank" rel="noreferrer">Live Demo <ExternalLink size={14}/></a>}

            </div>



            {!activeProject.github && !activeProject.live && (

              <small>Public GitHub and live-demo links can be added when the implementation is ready.</small>

            )}

          </div>

        </div>

      )}

    </div>

  );

}



createRoot(document.getElementById('root')).render(<App />);
