import React from "react";
import { User, MapPin, Mail, Github, Gitlab, Linkedin } from 'lucide-react';

// TypeScript interfaces for type safety
interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
}

interface SocialLinks {
  github: string;
  gitlab: string;
  linkedin: string;
}

const Header: React.FC = () => {
  // TypeScript: Defining typed objects
  const personalInfo: PersonalInfo = {
    name: "CHEA BUNLONG",
    title: "Data Engineer & DevOps Professional",
    location: "Phnom Penh, Cambodia",
    email: "c.bunlong168@gmail.com"
  };

  const socialLinks: SocialLinks = {
    github: "https://github.com/BunlongCHEA",
    gitlab: "https://gitlab.com/BunlongCHEA",
    linkedin: "https://www.linkedin.com/in/chea-bunlong-479a2620b/"
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
          </div>
        </div>

        {/* Right Section - Social Links */}
        <div className="flex gap-4">
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

      {/* Skills Summary */}
      <div className="mt-6 pt-6 border-t border-white/20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
            <h3 className="font-semibold mb-1">Data Engineering</h3>
            <p className="text-blue-100">Python, SQL, ETL, Big Data, Hadoop</p>
          </div>
          <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
            <h3 className="font-semibold mb-1">DevOps</h3>
            <p className="text-blue-100">Docker, Kubernetes, CI/CD</p>
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