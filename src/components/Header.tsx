import React, { useState } from "react";
import { User, MapPin, Mail, Github, Gitlab, Linkedin, Download, Smartphone, ChevronDown, ChevronUp } from 'lucide-react';
import { PersonalInfo, SocialLinks } from '@/types';

const Header: React.FC = () => {
  const [showFullBio, setShowFullBio] = useState(false);
  
  // TypeScript: Defining typed objects
  const personalInfo: PersonalInfo = {
    name: "CHEA BUNLONG",
    title: "Data Engineer & DevOps Engineer",
    location: "Phnom Penh, Cambodia",
    email: "c.bunlong168@gmail.com",
    phone: "+855 70 639 488",
    cvUrl: "https://drive.google.com/file/d/1LT5UcnB-09m2GFjF14ul3ejh59KtcIAL/view?usp=drive_link",
    biography:
    [
      "Passionate about building robust, scalable, automated data pipelines.",
      "Experienced in end-to-end data engineering, DevOps, and cloud architecture.",
      "Experienced and enjoy learning in containerization, CI/CD automation, and infrastructure as code",
      "Love to mentoring junior engineer, cross-functional collaboration, open-minded to asking & listening to understand technical, business team to solve and provide the optimized solution.",
      "Curious and enjoy to learning new technology, best code practice, and tools to improve work efficiency.",
      "Committed to continuous learning and staying updated with latest technologies and industry trends.",
      "Enthusiastic and engaging to research new technology, and share knowledge with fellow engineer and friend. One of the example for my research in university is -- Factors influencing knowledge sharing practices among undergraduate students at a Cambodian higher education language institute at the Institute of Foreign Languages; as we conduct survey, interview, and analyze data to finding improvement in sharing knowledge among students.",
    ]
  };

  const socialLinks: SocialLinks = {
    github: "https://github.com/BunlongCHEA",
    gitlab: "https://gitlab.com/BunlongCHEA",
    linkedin: "https://www.linkedin.com/in/chea-bunlong-479a2620b/"
  };

  // TypeScript: Function with download CV functionality
  const handleCVDownload = (): void => {
    window.open(personalInfo.cvUrl, '_blank');
  };

  // TypeScript: Function with typed parameters and return type
  const handleContactClick = (contactType: string): void => {
    console.log(`Contacting via ${contactType}`);
  };

  // TypeScript: Event handler with proper typing
  const handleSocialLink = (event: React.MouseEvent<HTMLAnchorElement>, platform: keyof SocialLinks): void => {
    event.preventDefault();
    window.open(socialLinks[platform], '_blank');
  };

  return (
    <header className="gradient-bg text-white shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        
        {/* Left Section - Personal Info */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <User className="w-8 h-8" />
            <h1 className="text-3xl md:text-4xl font-bold">{personalInfo.name}</h1>
          </div>
          
          <p className="text-xl text-blue-100 mb-4 font-medium">
            {personalInfo.title}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 text-blue-100">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{personalInfo.location}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <button 
                onClick={() => handleContactClick('email')}
                className="hover:text-white transition-colors duration-200"
              >
                {personalInfo.email}
              </button>
            </div>

            <div className="flex items-center gap-2">
              <Smartphone className="w-4 h-4" />
              <span>{personalInfo.phone}</span>
            </div>
          </div>
        </div>

        {/* Right Section - Social Links */}
        <div className="flex gap-4">
          <button
            onClick={handleCVDownload}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all duration-200 backdrop-blur-sm"
          >
            <Download className="w-5 h-5" />
            <span className="hidden sm:block">CV</span>
          </button>

          <a
            href="#"
            onClick={(e) => handleSocialLink(e, 'github')}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all duration-200 backdrop-blur-sm"
          >
            <Github className="w-5 h-5" />
            <span className="hidden sm:block">GitHub</span>
          </a>

          {/* <a
            href="#"
            onClick={(e) => handleSocialLink(e, 'gitlab')}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all duration-200 backdrop-blur-sm"
          >
            <Linkedin className="w-5 h-5" />
            <span className="hidden sm:block">GitLab</span>
          </a> */}
          
          <a
            href="#"
            onClick={(e) => handleSocialLink(e, 'linkedin')}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all duration-200 backdrop-blur-sm"
          >
            <Linkedin className="w-5 h-5" />
            <span className="hidden sm:block">LinkedIn</span>
          </a>
        </div>
      </div>

      {/* Biography Section */}
      <div className="flex-1 mt-4">
        <h3 className="text-lg font-semibold text-blue-100 mb-3">About Me</h3>
        <ul className="space-y-2">
          {personalInfo.biography?.slice(0, showFullBio ? personalInfo.biography.length : 6).map((point, index) => (
            <li key={index} className="flex items-start gap-2 text-blue-100">
              <div className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm leading-relaxed">{point}</span>
            </li>
          ))}
        </ul>
        
        {personalInfo.biography && personalInfo.biography.length > 6 && (
          <button
            onClick={() => setShowFullBio(!showFullBio)}
            className="flex items-center gap-2 mt-3 text-blue-200 hover:text-white transition-colors duration-200 text-sm"
          >
            {showFullBio ? (
              <>
                <ChevronUp className="w-4 h-4" />
                <span>Read Less</span>
              </>
            ) : (
              <>
                <ChevronDown className="w-4 h-4" />
                <span>Read More</span>
              </>
            )}
          </button>
        )}
      </div>

      {/* Skills Summary */}
      <div className="mt-6 pt-6 border-t border-white/20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
            <h3 className="font-semibold mb-1">Data Engineering</h3>
            <p className="text-blue-100">Python, SQL, NoSQL, Streaming(Kafka, RabbiMQ), ETL, Big Data, Hadoop</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
            <h3 className="font-semibold mb-1">DevOps</h3>
            <p className="text-blue-100">Docker, Kubernetes, GitLab, Jenkins, CI/CD</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
            <h3 className="font-semibold mb-1">Cloud Platforms</h3>
            <p className="text-blue-100">GCP, DigitalOcean, AWS</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;