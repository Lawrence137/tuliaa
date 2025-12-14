import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white text-gray-800">

      {/* ---------------- HERO ---------------- */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl" />
        <div className="absolute top-40 -right-24 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-28 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
            Mental Wellness for <br className="hidden sm:block" />
            the TEP Ecosystem
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed">
            Tulia is a confidential, accessible mental wellness platform connecting
            individuals, counselors, and institutions across Kenya.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#platforms"
              className="px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 hover:scale-105 transition"
            >
              Explore Platform
            </a>

            <a
              href="#about"
              className="px-8 py-4 rounded-xl bg-white border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* ---------------- ABOUT ---------------- */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            A Safe Space for Everyone
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Tulia is built to support individuals, professionals, and organizations
            through anonymous counseling, structured wellness tools, and data-driven
            insights — all aligned with Kenya’s Data Protection Act.
          </p>
        </div>
      </section>

      {/* ---------------- PLATFORMS ---------------- */}
      <section id="platforms" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">
            One Platform. Three Experiences.
          </h2>

          <p className="mt-4 text-center text-lg text-gray-600 max-w-3xl mx-auto">
            Tulia serves different users through tailored experiences —
            choose where you belong.
          </p>

          <div className="mt-16 grid gap-10 md:grid-cols-3">

            <PlatformCard
              title="For Individuals"
              description="Access anonymous counseling, AI emotional support, self-help tools, and group therapy."
              cta="Get Support"
              href="https://app.tulia.co.ke"
              accent="blue"
            />

            <PlatformCard
              title="For Counselors"
              description="Manage sessions, reach more clients, earn securely, and deliver meaningful impact."
              cta="Join as Counselor"
              href="https://counselor.tulia.co.ke"
              accent="purple"
            />

            <PlatformCard
              title="For Institutions"
              description="Track workforce wellbeing, ensure compliance, and build resilient teams."
              cta="Partner with Tulia"
              href="https://partner.tulia.co.ke"
              accent="green"
            />

          </div>
        </div>
      </section>

      {/* ---------------- IMPACT ---------------- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-3 text-center">

          <Stat value="10M+" label="Lives Impacted by 2030" />
          <Stat value="24/7" label="Anonymous Support" />
          <Stat value="100%" label="Data Protection Compliance" />

        </div>
      </section>

      {/* ---------------- CTA ---------------- */}
      <section className="py-24 px-6 bg-gradient-to-br from-blue-100 to-blue-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Start Your Wellness Journey with Tulia
          </h2>

          <p className="mt-6 text-lg text-gray-700">
            Whether you’re seeking support, offering care, or supporting a workforce —
            Tulia is here for you.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://app.tulia.co.ke"
              className="px-10 py-4 bg-blue-600 text-white rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition"
            >
              Get Started
            </a>
            <a
              href="#platforms"
              className="px-10 py-4 bg-white border border-gray-300 rounded-xl font-semibold text-gray-700 hover:bg-gray-50 transition"
            >
              Explore Options
            </a>
          </div>
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="py-10 px-6 bg-white border-t text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Tulia. All rights reserved.
      </footer>

    </main>
  );
}

/* ---------------- COMPONENTS ---------------- */

function PlatformCard({ title, description, cta, href, accent }) {
  const accentMap = {
    blue: "hover:shadow-blue-200",
    purple: "hover:shadow-purple-200",
    green: "hover:shadow-green-200",
  };

  return (
    <div
      className={`bg-white rounded-3xl p-8 shadow-lg transition hover:scale-[1.02] ${accentMap[accent]}`}
    >
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-4 text-gray-600 leading-relaxed">{description}</p>
      <a
        href={href}
        className="inline-block mt-6 px-6 py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-gray-800 transition"
      >
        {cta}
      </a>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <p className="text-4xl font-extrabold text-blue-600">{value}</p>
      <p className="mt-2 text-gray-600">{label}</p>
    </div>
  );
}
