import React, { useState } from "react";
import {
  FaVideo,
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaPlus,
  FaEdit,
  FaTrash,
  FaCheck,
} from "react-icons/fa";
import { MdMeetingRoom } from "react-icons/md";

const Meetings = () => {
  const [meetings, setMeetings] = useState([
    {
      id: 1,
      title: "Project Milestone Review",
      date: "2023-06-15",
      time: "14:00",
      duration: "1 hour",
      type: "Virtual",
      participants: ["Alice Johnson", "Bob Smith"],
      status: "Upcoming",
    },
    {
      id: 2,
      title: "Thesis Proposal Discussion",
      date: "2023-06-10",
      time: "11:30",
      duration: "45 mins",
      type: "In-Person",
      location: "Room 302, CS Building",
      participants: ["Charlie Brown"],
      status: "Completed",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newMeeting, setNewMeeting] = useState({
    title: "",
    date: "",
    time: "",
    duration: "30 mins",
    type: "Virtual",
    location: "",
    participants: [],
    status: "Upcoming",
  });

  const handleStartMeeting = (id) => alert(`Starting meeting with ID: ${id}`);
  const handleReschedule = (id) => alert(`Rescheduling meeting with ID: ${id}`);
  const handleDeleteMeeting = (id) =>
    setMeetings(meetings.filter((m) => m.id !== id));
  const handleAddMeeting = () => {
    const newId = Math.max(...meetings.map((m) => m.id), 0) + 1;
    setMeetings([...meetings, { ...newMeeting, id: newId }]);
    setShowModal(false);
    setNewMeeting({
      title: "",
      date: "",
      time: "",
      duration: "30 mins",
      type: "Virtual",
      location: "",
      participants: [],
      status: "Upcoming",
    });
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMeeting({ ...newMeeting, [name]: value });
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 bg-fixed"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      {/* Dark overlay */}
      <div className="min-h-screen bg-black bg-opacity-90 backdrop-blur-md">
        <div className="container mx-auto px-8 py-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
            <h1
              className="text-5xl font-extrabold tracking-tight flex items-center gap-4"
              style={{
                background:
                  "linear-gradient(90deg, #00FFE7, #FF4C60, #FFAE00)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              <MdMeetingRoom className="text-amber-400" size={50} />
              My Meetings
            </h1>
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-3 bg-gradient-to-r from-teal-400 to-cyan-600 hover:from-cyan-600 hover:to-teal-400 text-white font-semibold px-7 py-3 rounded-full shadow-2xl transition-transform hover:scale-105 active:scale-95"
            >
              <FaPlus size={20} />
              Schedule Meeting
            </button>
          </div>

          {/* Meetings + Sidebar */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Meeting Cards */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              {meetings.map((meeting) => (
                <div
                  key={meeting.id}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-8 border-4 border-transparent hover:border-teal-400 transition-all cursor-pointer"
                  style={{
                    boxShadow:
                      "0 8px 20px rgba(0,255,231,0.4), inset 0 0 15px rgba(0,255,231,0.15)",
                  }}
                >
                  <div className="flex justify-between items-start flex-wrap gap-6">
                    <div className="flex flex-col gap-2 flex-grow min-w-[250px] max-w-[600px]">
                      <h3 className="text-3xl font-bold text-cyan-300 truncate">
                        {meeting.title}
                      </h3>
                      <div className="flex flex-wrap gap-8 text-gray-300 text-lg">
                        <div className="flex items-center gap-3">
                          <FaCalendarAlt className="text-teal-400" />
                          <span>
                            {meeting.date} at {meeting.time}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <FaClock className="text-teal-400" />
                          <span>{meeting.duration}</span>
                        </div>
                        {meeting.type === "Virtual" ? (
                          <div className="flex items-center gap-3">
                            <FaVideo className="text-teal-400" />
                            <span>Virtual Meeting</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-3">
                            <FaMapMarkerAlt className="text-teal-400" />
                            <span>{meeting.location}</span>
                          </div>
                        )}
                      </div>
                      <div className="mt-4">
                        <h4 className="text-lg font-semibold text-teal-400 mb-2">
                          Participants:
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {meeting.participants.map((p, i) => (
                            <span
                              key={i}
                              className="bg-gradient-to-r from-cyan-700 via-teal-700 to-emerald-700 text-white px-5 py-1 rounded-full text-sm font-semibold shadow-md"
                            >
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <span
                      className={`inline-block px-5 py-3 rounded-full text-lg font-bold tracking-wide ${
                        meeting.status === "Upcoming"
                          ? "bg-gradient-to-r from-amber-500 to-orange-600 text-gray-900"
                          : "bg-gradient-to-r from-green-500 to-emerald-600 text-gray-900"
                      } shadow-lg`}
                    >
                      {meeting.status}
                    </span>
                  </div>

                  <div className="flex justify-end gap-6 mt-8 flex-wrap">
                    {meeting.status === "Upcoming" && (
                      <button
                        onClick={() => handleStartMeeting(meeting.id)}
                        className="flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-teal-500 hover:from-teal-500 hover:to-cyan-600 text-gray-900 font-bold rounded-full px-6 py-3 shadow-xl transition-transform hover:scale-105 active:scale-95"
                      >
                        <FaVideo size={18} />
                        Start Meeting
                      </button>
                    )}
                    <button
                      onClick={() => handleReschedule(meeting.id)}
                      className="flex items-center gap-3 border-2 border-amber-400 text-amber-400 font-semibold rounded-full px-6 py-3 hover:bg-amber-400 hover:text-gray-900 shadow-md transition"
                    >
                      <FaEdit size={18} />
                      Reschedule
                    </button>
                    <button
                      onClick={() => handleDeleteMeeting(meeting.id)}
                      className="flex items-center gap-3 border-2 border-red-500 text-red-500 font-semibold rounded-full px-6 py-3 hover:bg-red-600 hover:text-white shadow-md transition"
                    >
                      <FaTrash size={18} />
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-10">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl border-4 border-cyan-600">
                <h2 className="text-3xl font-bold mb-6 text-teal-400">
                  Calendar
                </h2>
                <iframe
                  src="https://calendar.google.com/calendar/embed?src=en.usa%23holiday%40group.v.calendar.google.com&ctz=America%2FNew_York"
                  className="w-full h-96 rounded-2xl border-2 border-teal-600 shadow-lg"
                  frameBorder="0"
                  scrolling="no"
                  title="Google Calendar"
                />
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 shadow-2xl border-4 border-amber-500">
                <h3 className="text-2xl font-bold mb-6 text-amber-400">
                  Meeting Tips
                </h3>
                <iframe
                  className="w-full h-48 rounded-2xl mb-6 border-2 border-amber-500 shadow-md"
                  src="https://www.youtube.com/embed/7DYlz8dL_1s"
                  title="Effective Meeting Tips"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <div>
                  <h4 className="text-lg font-semibold text-amber-300 mb-4">
                    Quick Tips:
                  </h4>
                  <ul className="text-gray-300 space-y-3 text-lg">
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-green-400 mt-1" />
                      Always have a clear agenda
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-green-400 mt-1" />
                      Start and end on time
                    </li>
                    <li className="flex items-start gap-3">
                      <FaCheck className="text-green-400 mt-1" />
                      Assign action items
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Meeting Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-6 backdrop-blur-md">
          <div className="bg-gray-900 bg-opacity-95 rounded-3xl shadow-2xl p-10 w-full max-w-lg text-gray-200">
            <h2 className="text-4xl font-extrabold mb-8 text-teal-400">
              Schedule New Meeting
            </h2>

            <div className="space-y-7">
              <div>
                <label className="block text-lg font-semibold mb-3">
                  Meeting Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={newMeeting.title}
                  onChange={handleInputChange}
                  placeholder="Enter meeting title"
                  className="w-full px-6 py-4 rounded-3xl bg-gray-800 bg-opacity-80 border-2 border-cyan-600 focus:outline-none focus:ring-4 focus:ring-cyan-400 placeholder-gray-400 text-gray-100 font-semibold text-lg transition"
                />
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <label className="block text-lg font-semibold mb-3">Date</label>
                  <input
                    type="date"
                    name="date"
                    value={newMeeting.date}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 rounded-3xl bg-gray-800 bg-opacity-80 border-2 border-cyan-600 focus:outline-none focus:ring-4 focus:ring-cyan-400 text-gray-100 font-semibold text-lg"
                  />
                </div>
                <div>
                  <label className="block text-lg font-semibold mb-3">Time</label>
                  <input
                    type="time"
                    name="time"
                    value={newMeeting.time}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 rounded-3xl bg-gray-800 bg-opacity-80 border-2 border-cyan-600 focus:outline-none focus:ring-4 focus:ring-cyan-400 text-gray-100 font-semibold text-lg"
                  />
                </div>
              </div>

              <div>
                <label className="block text-lg font-semibold mb-3">Duration</label>
                <select
                  name="duration"
                  value={newMeeting.duration}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 rounded-3xl bg-gray-800 bg-opacity-80 border-2 border-cyan-600 focus:outline-none focus:ring-4 focus:ring-cyan-400 text-gray-100 font-semibold text-lg"
                >
                  <option value="15 mins">15 minutes</option>
                  <option value="30 mins">30 minutes</option>
                  <option value="45 mins">45 minutes</option>
                  <option value="1 hour">1 hour</option>
                  <option value="1.5 hours">1.5 hours</option>
                  <option value="2 hours">2 hours</option>
                </select>
              </div>

              <div>
                <label className="block text-lg font-semibold mb-3">
                  Meeting Type
                </label>
                <div className="flex gap-12 text-cyan-400 font-semibold text-xl">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="type"
                      value="Virtual"
                      checked={newMeeting.type === "Virtual"}
                      onChange={handleInputChange}
                      className="accent-cyan-400 w-6 h-6"
                    />
                    Virtual
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="type"
                      value="In-Person"
                      checked={newMeeting.type === "In-Person"}
                      onChange={handleInputChange}
                      className="accent-cyan-400 w-6 h-6"
                    />
                    In-Person
                  </label>
                </div>
              </div>

              {newMeeting.type === "In-Person" && (
                <div>
                  <label className="block text-lg font-semibold mb-3">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={newMeeting.location}
                    onChange={handleInputChange}
                    placeholder="Enter meeting location"
                    className="w-full px-6 py-4 rounded-3xl bg-gray-800 bg-opacity-80 border-2 border-cyan-600 focus:outline-none focus:ring-4 focus:ring-cyan-400 placeholder-gray-400 text-gray-100 font-semibold text-lg transition"
                  />
                </div>
              )}

              <div className="flex justify-end gap-6 mt-10">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-full font-bold shadow-lg transition hover:scale-105 active:scale-95"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddMeeting}
                  disabled={!newMeeting.title || !newMeeting.date || !newMeeting.time}
                  className={`px-8 py-3 rounded-full font-bold shadow-lg transition hover:scale-105 active:scale-95 ${
                    !newMeeting.title || !newMeeting.date || !newMeeting.time
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-cyan-600 hover:to-teal-500 text-gray-900"
                  }`}
                >
                  Add Meeting
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Meetings;
