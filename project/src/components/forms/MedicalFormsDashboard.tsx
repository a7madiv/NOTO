import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Heart, Eye, Baby, Bone, Bluetooth as Tooth, Brain, Activity, Clock, Calendar, Search, SortAsc, Filter, ChevronRight } from 'lucide-react';
import { fadeIn, staggerContainer } from '../../utils/animations';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';

interface FormTemplate {
  id: string;
  specialty: string;
  icon: React.ElementType;
  description: string;
  keyFields: string[];
  estimatedTime: string;
  lastUpdated: string;
  usageCount: number;
}

const formTemplates: FormTemplate[] = [
  {
    id: 'general-practice',
    specialty: 'General Practice',
    icon: Stethoscope,
    description: 'Comprehensive patient examination form covering vital signs, symptoms, and general health assessment. Suitable for routine check-ups and initial consultations.',
    keyFields: ['Patient History', 'Vital Signs', 'Current Medications', 'Symptoms'],
    estimatedTime: '10-15 min',
    lastUpdated: '2024-03-15',
    usageCount: 1250
  },
  {
    id: 'cardiology',
    specialty: 'Cardiology',
    icon: Heart,
    description: 'Specialized cardiac assessment form including ECG readings, heart rhythm analysis, and cardiovascular risk factors evaluation.',
    keyFields: ['Cardiac History', 'ECG Results', 'Blood Pressure Log', 'Chest Pain Assessment'],
    estimatedTime: '20-25 min',
    lastUpdated: '2024-03-12',
    usageCount: 850
  },
  {
    id: 'ophthalmology',
    specialty: 'Ophthalmology',
    icon: Eye,
    description: 'Comprehensive eye examination form covering visual acuity, eye pressure, and retinal health assessment.',
    keyFields: ['Visual Acuity', 'Tonometry', 'Retinal Scan', 'Eye History'],
    estimatedTime: '30-35 min',
    lastUpdated: '2024-03-10',
    usageCount: 720
  },
  {
    id: 'pediatrics',
    specialty: 'Pediatrics',
    icon: Baby,
    description: 'Child-specific health assessment form including growth charts, developmental milestones, and vaccination records.',
    keyFields: ['Growth Data', 'Development Check', 'Vaccination Status', 'Family History'],
    estimatedTime: '15-20 min',
    lastUpdated: '2024-03-14',
    usageCount: 980
  },
  {
    id: 'orthopedics',
    specialty: 'Orthopedics',
    icon: Bone,
    description: 'Musculoskeletal examination form for joint assessment, mobility testing, and pain evaluation.',
    keyFields: ['Joint Assessment', 'Range of Motion', 'Pain Scale', 'Imaging Results'],
    estimatedTime: '25-30 min',
    lastUpdated: '2024-03-11',
    usageCount: 650
  },
  {
    id: 'dentistry',
    specialty: 'Dentistry',
    icon: Tooth,
    description: 'Dental examination form covering oral health assessment, treatment planning, and procedure documentation.',
    keyFields: ['Dental Chart', 'Treatment Plan', 'X-Ray Results', 'Periodontal Status'],
    estimatedTime: '20-25 min',
    lastUpdated: '2024-03-13',
    usageCount: 890
  },
  {
    id: 'mental-health',
    specialty: 'Mental Health',
    icon: Brain,
    description: 'Psychological assessment form including mental status examination, mood evaluation, and therapy progress tracking.',
    keyFields: ['Mental Status', 'Mood Assessment', 'Risk Evaluation', 'Treatment Goals'],
    estimatedTime: '45-50 min',
    lastUpdated: '2024-03-09',
    usageCount: 560
  },
  {
    id: 'physical-therapy',
    specialty: 'Physical Therapy',
    icon: Activity,
    description: 'Rehabilitation assessment form tracking movement patterns, exercise progress, and recovery milestones.',
    keyFields: ['Movement Assessment', 'Exercise Plan', 'Progress Notes', 'Pain Mapping'],
    estimatedTime: '30-35 min',
    lastUpdated: '2024-03-08',
    usageCount: 730
  }
];

type SortOption = 'alphabetical' | 'most-used' | 'recently-updated';

export default function MedicalFormsDashboard() {
  const [ref, controls] = useScrollAnimation();
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState<SortOption>('alphabetical');

  const sortedAndFilteredTemplates = useMemo(() => {
    let filtered = formTemplates.filter(template =>
      template.specialty.toLowerCase().includes(searchQuery.toLowerCase())
    );

    switch (sortOption) {
      case 'alphabetical':
        return filtered.sort((a, b) => a.specialty.localeCompare(b.specialty));
      case 'most-used':
        return filtered.sort((a, b) => b.usageCount - a.usageCount);
      case 'recently-updated':
        return filtered.sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime());
      default:
        return filtered;
    }
  }, [searchQuery, sortOption]);

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={controls}
      className="min-h-screen bg-gray-900 py-24 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center text-gray-400 mb-8" aria-label="Breadcrumb">
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <ChevronRight className="mx-2 h-4 w-4" />
          <span className="text-white">Medical Forms</span>
        </nav>

        {/* Header and Controls */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-8">Medical Form Templates</h2>
          
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search by specialty..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 rounded-lg text-white 
                         placeholder-gray-400 focus:outline-none focus:ring-2 
                         focus:ring-emerald-500 transition-all"
                aria-label="Search medical forms"
              />
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-2 bg-gray-800 rounded-lg p-2">
              <SortAsc className="text-gray-400 h-5 w-5" />
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value as SortOption)}
                className="bg-transparent text-white focus:outline-none cursor-pointer"
                aria-label="Sort medical forms"
              >
                <option value="alphabetical">Alphabetical</option>
                <option value="most-used">Most Used</option>
                <option value="recently-updated">Recently Updated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Form Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedAndFilteredTemplates.map((template) => (
            <motion.div
              key={template.id}
              variants={fadeIn}
              whileHover={{ y: -8 }}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 
                       hover:border-emerald-500/50 transition-all duration-300
                       focus-within:ring-2 focus-within:ring-emerald-500"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-emerald-500/10 rounded-lg">
                  <template.icon className="h-6 w-6 text-emerald-500" />
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Clock className="h-4 w-4" />
                  <span>{template.estimatedTime}</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">
                {template.specialty}
              </h3>

              <p className="text-gray-400 text-sm mb-4">
                {template.description}
              </p>

              <div className="mb-4">
                <h4 className="text-sm font-medium text-white mb-2">Key Components:</h4>
                <ul className="space-y-1">
                  {template.keyFields.map((field, index) => (
                    <li key={index} className="text-sm text-gray-400 flex items-center gap-2">
                      <div className="w-1 h-1 bg-emerald-500 rounded-full" />
                      {field}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>Updated {new Date(template.lastUpdated).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Filter className="h-4 w-4" />
                  <span>{template.usageCount} uses</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 
                         text-white rounded-lg font-medium transition-colors
                         focus:outline-none focus:ring-2 focus:ring-emerald-500 
                         focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Access Form
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}