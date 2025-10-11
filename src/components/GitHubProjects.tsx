import React, { useState, useEffect } from 'react';
import Image from 'next/image';
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
  SiDigitalocean
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
import { FiGithub, FiExternalLink, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

interface ProjectImage {
  url: string;
  alt: string;
  // placeholder?: string;
}

interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
  liveUrl?: string;
  technologies: string[];
  images: ProjectImage[];
  type: 'frontend' | 'backend' | 'fullstack';
  relatedProject?: string; // ID of related project (frontend/backend pair)
}

// Mapping technology names to their icons and colors
const technologyIcons: Record<string, { icon: React.ComponentType<{ className?: string }>, color: string }> = {
  'JavaScript': { icon: SiJavascript, color: 'text-yellow-400' },
  'TypeScript': { icon: SiTypescript, color: 'text-blue-400' },
  'Tailwind CSS': { icon: SiTailwindcss, color: 'text-sky-400' },
  'Bootstrap': { icon: SiBootstrap, color: 'text-purple-600' },
  'Java': { icon: FaJava, color: 'text-orange-400' },
  'C#': { icon: TbBrandCSharp, color: 'text-purple-400' },
  'PHP': { icon: FaPhp, color: 'text-purple-500' },

  'Python': { icon: SiPython, color: 'text-blue-400' },
  'Node.js': { icon: SiNodedotjs, color: 'text-green-500' },
  'Angular': { icon: SiAngular, color: 'text-red-500' },
  'Spring Boot': { icon: SiSpringboot, color: 'text-green-500' },
  '.NET': { icon: SiDotnet, color: 'text-purple-500' },
  'Laravel': { icon: SiLaravel, color: 'text-red-600' },

  'Vue.js': { icon: SiVuedotjs, color: 'text-green-400' },
  'React': { icon: SiReact, color: 'text-cyan-400' },
  'Next.js': { icon: SiNextdotjs, color: 'text-white' },
  'Android': { icon: SiAndroid, color: 'text-green-400' },

  'Firebase': { icon: SiFirebase, color: 'text-yellow-400' },
  'MongoDB': { icon: SiMongodb, color: 'text-green-500' },
  'MySQL': { icon: SiMysql, color: 'text-blue-500' },
  'PostgreSQL': { icon: SiPostgresql, color: 'text-blue-400' },
  'SQL Server': { icon: DiMsqlServer, color: 'text-red-500' },

  'Docker': { icon: SiDocker, color: 'text-blue-400' },
  'Kubernetes': { icon: SiKubernetes, color: 'text-blue-500' },
  'Jenkins': { icon: SiJenkins, color: 'text-red-600' },
  'GCP': { icon: SiGooglecloud, color: 'text-blue-400' },
  'DigitalOcean': { icon: SiDigitalocean, color: 'text-blue-600' },
};

const GITHUB_CONFIG = {
  username: 'BunlongCHEA',
  branch: 'main'
};

// Helper function
const getGitHubImageUrl = (repository: string, imagePath: string) => {
  return `https://raw.githubusercontent.com/${GITHUB_CONFIG.username}/${repository}/${GITHUB_CONFIG.branch}/${imagePath}`;
};

// Generate tiny base64 placeholders (1x1 pixel colored squares)
// const generatePlaceholder = (color: string) => {
//   return `data:image/svg+xml;base64,${btoa(`
//     <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
//       <rect width="100%" height="100%" fill="${color}"/>
//       <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="white" font-family="Arial" font-size="16">
//         Loading...
//       </text>
//     </svg>
//   `)}`;
// };

