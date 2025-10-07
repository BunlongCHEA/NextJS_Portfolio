import React, { useState } from 'react';
import { Experience } from '@/types';
import { Briefcase, Calendar, Code, Book } from 'lucide-react';
import SwipeCard from './SwipeCard';

const ExperienceList: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [isCardOpen, setIsCardOpen] = useState(false);
  
  const experiences: Experience[] = [
    {
      id: 1,
      title: "Data Engineer",
      company: "Smart Axiata",
      period: "Mar 2023 - Present",
      description: "Led data pipeline development and optimization for large-scale analytics platforms. Implemented real-time data processing systems handling 10M+ events daily.",
      detailedPoints: [
        "Architected and implemented data lakes processing 10M+ daily events with 99.9% uptime",
        "Reduced data processing costs by 40% through pipeline optimization and resource management",
        "Led team of 5 engineers in migrating legacy systems to cloud-native architecture",
        "Implemented real-time fraud detection system processing 50K transactions/minute",
        "Established data governance framework ensuring GDPR compliance across all pipelines"
      ],
      technologies: ["Python", "SQL", "NoSQL", "Streaming(Kafka, RabbiMQ)", "Apache Spark", "ETL", "Big Data", "Hadoop", "Cloud", "Docker", "Kubernetes"] 
    },
    {
      id: 2,
      title: "Data Analyst",
      company: "Piik App",
      period: "Apr 2020 - Mar 2023",
      description: "Designed and maintained CI/CD pipelines, managed containerized applications, and implemented infrastructure as code practices.",
      detailedPoints: [
        "Built automated CI/CD pipelines reducing deployment time from 4 hours to 15 minutes",
        "Managed Kubernetes clusters serving 200+ microservices with 99.95% availability",
        "Implemented infrastructure as code reducing provisioning errors by 80%",
        "Established monitoring and alerting systems improving incident response time by 60%",
        "Mentored junior developers on DevOps best practices and cloud technologies"
      ],
      technologies: ["Python", "SQL", "ETL", "BI", "Docker"]
    },
    {
      id: 3,
      title: "Trainee Data Analyst",
      company: "DataU",
      period: "Nov 2021 - Mar 2022",
      description: "Developed scalable web applications using modern frameworks. Built RESTful APIs and implemented microservices architecture.",
      detailedPoints: [
        "Developed e-commerce platform handling 100K+ daily active users",
        "Built RESTful APIs serving 1M+ requests daily with sub-200ms response times",
        "Implemented microservices architecture improving system scalability by 300%",
        "Led frontend team in migrating from monolithic to component-based architecture",
        "Optimized database queries reducing page load times by 50%"
      ],
      technologies: ["Python", "SQL", "ETL", "BI"]
    }
  ];

  const handleMoreClick = (experience: Experience) => {
    setSelectedExperience(experience);
    setIsCardOpen(true);
  };

  const handleCloseCard = () => {
    setIsCardOpen(false);
    setTimeout(() => setSelectedExperience(null), 300);
  };

  return (
    <>
      <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden h-[700px] flex flex-col">
        {/* Header - Fixed */}
        <div className="bg-gray-800 px-6 py-4 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-blue-400" />
            <h2 className="text-2xl font-bold text-white">Professional Experience</h2>
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {experiences.map((exp) => (
            <div key={exp.id} className="border-l-4 border-blue-500 pl-6 pb-6 relative group">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
              
              <div className="mb-3 flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                  <p className="text-lg text-blue-400 font-medium">{exp.company}</p>
                  <div className="flex items-center gap-2 text-gray-400 mt-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
                
                <button
                  onClick={() => handleMoreClick(exp)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-full"
                  title="View details"
                >
                  <Book className="w-5 h-5" />
                </button>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">
                {exp.description}
              </p>

              <div className="flex items-start gap-2">
                <Code className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-900 text-blue-300 text-sm rounded-full font-medium border border-blue-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Swipe Card */}
      {selectedExperience && (
        <SwipeCard
          item={selectedExperience}
          isOpen={isCardOpen}
          onClose={handleCloseCard}
          type="experience"
        />
      )}
    </>
  );
};

export default ExperienceList;