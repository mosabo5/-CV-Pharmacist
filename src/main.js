const { useEffect } = React;
const html = htm.bind(React.createElement);

const profile = {
  name: "Mosaab Afa Alrefaai",
  title: "Pharmacist",
  focus: "GMP Manufacturing, Drug Delivery Systems, Quality Assurance",
  location: "Stockholm, Sweden",
  email: "Mosab.afa2@Gmail.com",
  phone: "+46 724 480 171",
  linkedin: "https://www.linkedin.com/in/mosaab-afa-alrefaai-a37b651b6/",
  summary:
    "Pharmacist with an MSc in Pharmaceutical Sciences from the University of Gothenburg and research experience at Harvard Medical School. Skilled in GMP manufacturing, quality assurance, drug delivery systems, and analytical techniques such as HPLC and LC-MS. Actively seeking opportunities in the pharmaceutical industry, clinical research, or medical affairs.",
};

const highlights = [
  "MSc in Pharmaceutical Sciences with Harvard research experience",
  "Expert in GMP/GDP compliance and drug delivery systems",
  "Advanced analytical skills: HPLC, LC-MS, PK/PD modelling",
  "Pharmaceutical manufacturing and clinical research expertise",
];

const education = [
  {
    school: "University of Gothenburg",
    location: "Sweden",
    degree: "Master of Sciences in Pharmacy",
    detail: "Pharmaceutical Sciences",
    period: "2019 - 2024",
    thesis:
      "MSc program focused on drug delivery systems, pharmaceutical analysis, and regulatory compliance in modern pharmaceutical development.",
  },
  {
    school: "Uppsala University",
    location: "Sweden",
    degree: "Specialized Course in Artificial Intelligence in Drug Development",
    detail: "",
    period: "Jan 2025 - Dec 2025",
    thesis:
      "Advanced coursework applying AI and machine learning methods to pharmaceutical research and drug discovery processes.",
  },
  {
    school: "Harvard University",
    location: "Boston, USA",
    degree: "Master's Thesis Research",
    detail: "Kohane Lab",
    period: "Jul 2023 - Feb 2024",
    thesis:
      "Synergistic Antibacterial Strategies Against Acute Otitis Media: Development of ionic liquid-based drug delivery formulations for enhanced antibiotic permeation.",
  },
  {
    school: "Västerböjd Gymnasium",
    location: "Skövde, Sweden",
    degree: "Science Program",
    detail: "",
    period: "Aug 2016 - Jun 2019",
    thesis: "",
  },
];

const experience = [
  {
    company: "Apoex",
    role: "Pharmaceutical Manufacturing Pharmacist",
    location: "Stockholm, Sweden",
    period: "Jun 2025 - Present",
    bullets: [
      "Actively learning and applying strict GMP, GDP and GLP guidelines in pharmaceutical manufacturing.",
      "Manufacture of cytostatics and antibiotics in GMP-classified cleanroom environments.",
      "Collaboration with quality teams to ensure compliance, traceability, and the best quality of products.",
      "Responsible for reporting and documenting workflow deviations to maintain high standards of GDP and GMP.",
    ],
  },
  {
    company: "Pharma Match",
    role: "Consultant Pharmacist",
    location: "Multiple locations, Sweden",
    period: "Sep 2024 - Jun 2025",
    bullets: [
      "Provided clinical advice, counseling, and medication dispensing with regulatory compliance focus.",
      "Adapted to diverse work environments across Skövde, Skara, Mariestad, Stockholm, and Valdemarsvik.",
      "Gained hands-on experience in patient communication and excellent customer service for optimal patient outcomes.",
    ],
  },
  {
    company: "Harvard University (Kohane Lab)",
    role: "Research Assistant",
    location: "Boston, USA",
    period: "Jun 2023 - Jan 2024",
    bullets: [
      "Developed ionic liquid-based formulations for enhanced antibiotic permeation through tympanic membranes.",
      "Conducted biofilm inhibition assays, rheological studies, and microscopy-based structural analysis.",
      "Characterized formulation properties using HPLC, LC-MS, spectroscopy, and DLS techniques.",
      "Performed ex vivo studies on chinchilla eardrums to assess tympanic membrane permeability.",
      "Analyzed statistical data evaluating activity of different formulations in ciprofloxacin drug delivery.",
    ],
  },
  {
    company: "AstraZeneca",
    role: "Clinical Study Design (School Project)",
    location: "Gothenburg, Sweden",
    period: "Apr 2023 - Jun 2023",
    bullets: [
      "Designed and simulated pharmacokinetic profiles for an Alzheimer's drug candidate.",
      "Applied PK/PD modelling for dose optimization and study design validation.",
      "Gained exposure to regulatory frameworks and translational pharmacology.",
    ],
  },
];

const skillGroups = [
{
  title: "Laboratory & Analytical Techniques",
  items: [
    "HPLC",
    "LC-MS",
    "NMR Spectroscopy",
    "Confocal Microscopy",
    "Particle Size Analysis",
    "Zeta Potential Analysis",
    "Biofilm Inhibition Assays",
    "Rheological Studies",
    "DLS (Dynamic Light Scattering)",
  ]
},
{
  title: "Pharmaceutical & Manufacturing",
  items: [
    "Drug Delivery Systems",
    "GMP/GDP/GLP Compliance",
    "Quality Assurance",
    "Quality Control",
    "PK/PD Modelling",
    "Formulation Development",
    "Cytostatics Manufacturing",
    "Antibiotic Manufacturing",
    "Cleanroom Procedures",
  ]
},
  {
    title: "Software & Data Analysis",
    items: [
      "Python",
      "RStudio",
      "PK-Sim",
      "GraphPad Prism",
      "SPSS",
      "Statistical Analysis",
    ],
  },
];

