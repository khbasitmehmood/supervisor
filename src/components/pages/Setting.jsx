import React, { useState, useEffect } from 'react';
import { FaUser, FaBell, FaLock, FaPalette, FaSignOutAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const tabs = [
  { id: 'profile', icon: <FaUser />, label: 'Profile' },
  { id: 'notifications', icon: <FaBell />, label: 'Notifications' },
  { id: 'security', icon: <FaLock />, label: 'Security' },
  { id: 'appearance', icon: <FaPalette />, label: 'Appearance' }
];

const Setting = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved === 'true';
  });
  const [notifications, setNotifications] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(true);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    // Also optionally toggle a class on <html> or <body> for global dark mode styles
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}>
      <div className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className={`w-full md:w-64 rounded-xl shadow-md overflow-hidden
          ${darkMode ? 'bg-gray-800' : 'bg-white'}
          flex md:flex-col flex-row md:gap-0 gap-2
          border border-gray-200 dark:border-gray-700
          md:h-auto
          `}>

          <header className="p-4 border-b border-gray-200 dark:border-gray-700 md:block hidden">
            <h2 className="font-semibold text-lg">Account Settings</h2>
          </header>

          <nav className="flex md:flex-col flex-row flex-wrap md:gap-1 gap-2 p-2 flex-1 overflow-x-auto md:overflow-visible">
            {tabs.map(tab => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={false}
                className={`
                  flex items-center md:w-full px-4 py-3 rounded-lg 
                  transition-colors duration-200
                  text-sm font-medium
                  ${
                    activeTab === tab.id
                      ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200'
                      : darkMode
                        ? 'hover:bg-gray-700 text-gray-300'
                        : 'hover:bg-gray-100 text-gray-700'
                  }
                `}
                aria-current={activeTab === tab.id ? 'page' : undefined}
              >
                <span className="mr-3 text-lg">{tab.icon}</span>
                <span>{tab.label}</span>
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center md:w-full px-4 py-3 rounded-lg text-left
                text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200
              `}
              onClick={() => alert('Logging out...')}
              aria-label="Logout"
            >
              <span className="mr-3 text-lg"><FaSignOutAlt /></span>
              <span>Logout</span>
            </motion.button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className={`rounded-xl shadow-md p-6
              transition-colors duration-300
              ${darkMode ? 'bg-gray-800' : 'bg-white'}
            `}
            role="tabpanel"
            aria-labelledby={`${activeTab}-tab`}
          >
            {/* Profile Tab */}
            {activeTab === 'profile' && (
              <>
                <h2 className="text-2xl font-semibold mb-6">Profile Information</h2>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={e => e.preventDefault()}>
                  {[
                    { label: 'Full Name', type: 'text', placeholder: 'Dr. John Smith', name: 'fullName' },
                    { label: 'Email', type: 'email', placeholder: 'john.smith@university.edu', name: 'email' },
                    { label: 'Department', type: 'text', placeholder: 'Computer Science', name: 'department' },
                    { label: 'Phone Number', type: 'tel', placeholder: '+1 (555) 123-4567', name: 'phone' },
                  ].map(({ label, type, placeholder, name }) => (
                    <div key={name}>
                      <label htmlFor={name} className="block text-sm font-medium mb-2">{label}</label>
                      <input
                        id={name}
                        name={name}
                        type={type}
                        placeholder={placeholder}
                        className={`w-full px-4 py-2 rounded-lg border
                          border-gray-300 dark:border-gray-600
                          dark:bg-gray-700
                          focus:outline-none focus:ring-2 focus:ring-indigo-500
                          transition-colors duration-200
                        `}
                      />
                    </div>
                  ))}
                  <div className="md:col-span-2">
                    <label htmlFor="bio" className="block text-sm font-medium mb-2">Bio</label>
                    <textarea
                      id="bio"
                      name="bio"
                      rows={4}
                      placeholder="Tell us about yourself..."
                      className={`w-full px-4 py-2 rounded-lg border
                        border-gray-300 dark:border-gray-600
                        dark:bg-gray-700
                        focus:outline-none focus:ring-2 focus:ring-indigo-500
                        transition-colors duration-200
                      `}
                    />
                  </div>
                  <div className="md:col-span-2 mt-6">
                    <button
                      type="submit"
                      className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </>
            )}

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <>
                <h2 className="text-2xl font-semibold mb-6">Notification Preferences</h2>
                <div className="space-y-6">
                  {/* Email Notifications */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Email Notifications</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Receive email alerts for important updates
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={emailAlerts}
                        onChange={() => setEmailAlerts(!emailAlerts)}
                        aria-checked={emailAlerts}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
                    </label>
                  </div>

                  {/* Push Notifications */}
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Push Notifications</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Receive app notifications
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={notifications}
                        onChange={() => setNotifications(!notifications)}
                        aria-checked={notifications}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
                    </label>
                  </div>

                  {/* Notification Types */}
                  <div className="pt-4">
                    <h3 className="font-medium mb-3">Notification Types</h3>
                    <div className="space-y-3">
                      {[
                        { id: 'meeting-reminders', label: 'Meeting Reminders' },
                        { id: 'student-updates', label: 'Student Progress Updates' },
                        { id: 'deadline-alerts', label: 'Deadline Alerts' },
                      ].map(({ id, label }) => (
                        <div key={id} className="flex items-center">
                          <input
                            id={id}
                            type="checkbox"
                            className="w-4 h-4 text-indigo-600 bg-gray-100 border-gray-300 rounded focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label htmlFor={id} className="ml-2 text-sm font-medium">{label}</label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Security Tab */}
            {activeTab === 'security' && (
              <>
                <h2 className="text-2xl font-semibold mb-6">Security Settings</h2>
                <form onSubmit={e => e.preventDefault()} className="space-y-6">
                  {[
                    { label: 'Current Password', type: 'password', placeholder: 'Enter current password', name: 'currentPassword' },
                    { label: 'New Password', type: 'password', placeholder: 'Enter new password', name: 'newPassword' },
                    { label: 'Confirm New Password', type: 'password', placeholder: 'Confirm new password', name: 'confirmPassword' },
                  ].map(({ label, type, placeholder, name }) => (
                    <div key={name}>
                      <label htmlFor={name} className="block text-sm font-medium mb-2">{label}</label>
                      <input
                        id={name}
                        name={name}
                        type={type}
                        placeholder={placeholder}
                        className={`w-full px-4 py-2 rounded-lg border
                          border-gray-300 dark:border-gray-600
                          dark:bg-gray-700
                          focus:outline-none focus:ring-2 focus:ring-indigo-500
                          transition-colors duration-200
                        `}
                      />
                    </div>
                  ))}
                  <div>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                    >
                      Update Password
                    </button>
                  </div>
                </form>
              </>
            )}

            {/* Appearance Tab */}
            {activeTab === 'appearance' && (
              <>
                <h2 className="text-2xl font-semibold mb-6">Appearance</h2>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Dark Mode</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Enable dark theme for better night viewing</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={darkMode}
                      onChange={() => setDarkMode(!darkMode)}
                      aria-checked={darkMode}
                      aria-label="Toggle Dark Mode"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-indigo-600"></div>
                  </label>
                </div>
              </>
            )}
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Setting;
