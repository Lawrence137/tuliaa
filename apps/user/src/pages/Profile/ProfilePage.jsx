import React, { useState } from 'react';
import { UserCircleIcon, EnvelopeIcon, BellIcon, KeyIcon } from '@heroicons/react/24/outline';

const user = {
  name: 'Anonymous User',
  email: 'user@example.com',
  imageUrl: `https://i.pravatar.cc/150?u=anonymous`,
};

// --- Profile Page Component ---
const ProfilePage = () => {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [notifications, setNotifications] = useState({
        newSessions: true,
        reminders: true,
        newsletter: false,
    });

    return (
        <div className="animate-fadeIn">
            {/* Header */}
            <header className="mb-10">
                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-2">My Profile</h1>
                <p className="text-lg text-gray-600">Manage your personal information and settings.</p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                
                {/* Left Column - Profile & Password */}
                <div className="lg:col-span-2 space-y-10">
                    {/* Personal Information */}
                    <section className="bg-white p-8 rounded-xl shadow-md">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                            <UserCircleIcon className="w-7 h-7 mr-3 text-blue-500" />
                            Personal Information
                        </h2>
                        <form className="space-y-6">
                            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                                <img src={user.imageUrl} alt="Avatar" className="w-24 h-24 rounded-full" />
                                <button type="button" className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50">
                                    Change Avatar
                                </button>
                            </div>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                                <p className="text-xs text-gray-500 mt-1">This name is private and will only be used by you.</p>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div className="text-right">
                                <button type="submit" className="px-6 py-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600">
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </section>

                    {/* Change Password */}
                    <section className="bg-white p-8 rounded-xl shadow-md">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                            <KeyIcon className="w-7 h-7 mr-3 text-blue-500" />
                            Change Password
                        </h2>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="current-password" className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                                <input type="password" id="current-password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div>
                                <label htmlFor="new-password" className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                                <input type="password" id="new-password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" />
                            </div>
                             <div className="text-right">
                                <button type="submit" className="px-6 py-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600">
                                    Update Password
                                </button>
                            </div>
                        </form>
                    </section>
                </div>

                {/* Right Column - Notifications */}
                <aside className="bg-white p-8 rounded-xl shadow-md h-fit">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                        <BellIcon className="w-7 h-7 mr-3 text-blue-500" />
                        Notifications
                    </h2>
                    <div className="space-y-6">
                        <NotificationToggle
                            label="New Session Booked"
                            description="Get an email when a session is confirmed."
                            enabled={notifications.newSessions}
                            onChange={() => setNotifications({...notifications, newSessions: !notifications.newSessions})}
                        />
                        <NotificationToggle
                            label="Session Reminders"
                            description="Receive reminders for upcoming sessions."
                            enabled={notifications.reminders}
                            onChange={() => setNotifications({...notifications, reminders: !notifications.reminders})}
                        />
                         <NotificationToggle
                            label="Tulia Newsletter"
                            description="Get our monthly newsletter with tips and articles."
                            enabled={notifications.newsletter}
                            onChange={() => setNotifications({...notifications, newsletter: !notifications.newsletter})}
                        />
                    </div>
                </aside>
            </div>
        </div>
    );
};

// --- Sub-Components ---
const NotificationToggle = ({ label, description, enabled, onChange }) => {
    return (
        <div className="flex justify-between items-start">
            <div className="pr-4">
                <h4 className="font-semibold text-gray-800">{label}</h4>
                <p className="text-sm text-gray-600">{description}</p>
            </div>
            <button
                type="button"
                className={`${enabled ? 'bg-blue-500' : 'bg-gray-200'} relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
                onClick={onChange}
            >
                <span className={`${enabled ? 'translate-x-5' : 'translate-x-0'} inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out`} />
            </button>
        </div>
    );
};


export default ProfilePage;
