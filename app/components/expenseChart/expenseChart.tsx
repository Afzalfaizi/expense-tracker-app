// components/ExpenseChart.js
import { FaChartPie } from 'react-icons/fa';
import React from 'react'

export default function ExpenseChart() {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <div className="flex items-center mb-4">
        <FaChartPie className="text-blue-500 mr-2" />
        <h2 className="text-xl font-semibold">Expense Chart</h2>
      </div>
      {/* Your chart implementation goes here */}
      <p className="text-gray-600">Chart content will go here...</p>
    </div>
    
  )
}


