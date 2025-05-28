import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserCircle, FaEye, FaTrashAlt } from 'react-icons/fa';

const Students = () => {
  const [students, setStudents] = useState([
    {
      id: 101,
      name: 'Nina Patel',
      email: 'nina.patel@techschool.edu',
      project: 'Next-Gen Cybersecurity',
      status: 'Active',
    },
    {
      id: 102,
      name: 'Ethan Ramirez',
      email: 'ethan.ramirez@techschool.edu',
      project: 'Augmented Reality App',
      status: 'On Leave',
    },
    {
      id: 103,
      name: 'Sophia Chen',
      email: 'sophia.chen@techschool.edu',
      project: 'Cloud Infrastructure Automation',
      status: 'Active',
    },
  ]);

  const [search, setSearch] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    status: 'Active',
  });
  const [darkMode, setDarkMode] = useState(true); // default to dark mode
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? 'bg-gray-900' : 'bg-gray-50';
  }, [darkMode]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddStudent = (e) => {
    e.preventDefault();
    const newStudent = {
      id: Date.now(),
      ...formData,
    };
    setStudents((prev) => [...prev, newStudent]);
    setFormData({ name: '', email: '', project: '', status: 'Active' });
    setIsFormOpen(false);
  };

  const deleteStudent = (id) => {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, when: 'beforeChildren' } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 10 } },
  };

  const cardHoverVariants = {
    hover: {
      y: -6,
      boxShadow: darkMode
        ? '0 10px 20px rgba(255, 255, 255, 0.15)'
        : '0 10px 20px rgba(0, 0, 0, 0.15)',
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'text-gray-100 bg-gray-900' : 'text-gray-900 bg-gray-50'}`}>
      <div className={`min-h-screen bg-opacity-90 px-6 py-8 max-w-5xl mx-auto`}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4"
        >
          <div>
            <h1 className="text-4xl font-bold text-indigo-400 mb-1">Student Dashboard</h1>
            <p className="text-sm text-gray-400">
              Total: <span className="font-semibold">{students.length}</span> | Showing:{' '}
              <span className="font-semibold">{filteredStudents.length}</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <input
              type="text"
              placeholder="Search students..."
              className={`rounded-lg px-4 py-2 w-full md:w-60 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                darkMode ? 'bg-gray-800 text-gray-200 border-gray-700' : 'bg-white border-gray-300 text-gray-900'
              } border`}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsFormOpen(!isFormOpen)}
              className="px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold"
            >
              {isFormOpen ? 'Cancel' : '+ Add Student'}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </motion.button>
          </div>
        </motion.div>

        {/* Add Student Form */}
        <AnimatePresence>
          {isFormOpen && (
            <motion.form
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              onSubmit={handleAddStudent}
              className="bg-gray-800 rounded-xl p-6 mb-10 shadow-lg space-y-4"
            >
              <h2 className="text-2xl font-semibold text-indigo-400 mb-4">Add New Student</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="rounded-lg px-4 py-3 bg-gray-700 border border-gray-600 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="rounded-lg px-4 py-3 bg-gray-700 border border-gray-600 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <input
                  type="text"
                  name="project"
                  placeholder="Project Title"
                  value={formData.project}
                  onChange={handleInputChange}
                  required
                  className="rounded-lg px-4 py-3 bg-gray-700 border border-gray-600 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="rounded-lg px-4 py-3 bg-gray-700 border border-gray-600 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                >
                  <option value="Active">Active</option>
                  <option value="On Leave">On Leave</option>
                </select>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-semibold"
              >
                Add Student
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>

        {/* Student Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {filteredStudents.length === 0 ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center col-span-full text-gray-500"
            >
              No students found.
            </motion.p>
          ) : (
            filteredStudents.map(({ id, name, email, project, status }) => (
              <motion.div
                key={id}
                variants={itemVariants}
                whileHover="hover"
                className={`bg-gray-800 rounded-xl p-6 shadow-lg cursor-pointer flex flex-col items-center gap-3
                ${
                  status === 'Active'
                    ? 'border-2 border-indigo-400'
                    : 'border-2 border-gray-600'
                }`}
                variants={cardHoverVariants}
              >
                <FaUserCircle className="text-indigo-400 text-8xl" />

                <h3 className="text-xl font-semibold text-indigo-300">{name}</h3>
                <p className="text-gray-400 text-sm break-all">{email}</p>

                <div className="bg-gray-700 rounded-lg px-3 py-1 text-indigo-300 font-medium">
                  {project}
                </div>

                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    status === 'Active' ? 'bg-green-600 text-green-100' : 'bg-yellow-600 text-yellow-100'
                  }`}
                >
                  {status}
                </span>

                <div className="flex gap-6 mt-3 text-indigo-300">
                  <button
                    aria-label={`View ${name}'s profile`}
                    className="hover:text-indigo-500 transition-colors"
                    onClick={() => alert(`Viewing profile of ${name}`)}
                  >
                    <FaEye size={20} />
                  </button>
                  <button
                    aria-label={`Delete ${name}`}
                    className="hover:text-red-600 transition-colors"
                    onClick={() => {
                      if (window.confirm(`Delete ${name}? This action cannot be undone.`)) {
                        deleteStudent(id);
                      }
                    }}
                  >
                    <FaTrashAlt size={20} />
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Students;
