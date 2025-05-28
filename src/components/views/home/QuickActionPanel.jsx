import React from 'react'

function QuickActionPanel() {
  return (
    <div className="max-w-md mx-auto bg-gradient-to-tr from-indigo-50 to-white rounded-xl shadow-lg p-6">
      <h3 className="text-2xl font-bold text-indigo-700 mb-6 select-none">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-5">
        {/* Schedule Meeting */}
        <button
          type="button"
          className="flex flex-col items-center justify-center p-5 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-transparent hover:border-indigo-300"
          aria-label="Schedule Meeting"
        >
          <div className="bg-indigo-100 text-indigo-600 p-4 rounded-full mb-3 flex items-center justify-center">
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <span className="text-indigo-700 font-semibold text-base">Schedule Meeting</span>
        </button>

        {/* Add Project */}
        <button
          type="button"
          className="flex flex-col items-center justify-center p-5 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-transparent hover:border-green-300"
          aria-label="Add Project"
        >
          <div className="bg-green-100 text-green-600 p-4 rounded-full mb-3 flex items-center justify-center">
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <span className="text-green-700 font-semibold text-base">Add Project</span>
        </button>

        {/* Add Student */}
        <button
          type="button"
          className="flex flex-col items-center justify-center p-5 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-transparent hover:border-purple-300"
          aria-label="Add Student"
        >
          <div className="bg-purple-100 text-purple-600 p-4 rounded-full mb-3 flex items-center justify-center">
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
              <path d="M12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <span className="text-purple-700 font-semibold text-base">Add Student</span>
        </button>

        {/* Add Feedback */}
        <button
          type="button"
          className="flex flex-col items-center justify-center p-5 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow border border-transparent hover:border-yellow-300"
          aria-label="Add Feedback"
        >
          <div className="bg-yellow-100 text-yellow-600 p-4 rounded-full mb-3 flex items-center justify-center">
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
          <span className="text-yellow-700 font-semibold text-base">Add Feedback</span>
        </button>
      </div>
    </div>
  )
}

export default QuickActionPanel
