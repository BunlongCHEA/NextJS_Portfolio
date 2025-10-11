import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { Experience } from '@/types';
import { Briefcase, Calendar, Code, Book, ChevronLeft, X } from 'lucide-react';
import SwipeCard from './SwipeCard';

// Helper function
const GITHUB_CONFIG = {
  username: 'BunlongCHEA',
  branch: 'main'
};

const getGitHubImageUrl = (repository: string, imagePath: string) => {
  return `https://raw.githubusercontent.com/${GITHUB_CONFIG.username}/${repository}/${GITHUB_CONFIG.branch}/${imagePath}`;
};

const ExperienceList: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
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
      technologies: ["Python", "SQL", "NoSQL", "Streaming(Kafka, RabbiMQ)", "Apache Spark", "ETL", "Big Data", "Hadoop", "Cloud", "Docker", "Kubernetes"],
      images: [
        // { url: getGitHubImageUrl('NextJS_Portfolio', 'images/test.png'), alt: "RUPP Certificate" },
      ],
      logoUrl: getGitHubImageUrl('NextJS_Portfolio', 'images/logo/smart_axiata_green.jpeg') 
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
      technologies: ["Python", "SQL", "ETL", "BI", "Docker"],
      images: [
        // { url: getGitHubImageUrl('NextJS_Portfolio', 'images/test.png'), alt: "RUPP Certificate" },
      ],
      logoUrl: getGitHubImageUrl('NextJS_Portfolio', 'images/logo/piik_mall_red.png') 
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
      technologies: ["Python", "SQL", "ETL", "BI"],
      images: [
        // { url: getGitHubImageUrl('NextJS_Portfolio', 'images/test.png'), alt: "RUPP Certificate" },
      ],
      logoUrl: getGitHubImageUrl('NextJS_Portfolio', 'images/company-logos/datau-white.png')
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

  // --- Handle Function Image & Fullscreen Image ---

  // Add this component inside ExperienceList.tsx
  const ImageWithPlaceholder: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className }) => {
    const [loaded, setLoaded] = useState(false);
    
    return (
      <div className={`relative ${className}`}>
        {/* Instant placeholder */}
        <div className={`absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center ${loaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
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

  // Open fullscreen image
    const openFullscreenImage = () => {
      setIsImageFullscreen(true);
    };
  
    // Close fullscreen image
    const closeFullscreenImage = () => {
      setIsImageFullscreen(false);
    };
  
    const nextImage = () => {
      if (selectedExperience && selectedExperience.images && selectedExperience.images.length > 1) {
        setCurrentImageIndex((prev) => 
          prev === selectedExperience.images?.length - 1 ? 0 : prev + 1
        );
      }
    };
  
    const prevImage = () => {
      if (selectedExperience && selectedExperience.images && selectedExperience.images.length > 1) {
        setCurrentImageIndex((prev) => 
          prev === 0 ? selectedExperience.images.length - 1 : prev - 1
        );
      }
    };
  
    // ESC key handler
    useEffect(() => {
      const handleEscKey = (event: KeyboardEvent) => {
        // Close modals with ESC
        if (event.key === 'Escape') {
          if (isImageFullscreen) {
            setIsImageFullscreen(false);
          } else if (selectedExperience) {
            handleCloseCard();
          }
          return;
        }
  
        // Image navigation (only when modal is open and has images)
        if (selectedExperience && selectedExperience.images && selectedExperience.images.length > 1) {
          switch (event.key) {
            case 'ArrowLeft':
            case 'a':
            case 'A':
              event.preventDefault();
              prevImage();
              break;
              
            case 'ArrowRight':
            case 'd':
            case 'D':
              event.preventDefault();
              nextImage();
              break;
              
            case ' ':
              event.preventDefault();
              nextImage();
              break;
          }
        }
        
        // Open fullscreen with Enter
        if (event.key === 'Enter' && selectedExperience && !isImageFullscreen) {
          event.preventDefault();
          openFullscreenImage();
        }
      };
  
      if (selectedExperience || isImageFullscreen) {
        document.addEventListener('keydown', handleEscKey);
      }
  
      return () => {
        document.removeEventListener('keydown', handleEscKey);
      };
    }, [selectedExperience, isImageFullscreen, currentImageIndex]);

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
            <div key={exp.id} className="border-l-4 border-blue-500 pl-12 pb-6 relative group">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>

              {/* Company Logo - ADD THIS */}
              <div className="absolute -left-8 top-8 w-12 h-12 bg-gray-800 rounded-full border-2 border-blue-500 flex items-center justify-center overflow-hidden">
                <Image
                  src={exp.logoUrl || '/images/default-company-logo.png'}
                  alt={`${exp.company} logo`}
                  width={200}
                  height={150}
                  className="w-8 h-8 object-contain"
                  onError={(e) => {
                    e.currentTarget.src = '/images/default-company-logo.png';
                  }}
                />
              </div>
              
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
          onImageClick={(index) => {
            setCurrentImageIndex(index);
            openFullscreenImage();
          }}
          currentImageIndex={currentImageIndex}
          onImageNext={nextImage}
          onImagePrev={prevImage}
        />
      )}

      {/* Fullscreen Image Modal */}
      {isImageFullscreen && selectedExperience && selectedExperience.images && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={closeFullscreenImage}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 p-3 rounded-full transition-colors"
            >
              <X className="w-8 h-8 text-white" />
            </button>

            {/* ESC hint */}
            <div className="absolute top-4 left-4 z-10 bg-black/50 text-white px-3 py-2 rounded-lg">
              <span className="text-sm">Press ESC to close</span>
            </div>

            {/* Image navigation buttons */}
            {selectedExperience.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-4 rounded-full transition-colors z-10"
                >
                  <ChevronLeft className="w-8 h-8 text-white" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-4 rounded-full transition-colors z-10"
                >
                  <ChevronLeft className="w-8 h-8 text-white rotate-180" />
                </button>
              </>
            )}

            {/* Fullscreen image */}
            <div className="max-w-full max-h-full">
              {/* <img
                src={selectedExperience.images[currentImageIndex].url}
                alt={selectedExperience.images[currentImageIndex].alt}
                className="max-w-full max-h-full object-contain"
              /> */}
              <ImageWithPlaceholder
                src={selectedExperience.images[currentImageIndex].url}
                alt={selectedExperience.images[currentImageIndex].alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Image info and indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
              <div className="bg-black/50 text-white px-4 py-2 rounded-lg mb-3">
                <p className="text-sm font-medium">{selectedExperience.images[currentImageIndex].alt}</p>
                <p className="text-xs text-gray-300">
                  {currentImageIndex + 1} of {selectedExperience.images.length}
                </p>
              </div>
              
              {/* Image indicators */}
              {selectedExperience.images.length > 1 && (
                <div className="flex justify-center gap-2">
                  {selectedExperience.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-green-400' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </>
  );
};

export default ExperienceList;