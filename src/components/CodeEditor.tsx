// 'use client'

import React, { useState } from 'react';
import Editor from '@monaco-editor/react';
import { Play, Code2, Terminal } from 'lucide-react';

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
    <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
      {/* Editor Header */}
      <div className="bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-700">
        <div className="flex items-center gap-3">
          <Code2 className="w-5 h-5 text-blue-400" />
          <span className="text-white font-medium">skills-demo.js</span>
          <div className="flex gap-2 ml-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
        </div>
        
        <button
          onClick={handleRunCode}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white text-sm font-medium transition-colors duration-200"
        >
          <Play className="w-4 h-4" />
          Run Code
        </button>
      </div>

      {/* Code Editor */}
      <div className="h-96">
        <Editor
          defaultLanguage="javascript"
          defaultValue={initialCode}
          theme="vs-dark"
          options={{
            fontSize: 14,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            wordWrap: 'on',
            lineNumbers: 'on',
            renderWhitespace: 'selection',
            fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
          }}
        />
      </div>

      {/* Console Output */}
      {output && (
        <div className="bg-black border-t border-gray-700">
          <div className="bg-gray-800 px-4 py-2 flex items-center gap-2 border-b border-gray-700">
            <Terminal className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-medium">Console Output</span>
          </div>
          <div className="p-4 font-mono text-sm text-green-400 max-h-48 overflow-y-auto">
            <pre className="whitespace-pre-wrap">{output}</pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default CodeEditor;