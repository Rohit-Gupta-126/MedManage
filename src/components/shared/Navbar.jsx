import React from 'react'

export default function Navbar({ userType }) {
    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <span className="text-xl font-bold">
                            {userType === 'hospital' ? 'Hospital Dashboard' : 'Patient Portal'}
                        </span>
                    </div>
                    <div className="flex items-center">
                        <button className="px-4 py-2 text-gray-600 hover:text-gray-800">
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
