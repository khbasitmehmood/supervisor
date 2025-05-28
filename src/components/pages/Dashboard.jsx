import React from 'react';
import {
  BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';

const dataBar = [
  { name: 'Q1', value: 240 },
  { name: 'Q2', value: 320 },
  { name: 'Q3', value: 150 },
  { name: 'Q4', value: 400 },
];

const dataPie = [
  { name: 'Frontend', value: 45 },
  { name: 'Backend', value: 25 },
  { name: 'DevOps', value: 15 },
  { name: 'AI/ML', value: 15 },
];

const COLORS = ['#00C49F', '#0088FE', '#FFBB28', '#FF8042'];

function GlassCard({ title, children }) {
  return (
    <div className="
      bg-white/10
      backdrop-blur-md
      border border-white/20
      rounded-2xl
      shadow-lg
      p-6
      space-y-5
      text-indigo-100
      flex flex-col
      w-full
    ">
      {title && <h2 className="text-2xl font-semibold tracking-wide">{title}</h2>}
      {children}
    </div>
  );
}

function App() {
  return (
    <div className="
      min-h-screen
      bg-gradient-to-br
      from-[#0f172a]
      via-[#1e293b]
      to-[#121921]
      px-8 py-10
      flex flex-col
      text-indigo-100
    ">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <header className="text-center mb-6">
          <h1 className="text-5xl font-extrabold drop-shadow-lg tracking-tight">
            Analytics Dashboard
          </h1>
          <p className="text-indigo-300 mt-3 text-lg font-light">
            Insights powered by data visualization
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <GlassCard title="Quarterly Performance (Bar Chart)">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dataBar}>
                <XAxis dataKey="name" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />
                <Bar dataKey="value" fill="#00C49F" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </GlassCard>

          <GlassCard title="Team Distribution (Pie Chart)">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={dataPie}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label
                  dataKey="value"
                >
                  {dataPie.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </GlassCard>
        </div>

        <GlassCard title="Mock Stats Overview">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-lg">
            <div>
              <p className="font-bold text-white text-2xl">98%</p>
              <p className="text-indigo-300">System Uptime</p>
            </div>
            <div>
              <p className="font-bold text-white text-2xl">76K</p>
              <p className="text-indigo-300">API Requests</p>
            </div>
            <div>
              <p className="font-bold text-white text-2xl">12</p>
              <p className="text-indigo-300">Active Modules</p>
            </div>
            <div>
              <p className="font-bold text-white text-2xl">6</p>
              <p className="text-indigo-300">Pending Reviews</p>
            </div>
          </div>
        </GlassCard>
      </div>

      <footer className="
        mt-12 text-center text-sm text-indigo-400
        bg-white/10 backdrop-blur-md border border-white/20
        rounded-2xl py-4 max-w-7xl mx-auto shadow-lg
      ">
        © 2025 Analytics Dashboard. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
