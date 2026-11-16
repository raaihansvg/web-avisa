import Image from "next/image";
import Intro from "./intro";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F6F3EC] text-[#3A1F1B] selection:bg-[#7C251D] selection:text-[#F6F3EC] relative overflow-x-hidden">
      <a className="skip-link" href="#main">Skip to content</a>
      <Intro />
      <header
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-3xl transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-150 opacity-100 translate-y-0`}
      >
        <nav aria-label="Main navigation" className="bg-[#FAF8F5]/90 backdrop-blur-md rounded-2xl px-5 py-2.5 shadow-[0_8px_30px_rgb(124,37,29,0.06)] flex items-center justify-between border border-[#7C251D]/10">
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-9 h-9 bg-[#7C251D] text-[#F6F3EC] rounded-lg flex items-center justify-center font-serif-italic text-lg tracking-wider group-hover:scale-105 transition duration-300">
              A
            </div>
            <span className="font-bold tracking-[0.2em] text-xs uppercase text-[#7C251D]">
              AVISA
            </span>
          </a>
          <ul className="desktop-nav hidden md:flex items-center gap-10 text-[11px] font-medium tracking-[0.2em] text-[#73534D] uppercase">
            <li>
              <a
                href="#about"
                className="hover:text-[#7C251D] transition relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#7C251D] hover:after:w-full after:transition-all"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="hover:text-[#7C251D] transition relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#7C251D] hover:after:w-full after:transition-all"
              >
                Work
              </a>
            </li>
            <li>
              <a
                href="#expertise"
                className="hover:text-[#7C251D] transition relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#7C251D] hover:after:w-full after:transition-all"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#achievements"
                className="hover:text-[#7C251D] transition relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#7C251D] hover:after:w-full after:transition-all"
              >
                Honors
              </a>
            </li>
          </ul>
          <a
            href="#contact"
            className="border border-[#7C251D] text-[#7C251D] rounded-xl px-5 py-2 text-xs font-semibold tracking-wide hover:bg-[#7C251D] hover:text-[#F6F3EC] active:scale-95 transition duration-300"
          >
            Contact
          </a>
        </nav>
        <details className="mobile-nav md:hidden">
          <summary>Menu <span aria-hidden="true">＋</span></summary>
          <nav aria-label="Mobile navigation">
            <a href="#about">About</a><a href="#experience">Work</a>
            <a href="#expertise">Skills</a><a href="#achievements">Honors</a>
            <a href="#contact">Contact</a>
          </nav>
        </details>
      </header>
      <main id="main">
      <section
        id="hero"
        className="hero-section relative min-h-[700px] h-svh w-full flex items-end justify-center overflow-hidden pt-24"
      >
        <h1 className="sr-only">Avisa Traghania — Industrial Engineering</h1>
        <div className="hero-marquee" aria-hidden="true">
          <div className="hero-marquee-track">
            <span>AVISA TRAGHANIA&nbsp;·&nbsp;</span>
            <span>AVISA TRAGHANIA&nbsp;·&nbsp;</span>
          </div>
        </div>
        <div
          className={`absolute left-8 md:left-16 bottom-12 z-30 hero-tagline max-w-xs transition-all duration-1000 delay-500 opacity-100 translate-y-0`}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#7C251D] mb-1">
            Industrial Engineering
          </p>
          <p className="text-sm font-medium text-[#5A3E3A] leading-snug">
            Risk Management, Lean Manufacturing, Strategic Planning &amp; Public
            Relations.
          </p>
        </div>
        <div className="hero-portrait">
          <Image src="/images/avisa-cutout.png" alt="Avisa Traghania wearing a beige hijab and cream cardigan" fill sizes="(max-width: 767px) 95vw, 620px" preload className="portrait-photo" />
        </div>
      </section>
      <section
        id="about"
        className="py-28 px-6 md:px-16 max-w-6xl mx-auto border-t border-[#7C251D]/15"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4 reveal-item transition-all duration-700 ease-out">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7C251D] block mb-2">
              01 / Profile
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-[#3A1F1B]">
              About &amp; Education
            </h2>
          </div>

          <div className="md:col-span-8 space-y-8">
            <p className="reveal-item transition-all duration-700 ease-out text-xl md:text-2xl font-normal leading-relaxed text-[#4A2C27]">
              Undergraduate{" "}
              <span className="font-semibold text-[#7C251D] underline decoration-[#7C251D]/40 decoration-1 underline-offset-4">
                Industrial Engineering
              </span>{" "}
              student with experience in academic and organizational activities.
              Skilled in problem-solving, critical thinking, and teamwork with a
              strong interest in{" "}
              <span className="font-semibold text-[#7C251D]">
                Risk Management, Lean Manufacturing, and Public Relations
              </span>
              .
            </p>
            <div className="reveal-item transition-all duration-700 ease-out bg-[#FAF8F5] rounded-2xl p-6 md:p-8 border border-[#7C251D]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm hover:shadow-md">
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
                  3.76{" "}
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
        id="experience"
        className="py-28 px-6 md:px-16 max-w-6xl mx-auto border-t border-[#7C251D]/15"
      >
        <div className="reveal-item transition-all duration-700 ease-out flex flex-col md:flex-row md:items-end justify-between mb-16">
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

        <div className="divide-y divide-[#7C251D]/15">
          <div className="reveal-item transition-all duration-700 ease-out exp-row py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start group">
            <div className="md:col-span-3">
              <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 bg-[#7C251D] text-[#F6F3EC] rounded-full">
                Internship
              </span>
              <p className="text-xs text-[#73534D] mt-3 font-medium">
                Strategic Planning Division
              </p>
            </div>
            <div className="md:col-span-6">
              <h3 className="text-2xl font-bold text-[#3A1F1B] group-hover:text-[#7C251D] group-hover:translate-x-2 transition-all duration-300">
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
          <div className="reveal-item transition-all duration-700 ease-out exp-row py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start group">
            <div className="md:col-span-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#7C251D]">
                Jan 2025 — Present
              </span>
              <p className="text-xs text-[#73534D] mt-1 font-medium">
                IPO Laboratory UII
              </p>
            </div>
            <div className="md:col-span-6">
              <h3 className="text-xl font-bold text-[#3A1F1B] group-hover:text-[#7C251D] group-hover:translate-x-2 transition-all duration-300">
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
          <div className="reveal-item transition-all duration-700 ease-out exp-row py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start group">
            <div className="md:col-span-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#7C251D]">
                October 2025
              </span>
              <p className="text-xs text-[#73534D] mt-1 font-medium">
                Course Module Development
              </p>
            </div>
            <div className="md:col-span-6">
              <h3 className="text-xl font-bold text-[#3A1F1B] group-hover:text-[#7C251D] group-hover:translate-x-2 transition-all duration-300">
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
          <div className="reveal-item transition-all duration-700 ease-out exp-row py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start group">
            <div className="md:col-span-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#7C251D]">
                Jun 2025 — Jan 2026
              </span>
              <p className="text-xs text-[#73534D] mt-1 font-medium">
                LEM FTI UII
              </p>
            </div>
            <div className="md:col-span-6">
              <h3 className="text-xl font-bold text-[#3A1F1B] group-hover:text-[#7C251D] group-hover:translate-x-2 transition-all duration-300">
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
          <div className="reveal-item transition-all duration-700 ease-out exp-row py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start group">
            <div className="md:col-span-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#7C251D]">
                May 2026 — Present
              </span>
              <p className="text-xs text-[#73534D] mt-1 font-medium">
                DPKA UII
              </p>
            </div>
            <div className="md:col-span-6">
              <h3 className="text-xl font-bold text-[#3A1F1B] group-hover:text-[#7C251D] group-hover:translate-x-2 transition-all duration-300">
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
        id="expertise"
        className="py-28 px-6 md:px-16 max-w-6xl mx-auto border-t border-[#7C251D]/15"
      >
        <div className="reveal-item transition-all duration-700 ease-out mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7C251D] block mb-2">
            03 / Capabilities
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-[#3A1F1B]">
            Skills &amp; Technical Stack
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="reveal-item transition-all duration-700 ease-out bg-[#FAF8F5] p-8 rounded-2xl border border-[#7C251D]/15 flex flex-col justify-between hover:-translate-y-1.5">
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
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-[#EFECE4] hover:bg-[#7C251D] hover:text-[#F6F3EC] transition-colors text-[#3A1F1B] rounded-lg text-xs font-medium cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="reveal-item transition-all duration-700 ease-out bg-[#7C251D] text-[#F6F3EC] p-8 rounded-2xl flex flex-col justify-between shadow-md hover:-translate-y-1.5">
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
                    className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition font-medium"
                  >
                    {tool}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="reveal-item transition-all duration-700 ease-out bg-[#FAF8F5] p-8 rounded-2xl border border-[#7C251D]/15 flex flex-col justify-between hover:-translate-y-1.5">
            <div>
              <span className="text-xs font-mono uppercase text-[#73534D]">
                03 / Soft Skills
              </span>
              <h3 className="text-xl font-bold mt-2 mb-6 text-[#3A1F1B]">
                Leadership &amp; Interpersonal
              </h3>
              <ul className="space-y-2.5 text-sm font-medium text-[#5A3E3A]">
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
                    className="flex items-center justify-between border-b border-[#7C251D]/10 pb-2"
                  >
                    <span>{soft}</span>
                    <span className="text-xs text-[#7C251D] font-semibold">
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
        id="achievements"
        className="py-28 px-6 md:px-16 max-w-6xl mx-auto border-t border-[#7C251D]/15"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="reveal-item transition-all duration-700 ease-out">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7C251D] block mb-2">
              04 / Recognition
            </span>
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-[#3A1F1B]">
              Honors &amp; Speaking
            </h2>

            <div className="space-y-4">
              <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#7C251D]/15 hover:-translate-y-1 transition duration-300">
                <div className="flex items-center justify-between text-xs text-[#73534D] mb-2">
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

              <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#7C251D]/15 hover:-translate-y-1 transition duration-300">
                <div className="flex items-center justify-between text-xs text-[#73534D] mb-2">
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
          <div className="reveal-item transition-all duration-700 ease-out">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7C251D] block mb-2">
              05 / Credentials
            </span>
            <h2 className="text-3xl font-bold tracking-tight mb-8 text-[#3A1F1B]">
              Certifications
            </h2>

            <div className="bg-[#7C251D] text-[#F6F3EC] p-8 rounded-2xl flex flex-col justify-between min-h-64 shadow-md hover:-translate-y-1 transition duration-300">
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
        id="contact"
        className="border-t border-[#7C251D]/20 bg-[#EFECE4] text-[#7C251D] py-20 px-6 md:px-16 mt-12"
      >
        <div className="reveal-item transition-all duration-700 ease-out max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-12">
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-[#73534D] block mb-4 font-semibold">
              Get in touch
            </span>
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-[#7C251D]">
              Let&apos;s Connect.
            </h2>
          </div>

          <div className="space-y-3 text-sm md:text-right">
            <p className="text-[#6E504B] font-medium">Bogor, Indonesia</p>
            <a
              href="mailto:avisatraghaniaa@gmail.com"
              className="inline-flex items-center gap-3 text-lg font-bold text-[#7C251D] hover:opacity-75 transition group"
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
              <span>avisatraghaniaa@gmail.com</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}