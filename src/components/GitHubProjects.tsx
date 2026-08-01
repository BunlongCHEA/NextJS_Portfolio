import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { getGitHubImageUrl, projects, Project, ProjectImage } from '@/data/githubProjectsData';
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
  SiRedis,
  SiMysql,
  SiPostgresql,
  
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiGooglecloud,
  SiDigitalocean,
  SiAnsible,
  SiRancher,
  SiArgo,
  SiTerraform,
} from 'react-icons/si';
import { 
  DiMsqlServer
} from 'react-icons/di';
import { 
  FaJava,
  FaPhp,
  FaGolang
} from 'react-icons/fa6';
import { 
  TbBrandCSharp
} from 'react-icons/tb';
import { FiGithub, FiExternalLink, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// Mapping technology names to their icons and colors
const technologyIcons: Record<string, { icon: React.ComponentType<{ className?: string }>, color: string }> = {
  'JavaScript': { icon: SiJavascript, color: 'text-yellow-400' },
  'TypeScript': { icon: SiTypescript, color: 'text-blue-400' },
  'Tailwind CSS': { icon: SiTailwindcss, color: 'text-sky-400' },
  'Bootstrap': { icon: SiBootstrap, color: 'text-purple-600' },
  'Java': { icon: FaJava, color: 'text-orange-400' },
  'C#': { icon: TbBrandCSharp, color: 'text-purple-400' },
  'PHP': { icon: FaPhp, color: 'text-purple-500' },
  'Golang': { icon: FaGolang, color: 'text-blue-500' },

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
  'Redis': { icon: SiRedis, color: 'text-red-500' },
  'MySQL': { icon: SiMysql, color: 'text-blue-500' },
  'PostgreSQL': { icon: SiPostgresql, color: 'text-blue-400' },
  'SQL Server': { icon: DiMsqlServer, color: 'text-red-500' },

  'Ansible': { icon: SiAnsible, color: 'text-red-400' },
  'Rancher': { icon: SiRancher, color: 'text-blue-400' },
  'Terraform': { icon: SiTerraform , color: 'text-purple-500' },
  'ArgoCD': { icon: SiArgo, color: 'text-orange-700' },
  'Docker': { icon: SiDocker, color: 'text-blue-400' },
  'Kubernetes': { icon: SiKubernetes, color: 'text-blue-500' },
  'Jenkins': { icon: SiJenkins, color: 'text-red-600' },
  'GCP': { icon: SiGooglecloud, color: 'text-blue-400' },
  'DigitalOcean': { icon: SiDigitalocean, color: 'text-blue-600' },
};

interface GitHubProjectsProps {
  selectedLanguage: string | null;
}

// ─── Grouping Helper ──────────────────────────────────────────────────────────

/**
 * Normalise relatedProject to always be an array of IDs (empty if none).
 */
function getRelatedIds(project: Project): string[] {
  if (!project.relatedProject) return [];
  return Array.isArray(project.relatedProject)
    ? project.relatedProject
    : [project.relatedProject];
}

/**
 * Build groups where all mutually-related projects (2 or more) are collected
 * into a single "multi" group. Single projects stay standalone.
 *
 * Algorithm:
 * 1. Build an adjacency list of bidirectional edges.
 * 2. Run a simple BFS/DFS to find connected components.
 * 3. Each component with >1 member becomes a group; each singleton stays solo.
 */
function buildGroups(filteredProjects: Project[]): Array<{
  key: string;
  projects: Project[];
  type: 'single' | 'multi';
}> {
  const idSet = new Set(filteredProjects.map(p => p.id));

  // Adjacency list (only within the filtered set)
  const adj = new Map<string, Set<string>>();
  for (const p of filteredProjects) {
    if (!adj.has(p.id)) adj.set(p.id, new Set());
    for (const relId of getRelatedIds(p)) {
      if (!idSet.has(relId)) continue; // related project filtered out — skip
      adj.get(p.id)!.add(relId);
      if (!adj.has(relId)) adj.set(relId, new Set());
      adj.get(relId)!.add(p.id);
    }
  }

  // BFS to find connected components
  const visited = new Set<string>();
  const components: string[][] = [];

  for (const p of filteredProjects) {
    if (visited.has(p.id)) continue;
    const component: string[] = [];
    const queue = [p.id];
    visited.add(p.id);
    while (queue.length) {
      const cur = queue.shift()!;
      component.push(cur);
      for (const neighbour of adj.get(cur) ?? []) {
        if (!visited.has(neighbour)) {
          visited.add(neighbour);
          queue.push(neighbour);
        }
      }
    }
    components.push(component);
  }

  // Map component id lists → group objects (preserving original order)
  const projectById = new Map(filteredProjects.map(p => [p.id, p]));

  return components.map(ids => {
    // Sort ids by original filteredProjects order for stable rendering
    const ordered = filteredProjects
      .filter(p => ids.includes(p.id))
      .map(p => p);

    const key = ordered.map(p => p.id).sort().join('-');
    return {
      key,
      projects: ordered,
      type: ordered.length > 1 ? 'multi' : 'single',
    } as const;
  });
}

// ─── Component ────────────────────────────────────────────────────────────────

const GitHubProjects: React.FC<GitHubProjectsProps> = ({ selectedLanguage }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);

  // Filter projects based on selected language
  const filteredProjects = selectedLanguage
    ? projects.filter(project =>
        project.technologies.some(tech =>
          tech.toLowerCase().includes(selectedLanguage.toLowerCase())
        )
      )
    : projects;

  const groupedProjects = buildGroups(filteredProjects);

  // --- Image helpers ---

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

  // ESC / keyboard handler
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (isImageFullscreen) {
          setIsImageFullscreen(false);
        } else if (selectedProject) {
          closeModal();
        }
        return;
      }

      if (selectedProject && selectedProject.images.length > 1) {
        switch (event.key) {
          case 'ArrowLeft': case 'a': case 'A':
            event.preventDefault(); prevImage(); break;
          case 'ArrowRight': case 'd': case 'D':
            event.preventDefault(); nextImage(); break;
          case ' ':
            event.preventDefault(); nextImage(); break;
        }
      }

      if (event.key === 'Enter' && selectedProject && !isImageFullscreen) {
        event.preventDefault();
        setIsImageFullscreen(true);
      }
    };

    if (selectedProject || isImageFullscreen) {
      document.addEventListener('keydown', handleEscKey);
    }
    return () => { document.removeEventListener('keydown', handleEscKey); };
  }, [selectedProject, isImageFullscreen, currentImageIndex]);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
    setIsImageFullscreen(false);
  };

  const nextImage = () => {
    if (selectedProject && selectedProject.images.length > 1) {
      setCurrentImageIndex(prev =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject && selectedProject.images.length > 1) {
      setCurrentImageIndex(prev =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  // ─── Type badge helper ───────────────────────────────────────────────────

  const typeBadgeClass = (type: Project['type']) => {
    switch (type) {
      case 'fullstack':  return 'bg-purple-600/20 text-purple-400 border border-purple-600/30';
      case 'frontend':   return 'bg-green-600/20 text-green-400 border border-green-600/30';
      case 'backend':    return 'bg-orange-600/20 text-orange-400 border border-orange-600/30';
      case 'automation': return 'bg-red-600/20 text-red-400 border border-red-600/30';
      default:           return '';
    }
  };

  // ─── Group header label ──────────────────────────────────────────────────

  const groupHeaderLabel = (group: ReturnType<typeof buildGroups>[number]) => {
    const types = [...new Set(group.projects.map(p => p.type))];
    if (types.includes('automation')) return { label: 'Automation & Infrastructure Project', color: 'text-red-400' };
    if (types.includes('fullstack'))  return { label: 'Full Stack Project', color: 'text-purple-400' };
    if (types.length > 1)             return { label: 'Full Stack Project', color: 'text-blue-400' };
    return { label: `${types[0].charAt(0).toUpperCase()}${types[0].slice(1)} Project`, color: 'text-blue-400' };
  };

  // ─── Render ──────────────────────────────────────────────────────────────

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
          {groupedProjects.map((group) => {
            const header = groupHeaderLabel(group);

            if (group.type === 'multi') {
              // ── Multi-project card (2+ related projects) ──────────────────
              return (
                <div key={group.key} className="bg-gray-900/70 rounded-lg border border-gray-700/50 backdrop-blur-sm overflow-hidden hover:border-blue-500/50 transition-all duration-300">
                  <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-4 py-2 border-b border-gray-700/50">
                    <span className={`text-xs font-semibold uppercase tracking-wide ${header.color}`}>
                      {header.label}
                    </span>
                  </div>

                  {group.projects.map((project) => (
                    <div
                      key={project.id}
                      onClick={() => openProjectModal(project)}
                      className="p-4 cursor-pointer hover:bg-gray-800/50 transition-colors duration-200 border-b border-gray-700/30 last:border-b-0 group"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white mb-1 hover:text-blue-400 transition-colors">
                            {project.name}
                          </h3>
                          <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${typeBadgeClass(project.type)}`}>
                            {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                          </span>
                        </div>
                        <FiGithub className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                      </div>

                      <p className="text-gray-300 text-sm mb-3 line-clamp-2">{project.description}</p>

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
              );
            }

            // ── Single project card ─────────────────────────────────────────
            return group.projects.map((project) => (
              <div
                key={project.id}
                onClick={() => openProjectModal(project)}
                className="bg-gray-900/70 rounded-lg border border-gray-700/50 backdrop-blur-sm overflow-hidden hover:border-blue-500/50 transition-all duration-300 cursor-pointer group"
              >
                {project.headerTitle && (
                  <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 px-4 py-2 border-b border-gray-700/50">
                    <span className="text-xs font-semibold text-purple-400 uppercase tracking-wide">
                      {project.headerTitle}
                    </span>
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {project.name}
                      </h3>
                      <span className={`inline-block px-3 py-1 rounded text-sm font-medium ${typeBadgeClass(project.type)}`}>
                        {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                      </span>
                    </div>
                    <FiGithub className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                  </div>

                  <p className="text-gray-300 mb-4 line-clamp-3">{project.description}</p>

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
            ));
          })}
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
                <span className={`inline-block px-3 py-1 rounded text-sm font-medium ${typeBadgeClass(selectedProject.type)}`}>
                  {selectedProject.type.charAt(0).toUpperCase() + selectedProject.type.slice(1)}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-xs text-gray-400 text-right">
                  <div>ESC to close</div>
                  {selectedProject.images.length > 1 && <div>← → to navigate</div>}
                </div>
                <button onClick={closeModal} className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
                  <FiX className="w-6 h-6 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6">
              {/* Project Links */}
              <div className="flex flex-wrap gap-4 mb-6">
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
                  Array.isArray(selectedProject.liveUrl) ? (
                    selectedProject.liveUrl.map((url, index) => (
                      <a
                        key={index}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
                      >
                        <FiExternalLink className="w-5 h-5" />
                        <span className="text-white">
                          {(selectedProject.liveUrl as string[]).length > 1 ? `Live Demo ${index + 1}` : 'Live Demo'}
                        </span>
                      </a>
                    ))
                  ) : (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
                    >
                      <FiExternalLink className="w-5 h-5" />
                      <span className="text-white">Live Demo</span>
                    </a>
                  )
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
                      onClick={() => setIsImageFullscreen(true)}
                    >
                      <ImageWithPlaceholder
                        src={selectedProject.images[currentImageIndex].url}
                        alt={selectedProject.images[currentImageIndex].alt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>

                    {selectedProject.images.length > 1 && (
                      <>
                        <button onClick={prevImage} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors">
                          <FiChevronLeft className="w-6 h-6 text-white" />
                        </button>
                        <button onClick={nextImage} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors">
                          <FiChevronRight className="w-6 h-6 text-white" />
                        </button>
                        <div className="flex justify-center mt-3 gap-2">
                          {selectedProject.images.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentImageIndex(index)}
                              className={`w-2 h-2 rounded-full transition-colors ${index === currentImageIndex ? 'bg-blue-400' : 'bg-gray-600'}`}
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
            <button onClick={() => setIsImageFullscreen(false)} className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 p-3 rounded-full transition-colors">
              <FiX className="w-8 h-8 text-white" />
            </button>
            <div className="absolute top-4 left-4 z-10 bg-black/50 text-white px-3 py-2 rounded-lg">
              <span className="text-sm">Press ESC to close</span>
            </div>

            {selectedProject.images.length > 1 && (
              <>
                <button onClick={prevImage} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-4 rounded-full transition-colors z-10">
                  <FiChevronLeft className="w-8 h-8 text-white" />
                </button>
                <button onClick={nextImage} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-4 rounded-full transition-colors z-10">
                  <FiChevronRight className="w-8 h-8 text-white" />
                </button>
              </>
            )}

            <div className="max-w-full max-h-full">
              <ImageWithPlaceholder
                src={selectedProject.images[currentImageIndex].url}
                alt={selectedProject.images[currentImageIndex].alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
              <div className="bg-black/50 text-white px-4 py-2 rounded-lg mb-3">
                <p className="text-sm font-medium">{selectedProject.images[currentImageIndex].alt}</p>
                <p className="text-xs text-gray-300">{currentImageIndex + 1} of {selectedProject.images.length}</p>
              </div>
              {selectedProject.images.length > 1 && (
                <div className="flex justify-center gap-2">
                  {selectedProject.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${index === currentImageIndex ? 'bg-blue-400' : 'bg-gray-600'}`}
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