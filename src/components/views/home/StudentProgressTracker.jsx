import React, { useEffect, useState } from 'react';
import { FiTarget } from 'react-icons/fi';

function StudentProgressTracker() {
  // For smooth animated progress bar effect
  const [progress, setProgress] = useState({
    literature: 0,
    implementation: 0,
    documentation: 0,
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress({
        literature: 85,
        implementation: 45,
        documentation: 30,
      });
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  // Helper to render each progress bar
  const renderProgress = (label, value, colorFrom, colorTo) => (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm text-gray-500">{value}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
        <div
          className="h-3 rounded-full transition-all duration-1000 ease-in-out"
          style={{
            width: `${value}%`,
            background: `linear-gradient(to right, ${colorFrom}, ${colorTo})`,
          }}
        />
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow p-6 max-w-md mx-auto">
      <h3 className="text-lg font-semibold text-gray-800 mb-6">Project Progress</h3>
      <div className="space-y-5">
        {renderProgress('Literature Review', progress.literature, '#3b82f6', '#60a5fa')}
        {renderProgress('Implementation', progress.implementation, '#fbbf24', '#fcd34d')}
        {renderProgress('Documentation', progress.documentation, '#ef4444', '#f87171')}
      </div>

      <div className="mt-8 pt-5 border-t border-gray-200 flex items-center space-x-3">
        <FiTarget className="text-yellow-500 w-6 h-6" />
        <div>
          <h4 className="text-sm font-semibold text-gray-700">Next Milestone</h4>
          <p className="text-sm text-gray-600">System Design Review - Due May 15, 2024</p>
        </div>
      </div>
    </div>
  );
}

export default StudentProgressTracker;
