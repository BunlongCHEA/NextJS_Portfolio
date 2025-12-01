import React, { useState } from 'react';
import { 
  SiJavascript, 
  SiTypescript, 
  SiTailwindcss,
  SiBootstrap,

  SiPython,
  SiNodedotjs,
  SiAngular, 
  SiSpringboot,
  SiDotnet,
  SiLaravel,

  SiVuedotjs,
  SiReact, 
  SiNextdotjs,
  SiAndroid,
  
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiPostgresql,

  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiGooglecloud,
  SiDigitalocean,
  SiAnsible,
  SiRancher,
  SiArgo
} from 'react-icons/si';
import { 
  DiMsqlServer
} from 'react-icons/di';
import { 
  FaJava,
  FaPhp
} from 'react-icons/fa6';
import { 
  TbBrandCSharp
} from 'react-icons/tb';

interface LanguageItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const languages: LanguageItem[] = [
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-sky-400' },
  { name: 'Bootstrap', icon: SiBootstrap, color: 'text-purple-600' },
  { name: 'Java', icon: FaJava, color: 'text-orange-400' },
  { name: 'C#', icon: TbBrandCSharp, color: 'text-purple-400' },
  { name: 'PHP', icon: FaPhp, color: 'text-purple-500' },

  { name: 'Python', icon: SiPython, color: 'text-blue-400' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
  { name: 'Angular', icon: SiAngular, color: 'text-red-500' },
  { name: 'Spring Boot', icon: SiSpringboot, color: 'text-green-500' },
  { name: '.NET', icon: SiDotnet, color: 'text-purple-500' },
  { name: 'Laravel', icon: SiLaravel, color: 'text-red-600' },

  { name: 'Vue.js', icon: SiVuedotjs, color: 'text-green-400' },
  { name: 'React', icon: SiReact, color: 'text-cyan-400' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-white' },
  { name: 'Android', icon: SiAndroid, color: 'text-green-400' },

  { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-400' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
  { name: 'MySQL', icon: SiMysql, color: 'text-blue-500' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-400' },
  { name: 'SQL Server', icon: DiMsqlServer, color: 'text-red-500' },

  { name: 'Ansible', icon: SiAnsible, color: 'text-red-400' },
  { name: 'Rancher', icon: SiRancher, color: 'text-blue-400' },
  { name: 'ArgoCD', icon: SiArgo, color: 'text-orange-400' },
  { name: 'Docker', icon: SiDocker, color: 'text-blue-400' },
  { name: 'Kubernetes', icon: SiKubernetes, color: 'text-blue-500' },
  { name: 'Jenkins', icon: SiJenkins, color: 'text-red-600' },
//   { name: 'AWS', icon: SiAmazonaws, color: 'text-orange-400' },
  { name: 'GCP', icon: SiGooglecloud, color: 'text-blue-400' },
  { name: 'DigitalOcean', icon: SiDigitalocean, color: 'text-blue-600' },
];

interface LanguageSwiperProps {
  onLanguageSelect: (language: string | null) => void;
  selectedLanguage: string | null;
}

const LanguageSwiper: React.FC<LanguageSwiperProps> = ({ onLanguageSelect, selectedLanguage }) => {
  const handleLanguageClick = (language: string) => {
    if (selectedLanguage === language) {
      onLanguageSelect(null); // Deselect if already selected
    } else {
      onLanguageSelect(language);
    }
  };

  // Duplicate the array to create seamless loop
  const duplicatedLanguages = [...languages, ...languages, ...languages];

  return (
    <div className="bg-gray-900/50 rounded-lg overflow-hidden border border-gray-700/50 backdrop-blur-sm">
      <div className="bg-gray-800/90 px-4 py-3 border-b border-gray-700/50">
        <h3 className="text-lg font-semibold text-white">Filter by Technology</h3>
        <p className="text-sm text-gray-400">Click any technology to filter projects</p>
      </div>
      
      <div className="relative overflow-hidden py-4">
        <div className="flex animate-slide-continuous gap-6 px-4">
          {duplicatedLanguages.map((lang, index) => {
            const IconComponent = lang.icon;
            const isSelected = selectedLanguage === lang.name;
            
            return (
              <button
                key={`${lang.name}-${index}`}
                onClick={() => handleLanguageClick(lang.name)}
                className={`flex flex-col items-center gap-2 p-3 rounded-lg transition-all duration-200 hover:scale-110 flex-shrink-0 min-w-[80px] ${
                  isSelected 
                    ? 'bg-blue-600/30 border-2 border-blue-400 shadow-lg shadow-blue-500/25' 
                    : 'bg-gray-800/50 hover:bg-gray-700/50 border-2 border-transparent'
                }`}
              >
                <IconComponent className={`w-8 h-8 ${lang.color}`} />
                <span className="text-xs text-white font-medium text-center">
                  {lang.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
      
      {selectedLanguage && (
        <div className="bg-gray-800/90 px-4 py-2 border-t border-gray-700/50">
          <span className="text-sm text-blue-400">
            Filtered by: <span className="font-semibold">{selectedLanguage}</span>
          </span>
        </div>
      )}
    </div>
  );
};

export default LanguageSwiper;