import React from 'react'

export default function ServiceCard({ service, onSelect }) {
    return (
        <div
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => onSelect(service)}
        >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
            <p className="text-gray-600">{service.description}</p>
            {service.waitTime && (
                <p className="text-sm text-blue-600 mt-2">
                    Expected wait: {service.waitTime}
                </p>
            )}
        </div>
    );
}