"use client";

import { useState } from "react";
import { Button } from "@/src/components/ui/Button";

export const MeasurementsForm = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [formData, setFormData] = useState({
    height: "",
    weight: "",
    bmi: "",
    date: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Calculate BMI immediately based on the new values
    let newHeight = name === "height" ? value : formData.height;
    let newWeight = name === "weight" ? value : formData.weight;
    let newBmi = formData.bmi;

    if (newHeight && newWeight) {
      const h = parseFloat(newHeight) / 100; // cm to m
      const w = parseFloat(newWeight);
      if (h > 0 && w > 0) {
        newBmi = (w / (h * h)).toFixed(1);
      }
    } else if (!newHeight || !newWeight) {
      newBmi = "";
    }

    setFormData({
      ...formData,
      [name]: value,
      bmi: newBmi
    });
  };

  return (
    <div className="bg-white rounded-[20px] shadow-sm p-8 mb-2">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-800 flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-[var(--color-portal-btn-primary)]"></span>
          My Measurements
        </h3>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-sm font-semibold text-[var(--color-portal-btn-primary)] hover:underline flex items-center gap-1 opacity-80 hover:opacity-100"
        >
          {isExpanded ? 'Cancel' : 'Add Measurement +'}
        </button>
      </div>

      <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isExpanded ? 'opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-2">
            <div>
              <label className="text-xs font-bold text-gray-500 mb-2 block uppercase tracking-wider">Height (cm)</label>
              <input
                type="number"
                name="height"
                value={formData.height}
                onChange={handleChange}
                placeholder="175"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-portal-btn-primary)] transition-shadow text-sm text-gray-800 font-bold placeholder:text-gray-300"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-gray-500 mb-2 block uppercase tracking-wider">Weight (kg)</label>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                placeholder="70"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-portal-btn-primary)] transition-shadow text-sm text-gray-800 font-bold placeholder:text-gray-300"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-gray-500 mb-2 block uppercase tracking-wider">BMI</label>
              <input
                type="text"
                readOnly
                value={formData.bmi}
                placeholder="-"
                className="w-full px-4 py-3 rounded-xl bg-gray-100 border border-transparent text-gray-500 cursor-not-allowed text-sm font-bold"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-gray-500 mb-2 block uppercase tracking-wider">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-portal-btn-primary)] transition-shadow text-sm text-gray-600 font-medium"
              />
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <Button variant="submit" size="lg" className="px-8 shadow-md">
              Save Measurement
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
