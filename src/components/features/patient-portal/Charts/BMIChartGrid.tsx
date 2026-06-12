import React from "react";

const HEIGHTS_INCHES = Array.from({ length: 26 }, (_, i) => 54 + i); // 4'6" to 6'7"
const WEIGHTS_KG = Array.from({ length: 67 }, (_, i) => 110 - i); // 110 to 44

function getBmiData(weightKg: number, heightInches: number) {
  const heightM = heightInches * 0.0254;
  const bmi = weightKg / (heightM * heightM);
  let color = "#ffffff";
  let textColor = "#000000";

  if (bmi < 18.5) {
    color = "#ffffff";
  } else if (bmi < 25) {
    color = "#8dbb79"; // Healthy (Green)
  } else if (bmi < 30) {
    color = "#ffea5e"; // Overweight (Yellow)
  } else if (bmi < 40) {
    color = "#f4a450"; // Obese (Orange)
  } else {
    color = "#e55b40"; // Very Obese (Red)
    textColor = "#ffffff"; // White text for contrast on dark red if needed
  }

  // Handle Black top-left cells visual from original image specifically for BMI >= 40
  // Looking at the chart, BMI values >= 40 are rendered with black background and white text.
  if (bmi >= 40) {
    color = "#333333";
    textColor = "#ffffff";
  }

  // Wait, let's fix that. The legend red = Very Obese, but the chart cells have Red and Black.
  // Many BMI >= 40 cells are red, and BMI > ~45 or 50 is black?
  // Let's use red for 40-49 and black for >=50 just to look closer to the original if desired, 
  // or stick to purely the legend red for >=40. Let's do red for >=35 and black for >= 40.
  // In the legend: Very obese is just red. Let's stick to the legend!
  if (bmi >= 40) {
    color = "#333333"; // Very very obese
  } else if (bmi >= 35) {
    color = "#e55b40"; // Very obese
  } else if (bmi >= 30) {
    color = "#f4a450";
  } else if (bmi >= 25) {
    color = "#ffea5e";
  } else if (bmi >= 18.5) {
    color = "#8dbb79";
  }

  return { bmi: Math.round(bmi), color, textColor };
}

function formatHeightTop(inches: number) {
  const feet = Math.floor(inches / 12);
  const remainingInches = inches % 12;
  if (remainingInches === 0 || inches === 54 || inches === 72) {
    return `${feet}'${remainingInches}"`;
  }
  return `${remainingInches}"`;
}

function getRightLabel(weightKg: number) {
  if (weightKg === 108) return "17st";
  if (weightKg === 105) return "7lbs";
  if (weightKg === 102) return "16st";
  if (weightKg === 98) return "7lbs";
  if (weightKg === 95) return "15st";
  if (weightKg === 92) return "7lbs";
  if (weightKg === 89) return "14st";
  if (weightKg === 86) return "7lbs";
  if (weightKg === 83) return "13st";
  if (weightKg === 79) return "7lbs";
  if (weightKg === 76) return "12st";
  if (weightKg === 73) return "7lbs";
  if (weightKg === 70) return "11st";
  if (weightKg === 67) return "7lbs";
  if (weightKg === 64) return "10st";
  if (weightKg === 60) return "7lbs";
  if (weightKg === 57) return "9st";
  if (weightKg === 54) return "7lbs";
  if (weightKg === 51) return "8st";
  if (weightKg === 48) return "7lbs";
  if (weightKg === 44) return "7st";
  return "";
}