// Data - For GitHub projects
const projects: Project[] = [
  {
    id: 'ecommerce-dotnet',
    name: 'E-commerce (.NET)',
    description: 'Robust e-commerce backend built with ASP.NET Core, featuring JWT authentication, Entity Framework, and comprehensive API endpoints.',
    url: 'https://github.com/BunlongCHEA/Ecommerce-DotNet',
    liveUrl: 'https://ecommerceapi.bunlong.site/swagger',
    technologies: ['C#', '.NET', 'SQL Server', 'MongoDB', 'Docker', 'Kubernetes', 'GCP', 'DigitalOcean'],
    images: [
      { url: getGitHubImageUrl('Ecommerce-DotNet', 'images/argocd_1.png'), alt: 'ArgoCD-Login' },
      { url: getGitHubImageUrl('Ecommerce-DotNet', 'images/argocd_2.png'), alt: 'ArgoCD-Repo' },
      { url: getGitHubImageUrl('Ecommerce-DotNet', 'images/argocd_3.png'), alt: 'ArgoCD-Project' },
      { url: getGitHubImageUrl('Ecommerce-DotNet', 'images/argocd_4.png'), alt: 'ArgoCD-Project-SQLServer' },
      { url: getGitHubImageUrl('Ecommerce-DotNet', 'images/argocd_5.png'), alt: 'ArgoCD-Project-MongoDB' },
      { url: getGitHubImageUrl('Ecommerce-DotNet', 'images/argocd_6.png'), alt: 'ArgoCD-Project-Backend' },
      { url: getGitHubImageUrl('Ecommerce-DotNet', 'images/argocd_7.png'), alt: 'ArgoCD-Project-Frontend' },
      { url: getGitHubImageUrl('Ecommerce-DotNet', 'images/cloudflare_1.png'), alt: 'Cloudflare-Backend' },
      { url: getGitHubImageUrl('Ecommerce-DotNet', 'images/cloudflare_2.png'), alt: 'Cloudflare-Frontend' },
      { url: getGitHubImageUrl('Ecommerce-DotNet', 'images/k8s_1.png'), alt: 'Kubernetes_Namespace' },
      { url: getGitHubImageUrl('Ecommerce-DotNet', 'images/k8s_2.png'), alt: 'Cloudflare-Ingress' },
      { url: getGitHubImageUrl('Ecommerce-DotNet', 'images/web_1.png'), alt: 'Web_Backend_Swagger' },
      { url: getGitHubImageUrl('Ecommerce-DotNet', 'images/web_2.png'), alt: 'Web_Frontend_Login' },
    ],
    type: 'backend',
    relatedProject: 'ecommerce-vue'
  },
  {
    id: 'ecommerce-vue',
    name: 'E-commerce (Vue.js)',
    description: 'Modern e-commerce frontend with Vue.js, Vuex for state management, and responsive design.',
    url: 'https://github.com/BunlongCHEA/Ecommerce-Vue',
    liveUrl: 'https://ecommercevue.bunlong.site',
    technologies: ['Vue.js', 'JavaScript', 'Tailwind CSS', 'Docker', 'Kubernetes', 'GCP', 'DigitalOcean'],
    images: [
      { url: getGitHubImageUrl('Ecommerce-Vue', 'images/argocd_1.png'), alt: 'ArgoCD-Login' },
      { url: getGitHubImageUrl('Ecommerce-Vue', 'images/argocd_2.png'), alt: 'ArgoCD-Repo' },
      { url: getGitHubImageUrl('Ecommerce-Vue', 'images/argocd_3.png'), alt: 'ArgoCD-Project' },
      { url: getGitHubImageUrl('Ecommerce-Vue', 'images/argocd_4.png'), alt: 'ArgoCD-Project-Frontend' },
      { url: getGitHubImageUrl('Ecommerce-Vue', 'images/web_1.png'), alt: 'Login' },
      { url: getGitHubImageUrl('Ecommerce-Vue', 'images/web_2.png'), alt: 'User-Product-Page-with-logo' },
      { url: getGitHubImageUrl('Ecommerce-Vue', 'images/web_3.png'), alt: 'User-Product-Filter-with-more-products' },
      { url: getGitHubImageUrl('Ecommerce-Vue', 'images/web_4.png'), alt: 'User-Product-Detail' },
      { url: getGitHubImageUrl('Ecommerce-Vue', 'images/web_5.png'), alt: 'User-Cart-Summary-all-stores' },
      { url: getGitHubImageUrl('Ecommerce-Vue', 'images/web_5_1.png'), alt: 'User-Cart-Detail-each-store' },
      { url: getGitHubImageUrl('Ecommerce-Vue', 'images/web_6.png'), alt: 'User-Location' },
      { url: getGitHubImageUrl('Ecommerce-Vue', 'images/web_7.png'), alt: 'User-Payment' },
      { url: getGitHubImageUrl('Ecommerce-Vue', 'images/web_7_1.png'), alt: 'User-Payment-Add-With-Validity-CardNumber' },
      { url: getGitHubImageUrl('Ecommerce-Vue', 'images/web_8.png'), alt: 'User-Coupon-Add-Code' },
      { url: getGitHubImageUrl('Ecommerce-Vue', 'images/web_9.png'), alt: 'User-Order-Success' },
      { url: getGitHubImageUrl('Ecommerce-Vue', 'images/web_10.png'), alt: 'User-Order-Success-Detail' },
      { url: getGitHubImageUrl('Ecommerce-Vue', 'images/web_11.png'), alt: 'User-Order-Success-Arrived' },
      { url: getGitHubImageUrl('Ecommerce-Vue', 'images/web_12.png'), alt: 'User-Order-History-Completed-With-Other-Order-Pending' },
      { url: getGitHubImageUrl('Ecommerce-Vue', 'images/web_13.png'), alt: 'User-Chat' },
      { url: getGitHubImageUrl('Ecommerce-Vue', 'images/web_14.png'), alt: 'User-Profiles' },
      { url: getGitHubImageUrl('Ecommerce-Vue', 'images/admin_web_1.png'), alt: 'Admin-Order-Status-Detail-Product' },
      { url: getGitHubImageUrl('Ecommerce-Vue', 'images/admin_web_2.png'), alt: 'Admin-Order-Change-Status-Arrived' },
      { url: getGitHubImageUrl('Ecommerce-Vue', 'images/admin_web_3.png'), alt: 'Admin-Product-List-With-either-Add-Single-or-Batch-Products' },
      { url: getGitHubImageUrl('Ecommerce-Vue', 'images/admin_web_4.png'), alt: 'Admin-Chat' },
    ],
    type: 'frontend',
    relatedProject: 'ecommerce-dotnet'
  },
  {
    id: 'nextjs-portfolio',
    name: 'My Portfolio',
    description: 'Personal portfolio website built with Next.js, featuring modern animations and responsive design.',
    url: 'https://github.com/BunlongCHEA/NextJS_Portfolio',
    liveUrl: 'https://personalportfolio.bunlong.site',
    technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind CSS', 'Docker', 'Kubernetes', 'GCP', 'DigitalOcean'],
    images: [
      { url: '/images/portfolio-1.png', alt: 'Homepage' },
      { url: '/images/portfolio-2.png', alt: 'Projects Section' },
    ],
    type: 'fullstack'
  },
  {
    id: 'springboot-chat',
    name: 'Real-Time Chat (Spring Boot)',
    description: 'Real-time chat application with WebSocket integration, built using Spring Boot and modern web technologies.',
    url: 'https://github.com/BunlongCHEA/SpringBoot-RealTimeChat',
    liveUrl: 'https://chatspringboot.bunlong.site',
    technologies: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'Kubernetes', 'GCP', 'DigitalOcean'],
    images: [
      { url: '/images/chat-1.png', alt: 'Chat Interface' },
      { url: '/images/chat-2.png', alt: 'Real-time Messaging' },
    ],
    type: 'backend',
    relatedProject: 'android-chat'
  },
  {
    id: 'android-chat',
    name: 'Real-Time Chat (Android)',
    description: 'Real-time chat application with WebSocket integration, built using Android and modern web technologies.',
    url: 'https://github.com/BunlongCHEA/Android-Java_RealTimeChat',
    liveUrl: 'https://chatandroid.bunlong.site',
    technologies: ['Java', 'Android', 'Firebase', 'Docker', 'Kubernetes', 'GCP', 'DigitalOcean'],
    images: [
      { url: '/images/ecommerce-vue-1.png', alt: 'Home Page' },
      { url: '/images/ecommerce-vue-2.png', alt: 'Product Catalog' },
      { url: '/images/ecommerce-vue-3.png', alt: 'Shopping Cart' },
    ],
    type: 'frontend',
    relatedProject: 'springboot-chat'
  },
  {
    id: 'gym-dotnet',
    name: 'Gym Management (.NET)',
    description: 'Robust gym management fullstack built with ASP.NET Core, featuring JWT authentication, Entity Framework, and interactive Bootstrap GUI endpoints.',
    url: 'https://github.com/BunlongCHEA/ASP.Net_GymManagement',
    liveUrl: 'https://gymdotnet.bunlong.site',
    technologies: ['C#', '.NET', 'SQL Server', 'Bootstrap', 'Jenkins', 'Docker', 'Kubernetes', 'GCP', 'DigitalOcean'],
    images: [
      { url: '/images/gym-dotnet-1.png', alt: 'API Documentation' },
      { url: '/images/gym-dotnet-2.png', alt: 'Database Schema' },
    ],
    type: 'fullstack',
  },
  {
    id: 'cuisine-laravel',
    name: 'Order Cuisine (Laravel)',
    description: 'Robust Order food fullstack built with Laravel, and interactive Bootstrap GUI endpoints.',
    url: 'https://github.com/BunlongCHEA/Laravel_Online_Cuisine',
    liveUrl: 'https://cuisinelaravel.bunlong.site',
    technologies: ['PHP', 'Laravel', 'PostgreSQL', 'Bootstrap', 'Jenkins', 'Docker', 'Kubernetes', 'GCP', 'DigitalOcean'],
    images: [
      { url: '/images/cuisine-laravel-1.png', alt: 'API Documentation' },
      { url: '/images/cuisine-laravel-2.png', alt: 'Database Schema' },
    ],
    type: 'fullstack',
  },
];

