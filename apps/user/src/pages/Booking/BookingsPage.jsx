import React, { useState, useMemo } from 'react';
import { CalendarDaysIcon, ClockIcon, VideoCameraIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';

const bookings = [
  {
    id: 1,
    consultantName: 'Dr. Sarah Patel',
    specialty: 'Mental Wellness',
    date: '2025-12-23',
    time: '2:00 PM',
    status: 'Upcoming',
    imageUrl: `https://i.pravatar.cc/150?u=sarah`,
  },
  {
    id: 2,
    consultantName: 'Johnathan Lee',
    specialty: 'Financial Counseling',
    date: '2025-12-18',
    time: '11:00 AM',
    status: 'Completed',
    imageUrl: `https://i.pravatar.cc/150?u=johnathan`,
  },
  {
    id: 3,
    consultantName: 'Dr. Emily Chen',
    specialty: 'Family Issues',
    date: '2025-12-28',
    time: '4:00 PM',
    status: 'Upcoming',
    imageUrl: `https://i.pravatar.cc/150?u=emily`,
  },
  {
    id: 4,
    consultantName: 'Maria Garcia',
    specialty: 'Legal Advice',
    date: '2025-11-20',
    time: '10:00 AM',
    status: 'Canceled',
    imageUrl: `https://i.pravatar.cc/150?u=maria`,
  },
  {
    id: 5,
    consultantName: 'Dr. Sarah Patel',
    specialty: 'Mental Wellness',
    date: '2025-12-15',
    time: '3:30 PM',
    status: 'Completed',
    imageUrl: `https://i.pravatar.cc/150?u=sarah`,
  },
];

const tabs = ['Upcoming', 'Completed', 'Canceled'];

// --- Bookings Page Component ---
const BookingsPage = () => {
    const [activeTab, setActiveTab] = useState('Upcoming');

    const filteredBookings = useMemo(() => {
        return bookings.filter(booking => booking.status === activeTab).sort((a, b) => new Date(b.date) - new Date(a.date));
    }, [activeTab]);

    return (
        <div className="animate-fadeIn">
            {/* Header Section */}
            <header className="mb-10">
                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-2">My Bookings</h1>
                <p className="text-lg text-gray-600">Manage your upcoming and past sessions.</p>
            </header>

            {/* Tabs */}
            <nav className="mb-8">
                <div className="border-b border-gray-200">
                    <div className="-mb-px flex space-x-8" aria-label="Tabs">
                        {tabs.map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`${
                                    activeTab === tab
                                        ? 'border-blue-500 text-blue-600'
                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Bookings List */}
            <main>
                {filteredBookings.length > 0 ? (
                    <div className="space-y-6">
                        {filteredBookings.map(booking => (
                            <BookingCard key={booking.id} booking={booking} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16 bg-white rounded-xl shadow-sm">
                        <p className="text-xl text-gray-500">You have no {activeTab.toLowerCase()} bookings.</p>
                    </div>
                )}
            </main>
        </div>
    );
};

// --- Sub-Components ---
const BookingCard = ({ booking }) => {
    const statusStyles = {
        Upcoming: { icon: <VideoCameraIcon className="h-5 w-5 text-blue-500" />, textColor: 'text-blue-600' },
        Completed: { icon: <CheckCircleIcon className="h-5 w-5 text-green-500" />, textColor: 'text-green-600' },
        Canceled: { icon: <XCircleIcon className="h-5 w-5 text-red-500" />, textColor: 'text-red-600' },
    };
    
    const { icon, textColor } = statusStyles[booking.status];

    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden transition-shadow hover:shadow-lg">
            <div className="flex flex-col md:flex-row">
                {/* Image and Name */}
                <div className="md:w-1/4 bg-gray-50 p-4 flex flex-col items-center justify-center text-center">
                    <img src={booking.imageUrl} alt={booking.consultantName} className="w-20 h-20 rounded-full mb-2 object-cover" />
                    <h3 className="text-lg font-bold text-gray-800">{booking.consultantName}</h3>
                    <p className="text-sm text-gray-600">{booking.specialty}</p>
                </div>
                {/* Booking Details */}
                <div className="p-6 flex-grow">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <p className={`flex items-center font-bold ${textColor}`}>
                                {icon}
                                <span className="ml-2">{booking.status}</span>
                            </p>
                        </div>
                        <div className="flex items-center text-gray-600 text-sm">
                            <CalendarDaysIcon className="h-4 w-4 mr-1.5" />
                            <span>{new Date(booking.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        </div>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm mb-6">
                        <ClockIcon className="h-4 w-4 mr-1.5" />
                        <span>{booking.time}</span>
                    </div>
                </div>
                {/* Actions */}
                <div className="p-6 md:border-l border-t md:border-t-0 border-gray-200 flex flex-col justify-center items-center space-y-3">
                    {booking.status === 'Upcoming' && (
                        <>
                            <button className="w-full text-center py-2 px-4 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors">
                                Join Session
                            </button>
                            <button className="w-full text-center py-2 px-4 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition-colors">
                                Cancel Session
                            </button>
                            <button className="w-full text-center py-2 px-4 rounded-lg bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition-colors">
                                Reschedule
                            </button>
                        </>
                    )}
                    {booking.status === 'Completed' && (
                        <button className="w-full text-center py-2 px-4 rounded-lg bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition-colors">
                            View Summary
                        </button>
                    )}
                     {booking.status === 'Canceled' && (
                        <button className="w-full text-center py-2 px-4 rounded-lg bg-gray-200 text-gray-700 font-semibold hover:bg-gray-300 transition-colors">
                            Book Again
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookingsPage;
