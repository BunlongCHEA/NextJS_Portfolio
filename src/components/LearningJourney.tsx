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
      title: "Advanced Data Engineering with Apache Spark",
      platform: "Coursera",
      period: "Oct 2024 - Present",
      description: "Comprehensive course covering distributed data processing, optimization techniques, and real-world implementation patterns.",
      detailedPoints: [
        "Master Spark SQL and DataFrame optimizations",
        "Implement streaming data pipelines with Spark Streaming",
        "Learn advanced RDD transformations and actions",
        "Optimize Spark applications for production environments",
        "Integrate with cloud platforms (AWS, Azure, GCP)"
      ],
      technologies: ["Apache Spark", "Scala", "PySpark", "Kafka", "Delta Lake"]
    },
    {
      id: 2,
      title: "Kubernetes Certified Application Developer",
      platform: "CNCF",
      period: "Aug 2024 - Sep 2024",
      description: "Intensive certification program focusing on containerized application deployment and management in Kubernetes environments.",
      detailedPoints: [
        "Design and build cloud-native applications",
        "Understand Kubernetes architecture and components",
        "Implement Pod design patterns and configurations",
        "Master Services, Ingress, and NetworkPolicies",
        "Handle persistent volumes and storage classes"
      ],
      technologies: ["Kubernetes", "Docker", "Helm", "YAML", "kubectl"]
    },
    {
      id: 3,
      title: "Machine Learning Engineering Specialization",
      platform: "Stanford Online",
      period: "May 2024 - Jul 2024",
      description: "End-to-end ML pipeline development, from data preprocessing to model deployment and monitoring in production.",
      detailedPoints: [
        "Build robust ML data pipelines",
        "Implement feature engineering best practices",
        "Deploy models using MLOps principles",
        "Monitor and maintain production ML systems",
        "Apply A/B testing for model validation"
      ],
      technologies: ["Python", "TensorFlow", "MLflow", "Kubeflow", "Airflow"]
    },
    {
      id: 4,
      title: "Cloud Architecture Patterns",
      platform: "AWS Training",
      period: "Feb 2024 - Apr 2024",
      description: "Comprehensive study of cloud-native architecture patterns, microservices design, and serverless computing strategies.",
      detailedPoints: [
        "Design scalable microservices architectures",
        "Implement event-driven systems",
        "Master serverless computing patterns",
        "Apply cloud security best practices",
        "Optimize costs and performance"
      ],
      technologies: ["AWS Lambda", "API Gateway", "EventBridge", "DynamoDB", "CloudFormation"]
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