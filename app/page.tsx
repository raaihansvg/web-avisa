import Image from "next/image";
import Intro from "./intro";
import { GpaCounter, HeroScene, PortfolioNav } from "./portfolio-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F6F3EC] text-[#3A1F1B] selection:bg-[#7C251D] selection:text-[#F6F3EC] relative overflow-x-hidden">
      <a className="skip-link" href="#main">Skip to content</a>
      <Intro />
      <PortfolioNav />
      <main id="main">
      <section
        id="hero" tabIndex={-1}
        className="hero-section relative min-h-[700px] h-svh w-full flex items-end justify-center overflow-hidden pt-24"
      >
        <h1 className="sr-only">Avisa Traghania — Industrial Engineering</h1>
        <HeroScene
          portrait={<Image src="/images/avisa-original.jpeg" alt="Avisa Traghania seated, wearing a black hijab and blouse with blue jeans" unoptimized fill sizes="(max-width: 767px) 80vw, 490px" preload className="portrait-photo" />}
          metadata={<div className="hero-tagline reveal-item">
            <p className="metadata-mask"><span className="metadata-line">Industrial Engineering</span></p>
            <p className="metadata-mask"><span className="metadata-line">Risk Management, Lean Manufacturing,</span></p>
            <p className="metadata-mask"><span className="metadata-line">Strategic Planning &amp; Public Relations.</span></p>
          </div>}
        />
      </section>
      <section
        id="about" tabIndex={-1}
        className="py-28 px-6 md:px-16 max-w-6xl mx-auto border-t border-[#7C251D]/15"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4 reveal-item">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7C251D] block mb-2">
              01 / Profile
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-[#3A1F1B]">
              About &amp; Education
            </h2>
          </div>

          <div className="md:col-span-8 space-y-8">
            <p className="bio-copy reveal-item text-xl md:text-2xl font-normal leading-relaxed text-[#4A2C27]">
              Undergraduate{" "}
              <span className="bio-keyword font-semibold text-[#7C251D]">
                Industrial Engineering
              </span>{" "}
              student with experience in academic and organizational activities.
              Skilled in problem-solving, critical thinking, and teamwork with a
              strong interest in{" "}
              <span className="bio-keyword font-semibold text-[#7C251D]">
                Risk Management, Lean Manufacturing, and Public Relations
              </span>
              .
            </p>
            <div className="education-card reveal-item bg-[#FAF8F5] rounded-2xl p-6 md:p-8 border border-[#7C251D]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm hover:shadow-md">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#73534D]">
                  Education
                </span>
                <h3 className="text-xl font-bold mt-1 text-[#3A1F1B]">
                  Universitas Islam Indonesia
                </h3>
                <p className="text-sm text-[#6E504B] mt-0.5">
                  Bachelor of Industrial Engineering
                </p>
                <p className="text-sm mt-2">Aug 2023 — Present</p>
              </div>
              <div className="sm:text-right bg-[#7C251D] text-[#F6F3EC] px-5 py-3 rounded-xl inline-block self-start sm:self-center">
                <span className="text-[10px] uppercase tracking-widest block text-[#E6C8C3]">
                  Cumulative GPA
                </span>
                <span className="text-2xl font-bold tracking-tight">
                  <GpaCounter />{" "}
                  <span className="text-sm font-normal text-[#E6C8C3]">
                    / 4.00
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="experience" tabIndex={-1}
        className="py-28 px-6 md:px-16 max-w-6xl mx-auto border-t border-[#7C251D]/15"
      >
        <div className="reveal-item flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7C251D] block mb-2">
              02 / Track Record
            </span>
            <h2 className="text-4xl font-bold tracking-tight text-[#3A1F1B]">
              Experience &amp; Leadership
            </h2>
          </div>
          <p className="text-sm text-[#6E504B] mt-4 md:mt-0 max-w-xs">
            Selected roles across energy sector strategic planning, academic
            laboratories, and student organizations.
          </p>
        </div>

        <div className="experience-list">
          <div className="reveal-item exp-row py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start group">
            <div className="md:col-span-3">
              <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 bg-[#7C251D] text-[#F6F3EC] rounded-full">
                Internship
              </span>
              <p className="text-xs text-[#73534D] mt-3 font-medium">
                Strategic Planning Division
              </p>
            </div>
            <div className="md:col-span-6">
              <h3 className="text-2xl font-bold text-[#3A1F1B] group-hover:text-[#7C251D] transition-colors">
                Internship — PT Pertamina Hulu Rokan
              </h3>
              <p className="text-sm text-[#5A3E3A] mt-2 leading-relaxed">
                Analyzed the economics of field development under a{" "}
                <strong>PSC (Production Sharing Contract) cost recovery</strong>{" "}
                scheme.
              </p>
            </div>
            <div className="md:col-span-3 md:text-right">
              <span className="text-xs font-mono uppercase text-[#7C251D]">
                Engineering Economics
              </span>
            </div>
          </div>
          <div className="reveal-item exp-row py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start group">
            <div className="md:col-span-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#7C251D]">
                Jan 2025 — Present
              </span>
              <p className="text-xs text-[#73534D] mt-1 font-medium">
                IPO Laboratory UII
              </p>
            </div>
            <div className="md:col-span-6">
              <h3 className="text-xl font-bold text-[#3A1F1B] group-hover:text-[#7C251D] transition-colors">
                Laboratory Assistant — Innovation &amp; Organizational
                Development
              </h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#73534D] mt-1">
                Coordinator of the Operational Management Department
              </p>
              <ul className="text-sm text-[#5A3E3A] mt-3 space-y-1.5 list-disc list-inside">
                <li>Managed the practical course mechanisms.</li>
                <li>
                  Established and maintained good relationships with lecturers.
                </li>
                <li>
                  Applied developed knowledge and skills in the IPO Laboratory.
                </li>
              </ul>
            </div>
            <div className="md:col-span-3 md:text-right">
              <span className="text-xs font-mono uppercase text-[#7C251D]">
                Operational Management
              </span>
            </div>
          </div>
          <div className="reveal-item exp-row py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start group">
            <div className="md:col-span-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#7C251D]">
                October 2025
              </span>
              <p className="text-xs text-[#73534D] mt-1 font-medium">
                Course Module Development
              </p>
            </div>
            <div className="md:col-span-6">
              <h3 className="text-xl font-bold text-[#3A1F1B] group-hover:text-[#7C251D] transition-colors">
                Authoring Team Member — Business Model Canvas
              </h3>
              <p className="text-sm text-[#5A3E3A] mt-2 leading-relaxed">
                Co-authored and developed a module titled{" "}
                <em>
                  &ldquo;Business Modeling Based on the Business Model
                  Canvas&rdquo;
                </em>{" "}
                with a lecturer. The module is used as a guide for a compulsory
                course in the Industrial Engineering program at Universitas
                Islam Indonesia.
              </p>
            </div>
            <div className="md:col-span-3 md:text-right">
              <span className="text-xs font-mono uppercase text-[#7C251D]">
                Academic Authoring
              </span>
            </div>
          </div>
          <div className="reveal-item exp-row py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start group">
            <div className="md:col-span-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#7C251D]">
                Jun 2025 — Jan 2026
              </span>
              <p className="text-xs text-[#73534D] mt-1 font-medium">
                LEM FTI UII
              </p>
            </div>
            <div className="md:col-span-6">
              <h3 className="text-xl font-bold text-[#3A1F1B] group-hover:text-[#7C251D] transition-colors">
                Program Coordinator — &ldquo;Staff of the Month&rdquo;
                Initiative
              </h3>
              <p className="text-sm text-[#5A3E3A] mt-2 leading-relaxed">
                Led the monthly performance evaluation process to recognize and
                select the best-performing functional staff member at LEM FTI
                Universitas Islam Indonesia.
              </p>
            </div>
            <div className="md:col-span-3 md:text-right">
              <span className="text-xs font-mono uppercase text-[#7C251D]">
                Performance Evaluation
              </span>
            </div>
          </div>
          <div className="reveal-item exp-row py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start group">
            <div className="md:col-span-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#7C251D]">
                May 2026 — Present
              </span>
              <p className="text-xs text-[#73534D] mt-1 font-medium">
                DPKA UII
              </p>
            </div>
            <div className="md:col-span-6">
              <h3 className="text-xl font-bold text-[#3A1F1B] group-hover:text-[#7C251D] transition-colors">
                Career Buddy — Department Pengembangan Karier dan Alumni
              </h3>
              <p className="text-sm text-[#5A3E3A] mt-2 leading-relaxed">
                Supported career consultation programs and contributed to the
                planning and execution of student soft skills development
                events.
              </p>
            </div>
            <div className="md:col-span-3 md:text-right">
              <span className="text-xs font-mono uppercase text-[#7C251D]">
                Career Development
              </span>
            </div>
          </div>
        </div>
      </section>
      <section
        id="expertise" tabIndex={-1}
        className="py-28 px-6 md:px-16 max-w-6xl mx-auto border-t border-[#7C251D]/15"
      >
        <div className="reveal-item mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7C251D] block mb-2">
            03 / Capabilities
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-[#3A1F1B]">
            Skills &amp; Technical Stack
          </h2>
        </div>

        <div className="skills-grid grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="skill-card reveal-item bg-[#FAF8F5] p-8 rounded-2xl border border-[#7C251D]/15 flex flex-col justify-between ">
            <div>
              <span className="text-xs font-mono uppercase text-[#73534D]">
                01 / Hard Skills
              </span>
              <h3 className="text-xl font-bold mt-2 mb-6 text-[#3A1F1B]">
                Industrial &amp; Strategic
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Risk Management",
                  "Six Sigma Basics",
                  "Business Process Analysis",
                  "Forecasting",
                  "Production Planning & Control (PPC)",
                  "Supply Chain Management",
                  "Lean Manufacturing",
                  "Engineering Economics",
                  "Public Relations",
                ].map((skill, index) => (
                  <span
                    key={skill}
                    style={{ "--pill-delay": `${index * .03}s` } as React.CSSProperties}
                    className="skill-pill px-3 py-1.5 bg-[#EFECE4] text-[#3A1F1B] rounded-lg text-xs font-medium cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="skill-card reveal-item bg-[#7C251D] text-[#F6F3EC] p-8 rounded-2xl flex flex-col justify-between shadow-md ">
            <div>
              <span className="text-xs font-mono uppercase text-[#E6C8C3]">
                02 / Software
              </span>
              <h3 className="text-xl font-bold mt-2 mb-6">
                Tools &amp; Simulation
              </h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {[
                  "SAP",
                  "FlexSim",
                  "SPSS",
                  "WinQSB",
                  "Microsoft Project",
                  "Ms Excel",
                  "Canva",
                  "Ms Word",
                ].map((tool) => (
                  <div
                    key={tool}
                    className="tool-box p-3 rounded-xl bg-white/10 font-medium"
                  >
                    <span>{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="skill-card reveal-item bg-[#FAF8F5] p-8 rounded-2xl border border-[#7C251D]/15 flex flex-col justify-between ">
            <div>
              <span className="text-xs font-mono uppercase text-[#73534D]">
                03 / Soft Skills
              </span>
              <h3 className="text-xl font-bold mt-2 mb-6 text-[#3A1F1B]">
                Leadership &amp; Interpersonal
              </h3>
              <ul className="soft-skills space-y-2.5 text-sm font-medium text-[#5A3E3A]">
                {[
                  "Public Speaking",
                  "Leadership",
                  "Problem Solving",
                  "Critical Thinking",
                  "Time Management",
                  "Teamwork",
                  "Adaptability",
                  "Responsive",
                ].map((soft) => (
                  <li
                    key={soft}
                    className="soft-skill flex items-center justify-between pb-2"
                  >
                    <span>{soft}</span>
                    <span className="core-badge text-xs text-[#7C251D] font-semibold">
                      Core
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section
        id="achievements" tabIndex={-1}
        className="py-28 px-6 md:px-16 max-w-6xl mx-auto border-t border-[#7C251D]/15"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="reveal-item">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7C251D] block mb-2">
              04 / Recognition
            </span>
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-[#3A1F1B]">
              Honors &amp; Speaking
            </h2>

            <div className="space-y-4">
              <div className="recognition-card reveal-item bg-[#FAF8F5] p-6 rounded-2xl border border-[#7C251D]/15  transition duration-300">
                <div className="recognition-meta flex flex-wrap gap-2 items-center justify-between text-xs text-[#73534D] mb-2">
                  <span className="font-semibold uppercase tracking-wider text-[#7C251D]">
                    International Program Competition
                  </span>
                  <span>November 2025</span>
                </div>
                <h3 className="text-lg font-bold text-[#3A1F1B]">
                  2nd Place — Video Campaign Contest
                </h3>
                <p className="text-sm text-[#5A3E3A] mt-1">
                  Global Youth Action at{" "}
                  <strong>Universiti Teknologi Malaysia (UTM)</strong>.
                </p>
              </div>

              <div className="recognition-card reveal-item bg-[#FAF8F5] p-6 rounded-2xl border border-[#7C251D]/15  transition duration-300">
                <div className="recognition-meta flex flex-wrap gap-2 items-center justify-between text-xs text-[#73534D] mb-2">
                  <span className="font-semibold uppercase tracking-wider text-[#7C251D]">
                    Speaker Representation
                  </span>
                  <span>June 2025</span>
                </div>
                <h3 className="text-lg font-bold text-[#3A1F1B]">
                  Represented LAB IPO as a Speaker at the IKATI Event
                </h3>
                <p className="text-sm text-[#5A3E3A] mt-1">
                  Represented the IPO Laboratory at the annual IKATI alumni
                  reunion event of the Faculty of Industrial Technology.
                </p>
              </div>
            </div>
          </div>
          <div className="reveal-item">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7C251D] block mb-2">
              05 / Credentials
            </span>
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-[#3A1F1B]">
              Certifications
            </h2>

            <div className="credential-card reveal-item bg-[#7C251D] text-[#F6F3EC] p-8 rounded-2xl flex flex-col justify-between min-h-64 shadow-md  transition duration-300">
              <div>
                <span className="px-3 py-1 bg-white/15 rounded-full text-xs uppercase tracking-widest">
                  Certification (2025)
                </span>
                <h3 className="text-3xl font-bold mt-6">SAP H4NA</h3>
                <p className="text-sm text-[#E6C8C3] mt-3 leading-relaxed">
                  SAP H4NA certification, as listed in the CV.
                </p>
              </div>
              <div className="pt-8 border-t border-white/15 flex items-center justify-between text-xs text-[#E6C8C3]">
                <span>Certification</span>
                <span>2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>
      <footer
        id="contact" tabIndex={-1}
        className="border-t border-[#7C251D]/20 bg-[#EFECE4] text-[#7C251D] py-20 px-6 md:px-16 mt-12"
      >
        <div className="footer-content reveal-item max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#73534D] block mb-4 font-semibold">
              Get in touch
            </span>
            <h2 className="footer-heading reveal-item font-display text-5xl md:text-7xl font-bold tracking-tight text-[#7C251D]">
              <span>Let&apos;s Connect.</span>
            </h2>
          </div>

          <div className="footer-contact space-y-3 text-sm md:text-right">
            <p className="text-[#6E504B] font-medium">Bogor, Indonesia</p>
            <a
              href="mailto:avisatraghaniaa@gmail.com"
              className="contact-email inline-flex items-center gap-3 text-lg font-bold text-[#7C251D] group"
            >
              <svg aria-hidden="true"
                className="w-7 h-5 stroke-[#7C251D] group-hover:-translate-y-0.5 transition-transform"
                viewBox="0 0 32 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1"
                  y="1"
                  width="30"
                  height="20"
                  rx="2"
                  strokeWidth="1.8"
                />
                <path
                  d="M2 2L16 13L30 2"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8 18H24"
                  strokeWidth="1.5"
                  strokeDasharray="1.5 2"
                />
              </svg>
              <span className="email-label">avisatraghaniaa@gmail.com</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}