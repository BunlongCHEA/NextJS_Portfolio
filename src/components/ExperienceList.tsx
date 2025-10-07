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
      description: "Deploy data pipeline ETL development, optimization query, and analyze large-scale system performance & data. Implemented real-time data processing systems handling 10M+ data daily.",
      detailedPoints: [
        "Working and do installation with many Technology tool like Hadoop, NIFI, Elasticsearch, RabbitMQ, Kafka, In-House Tool, etc",
        "Working with docker, kubernetes to deploy the API (using Python) to production environment, and sent logs to monitoring app for analyze issue",
        "Provide API and data to Development Team to deploy SmartNas & In-house project, and analyze the definition of data to be accurate, and detail-oriented, so that team can deploy",
        "Monitor working flow to ensure less downtime, and response to any emergency situation",
        "Working to support Big Data like Hadoop, CDR data of the Telecom to ensure stability, efficiency, analysis to deep-dive the problem occur",
        "Provide support to CRM and CBS project to ensure smooth process during upgrade, and maintenance",
        "Support Smart Campaign project with business team to increase customer top-up, solve problems to ensure customer satisfaction, and generate and drive for more revenue to company",
        "Working Incentive business team to provide data, and problem-solving to the data-flow architecture, ensure reliable processing data",
        "Good communication, reliable, open-minded, hard-working, providing solutions, asking questions to the issue, to support the business and technical team."
      ],
      technologies: ["Python", "SQL", "NoSQL", "Streaming(Kafka, RabbiMQ)", "Apache Spark", "ETL", "Big Data", "Hadoop", "Cloud", "Docker", "Kubernetes"] 
    },
    {
      id: 2,
      title: "Data Analyst",
      company: "Piik Mall: E-commerce startup",
      period: "Apr 2022 - Mar 2023",
      description: "Understand and solve problem in E-commerce, designed dashboard, maintenance system, managed containerized docker, and optimized query.",
      detailedPoints: [
        "Using Talend to map ETL from Server of the App by cleaning, formatting, validate, and coding Stored-Procedure to load to company’s data warehouse",
        "Set Task schedule and Cron-job to load to data warehouse and observer correctly or not",
        "Mapping Primary and Foreign key of database before creating table into data warehouse",
        "Support Development team to provide API for the App, and calculate the order amount with delivery fee, shipment, and refund.",
        "Coding SQL to provide visualization for Finance, Marketing, Operation, and Product Department such as Merchant Settlement, Delivery and Merchant performance, User Journey, Special Product, etc.",
        "Validate the order amount in each transaction between our system and iBanking from ABA & other Banks by checking through approval code (APV), and Bank Reference",
        "Validate the order amount in each transaction between our system and iBanking from ABA & other Banks by checking through approval code (APV), and Bank Reference"
      ],
      technologies: ["Python", "SQL", "ETL", "BI", "Docker"]
    },
    {
      id: 3,
      title: "Trainee Data Analyst",
      company: "DataU",
      period: "Nov 2021 - Mar 2022",
      description: "Learning and practicing Data Analytics, Data Visualization, and Data Engineering, while provide consulting to real company projects with mentors who specilize in data field.",
      detailedPoints: [
        "Coding SQL to analyze data to provide insight in customer churn and investigate the root of the problem.",
        "Build logistic and linear regression to predict the customer behavior using Python and Machine learning",
        "Modeling data pipeline to integrate data from SSIS to SQL server and MySQL for data warehouse",
        "Visualizing the data in Power BI to share and communicate with the members to understand team opinion."
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