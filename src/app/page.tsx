'use client'

import Header from '@/components/Header'
import ExperienceList from '@/components/ExperienceList'
import CodeEditor from '@/components/CodeEditor'
import AnimatedBackground from '@/components/AnimatedBackground'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Animated JSON Background */}
      <AnimatedBackground />
      
      {/* Header with name and description */}
      <div className="relative z-10">
        <Header />
      </div>
      
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column - Experience List */}
          <div className="order-2 lg:order-1">
            <ExperienceList />
          </div>
          
          {/* Right Column - Code Editor */}
          <div className="order-1 lg:order-2">
            <div className="sticky top-8">
              <div className="mb-6 bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700/50">
                <h2 className="text-2xl font-bold text-white mb-2">Experience On Skills</h2>
                <p className="text-blue-300">Experience on tools and usage</p>
              </div>
              <CodeEditor />
            </div>
          </div>
          
        </div>
      </div>
    </main>
  )
}