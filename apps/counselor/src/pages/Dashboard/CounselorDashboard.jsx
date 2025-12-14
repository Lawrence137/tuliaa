import React from 'react';
import CounselorLayout from '../../layouts/CounselorLayout';

// Placeholder for icons in stat cards - in a real app, you would use an icon library like react-icons
const Icon = ({ name, className }) => {
    const icons = {
        calendar: <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />,
        billing: <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />,
        video: <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />,
        notes: <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
    };
    return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">{icons[name]}</svg>;
};


const CounselorDashboard = () => {
  // Dummy data
  const user = {
    name: 'Dr. Evelyn Reed',
  };

  const stats = [
    { name: 'Upcoming Sessions', value: '4', icon: 'calendar' },
    { name: 'Total Earnings (Month)', value: '$3,450', icon: 'billing' },
    { name: 'New Messages', value: '12', icon: 'video' },
    { name: 'Pending Notes', value: '3', icon: 'notes' },
  ];

  const upcomingAppointments = [
    { id: 1, client: 'John Doe', time: '10:00 AM', type: 'Video Call' },
    { id: 2, client: 'Jane Smith', time: '11:30 AM', type: 'In-person' },
    { id: 3, client: 'Sam Wilson', time: '2:00 PM', type: 'Video Call' },
  ];
  
  const recentActivity = [
    { id: 1, description: 'Note for session with John D. was submitted.', time: '2h ago' },
    { id: 2, description: 'New appointment scheduled with Jane S.', time: '5h ago' },
    { id: 3, description: 'Received a new message from Alex R.', time: 'Yesterday' },
  ]

  return (
    <CounselorLayout 
        pageTitle={`Welcome, ${user.name}!`}
        pageSubTitle="Here's what's happening today."
    >
        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.name} className="bg-white p-6 rounded-xl shadow-md flex items-center">
              <div className="bg-indigo-100 text-indigo-600 p-3 rounded-full mr-4">
                <Icon name={stat.icon} className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-600">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Upcoming Appointments */}
            <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Upcoming Appointments</h3>
                <div className="space-y-4">
                    {upcomingAppointments.map((appt) => (
                        <div key={appt.id} className="flex justify-between items-center p-4 rounded-lg bg-gray-50 hover:bg-gray-100">
                            <div>
                                <p className="font-semibold text-gray-800">{appt.client}</p>
                                <p className="text-sm text-gray-500">{appt.type}</p>
                            </div>
                            <span className="text-gray-700 font-medium">{appt.time}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h3>
                <ul className="space-y-4">
                    {recentActivity.map((activity) => (
                        <li key={activity.id} className="flex items-start">
                           <div className="flex-shrink-0 w-3 h-3 bg-indigo-500 rounded-full mt-1.5"></div>
                           <div className="ml-3">
                                <p className="text-sm text-gray-700">{activity.description}</p>
                                <p className="text-xs text-gray-400">{activity.time}</p>
                           </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </CounselorLayout>
  );
};

export default CounselorDashboard;
