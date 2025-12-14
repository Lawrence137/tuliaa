import React, { useState } from 'react';
import CounselorLayout from '../../layouts/CounselorLayout';

const CalendarPage = () => {
    const [currentWeekStart, setCurrentWeekStart] = useState(new Date());

    const getWeekRange = (date) => {
        const startOfWeek = new Date(date);
        startOfWeek.setDate(date.getDate() - date.getDay()); // Sunday
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6); // Saturday
        return { start: startOfWeek, end: endOfWeek };
    };

    const getDaysInWeek = (startOfWeek) => {
        const days = [];
        for (let i = 0; i < 7; i++) {
            const day = new Date(startOfWeek);
            day.setDate(startOfWeek.getDate() + i);
            days.push(day);
        }
        return days;
    };

    const goToPreviousWeek = () => {
        const newDate = new Date(currentWeekStart);
        newDate.setDate(currentWeekStart.getDate() - 7);
        setCurrentWeekStart(newDate);
    };

    const goToNextWeek = () => {
        const newDate = new Date(currentWeekStart);
        newDate.setDate(currentWeekStart.getDate() + 7);
        setCurrentWeekStart(newDate);
    };

    const goToToday = () => {
        setCurrentWeekStart(new Date());
    };

    const { start, end } = getWeekRange(currentWeekStart);
    const daysInWeek = getDaysInWeek(start);

    // Dummy events for the calendar
    const dummyEvents = [
        { id: 1, title: 'Client Session with John Doe', date: new Date(start.getFullYear(), start.getMonth(), start.getDate() + 1, 10, 0), duration: 60, client: 'John Doe', type: 'Video Call' },
        { id: 2, title: 'Team Meeting', date: new Date(start.getFullYear(), start.getMonth(), start.getDate() + 2, 14, 30), duration: 30, client: 'Internal', type: 'Meeting' },
        { id: 3, title: 'Therapy Session Jane Smith', date: new Date(start.getFullYear(), start.getMonth(), start.getDate() + 4, 9, 0), duration: 90, client: 'Jane Smith', type: 'In-Person' },
        { id: 4, title: 'Follow-up with Alex', date: new Date(start.getFullYear(), start.getMonth(), start.getDate() + 1, 11, 30), duration: 45, client: 'Alex R.', type: 'Phone Call' },
    ];

    const getEventsForDay = (day) => {
        return dummyEvents.filter(event => 
            event.date.getDate() === day.getDate() &&
            event.date.getMonth() === day.getMonth() &&
            event.date.getFullYear() === day.getFullYear()
        ).sort((a, b) => a.date - b.date);
    };


    return (
        <CounselorLayout pageTitle="Calendar" pageSubTitle="Manage your appointments and availability.">
            <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                {/* Calendar Header */}
                <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                    <div className="flex items-center space-x-2 mb-4 sm:mb-0">
                        <button onClick={goToPreviousWeek} className="p-2 rounded-full hover:bg-gray-200 text-gray-600">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                        </button>
                        <h3 className="text-xl font-semibold text-gray-800">
                            {start.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - {end.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </h3>
                        <button onClick={goToNextWeek} className="p-2 rounded-full hover:bg-gray-200 text-gray-600">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                        </button>
                    </div>
                    <button onClick={goToToday} className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                        Today
                    </button>
                </div>

                {/* Weekly View for Large Screens */}
                <div className="hidden lg:grid grid-cols-7 gap-px border border-gray-200 rounded-lg overflow-hidden">
                    {/* Days of the Week Header */}
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((dayName, index) => (
                        <div key={dayName} className="p-3 text-center text-sm font-medium text-gray-600 bg-gray-50 border-b border-gray-200">
                            {dayName} {daysInWeek[index].toLocaleDateString('en-US', { day: 'numeric' })}
                        </div>
                    ))}

                    {/* Time Slots (Example: 8 AM to 5 PM) */}
                    {Array.from({ length: 10 }).map((_, hourIndex) => (
                        <React.Fragment key={hourIndex}>
                            {daysInWeek.map((day, dayIndex) => {
                                const hour = 8 + hourIndex; // Starting from 8 AM
                                const currentHourEvents = getEventsForDay(day).filter(event => event.date.getHours() === hour);
                                return (
                                    <div key={dayIndex} className="relative h-20 border-r border-b border-gray-200 p-1 text-xs">
                                        {dayIndex === 0 && <span className="absolute -left-12 top-0 transform -translate-y-1/2 text-gray-500">{hour % 12 === 0 ? 12 : hour % 12}{hour >= 12 ? ' PM' : ' AM'}</span>}
                                        {currentHourEvents.map(event => (
                                            <div key={event.id} className="absolute inset-x-1 top-0 bg-blue-500 text-white text-xs rounded-md p-1 truncate cursor-pointer"
                                                style={{ 
                                                    height: `${(event.duration / 60) * 100}%`, // Example: 60min event takes full height
                                                    top: `${(event.date.getMinutes() / 60) * 100}%`
                                                }}
                                                title={`${event.title} (${event.client}) - ${event.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`}
                                            >
                                                {event.title}
                                            </div>
                                        ))}
                                    </div>
                                );
                            })}
                        </React.Fragment>
                    ))}
                </div>

                {/* Daily/List View for Small Screens */}
                <div className="lg:hidden mt-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Appointments this week</h4>
                    {daysInWeek.map(day => {
                        const events = getEventsForDay(day);
                        return (
                            <div key={day.toISOString()} className="mb-6">
                                <h5 className="text-md font-medium text-gray-700 mb-2">
                                    {day.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                                </h5>
                                {events.length > 0 ? (
                                    <div className="space-y-2">
                                        {events.map(event => (
                                            <div key={event.id} className="bg-indigo-50 p-3 rounded-lg text-sm flex justify-between items-center shadow-sm">
                                                <div>
                                                    <p className="font-semibold text-indigo-800">{event.title}</p>
                                                    <p className="text-indigo-600">{event.client} - {event.type}</p>
                                                </div>
                                                <span className="text-indigo-700 font-medium">{event.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-gray-500 text-sm">No appointments.</p>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </CounselorLayout>
    );
};

export default CalendarPage;
