import React from 'react';
import { X, ChevronLeft } from 'lucide-react';
import { Experience, LearningItem } from '@/types';

interface SwipeCardProps {
  item: Experience | LearningItem;
  isOpen: boolean;
  onClose: () => void;
  type: 'experience' | 'learning';
}

const SwipeCard: React.FC<SwipeCardProps> = ({ item, isOpen, onClose, type }) => {
  if (!isOpen) return null;

  const isExperience = type === 'experience';
  const company = isExperience ? (item as Experience).company : (item as LearningItem).platform;
  const accentColor = isExperience ? 'blue' : 'green';
  
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div 
        className={`bg-gray-900 rounded-lg shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden transform transition-all duration-300 ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        {/* Header */}
        <div className={`bg-gray-800 px-6 py-4 border-b border-gray-700 flex items-center justify-between`}>
          <div className="flex items-center gap-3">
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <h3 className="text-xl font-bold text-white">{item.title}</h3>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(80vh-120px)]">
          <div className="mb-4">
            <p className={`text-lg text-${accentColor}-400 font-medium mb-2`}>{company}</p>
            <p className="text-gray-400 text-sm">{item.period}</p>
          </div>

          <div className="mb-6">
            <h4 className="text-lg font-semibold text-white mb-3">Overview</h4>
            <p className="text-gray-300 leading-relaxed">{item.description}</p>
          </div>

          {item.detailedPoints && item.detailedPoints.length > 0 && (
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-3">
                {isExperience ? 'Key Achievements' : 'Learning Objectives'}
              </h4>
              <ul className="space-y-3">
                {item.detailedPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className={`w-2 h-2 bg-${accentColor}-500 rounded-full mt-2 flex-shrink-0`}></div>
                    <span className="text-gray-300 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {item.technologies.map((tech, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 bg-${accentColor}-900 text-${accentColor}-300 text-sm rounded-full font-medium border border-${accentColor}-700`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwipeCard;