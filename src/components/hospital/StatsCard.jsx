import React from 'react'

export default function StatsCard({ title, value, icon }) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm">{title}</p>
            <p className="text-2xl font-bold mt-1">{value}</p>
          </div>
          <div className="text-2xl text-gray-400">{icon}</div>
        </div>
      </div>
    );
  }