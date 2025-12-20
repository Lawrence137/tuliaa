import React from 'react';
import { ShieldCheckIcon, ChatBubbleLeftRightIcon, AcademicCapIcon, UserGroupIcon, ArrowTrendingUpIcon } from '@heroicons/react/24/outline';

// --- Main Dashboard Page Component ---
const DashboardPage = () => {
  // Mock data - in a real app, this would come from state or props
  const hasUpcomingSession = true;

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-full">
      <div className="max-w-4xl mx-auto">
        
        {/* 1. Welcome section */}
        <section className="mb-8 p-4 bg-white rounded-xl shadow-sm flex items-center">
          <ShieldCheckIcon className="h-8 w-8 text-green-500 mr-4 flex-shrink-0" />
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Welcome, Friend</h1>
            <p className="text-sm sm:text-base text-gray-600">You are anonymous and your privacy is protected.</p>
          </div>
        </section>

        {/* 2. Primary Action Cards */}
        <section className="mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ActionCard
              icon={<UserGroupIcon />}
              title="Talk to a Counselor"
              description="Connect with a licensed professional for confidential support."
              href="/booking"
            />
            <ActionCard
              icon={<ChatBubbleLeftRightIcon />}
              title="AI Wellness Assistant"
              description="Chat with our AI for immediate, guided self-reflection."
              href="/chat"
            />
            <ActionCard
              icon={<AcademicCapIcon />}
              title="Self-Help Tools"
              description="Explore curated resources and exercises at your own pace."
              href="/library"
            />
          </div>
        </section>

        {/* 3. Sessions Section */}
        <section className="mb-10">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Your Sessions</h2>
            {hasUpcomingSession ? (
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-blue-50 p-4 rounded-lg">
                <div>
                  <p className="font-semibold text-blue-800">Upcoming Video Session</p>
                  <p className="text-blue-700">Tuesday, Dec 23, 2025 at 2:00 PM</p>
                </div>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mt-4 sm:mt-0">
                  <button className="w-full sm:w-auto py-2 px-4 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors">
                    Join Now
                  </button>
                  <button className="w-full sm:w-auto py-2 px-4 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition-colors">
                    Cancel Session
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center p-4 border-2 border-dashed border-gray-200 rounded-lg">
                <p className="text-gray-600 mb-2">You have no upcoming sessions scheduled.</p>
                <a href="/booking" className="font-semibold text-blue-600 hover:underline">
                  Find a Counselor
                </a>
              </div>
            )}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
                {/* 4. AI Assistant Entry */}
                <section className="mb-10">
                    <div className="bg-white rounded-xl shadow-sm p-6 text-center">
                        <h2 className="text-xl font-bold text-gray-800 mb-2">Need to talk now?</h2>
                        <p className="text-gray-600 mb-4">Our AI Wellness Assistant is available 24/7 to help you process your thoughts.</p>
                        <button className="py-2 px-5 rounded-lg bg-teal-500 text-white font-semibold hover:bg-teal-600 transition-colors">
                            Start Chat
                        </button>
                    </div>
                </section>
                
                {/* 5. Self-Help Preview */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Featured Self-Help Resources</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <ResourceCard title="Managing Stress" />
                        <ResourceCard title="Improving Sleep" />
                        <ResourceCard title="Understanding Anxiety" />
                    </div>
                </section>
            </div>
            
            {/* 6. Wellness Snapshot */}
            <aside className="bg-white rounded-xl shadow-sm p-6 h-fit">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Wellness Snapshot</h2>
                <div className="space-y-4">
                    <div className="flex items-center">
                        <div className="bg-green-100 text-green-800 p-2 rounded-full mr-3">
                            <ArrowTrendingUpIcon className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="font-semibold text-gray-700">Mood Trend</p>
                            <p className="text-sm text-gray-500">Generally improving this week</p>
                        </div>
                    </div>
                    <div className="text-sm text-gray-600 border-t border-gray-200 pt-4">
                        <p>Last check-in: Yesterday</p>
                        <a href="/check-in" className="font-semibold text-blue-600 hover:underline mt-2 inline-block">Start a new check-in</a>
                    </div>
                </div>
            </aside>
        </div>

        {/* 7. Support & Safety Section */}
        <footer className="mt-8 text-center text-sm text-gray-500 border-t border-gray-200 pt-6">
            <p className="mb-2">
                If you are in a crisis or any other person may be in danger, don't use this site. 
                These resources can provide you with immediate help.
            </p>
            <a href="/emergency-resources" className="font-semibold text-red-600 hover:underline">
                Get Emergency Help
            </a>
        </footer>
      </div>
    </div>
  );
};

// --- Sub-Components for the Dashboard ---
const ActionCard = ({ icon, title, description, href }) => (
  <a href={href} className="block bg-white p-6 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 group">
    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 mb-4 group-hover:bg-blue-200 transition-colors">
      {React.cloneElement(icon, { className: "h-7 w-7" })}
    </div>
    <h3 className="text-lg font-bold text-gray-800 mb-1">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </a>
);

const ResourceCard = ({ title }) => (
    <a href="#" className="block p-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
      <p className="font-semibold text-gray-700">{title}</p>
    </a>
);


export default DashboardPage;
