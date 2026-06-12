import Image from "next/image";
import { BMIChartGrid } from "./BMIChartGrid";

export const ChartsSection = () => {
  return (
    <div className="space-y-8">
      {/* BMI Chart Section */}
      <div className="bg-white rounded-[20px] shadow-sm overflow-hidden p-0 md:p-4">
        <BMIChartGrid />
      </div>

      {/* Weight Loss Chart Section */}
      <div className="bg-white rounded-[20px] shadow-sm p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">Example Weight Loss Over Time</h3>
        <div className="relative h-[400px] w-full border border-gray-100 rounded-xl p-4 flex items-center justify-center bg-gray-50">
          {/* Placeholder for dynamic chart or SVG */}
          <svg viewBox="0 0 800 400" className="w-full h-full overflow-visible">
            {/* Axes */}
            <line x1="50" y1="350" x2="750" y2="350" stroke="#ccc" strokeWidth="2" />
            <line x1="50" y1="50" x2="50" y2="350" stroke="#ccc" strokeWidth="2" />

            {/* Labels - X Axis (Months) */}
            <text x="50" y="370" fontSize="12" textAnchor="middle">0</text>
            <text x="150" y="370" fontSize="12" textAnchor="middle">1</text>
            <text x="250" y="370" fontSize="12" textAnchor="middle">2</text>
            <text x="350" y="370" fontSize="12" textAnchor="middle">3</text>
            <text x="450" y="370" fontSize="12" textAnchor="middle">4</text>
            <text x="550" y="370" fontSize="12" textAnchor="middle">5</text>
            <text x="650" y="370" fontSize="12" textAnchor="middle">6</text>
            <text x="750" y="370" fontSize="12" textAnchor="middle">7</text>
            <text x="400" y="390" fontSize="14" fontWeight="bold" textAnchor="middle">Time (months)</text>

            {/* Labels - Y Axis (Weight kg) */}
            <text x="40" y="350" fontSize="12" textAnchor="end">70</text>
            <text x="40" y="300" fontSize="12" textAnchor="end">75</text>
            <text x="40" y="250" fontSize="12" textAnchor="end">80</text>
            <text x="40" y="200" fontSize="12" textAnchor="end">85</text>
            <text x="40" y="150" fontSize="12" textAnchor="end">90</text>
            <text x="40" y="100" fontSize="12" textAnchor="end">95</text>
            <text x="20" y="200" fontSize="14" fontWeight="bold" textAnchor="middle" transform="rotate(-90, 20, 200)">Weight (kg)</text>

            {/* Data Line */}
            <path
              d="M50,100 L150,130 L250,160 L350,200 L450,240 L550,280 L650,320 L750,340"
              fill="none"
              stroke="var(--color-primary-600)"
              strokeWidth="3"
            />

            {/* Data Points */}
            <circle cx="50" cy="100" r="4" fill="var(--color-primary)" />
            <circle cx="150" cy="130" r="4" fill="var(--color-primary)" />
            <circle cx="250" cy="160" r="4" fill="var(--color-primary)" />
            <circle cx="350" cy="200" r="4" fill="var(--color-primary)" />
            <circle cx="450" cy="240" r="4" fill="var(--color-primary)" />
            <circle cx="550" cy="280" r="4" fill="var(--color-primary)" />
            <circle cx="650" cy="320" r="4" fill="var(--color-primary)" />
            <circle cx="750" cy="340" r="4" fill="var(--color-primary)" />
          </svg>
        </div>

        {/* Add this text */}
        <p className="text-sm text-[var(--color-wegovy-red-3)] mt-4">
          Record your height and weight in the section above. The system will automatically plot a trend line for you. Remember there may be times where the lines forms a plateau, do not be disheartened. Keep your diet and exercise up and continue with your medication. Please book a consultation with a doctor if you have any concerns.
        </p>
      </div>
    </div>
  );
};