const languages = [
  { name: "English", level: "Fluent" },
  { name: "Swedish", level: "Fluent" },
  { name: "Arabic", level: "Native" },
];

function useCardSpotlight() {
  useEffect(() => {
    const cards = document.querySelectorAll("[data-tilt-card]");
    const teardown = [];

    cards.forEach((card) => {
      const move = (event) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const px = x / rect.width - 0.5;
        const py = y / rect.height - 0.5;

        card.style.setProperty("--cursor-x", `${x}px`);
        card.style.setProperty("--cursor-y", `${y}px`);
        card.style.setProperty("--rotate-x", `${py * -5}deg`);
        card.style.setProperty("--rotate-y", `${px * 7}deg`);
      };

      const leave = () => {
        card.style.setProperty("--rotate-x", "0deg");
        card.style.setProperty("--rotate-y", "0deg");
      };

      card.addEventListener("pointermove", move);
      card.addEventListener("pointerleave", leave);
      teardown.push(() => {
        card.removeEventListener("pointermove", move);
        card.removeEventListener("pointerleave", leave);
      });
    });

    return () => teardown.forEach((dispose) => dispose());
  }, []);
}

function SectionTitle({ eyebrow, title, text }) {
  return html`
    <div className="section-heading">
      <span>${eyebrow}</span>
      <h2>${title}</h2>
      <p>${text}</p>
    </div>
  `;
}

function App() {
  useCardSpotlight();

  return html`
    <div className="page-shell">
      <header className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Interactive CV</p>
          <h1>
            ${profile.name}
            <span>${profile.title}</span>
          </h1>
          <p className="hero-summary">${profile.summary}</p>

          <div className="hero-actions">
            <a href="mailto:${profile.email}" className="primary-link">Email Me</a>
            <a href="${profile.linkedin}" target="_blank" rel="noreferrer" className="ghost-link">
              LinkedIn
            </a>
          </div>

          <dl className="meta-grid">
            <div>
              <dt>Focus</dt>
              <dd>${profile.focus}</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>${profile.location}</dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>${profile.phone}</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>${profile.email}</dd>
            </div>
          </dl>
        </div>

        <aside className="hero-panel card" data-tilt-card>
          <p className="panel-label">Fast Snapshot</p>
          <ul className="highlight-list">
            ${highlights.map(
              (item) => html`
                <li>${item}</li>
              `,
            )}
          </ul>
          <div className="hero-orbit" aria-hidden="true"></div>
        </aside>
      </header>

      <main className="content-stack">
        <section className="section-grid">
          <${SectionTitle}
            eyebrow="Education"
            title="Pharmaceutical expertise and scientific foundation"
            text="Advanced training in pharmaceutical sciences, analytical techniques, and clinical research with specialized focus on drug delivery and manufacturing."
          />

          <div className="timeline">
            ${education.map(
              (item) => html`
                <article className="card timeline-card" data-tilt-card>
                  <div className="timeline-top">
                    <div>
                      <h3>${item.school}</h3>
                      <p>${item.degree}${item.detail ? `, ${item.detail}` : ""}</p>
                    </div>
                    <span>${item.period}</span>
                  </div>
                  <p className="muted">${item.location}</p>
                  ${item.thesis
                    ? html`<p className="thesis"><strong>Thesis:</strong> ${item.thesis}</p>`
                    : null}
                </article>
              `,
            )}
          </div>
        </section>

        <section className="section-grid">
          <${SectionTitle}
            eyebrow="Experience"
            title="Clinical and research expertise in pharmaceutical development"
            text="Professional experience spanning GMP manufacturing, clinical consulting, academic research at Harvard, and pharmaceutical quality assurance."
          />

          <div className="experience-grid">
            ${experience.map(
              (job) => html`
                <article className="card experience-card" data-tilt-card>
                  <div className="experience-top">
                    <div>
                      <h3>${job.role}</h3>
                      <p>${job.company}</p>
                    </div>
                    <span>${job.period}</span>
                  </div>
                  <p className="muted">${job.location}</p>
                  <ul className="bullet-list">
                    ${job.bullets.map(
                      (bullet) => html`
                        <li>${bullet}</li>
                      `,
                    )}
                  </ul>
                </article>
              `,
            )}
          </div>
        </section>

        <section className="section-grid section-grid-wide">
          <${SectionTitle}
            eyebrow="Skills"
            title="Comprehensive pharmaceutical and analytical capabilities"
            text="Expert in laboratory techniques, GMP compliance, drug delivery systems, PK/PD modelling, and quality assurance with proficiency in pharmaceutical software tools."
          />

          <div className="skills-layout">
            <div className="skills-grid">
              ${skillGroups.map(
                (group) => html`
                  <article className="card skill-card" data-tilt-card>
                    <h3>${group.title}</h3>
                    <div className="chip-wrap">
                      ${group.items.map(
                        (item) => html`
                          <span className="chip">${item}</span>
                        `,
                      )}
                    </div>
                  </article>
                `,
              )}
            </div>

            <aside className="card language-card" data-tilt-card>
              <p className="panel-label">Languages & Extras</p>
              <div className="language-list">
                ${languages.map(
                  (language) => html`
                    <div className="language-row">
                      <strong>${language.name}</strong>
                      <span>${language.level}</span>
                    </div>
                  `,
                )}
              </div>
              <div className="license-box">
                <span>Pharmacist License</span>
                <strong>Sweden (Apotekari)</strong>
              </div>
              <p className="reference-note">References available upon request.</p>
            </aside>
          </div>
        </section>
      </main>
    </div>
  `;
}

ReactDOM.createRoot(document.getElementById("root")).render(html`<${App} />`);
