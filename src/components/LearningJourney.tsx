import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { LearningItem } from '@/types';
import { BookOpen, Calendar, Book, Target, X, ChevronLeft, ChevronRight } from 'lucide-react';
import SwipeCard from './SwipeCard';

// Helper function
const GITHUB_CONFIG = {
  username: 'BunlongCHEA',
  branch: 'main'
};

const getGitHubImageUrl = (repository: string, imagePath: string) => {
  return `https://raw.githubusercontent.com/${GITHUB_CONFIG.username}/${repository}/${GITHUB_CONFIG.branch}/${imagePath}`;
};

const LearningJourney: React.FC = () => {
    const [selectedLearning, setSelectedLearning] = useState<LearningItem | null>(null);
    const [isCardOpen, setIsCardOpen] = useState(false);
    const [isImageFullscreen, setIsImageFullscreen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      technologies: ["English", "Communication", "Research", "Teamwork"],
      images: [
        { url: getGitHubImageUrl('NextJS_Portfolio', 'images/RUPP_IFL_Certification_English.png'), alt: 'RUPP-IFL-Certificate-English' },
        { url: getGitHubImageUrl('NextJS_Portfolio', 'images/RUPP_IFL_Certification_Khmer.png'), alt: "RUPP-IFL-Certificate-Khmer" },
        { url: getGitHubImageUrl('NextJS_Portfolio', 'images/RUPP_IFL_Reseach_Recognization.png'), alt: "RUPP-IFL-Reseach-Recognization" },
      ],
      logoUrl: getGitHubImageUrl('NextJS_Portfolio', 'images/logo/IFL_white.png')
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
      technologies: ["ASP.NET C#", "SpringBoot Java", "Laravel PHP", "React", "Vue", "NextJS", "C++", "Android Java", "Unity", "Database", "Linux command", "Networking", "Cloud (AWS)"],
      images: [
        { url: getGitHubImageUrl('NextJS_Portfolio', 'images/IT-STEP_IT_Essentials_Certificate.png'), alt: "IT-STEP_IT_Essentials_Certificate" },
      ],
      logoUrl: getGitHubImageUrl('NextJS_Portfolio', 'images/logo/IT_Step_Academy.jpg')
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
      technologies: ["Kubernetes", "Docker", "ArgoCD", "GitLab", "Jenkins", "Ansible", "Cloud (Digital-Ocean, GCP)"],
      images: [
        { url: getGitHubImageUrl('NextJS_Portfolio', 'images/Salacyber_Certificate_Devops.png'), alt: "Salacyber-Certificate-Devops" },
      ],
      logoUrl: getGitHubImageUrl('NextJS_Portfolio', 'images/logo/salacyber_blue.jpg')
    }
  ];

  const handleMoreClick = (learningItems: LearningItem) => {
    setSelectedLearning(learningItems);
    setIsCardOpen(true);
    setCurrentImageIndex(0); // Reset image index
  };

  const handleCloseCard = () => {
    setIsCardOpen(false);
    setIsImageFullscreen(false); // Reset fullscreen state
    setTimeout(() => setSelectedLearning(null), 300);
  };

  // --- Handle Function Image & Fullscreen Image ---

  // Image component with instant placeholder
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

  // Open fullscreen image
  const openFullscreenImage = () => {
    setIsImageFullscreen(true);
  };

  // Close fullscreen image
  const closeFullscreenImage = () => {
    setIsImageFullscreen(false);
  };

  const nextImage = () => {
    if (selectedLearning && selectedLearning.images && selectedLearning.images.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === selectedLearning.images?.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedLearning && selectedLearning.images && selectedLearning.images.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedLearning.images.length - 1 : prev - 1
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
        } else if (selectedLearning) {
          handleCloseCard();
        }
        return;
      }

      // Image navigation (only when modal is open and has images)
      if (selectedLearning && selectedLearning.images && selectedLearning.images.length > 1) {
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
      if (event.key === 'Enter' && selectedLearning && !isImageFullscreen) {
        event.preventDefault();
        openFullscreenImage();
      }
    };

    if (selectedLearning || isImageFullscreen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [selectedLearning, isImageFullscreen, currentImageIndex]);

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
                  <div className="flex items-center gap-3 mb-1">
                    {/* School Logo Icon */}
                    <div className="w-10 h-10 bg-gray-800 rounded-full border-2 border-blue-500 flex items-center justify-center overflow-hidden flex-shrink-0">
                      <Image
                        src={item.logoUrl || 'https://png.pngtree.com/png-vector/20210129/ourmid/pngtree-upload-avatar-by-default-png-image_2854358.jpg'}
                        alt={`${item.title} logo`}
                        width={32}
                        height={32}
                        className="rounded-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = 'https://png.pngtree.com/png-vector/20210129/ourmid/pngtree-upload-avatar-by-default-png-image_2854358.jpg';
                        }}
                      />
                    </div>

                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  </div>


                  {/* <h3 className="text-xl font-semibold text-white">{item.title}</h3> */}
                  <p className="text-lg text-green-400 font-medium">{item.platform}</p>
                  <div className="flex items-center gap-2 text-gray-400 mt-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{item.period}</span>
                  </div>
                </div>
                
                {/* opacity-0 group-hover:opacity-100 : add this in-front-of transition opacity for hover */}
                <button
                  onClick={() => handleMoreClick(item)}
                  className="transition-opacity duration-200 p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-full"
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
      {isImageFullscreen && selectedLearning && selectedLearning.images && (
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
            {selectedLearning.images.length > 1 && (
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
                src={selectedLearning.images[currentImageIndex].url}
                alt={selectedLearning.images[currentImageIndex].alt}
                className="max-w-full max-h-full object-contain"
              /> */}
              <ImageWithPlaceholder
                src={selectedLearning.images[currentImageIndex].url}
                alt={selectedLearning.images[currentImageIndex].alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Image info and indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
              <div className="bg-black/50 text-white px-4 py-2 rounded-lg mb-3">
                <p className="text-sm font-medium">{selectedLearning.images[currentImageIndex].alt}</p>
                <p className="text-xs text-gray-300">
                  {currentImageIndex + 1} of {selectedLearning.images.length}
                </p>
              </div>
              
              {/* Image indicators */}
              {selectedLearning.images.length > 1 && (
                <div className="flex justify-center gap-2">
                  {selectedLearning.images.map((_, index) => (
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

export default LearningJourney;