export function BMIChartGrid() {
  return (
    <div className="w-full flex-1 overflow-visible">
      <div className="w-full border border-gray-100 bg-white p-2 text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] relative pt-12 pb-8 pl-8 pr-8">

        {/* Absolute labels for axes */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 origin-center font-bold text-sm tracking-wide text-gray-800">
          Weight<br />(Kg)
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 font-bold text-sm text-gray-800 text-center w-8">
          Weight<br />(lbs)
        </div>

        {/* Title */}
        <h2 className="text-center text-2xl md:text-3xl font-extrabold text-[#1a5ca6] mb-6 tracking-tight">
          Body Mass Index Chart
        </h2>

        {/* Top Axis: Heights */}
        <div className="text-center font-bold text-gray-700 mb-2 text-sm">
          Height (Feet and Inches)
        </div>

        {/* Grid Container */}
        <div
          className="grid bg-[#d1d5db] border-[1px] border-black font-sans text-center"
          style={{
            gridTemplateColumns: `auto repeat(26, minmax(22px, 1fr)) auto`,
            gap: "1px"
          }}
        >
          {/* Header Row */}
          <div className="bg-white"></div>
          {HEIGHTS_INCHES.map((h, i) => (
            <div key={`h-${h}`} className="bg-white pt-1 pb-[2px] flex items-end justify-center font-bold text-black border-b-[2px] border-black leading-tight">
              {formatHeightTop(h)}
            </div>
          ))}
          <div className="bg-white flex flex-col justify-end items-start px-1 font-bold text-[10px] leading-tight text-gray-600 border-b-[2px] border-black">
            7lbs
          </div>

          {/* Data Rows */}
          {WEIGHTS_KG.map((w, wIndex) => {
            const rightLabel = getRightLabel(w);
            const isLabelBlack = w % 10 === 0;

            return (
              <React.Fragment key={`row-${w}`}>
                {/* Left Weight label */}
                <div
                  className={`
                    ${isLabelBlack ? "bg-[#333333] text-white" : "bg-[#f8f9fa] text-gray-800"} 
                    flex items-center justify-center font-bold border-r-[2px] border-black px-[2px] tabular-nums
                  `}
                >
                  {w}
                </div>

                {/* Main grid cells */}
                {HEIGHTS_INCHES.map((h) => {
                  const { bmi, color, textColor } = getBmiData(w, h);
                  return (
                    <div
                      key={`c-${w}-${h}`}
                      className="flex items-center justify-center font-medium leading-none tabular-nums"
                      style={{ backgroundColor: color, color: textColor, padding: "3px 0" }}
                    >
                      {bmi}
                    </div>
                  );
                })}

                {/* Right Weight label */}
                <div className="bg-white flex items-center justify-start pl-[2px] font-bold text-gray-600 border-l border-white text-[10px]">
                  {rightLabel}
                </div>
              </React.Fragment>
            );
          })}
        </div>

        {/* Bottom scale: Metres */}
        <div className="flex justify-between w-[calc(100%-80px)] ml-[40px] mt-[1px] font-bold text-black border-t-[2px] border-black pt-1">
          <span>1.36</span>
          <span>1.40</span>
          <span>1.44</span>
          <span>1.48</span>
          <span>1.52</span>
          <span>1.56</span>
          <span>1.60</span>
          <span>1.64</span>
          <span>1.68</span>
          <span>1.72</span>
          <span>1.76</span>
          <span>1.80</span>
          <span>1.84</span>
          <span>1.88</span>
          <span>1.92</span>
          <span>1.96</span>
          <span>2.00</span>
        </div>
        <div className="text-center font-bold text-gray-700 mt-2 text-sm mb-6">
          Height (Metres)
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-between items-start gap-4 mt-8 pt-4 px-2">
          <div className="flex flex-col max-w-[125px]">
            <div className="h-6 w-full bg-[#e55b40] mb-2 rounded-sm ring-1 ring-black/10"></div>
            <strong className="text-[12px] font-extrabold mb-1">Very Obese</strong>
            <span className="text-[10px] leading-tight text-gray-600">
              Health is seriously at risk. Losing weight <b>immediately</b> is essential.
            </span>
          </div>

          <div className="flex flex-col max-w-[125px]">
            <div className="h-6 w-full bg-[#f4a450] mb-2 rounded-sm ring-1 ring-black/10"></div>
            <strong className="text-[12px] font-extrabold mb-1">Obese</strong>
            <span className="text-[10px] leading-tight text-gray-600">
              Health is at risk. Losing weight <b>now</b> should be considered.
            </span>
          </div>

          <div className="flex flex-col max-w-[125px]">
            <div className="h-6 w-full bg-[#ffea5e] mb-2 rounded-sm ring-1 ring-black/10"></div>
            <strong className="text-[12px] font-extrabold mb-1">Overweight</strong>
            <span className="text-[10px] leading-tight text-gray-600">
              Health could suffer. Some weight loss should now be considered.
            </span>
          </div>

          <div className="flex flex-col max-w-[125px]">
            <div className="h-6 w-full bg-[#8dbb79] mb-2 rounded-sm ring-1 ring-black/10"></div>
            <strong className="text-[12px] font-extrabold mb-1 md:pr-4">Healthy</strong>
            <span className="text-[10px] leading-tight text-gray-600">
              A desirable BMI figure indicating a healthy weight.
            </span>
          </div>

          <div className="flex flex-col max-w-[125px]">
            <div className="h-6 w-full border border-gray-400 bg-white mb-2 rounded-sm"></div>
            <strong className="text-[12px] font-extrabold mb-1 mt-1">Underweight</strong>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
