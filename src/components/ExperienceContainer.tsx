import React, { useState } from 'react';
import { Briefcase, BookOpen, MoreHorizontal } from 'lucide-react';
import ExperienceList from './ExperienceList';
import LearningJourney from './LearningJourney';

type ViewType = 'experience' | 'learning';

const ExperienceContainer: React.FC = () => {
  const [activeView, setActiveView] = useState<ViewType>('experience');

  return (
    <div className="w-full">
      {/* Switch Button */}
      <div className="mb-6 flex justify-center">
        <div className="bg-gray-800 rounded-lg p-1 flex gap-1 border border-gray-700">
          <button
            onClick={() => setActiveView('experience')}
            className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-all duration-200 ${
              activeView === 'experience'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            Experience
          </button>
          <button
            onClick={() => setActiveView('learning')}
            className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-all duration-200 ${
              activeView === 'learning'
                ? 'bg-green-600 text-white shadow-lg'
                : 'text-gray-400 hover:text-white hover:bg-gray-700'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            Learning
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="transition-all duration-300 ease-in-out">
        {activeView === 'experience' ? <ExperienceList /> : <LearningJourney />}
      </div>
    </div>
  );
};

export default ExperienceContainer;