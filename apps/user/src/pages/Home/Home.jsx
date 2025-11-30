import React from "react";
import {
  ChatBubbleLeftRightIcon,
  VideoCameraIcon,
  PhoneIcon,
  BookOpenIcon,
  UserGroupIcon,
  ClipboardDocumentCheckIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="space-y-24 animate-fadeIn">

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="pt-10 pb-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Your Safe Space for Mental Wellness
          </h1>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Anonymous, affordable, and accessible counseling designed for the TEP
            community. Connect with a counselor, join group therapy, or explore
            tools to improve your emotional wellbeing.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
            <a
              href="/consultants"
              className="px-6 py-3 sm:px-8 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition text-center"
            >
              Book a Session
            </a>

            <a
              href="/chat"
              className="px-6 py-3 sm:px-8 bg-white border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition text-center"
            >
              Try AI Support
            </a>
          </div>
        </div>
      </section>

      {/* ---------------- TRUST & ANONYMITY ---------------- */}
      <section className="bg-white py-16 border-y border-gray-200 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center">
          <ShieldCheckIcon className="w-10 h-10 sm:w-12 sm:h-12 mx-auto text-blue-600" />

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-4">
            Your Privacy Comes First
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
            Tulia is built with full anonymity and Kenya Data Protection compliance.
            Your identity is protected at all times — even your counselor only sees
            your anonymous ID.
          </p>
        </div>
      </section>

      {/* ---------------- FEATURE GRID ---------------- */}
      <section className="px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
            Everything You Need for Better Mental Health
          </h2>

          <p className="mt-3 text-base sm:text-lg text-gray-600 text-center max-w-2xl mx-auto">
            Explore Tulia’s full suite of wellness tools designed for individuals,
            workers, and MSMEs across the TEP ecosystem.
          </p>

          <div className="mt-12 grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

            {/* Anonymous Counseling */}
            <FeatureCard
              icon={<ChatBubbleLeftRightIcon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />}
              title="Anonymous Counseling"
              text="Talk to licensed counselors without revealing your identity."
            />

            {/* Video / Voice / Chat Therapy */}
            <FeatureCard
              icon={<VideoCameraIcon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />}
              title="Video, Voice & Chat Therapy"
              text="Choose the format that works for you — anytime, anywhere."
            />

            {/* Booking System */}
            <FeatureCard
              icon={<PhoneIcon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />}
              title="Smart Booking System"
              text="Browse counselors, check availability, and book in seconds."
            />

            {/* Self-Help Library */}
            <FeatureCard
              icon={<BookOpenIcon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />}
              title="Self-Help Library"
              text="Articles, exercises, breathing tools, and educational resources."
            />

            {/* Group Therapy */}
            <FeatureCard
              icon={<UserGroupIcon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />}
              title="Group Therapy"
              text="Join moderated group sessions tailored for your needs."
            />

            {/* Wellness Assessments */}
            <FeatureCard
              icon={<ClipboardDocumentCheckIcon className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />}
              title="Wellness Assessments"
              text="Take quick assessments to understand your mindset and track progress."
            />

          </div>
        </div>
      </section>

      {/* ---------------- FINAL CTA ---------------- */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
            Start Your Wellness Journey Today
          </h2>

          <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-700">
            Whether you're stressed, overwhelmed, or just need someone to talk to,
            Tulia is here for you.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/consultants"
              className="px-8 py-3 text-white bg-blue-600 rounded-xl font-semibold hover:bg-blue-700 transition text-center"
            >
              Explore Counselors
            </a>
            <a
              href="/library"
              className="px-8 py-3 text-blue-600 bg-white border border-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition text-center"
            >
              Browse Self-Help Tools
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

function FeatureCard({ icon, title, text }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 sm:p-8 hover:shadow-xl transition text-center sm:text-left">
      <div className="flex justify-center sm:justify-start">{icon}</div>
      <h3 className="mt-4 text-lg sm:text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600 text-sm sm:text-base">{text}</p>
    </div>
  );
}
