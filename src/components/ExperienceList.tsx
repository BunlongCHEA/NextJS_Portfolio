import React, { useEffect, useState, useMemo } from 'react';
import Image from 'next/image';
import { Experience } from '@/types';
import { Briefcase, Calendar, Code, Book, ChevronLeft, X, Search } from 'lucide-react';
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
  const [searchTerm, setSearchTerm] = useState('');

  const experiences: Experience[] = [
    {
      id: 1,
      title: "Data Engineer",
      company: "Smart Axiata",
      period: "Mar 2023 - Present",
      description: "Deploy data pipeline ETL development, optimization query, and analyze large-scale system performance & data. Also work closely across DevOps, security, and infrastructure teams to keep platform services reliable and audit-ready.",
      detailedPoints: [
        "Reduced Downtime & Improved Load Balancing: Re-configured system settings to lower failure risk and downtime while maintaining load balance across platform services, with particular attention to spike hours when traffic surged abnormally or during holidays. Also monitored and diagnosed database and NiFi performance in real time — resolving memory-limit issues by clearing idle connections, and fixing blocking and deadlock problems that caused queries to hang due to poorly optimized joins, missing indexes, and inefficient query design.",
        "Validated Data & APIs During UAT: Validated SmartNAS and in-house data and APIs throughout UAT testing, working to identify root causes of potential issues ahead of time — catching problems before they reached production.",
        "Supported Kafka & RabbitMQ for Core System Infrastructure CRM & CBS: Installed, configured, and maintained Kafka, Elasticsearch, and NiFi to support CDR data from CRM and CBS systems, monitoring uptime and subscriber traffic. Adjusted configurations to reduce latency and resolve queue backlogs during traffic spikes, that can be prone to errors.",
        "Managed Core-Network Traffic Data: Supported core-network traffic data (GPRS, PGW, SGW, SSD, etc.), reducing queue backlogs that would otherwise spike during users' free-time hours — preventing delays and downtime risk.",
        "Collaborated Cross-Functionally on Microservice Issues: Worked closely with the Application and DevOps teams to debug, analyze, and troubleshoot microservice, pod, and subscriber transaction/management traffic issues — using RabbitMQ for traffic flow and Elasticsearch for monitoring — enabling faster ticket resolution.",
        "Drove Smart Campaign Results: Supported the Smart Campaign business team with data and troubleshooting to increase customer top-ups, resolve customer-facing issues, and contribute to measurable revenue growth.",
        "Provided After-Hours Support: Supported business operations outside standard working hours when needed — which made up a significant portion of the role's ongoing demands.",
        "Partnered on AI Project Deployment: Worked closely with the Leading PIC and vendor on AI-driven initiatives — including Loyalty Customer and Call-Center projects — managing data flow and CI/CD deployment for zero-downtime releases, along with ongoing data updates and maintenance.",
        "Centralized Audit & Security Log Management with Graylogs: Built and maintained Graylog pipelines to centralize log collection from multiple enterprise applications and systems. Worked closely with the internal security/cyber team to provide audit trail data and log alignment for compliance checks, and security monitoring",
        "Supported DevOps Practices Across GitLab & GitHub: Worked with both GitLab and GitHub for version control and CI/CD pipelines, setting up build/deploy jobs, managing branches and merge requests, and troubleshooting pipeline failures for smoother release cycles.",
        "Hands-On with ArgoCD for GitOps Deployment: Used ArgoCD to manage GitOps-based deployment into Kubernetes/K3s clusters, syncing application manifests from Git repos and monitoring rollout status to keep deployments consistent and reduce manual deployment error.",
        "Virtual Machine Administration: Knowledgeable in setting up, configuring, and maintaining Virtual Machines (VMware/on-prem) for hosting application, database, and monitoring services — including resource allocation, and basic troubleshooting of VM-level performance issues.",
        "Cross-Team Infrastructure Alignment: Coordinated and aligned with internal and vendor on infrastructure-related matter, including Coordinate Peer-to-Peer VPN setup and troubleshooting, and Analyze on network data flow such as PGW, SGW, GPRS, etc to make sure system integration and data stay reliable across environment."
      ],
      technologies: ["Python", "SQL", "NoSQL", "Streaming(Kafka, RabbitMQ)", "Apache Spark", "ETL", "Big Data", "Hadoop", "Cloud", "Docker", "Kubernetes (K3s)", "Graylog", "GitLab CI/CD", "GitHub", "ArgoCD (GitOps)", "Virtual Machine (VMware)", "PostgreSQL Performance Tuning & Replication (Master-Slave)", "Traefik", "Prometheus & Grafana", "Loki (Log Aggregation)", "Linux System Administration"],
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
        "Built ETL Pipelines for Data Reliability: Raw transaction and order data from the app's backend was unstructured and inconsistent, making it unusable for reporting. Built ETL pipelines in Talend to clean, format, and validate this data, then wrote stored procedures to load it reliably into the company data warehouse.",
        "Automated Warehouse Load Monitoring: Data warehouse loads had no automated monitoring, risking stale or missing data for downstream reports. Set up scheduled tasks and cron jobs to automate loading and catch failures early, keeping the warehouse consistently up to date.",
        "Designed Relational Schema for Data Integrity: Warehouse tables risked data integrity issues without a clear relational structure. Mapped primary and foreign keys across source tables before building the schema, ensuring consistency across the data warehouse.",
        "Simplified Order Calculations via API: The Development team lacked a reliable way to calculate order totals across delivery fees, shipments, and refunds. Built and provided APIs that handled these calculations directly, removing a manual, error-prone step from their workflow.",
        "Enabled Self-Serve Reporting Across Departments: Finance, Marketing, Operations, and Product teams each needed different views into the business but had no self-serve reporting. Wrote SQL-based dashboards covering merchant settlement, delivery and merchant performance, user journeys, and special product metrics — reducing ad hoc data requests.",
        "Reconciled Transactions to Prevent Financial Discrepancies: Order amounts often didn't reconcile cleanly between our system and iBanking (ABA and other banks), creating financial discrepancies. Validated transactions using approval codes and bank references, catching mismatches before they reached Finance.",
        "Delivered On-Demand Reporting: Departments frequently needed urgent, one-off data — with no dedicated process for handling it. Delivered custom reports on demand, including under tight turnaround windows."
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
      logoUrl: getGitHubImageUrl('NextJS_Portfolio', 'images/logo/datau_white.jpg')
    }
  ];

  // Filter by company OR job title (case-insensitive)
  const filteredExperiences = useMemo(() => {
    if (!searchTerm.trim()) return experiences;
    const term = searchTerm.toLowerCase();
    return experiences.filter(
      (exp) =>
        exp.company.toLowerCase().includes(term) ||
        exp.title.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  const MAX_PREVIEW_POINTS = 5;

  // Achievement points are written as "Title: description".
  // Bold the title (summary) portion before the colon.
  const renderAchievement = (point: string) => {
    const colonIndex = point.indexOf(':');
    if (colonIndex === -1) return <>{point}</>;
    const title = point.slice(0, colonIndex + 1);
    const rest = point.slice(colonIndex + 1);
    return (
      <>
        <span className="font-semibold text-white">{title}</span>
        {rest}
      </>
    );
  };

  const handleMoreClick = (experience: Experience) => {
    setSelectedExperience(experience);
    setIsCardOpen(true);
  };

  const handleCloseCard = () => {
    setIsCardOpen(false);
    setTimeout(() => setSelectedExperience(null), 300);
  };

  // --- Handle Function Image & Fullscreen Image ---

  const ImageWithPlaceholder: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className }) => {
    const [loaded, setLoaded] = useState(false);

    return (
      <div className={`relative ${className}`}>
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

  const openFullscreenImage = () => {
    setIsImageFullscreen(true);
  };

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
      if (event.key === 'Escape') {
        if (isImageFullscreen) {
          setIsImageFullscreen(false);
        } else if (selectedExperience) {
          handleCloseCard();
        }
        return;
      }

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
          <div className="flex items-center gap-3 mb-3">
            <Briefcase className="w-6 h-6 text-blue-400" />
            <h2 className="text-2xl font-bold text-white">Professional Experience</h2>
          </div>

          {/* Search by Company or Job Title */}
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by company or job title..."
              className="w-full bg-gray-900 border border-gray-700 rounded-lg pl-9 pr-9 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                title="Clear search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Scrollable Content Area (Top-Down scrollbar) */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {filteredExperiences.length === 0 && (
            <div className="text-center text-gray-400 py-10">
              No experience found matching &quot;{searchTerm}&quot;
            </div>
          )}

          {filteredExperiences.map((exp) => {
            const previewPoints = exp.detailedPoints?.slice(0, MAX_PREVIEW_POINTS) ?? [];
            const remainingCount = (exp.detailedPoints?.length ?? 0) - previewPoints.length;

            return (
              <div key={exp.id} className="border-l-4 border-blue-500 pl-6 pb-6 relative group">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>

                <div className="mb-3 flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      {/* Company Logo Icon */}
                      <div className="w-10 h-10 bg-gray-800 rounded-full border-2 border-blue-500 flex items-center justify-center overflow-hidden flex-shrink-0">
                        <Image
                          src={exp.logoUrl || 'https://png.pngtree.com/png-vector/20210129/ourmid/pngtree-upload-avatar-by-default-png-image_2854358.jpg'}
                          alt={`${exp.company} logo`}
                          width={32}
                          height={32}
                          className="rounded-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = 'https://png.pngtree.com/png-vector/20210129/ourmid/pngtree-upload-avatar-by-default-png-image_2854358.jpg';
                          }}
                        />
                      </div>

                      <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                    </div>

                    <p className="text-lg text-blue-400 font-medium">{exp.company}</p>
                    <div className="flex items-center gap-2 text-gray-400 mt-1">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleMoreClick(exp)}
                    className="transition-opacity duration-200 p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-full"
                    title="View full details"
                  >
                    <Book className="w-5 h-5" />
                  </button>
                </div>

                {/* Overview */}
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Achievements (preview - up to 5) */}
                {previewPoints.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-200 mb-2">Key Achievements</h4>
                    <ul className="space-y-2">
                      {previewPoints.map((point, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm leading-relaxed">{renderAchievement(point)}</span>
                        </li>
                      ))}
                    </ul>
                    {remainingCount > 0 && (
                      <button
                        onClick={() => handleMoreClick(exp)}
                        className="mt-2 text-sm text-blue-400 hover:text-blue-300 font-medium"
                      >
                        +{remainingCount} more — View full details
                      </button>
                    )}
                  </div>
                )}

                {/* All Technologies */}
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
            );
          })}
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
            <button
              onClick={closeFullscreenImage}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 p-3 rounded-full transition-colors"
            >
              <X className="w-8 h-8 text-white" />
            </button>

            <div className="absolute top-4 left-4 z-10 bg-black/50 text-white px-3 py-2 rounded-lg">
              <span className="text-sm">Press ESC to close</span>
            </div>

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

            <div className="max-w-full max-h-full">
              <ImageWithPlaceholder
                src={selectedExperience.images[currentImageIndex].url}
                alt={selectedExperience.images[currentImageIndex].alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
              <div className="bg-black/50 text-white px-4 py-2 rounded-lg mb-3">
                <p className="text-sm font-medium">{selectedExperience.images[currentImageIndex].alt}</p>
                <p className="text-xs text-gray-300">
                  {currentImageIndex + 1} of {selectedExperience.images.length}
                </p>
              </div>

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