import React from 'react'
import { FaBuilding, FaCheckCircle, FaTimesCircle } from 'react-icons/fa'

const SupervisorCard = ({ name, department, expertise, availability, imageUrl }) => {
  const isAvailable = availability === 'Available'

  return (
    <div className="max-w-sm mx-auto bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-lg border border-indigo-200 hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
      <div className="p-6 flex flex-col items-center text-center">
        <div className="relative mb-4">
          <img
            className="w-20 h-20 rounded-full object-cover border-4 border-indigo-400 shadow-sm"
            src={imageUrl || 'https://randomuser.me/api/portraits/men/41.jpg'}
            alt={name}
          />
          {/* Glowing ring effect */}
          <span
            className={`absolute top-0 left-0 w-20 h-20 rounded-full ${
              isAvailable ? 'ring-4 ring-green-400 ring-opacity-60' : 'ring-4 ring-gray-300 ring-opacity-40'
            } animate-pulse`}
          />
        </div>

        <h3 className="text-xl font-semibold text-indigo-900 mb-1">{name}</h3>
        
        <div className="flex items-center text-indigo-600 text-sm mb-3 space-x-2">
          <FaBuilding className="w-4 h-4" />
          <span>{department}</span>
        </div>

        <div className="w-full mb-4">
          <h4 className="text-indigo-700 font-semibold mb-2">Expertise</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {expertise.map((skill, i) => (
              <span
                key={i}
                className="bg-indigo-100 text-indigo-700 text-xs font-medium px-3 py-1 rounded-full select-none"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between w-full">
          <div className={`flex items-center space-x-2 text-sm font-semibold ${
            isAvailable ? 'text-green-600' : 'text-red-600'
          }`}>
            {isAvailable ? (
              <FaCheckCircle className="w-5 h-5" />
            ) : (
              <FaTimesCircle className="w-5 h-5" />
            )}
            <span>{availability}</span>
          </div>

          <button
            type="button"
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-full px-5 py-2 shadow-md transition"
          >
            View Profile
          </button>
        </div>
      </div>
    </div>
  )
}

export default SupervisorCard
