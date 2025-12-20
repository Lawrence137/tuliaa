import React, { useState, useMemo } from 'react';
import { StarIcon, MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/solid';

const consultants = [
  {
    name: 'Dr. Sarah Patel',
    specialty: 'Mental Wellness',
    description: 'Licensed therapist with 10+ years of experience in cognitive behavioral therapy (CBT) and mindfulness.',
    imageUrl: `https://i.pravatar.cc/150?u=sarah`,
    rating: 4.9,
  },
  {
    name: 'Johnathan Lee',
    specialty: 'Financial Counseling',
    description: 'Certified financial planner helping individuals and families navigate debt, investments, and budgeting.',
    imageUrl: `https://i.pravatar.cc/150?u=johnathan`,
    rating: 4.8,
  },
  {
    name: 'Maria Garcia',
    specialty: 'Legal Advice',
    description: 'Experienced attorney providing guidance on family law, housing, and personal legal matters.',
    imageUrl: `https://i.pravatar.cc/150?u=maria`,
    rating: 4.9,
  },
  {
    name: 'Dr. Emily Chen',
    specialty: 'Family Issues',
    description: 'Specializes in family dynamics, couples counseling, and child development issues.',
    imageUrl: `https://i.pravatar.cc/150?u=emily`,
    rating: 5.0,
  },
  {
    name: 'David Kim',
    specialty: 'Career Coaching',
    description: 'Professional career coach focused on career transitions, resume building, and interview skills.',
    imageUrl: `https://i.pravatar.cc/150?u=david`,
    rating: 4.7,
  },
  {
    name: 'Dr. Michael Brown',
    specialty: 'Mental Wellness',
    description: 'Psychiatrist specializing in mood disorders and anxiety. Offers medication management and therapy.',
    imageUrl: `https://i.pravatar.cc/150?u=michael`,
    rating: 4.9,
  },
  {
    name: 'Laura Williams',
    specialty: 'Financial Counseling',
    description: 'Helps clients with retirement planning, wealth management, and achieving financial independence.',
    imageUrl: `https://i.pravatar.cc/150?u=laura`,
    rating: 4.8,
  },
  {
    name: 'Robert Davis',
    specialty: 'Legal Advice',
    description: 'Focuses on small business law, contracts, and intellectual property for entrepreneurs.',
    imageUrl: `https://i.pravatar.cc/150?u=robert`,
    rating: 4.7,
  },
];

const specialties = ['All', ...new Set(consultants.map(c => c.specialty))];

// --- Consultants Page Component ---
const ConsultantsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredConsultants = useMemo(() => {
        return consultants.filter(consultant => {
            const matchesFilter = activeFilter === 'All' || consultant.specialty === activeFilter;
            const matchesSearch = consultant.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                                  consultant.description.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesFilter && matchesSearch;
        });
    }, [searchTerm, activeFilter]);

    return (
        <div className="animate-fadeIn">
            {/* Header Section */}
            <header className="text-center mb-10">
                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-2">Find Your Consultant</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">Browse our network of certified professionals ready to help you.</p>
            </header>

            {/* Filters and Search */}
            <div className="mb-8 p-4 bg-white rounded-xl shadow-md sticky top-24 z-10">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative flex-grow">
                        <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search by name or keyword..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="relative md:w-56">
                        <FunnelIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <select 
                            value={activeFilter}
                            onChange={(e) => setActiveFilter(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-blue-500"
                        >
                            {specialties.map(specialty => (
                                <option key={specialty} value={specialty}>{specialty}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            {/* Consultants Grid */}
            <main>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredConsultants.map((consultant, index) => (
                        <ConsultantCard key={index} consultant={consultant} />
                    ))}
                </div>
                {filteredConsultants.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-xl text-gray-600">No consultants found matching your criteria.</p>
                    </div>
                )}
            </main>
        </div>
    );
};

// --- Sub-Components ---
const ConsultantCard = ({ consultant }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out group">
            <div className="h-40 bg-gray-200">
              <img src={consultant.imageUrl} alt={consultant.name} className="w-full h-full object-cover"/>
            </div>
            <div className="p-6">
                <p className="text-sm font-semibold text-blue-600 mb-1">{consultant.specialty}</p>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{consultant.name}</h3>
                <div className="flex items-center mb-3">
                    <StarIcon className="h-5 w-5 text-yellow-400 mr-1" />
                    <span className="font-bold text-gray-700">{consultant.rating.toFixed(1)}</span>
                </div>
                <p className="text-gray-600 text-sm mb-6 line-clamp-3 h-16">{consultant.description}</p>
                <button className="w-full py-2 px-4 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-colors group-hover:bg-blue-600">
                    Book Session
                </button>
            </div>
        </div>
    );
};

export default ConsultantsPage;
