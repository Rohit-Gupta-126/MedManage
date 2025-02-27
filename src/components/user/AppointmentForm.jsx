'use cilent'
import React from 'react'
import { useState } from 'react';

export default function AppointmentForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        department: '',
        doctor: '',
        date: '',
        time: '',
        reason: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">
                    Department
                </label>
                <select
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                >
                    {/* Department options */}
                </select>
            </div>
            {/* Other form fields */}
            <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-md"
            >
                Book Appointment
            </button>
        </form>
    );
}
