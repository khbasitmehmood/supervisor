import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Draggable from 'react-draggable';
import {
  Home,
  FileText,
  Users,
  Calendar,
  Settings,
  LogOut,
  Menu,
  X,
  Layout
} from 'lucide-react';

const navItems = [
  { to: '/', label: 'Dashboard', icon: <Home size={20} /> },
  { to: '/projects', label: 'Projects', icon: <FileText size={20} /> },
  { to: '/students', label: 'Students', icon: <Users size={20} /> },
  { to: '/meetings', label: 'Meetings', icon: <Calendar size={20} /> },
  { to: '/settings', label: 'Settings', icon: <Settings size={20} /> }
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [vertical, setVertical] = useState(false);
  const nodeRef = useRef(null);

  return (
    <>
      {/* Draggable Navbar */}
      <Draggable nodeRef={nodeRef}>
        <div
          ref={nodeRef}
          className={`fixed z-50 backdrop-blur-lg bg-white/30 rounded-2xl shadow-xl p-2 ${
            vertical
              ? 'flex flex-col space-y-2'
              : 'flex flex-row justify-between items-center space-x-2'
          }`}
          style={{
            top: '30%',
            left: '30%',
            cursor: 'move'
          }}
        >
          {/* Nav Items */}
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="flex flex-col items-center flex-1 py-2 hover:bg-white/40 rounded-lg transition"
            >
              {item.icon}
              <span className="text-sm mt-1 font-medium">{item.label}</span>
            </Link>
          ))}

          {/* Toggle Layout Icon as a Nav Item */}
          <button
            onClick={() => setVertical(!vertical)}
            className="flex flex-col items-center flex-1 py-2 hover:bg-white/40 rounded-lg transition"
          >
            <Layout size={20} />
            <span className="text-sm mt-1 font-medium">Layout</span>
          </button>

          {/* Logout Icon */}
          <Link
            to="/login"
            className="bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded-full shadow-md transition"
          >
            <LogOut size={18} />
          </Link>
        </div>
      </Draggable>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="fixed bottom-6 right-6 bg-indigo-500 hover:bg-indigo-600 text-white p-3 rounded-full shadow-lg z-60 md:hidden"
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Slide-up Panel */}
      <div
        className={`${
          menuOpen ? 'translate-y-0' : 'translate-y-full'
        } fixed bottom-0 left-0 w-full backdrop-blur-md bg-white/70 p-4 transition-transform duration-300 z-40 md:hidden`}
      >
        <div className="flex justify-around">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="flex flex-col items-center py-2 hover:bg-indigo-100 rounded-lg transition"
              onClick={() => setMenuOpen(false)}
            >
              {item.icon}
              <span className="text-sm mt-1">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
