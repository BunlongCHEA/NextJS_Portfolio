import React, { useState } from 'react';
import { LearningItem } from '@/types';
import { BookOpen, Calendar, Book, Target } from 'lucide-react';
import SwipeCard from './SwipeCard';

const LearningJourney: React.FC = () => {
    const [selectedLearning, setSelectedLearning] = useState<LearningItem | null>(null);
    const [isCardOpen, setIsCardOpen] = useState(false);

    const learningItems: LearningItem[] = [
    {
      id: 1,
      title: "Institute of Foreign Languages (IFL)",
      platform: "Bachelor of English (BA) - Royal University of Phnom Penh",
      period: "Dec 2017 - Aug 2021",
      description: "Complete thesis at Institute of Foreign Languages (IFL) related -- Factors influencing knowledge sharing practices among undergraduate students at a Cambodian higher education language institute.",
      detailedPoints: [
        "Complete thesis at Institute of Foreign Languages (IFL) in -- Factors influencing knowledge sharing among undergraduate students -- and present research speaking to the audience.",
        "Working and attending in field activity such as supporting workshop, conducting charity as class to support community",
      ],
      technologies: ["English", "Communication", "Research", "Teamwork"]
    },
    {
      id: 2,
      title: "IT STEP Computer Academy (@itstep.bg)",
      platform: "Software Development",
      period: "Nov 2022 - Nov 2025",
      description: "Intensive learning and studying in the major of Software Development for the 3 school-year, to understand the life-cycle of software developer, best code practice, latest technologies, Big Data,.",
      detailedPoints: [
        "Learn, understand, and practice in system design and architecture like C++",
        "Design Window Application using C#, .NET framework, Winforms, WPF",
        "Setup on Virtual Machine to practice Linux OS, command, Network (TCP/UDP to Request & Response), and Cloud Server (EC2 AWS)",
        "Implement Database using SQL Server, MySQL, PostgreSQL, Oracle",
        "Understand and practice in Web Development using HTML, CSS, JavaScript, React, ASP.NET core, Laravel",
        "Understand and practice in Backend Development using PHP Laravel, ASP.NET core, Spring Boot Java",
        "Understand and practice in Mobile Development using Java, Android Studio",
        "Understand and practice in Gaming Development using Unity C#",
      ],
      technologies: ["ASP.NET C#", "SpringBoot Java", "Laravel PHP", "React", "Vue", "NextJS", "C++", "Android Java", "Unity", "Database", "Linux command", "Networking", "Cloud (AWS)"]
    },
    {
      id: 3,
      title: "SalaCyber Training",
      platform: "DevOps And Cloud Computing",
      period: "Jan 2025 - Apr 2025",
      description: "Comprehensive study of CI/CD life-cycle, best practice security, containerd docker & Kubernestes, Jenkins, GitLab, and ArgoCD for deployment, Cloud Computing & Ansible for create, deploy k8s and virtual machine.",
      detailedPoints: [
        "Understanding the fundamentals of DevOps culture and practices",
        "Implement CI/CD pipelines using Jenkins and GitLab CI",
        "Containerization using Docker and orchestration with Kubernetes using Cloud Provider (Digital-Ocean, GCP)",
        "Implement GitOps deployment using ArgoCD for Kubernetes deployment and management application",
        "Understand and practice setup ingress controller, cert-manager for SSL, and monitoring using Prometheus & Grafana",
        "Using Ansible to create & configuration Virtual Machine for automation tasks",
      ],
      technologies: ["Kubernetes", "Docker", "ArgoCD", "GitLab", "Jenkins", "Ansible", "Cloud (Digital-Ocean, GCP)"]
    }
  ];

  const handleMoreClick = (learningItems: LearningItem) => {
    setSelectedLearning(learningItems);
    setIsCardOpen(true);
  };

  const handleCloseCard = () => {
    setIsCardOpen(false);
    setTimeout(() => setSelectedLearning(null), 300);
  };

  return (
    <>
      <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden h-[700px] flex flex-col">
        {/* Header - Fixed */}
        <div className="bg-gray-800 px-6 py-4 border-b border-gray-700">
          <div className="flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-green-400" />
            <h2 className="text-2xl font-bold text-white">Learning Journey</h2>
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {learningItems.map((item) => (
            <div key={item.id} className="border-l-4 border-green-500 pl-6 pb-6 relative group">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-green-500 rounded-full"></div>
              
              <div className="mb-3 flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="text-lg text-green-400 font-medium">{item.platform}</p>
                  <div className="flex items-center gap-2 text-gray-400 mt-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{item.period}</span>
                  </div>
                </div>
                
                <button
                  onClick={() => handleMoreClick(item)}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-full"
                  title="View details"
                >
                  <Book className="w-5 h-5" />
                </button>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">
                {item.description}
              </p>

              <div className="flex items-start gap-2 mb-4">
                <Target className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-green-900 text-green-300 text-sm rounded-full font-medium border border-green-700"
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
      {selectedLearning && (
        <SwipeCard
          item={selectedLearning}
          isOpen={isCardOpen}
          onClose={handleCloseCard}
          type="learning"
        />
      )}
    </>
  );
};

export default LearningJourney;