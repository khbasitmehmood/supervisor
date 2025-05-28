import React from 'react'

function ProjectCardComponent() {
  return (
    <div>
      <div className="bg-gray-900 rounded-lg shadow-xl overflow-hidden border border-gray-700 hover:shadow-2xl transition-shadow duration-300 max-w-md mx-auto">
        <div className="p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-yellow-400">E-Commerce Platform</h3>
              <p className="text-sm text-gray-400">CS-401 • Spring 2024</p>
            </div>
            <span className="bg-yellow-600 text-yellow-100 text-xs px-3 py-1 rounded-full font-semibold tracking-wide shadow-md">Active</span>
          </div>
          <p className="mt-4 text-gray-300 text-sm leading-relaxed">
            Developing a full-stack e-commerce solution with React and Node.js
          </p>
          <div className="mt-6 flex items-center justify-between">
            <div className="flex -space-x-3">
              <img
                className="w-10 h-10 rounded-full border-2 border-gray-900 shadow-lg"
                src="https://randomuser.me/api/portraits/women/12.jpg"
                alt="Student 1"
              />
              <img
                className="w-10 h-10 rounded-full border-2 border-gray-900 shadow-lg"
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Student 2"
              />
            </div>
            <button className="text-yellow-400 hover:text-yellow-600 font-semibold text-sm transition-colors">
              View Details →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCardComponent
