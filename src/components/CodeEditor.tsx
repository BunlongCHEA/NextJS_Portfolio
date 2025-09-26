// 'use client'

import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { Play, Code2, Terminal, Lock } from 'lucide-react';

const CodeEditor: React.FC = () => {
  const [output, setOutput] = useState<string>('');

  const initialCode = `// Job Title Functions with Skills
function DataEngineer() {
    console.log("=== DATA ENGINEER SKILLS ===");
    console.log("• Python & SQL for data manipulation");
    console.log("• Apache Spark for big data processing");
    console.log("• ETL pipeline development");
    console.log("• Data warehousing with Snowflake/Redshift");
    console.log("• Apache Kafka for real-time streaming");
    console.log("• AWS/GCP data services");
    console.log("• Docker containerization");
    console.log("• Data modeling and schema design");
    return "Data Engineering expertise loaded!";
}

function DevOps() {
    console.log("=== DEVOPS ENGINEER SKILLS ===");
    console.log("• Kubernetes orchestration");
    console.log("• CI/CD pipeline automation");
    console.log("• Infrastructure as Code (Terraform)");
    console.log("• Docker containerization");
    console.log("• Jenkins & GitLab CI");
    console.log("• AWS/Azure cloud platforms");
    console.log("• Monitoring with Prometheus/Grafana");
    console.log("• Linux system administration");
    return "DevOps expertise loaded!";
}

// Execute functions
console.log("🚀 Loading professional skills...");
console.log("");
DataEngineer();
console.log("");
DevOps();
console.log("");
console.log("✅ All skills loaded successfully!");`;

  const handleRunCode = () => {
    // Simulate code execution
    const logs: string[] = [];
    const originalLog = console.log;
    
    // Override console.log to capture output
    console.log = (...args: unknown[]) => {
      logs.push(args.join(' '));
    };

    try {
      // Execute the code
      eval(initialCode);
      
      // Restore original console.log
      console.log = originalLog;
      
      // Set the output
      setOutput(logs.join('\n'));
    } catch (error) {
      console.log = originalLog;
      setOutput(`Error: ${error}`);
    }
  };

  return (
    <div className="bg-slate-900/95 backdrop-blur-sm border border-slate-700/50 rounded-lg shadow-2xl overflow-hidden h-[620px] flex flex-col">
      {/* Editor Header */}
      <div className="bg-slate-800/90 px-4 py-3 flex items-center justify-between border-b border-slate-700/50">
        <div className="flex items-center gap-3">
          <Code2 className="w-5 h-5 text-blue-400" />
          <span className="text-white font-medium">skills-demo.js</span>
          <div className="flex gap-2 ml-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex items-center gap-2 ml-4 text-slate-400">
            <Lock className="w-3 h-3" />
            <span className="text-xs">Read Only</span>
          </div>
        </div>
        
        <button
          onClick={handleRunCode}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-green-500/25"
        >
          <Play className="w-4 h-4" />
          Run Code
        </button>
      </div>

      {/* Code Display Area */}
      <div className="flex-1 bg-slate-900 p-4 overflow-auto">
        <pre className="text-sm font-mono text-slate-300 leading-relaxed">
          <code className="text-slate-300">
            {initialCode.split('\n').map((line, index) => (
              <div key={index} className="flex">
                <span className="text-slate-500 select-none w-8 text-right pr-3 flex-shrink-0">
                  {index + 1}
                </span>
                <span className="flex-1">
                  {line.includes('function') && (
                    <span className="text-blue-400">{line}</span>
                  )}
                  {line.includes('console.log') && (
                    <span className="text-green-400">{line}</span>
                  )}
                  {line.includes('//') && (
                    <span className="text-slate-500">{line}</span>
                  )}
                  {line.includes('return') && (
                    <span className="text-purple-400">{line}</span>
                  )}
                  {!line.includes('function') && !line.includes('console.log') && !line.includes('//') && !line.includes('return') && (
                    <span>{line}</span>
                  )}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>

      {/* Console Output */}
      {output && (
        <div className="bg-black border-t border-slate-700/50 max-h-48 flex flex-col">
          <div className="bg-slate-800/90 px-4 py-2 flex items-center gap-2 border-b border-slate-700/50">
            <Terminal className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-medium">Console Output</span>
          </div>
          <div className="p-4 font-mono text-sm text-green-400 overflow-y-auto flex-1">
            <pre className="whitespace-pre-wrap">{output}</pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default CodeEditor;