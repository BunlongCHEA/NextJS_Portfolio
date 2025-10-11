'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import ExperienceList from '@/components/ExperienceList'
import CodeEditor from '@/components/CodeEditor'
import AnimatedBackground from '@/components/AnimatedBackground'
import LanguageSwiper from '@/components/LanguageSwiper'
import GitHubProjects from '@/components/GitHubProjects'
import ExperienceContainer from '@/components/ExperienceContainer'

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  return (
    <main className="min-h-screen relative">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Content Layer */}
      <div className="relative z-10">
        {/* Header with name and description */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <Header />
        </div>
        
        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Column - Experience List */}
            <div className="order-2 lg:order-1">
              <ExperienceContainer />
            </div>
            
            {/* Right Column - Code Editor */}
            <div className="order-1 lg:order-2">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">Personality Lists</h2>
                <p className="text-blue-200">Interactive professional expertise and personality</p>
              </div>
              <CodeEditor />
            </div>
            
          </div>

          {/* Language Filter Swiper - Full Width */}
          <div className="mt-8">
            <LanguageSwiper 
              onLanguageSelect={setSelectedLanguage} 
              selectedLanguage={selectedLanguage} 
            />
          </div>

          {/* GitHub Projects Display */}
          <GitHubProjects selectedLanguage={selectedLanguage} />
        </div>
      </div>
    </main>
  )
}