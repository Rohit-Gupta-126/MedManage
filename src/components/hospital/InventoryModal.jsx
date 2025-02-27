import React from 'react'
import { useState } from 'react';

export default function InventoryModal({ isOpen, onClose, onSubmit, item }) {
    const [formData, setFormData] = useState(item || {
        name: '',
        category: '',
        quantity: '',
        minStock: '',
        price: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
                <h2 className="text-xl font-bold mb-4">
                    {item ? 'Edit Item' : 'Add New Item'}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Form fields */}
                    <button
                        type="submit"
                        className="w-full px-4 py-2 bg-blue-600 text-white rounded-md"
                    >
                        {item ? 'Update' : 'Add'} Item
                    </button>
                </form>
            </div>
        </div>
    );
}