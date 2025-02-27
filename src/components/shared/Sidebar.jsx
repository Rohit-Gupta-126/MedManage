import React from 'react'
import Link from 'next/link';

export default function Sidebar({ userType }) {
    const userLinks = [
        { href: '/user/services', label: 'Services' },
        { href: '/user/departments', label: 'Departments' },
        { href: '/user/medicines', label: 'Medicines' },
        { href: '/user/appointments', label: 'My Appointments' }
    ];

    const hospitalLinks = [
        { href: '/hospital/dashboard', label: 'Dashboard' },
        { href: '/hospital/appointments', label: 'Appointments' },
        { href: '/hospital/patients', label: 'Patients' },
        { href: '/hospital/inventory', label: 'Inventory' }
    ];

    const links = userType === 'hospital' ? hospitalLinks : userLinks;

    return (
        <aside className="w-64 bg-white shadow-md min-h-screen">
            <div className="p-4">
                <nav className="space-y-2">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="block px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-md"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </aside>
    );
}