interface GitHubProjectsProps {
  selectedLanguage: string | null;
}

const GitHubProjects: React.FC<GitHubProjectsProps> = ({ selectedLanguage }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageFullscreen, setIsImageFullscreen] = useState(false); // State for fullscreen image

  // Filter projects based on selected language
  const filteredProjects = selectedLanguage 
    ? projects.filter(project => 
        project.technologies.some(tech => 
          tech.toLowerCase().includes(selectedLanguage.toLowerCase())
        )
      )
    : projects;

  // Group related projects (frontend/backend pairs)
  const groupedProjects = filteredProjects.reduce((acc, project) => {
    if (project.relatedProject) {
      const relatedProject = filteredProjects.find(p => p.id === project.relatedProject);
      if (relatedProject) {
        const groupKey = [project.id, project.relatedProject].sort().join('-');
        if (!acc.some(group => group.key === groupKey)) {
          acc.push({
            key: groupKey,
            projects: [project, relatedProject],
            type: 'pair'
          });
        }
        return acc;
      }
    }
    
    // Check if this project is not already part of a pair
    const isInPair = acc.some(group => 
      group.type === 'pair' && group.projects.some(p => p.id === project.id)
    );
    
    if (!isInPair) {
      acc.push({
        key: project.id,
        projects: [project],
        type: 'single'
      });
    }
    
    return acc;
  }, [] as Array<{ key: string; projects: Project[]; type: 'single' | 'pair' }>);

  // --- Handle Function Image & Fullscreen Image ---

  // Image component with instant placeholder
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

  // Handlers for project modal and image navigation
  // ESC key handler
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      // Close modals with ESC
      if (event.key === 'Escape') {
        if (isImageFullscreen) {
          setIsImageFullscreen(false); // Close fullscreen image first
        } else if (selectedProject) {
          closeModal(); // Close modal if no fullscreen image
        }
        return;
      }

      // Image navigation (only when modal is open and has images)
      if (selectedProject && selectedProject.images.length > 1) {
        switch (event.key) {
          case 'ArrowLeft':
          case 'a': // Alternative: A key
          case 'A':
            event.preventDefault();
            prevImage();
            break;
            
          case 'ArrowRight':
          case 'd': // Alternative: D key
          case 'D':
            event.preventDefault();
            nextImage();
            break;
            
          case ' ': // Spacebar for next image
            event.preventDefault();
            nextImage();
            break;
        }
      }
      
      // Open fullscreen with Enter (when modal is open)
      if (event.key === 'Enter' && selectedProject && !isImageFullscreen) {
        event.preventDefault();
        openFullscreenImage();
      }
    };

    // Add event listener when modal or fullscreen is open
    if (selectedProject || isImageFullscreen) {
      document.addEventListener('keydown', handleEscKey);
    }

    // Cleanup
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [selectedProject, isImageFullscreen, currentImageIndex]);

  // Open project modal
  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  // Close project modal
  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    setIsImageFullscreen(false); // Reset fullscreen state
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
    if (selectedProject && selectedProject.images.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject && selectedProject.images.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <>
      <div className="mt-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white mb-2">Featured Projects</h2>
          <p className="text-blue-200">
            {selectedLanguage 
              ? `Projects using ${selectedLanguage} (${filteredProjects.length} found)`
              : `All projects (${projects.length} total)`
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groupedProjects.map((group) => (
            <div key={group.key} className="space-y-4">
              {group.type === 'pair' ? (
                // Render paired projects (frontend/backend)
                <div className="bg-gray-900/70 rounded-lg border border-gray-700/50 backdrop-blur-sm overflow-hidden hover:border-blue-500/50 transition-all duration-300">
                  <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-4 py-2 border-b border-gray-700/50">
                    <span className="text-xs font-semibold text-blue-400 uppercase tracking-wide">
                      Full Stack Project
                    </span>
                  </div>
                  
                  {group.projects.map((project, index) => (
                    <div
                      key={project.id}
                      onClick={() => openProjectModal(project)}
                      className="p-4 cursor-pointer hover:bg-gray-800/50 transition-colors duration-200 border-b border-gray-700/30 last:border-b-0"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white mb-1 hover:text-blue-400 transition-colors">
                            {project.name}
                          </h3>
                          <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                            project.type === 'frontend' 
                              ? 'bg-green-600/20 text-green-400 border border-green-600/30' 
                              : 'bg-orange-600/20 text-orange-400 border border-orange-600/30'
                          }`}>
                            {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                          </span>
                        </div>
                        <FiGithub className="w-5 h-5 text-gray-400" />
                      </div>
                      
                      <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => {
                          const techInfo = technologyIcons[tech];
                          if (!techInfo) return null;
                          
                          const IconComponent = techInfo.icon;
                          return (
                            <div key={tech} className="flex items-center gap-1 bg-gray-800/50 px-2 py-1 rounded">
                              <IconComponent className={`w-3 h-3 ${techInfo.color}`} />
                              <span className="text-xs text-gray-300">{tech}</span>
                            </div>
                          );
                        })}
                        {project.technologies.length > 3 && (
                          <span className="text-xs text-gray-400 px-2 py-1">
                            +{project.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                // Render single project
                group.projects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => openProjectModal(project)}
                    className="bg-gray-900/70 rounded-lg border border-gray-700/50 backdrop-blur-sm overflow-hidden hover:border-blue-500/50 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                            {project.name}
                          </h3>
                          <span className={`inline-block px-3 py-1 rounded text-sm font-medium ${
                            project.type === 'fullstack' 
                              ? 'bg-purple-600/20 text-purple-400 border border-purple-600/30'
                              : project.type === 'frontend'
                              ? 'bg-green-600/20 text-green-400 border border-green-600/30'
                              : 'bg-orange-600/20 text-orange-400 border border-orange-600/30'
                          }`}>
                            {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                          </span>
                        </div>
                        <FiGithub className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                      </div>
                      
                      <p className="text-gray-300 mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => {
                          const techInfo = technologyIcons[tech];
                          if (!techInfo) return null;
                          
                          const IconComponent = techInfo.icon;
                          return (
                            <div key={tech} className="flex items-center gap-1 bg-gray-800/50 px-3 py-1 rounded-full">
                              <IconComponent className={`w-4 h-4 ${techInfo.color}`} />
                              <span className="text-sm text-gray-300">{tech}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <FiGithub className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg">No projects found for <b>{selectedLanguage}</b></p>
              <p className="text-sm">Try selecting a different technology filter</p>
            </div>
          </div>
        )}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-lg border border-gray-700 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">{selectedProject.name}</h2>
                <span className={`inline-block px-3 py-1 rounded text-sm font-medium ${
                  selectedProject.type === 'fullstack' 
                    ? 'bg-purple-600/20 text-purple-400 border border-purple-600/30'
                    : selectedProject.type === 'frontend'
                    ? 'bg-green-600/20 text-green-400 border border-green-600/30'
                    : 'bg-orange-600/20 text-orange-400 border border-orange-600/30'
                }`}>
                  {selectedProject.type.charAt(0).toUpperCase() + selectedProject.type.slice(1)}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-xs text-gray-400 text-right">
                  <div>ESC to close</div>
                  {selectedProject.images.length > 1 && (
                    <div>← → to navigate</div>
                  )}
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <FiX className="w-6 h-6 text-gray-400" />
                </button>
              </div>
              {/* <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
              >
                <FiX className="w-6 h-6 text-gray-400" />
              </button> */}
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {/* Project Links */}
              <div className="flex gap-4 mb-6">
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors"
                >
                  <FiGithub className="w-5 h-5" />
                  <span className="text-white">View Code</span>
                </a>
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
                  >
                    <FiExternalLink className="w-5 h-5" />
                    <span className="text-white">Live Demo</span>
                  </a>
                )}
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-2">Description</h3>
                <p className="text-gray-300">{selectedProject.description}</p>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {selectedProject.technologies.map((tech) => {
                    const techInfo = technologyIcons[tech];
                    if (!techInfo) return null;
                    
                    const IconComponent = techInfo.icon;
                    return (
                      <div key={tech} className="flex items-center gap-3 bg-gray-800/50 p-3 rounded-lg">
                        <IconComponent className={`w-6 h-6 ${techInfo.color}`} />
                        <span className="text-white font-medium">{tech}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Images */}
              {selectedProject.images.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-white">Screenshots</h3>
                    <span className="text-xs text-gray-400">Click image to view fullscreen</span>
                  </div>
                  <div className="relative">
                    <div 
                      className="aspect-video bg-gray-800 rounded-lg overflow-hidden group cursor-pointer"
                      onClick={openFullscreenImage}
                    >
                      <ImageWithPlaceholder
                        src={selectedProject.images[currentImageIndex].url}
                        alt={selectedProject.images[currentImageIndex].alt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      
                      {/* Zoom indicator */}
                      <div className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                    
                    {selectedProject.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors"
                        >
                          <FiChevronLeft className="w-6 h-6 text-white" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors"
                        >
                          <FiChevronRight className="w-6 h-6 text-white" />
                        </button>
                        
                        {/* Image indicators */}
                        <div className="flex justify-center mt-3 gap-2">
                          {selectedProject.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`w-2 h-2 rounded-full transition-colors ${
                                index === currentImageIndex ? 'bg-blue-400' : 'bg-gray-600'
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
      )}

      {/* Fullscreen Image Modal */}
      {isImageFullscreen && selectedProject && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={closeFullscreenImage}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 p-3 rounded-full transition-colors"
            >
              <FiX className="w-8 h-8 text-white" />
            </button>

            {/* ESC hint */}
            <div className="absolute top-4 left-4 z-10 bg-black/50 text-white px-3 py-2 rounded-lg">
              <span className="text-sm">Press ESC to close</span>
            </div>

            {/* Image navigation buttons */}
            {selectedProject.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-4 rounded-full transition-colors z-10"
                >
                  <FiChevronLeft className="w-8 h-8 text-white" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-4 rounded-full transition-colors z-10"
                >
                  <FiChevronRight className="w-8 h-8 text-white" />
                </button>
              </>
            )}

            {/* Fullscreen image */}
            <div className="max-w-full max-h-full">
              <ImageWithPlaceholder
                src={selectedProject.images[currentImageIndex].url}
                alt={selectedProject.images[currentImageIndex].alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Image info and indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
              <div className="bg-black/50 text-white px-4 py-2 rounded-lg mb-3">
                <p className="text-sm font-medium">{selectedProject.images[currentImageIndex].alt}</p>
                <p className="text-xs text-gray-300">
                  {currentImageIndex + 1} of {selectedProject.images.length}
                </p>
              </div>
              
              {/* Image indicators */}
              {selectedProject.images.length > 1 && (
                <div className="flex justify-center gap-2">
                  {selectedProject.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-blue-400' : 'bg-gray-600'
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

export default GitHubProjects;