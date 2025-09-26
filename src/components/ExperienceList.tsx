import React from 'react';
import { Experience } from '@/types';
import { Briefcase, Calendar, Code } from 'lucide-react';

const ExperienceList: React.FC = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      title: "Senior Data Engineer",
      company: "Tech Innovation Corp",
      period: "2022 - Present",
      description: "Led data pipeline development and optimization for large-scale analytics platforms. Implemented real-time data processing systems handling 10M+ events daily.",
      technologies: ["Python", "Apache Spark", "Kafka", "AWS", "Docker"]
    },
    {
      id: 2,
      title: "DevOps Engineer",
      company: "CloudScale Solutions",
      period: "2020 - 2022",
      description: "Designed and maintained CI/CD pipelines, managed containerized applications, and implemented infrastructure as code practices.",
      technologies: ["Kubernetes", "Docker", "Jenkins", "Terraform", "MongoDB"]
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "Digital Innovations Ltd",
      period: "2018 - 2020",
      description: "Developed scalable web applications using modern frameworks. Built RESTful APIs and implemented microservices architecture.",
      technologies: [".NET Core", "Vue.js", "Spring Boot", "PostgreSQL", "Redis"]
    },
    {
      id: 4,
      title: "Software Developer",
      company: "StartUp Dynamics",
      period: "2017 - 2018",
      description: "Built mobile and web applications, implemented real-time chat systems, and contributed to product architecture decisions.",
      technologies: ["Java", "Android", "Node.js", "Socket.io", "MySQL"]
    }
  ];

  return (
    <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden h-[700px] flex flex-col">
      {/* Header - Fixed */}
      <div className="bg-gray-800 px-6 py-4 border-b border-gray-700">
        <div className="flex items-center gap-3">
          <Briefcase className="w-6 h-6 text-blue-400" />
          <h2 className="text-2xl font-bold text-white">Professional Experience</h2>
        </div>
      </div>

      {/* Scrollable Content Area - This is the key part for height matching */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {experiences.map((exp) => (
          <div key={exp.id} className="border-l-4 border-blue-500 pl-6 pb-6 relative">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
            
            <div className="mb-3">
              <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
              <p className="text-lg text-blue-400 font-medium">{exp.company}</p>
              <div className="flex items-center gap-2 text-gray-400 mt-1">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{exp.period}</span>
              </div>
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
  );
};

export default ExperienceList;