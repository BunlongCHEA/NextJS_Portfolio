import React, { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft } from 'lucide-react';
import { Experience, LearningItem } from '@/types';

interface SwipeCardProps {
  item: Experience | LearningItem;
  isOpen: boolean;
  onClose: () => void;
  type: 'experience' | 'learning';
  onImageClick?: (index: number) => void;
  currentImageIndex?: number;
  onImageNext?: () => void;
  onImagePrev?: () => void;
}

const SwipeCard: React.FC<SwipeCardProps> = ({ item, isOpen, onClose, type, onImageClick, currentImageIndex = 0, onImageNext, onImagePrev }) => {
  if (!isOpen) return null;

  const isExperience = type === 'experience';
  const company = isExperience ? (item as Experience).company : (item as LearningItem).platform;
  const accentColor = isExperience ? 'blue' : 'green';

  const ImageWithPlaceholder: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className }) => {
    const [loaded, setLoaded] = useState(false);
    
    return (
      <div className={`relative ${className}`}>
        {/* Instant placeholder */}
        <div className={`absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center ${loaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
            <span className="text-gray-400 text-sm">Loading...</span>
          </div>
        </div>
        
        <Image
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          onLoad={() => setLoaded(true)}
          width={800}
          height={600}
          sizes="(max-width: 1600px) 100vw, 50vw"
          priority={false}
        />
      </div>
    );
  };
  
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

          {/* Images Section - ADD THIS */}
          {item.images && item.images.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-semibold text-white">Screenshots</h4>
                <span className="text-xs text-gray-400">Click image to view fullscreen</span>
              </div>
              <div className="relative">
                <div 
                  className="aspect-video bg-gray-800 rounded-lg overflow-hidden group cursor-pointer"
                  onClick={() => onImageClick?.(currentImageIndex)}
                >
                  {/* <img
                    src={item.images[currentImageIndex].url}
                    alt={item.images[currentImageIndex].alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  /> */}

                  <ImageWithPlaceholder
                    src={item.images[currentImageIndex].url}
                    alt={item.images[currentImageIndex].alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Zoom indicator */}
                  <div className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
                
                {item.images.length > 1 && (
                  <>
                    <button
                      onClick={onImagePrev}
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6 text-white" />
                    </button>
                    <button
                      onClick={onImageNext}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6 text-white rotate-180" />
                    </button>
                    
                    {/* Image indicators */}
                    <div className="flex justify-center mt-3 gap-2">
                      {item.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => onImageClick?.(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentImageIndex ? `bg-${accentColor}-400` : 'bg-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SwipeCard;