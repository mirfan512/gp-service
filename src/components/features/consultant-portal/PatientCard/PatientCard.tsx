"use client";

import { useState } from "react";
import { Patient, TabKey } from "../types";
import Image from "next/image";
import { ConsultationTabs } from "../ConsultationTabs/ConsultationTabs";

interface PatientCardProps {
  patient: Patient;
  onToggleId: () => void;
  onToggleConsent: () => void;
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
  tabs: TabKey[];
}

const ToggleBadge = ({
  label,
  checked,
  onToggle,
}: {
  label: string;
  checked: boolean;
  onToggle: () => void;
}) => (
  <button
    onClick={onToggle}
    className={`
      flex items-center gap-2 px-4 py-2 rounded-full text-sm lg:text-base font-medium transition-colors
      ${checked ? "bg-[#B6B098] text-white" : "bg-gray-200 text-gray-600"}
    `}
  >
    {label}
    <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${checked ? "bg-white border-transparent" : "bg-white border-gray-300"}`}>
      {checked && <span className="text-[#B6B098] text-[10px]">✔</span>}
    </div>
  </button>
);

export const PatientCard = ({ patient, onToggleId, onToggleConsent, activeTab, onTabChange, tabs }: PatientCardProps) => {
  const [isIdDropdownOpen, setIsIdDropdownOpen] = useState(false);
  const [selectedIdForm, setSelectedIdForm] = useState<string>("");
  const [otherIdText, setOtherIdText] = useState("");

  return (
    <div className="bg-[var(--color-portal-card)] rounded-xl shadow-sm p-6 relative overflow-hidden">
      <div className="flex gap-8">
        {/* Avatar */}
        <div className="flex-shrink-0 relative">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-100">
            <Image
              src={"/images/dr4.svg"}
              alt={patient.name}
              width={96}
              height={96}
              className="object-cover w-full h-full"
            />
          </div>
          <span className="block text-center mt-2 text-sm text-gray-500 font-medium">Patient</span>
        </div>

        {/* Info */}
        <div className="flex-1 space-y-4">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800">{patient.name}</h2>
              <p className="text-gray-500 text-sm lg:text-base mt-2 flex items-center gap-1">
                <span>📍</span> {patient.address}
              </p>
            </div>

            <div className="flex gap-3 items-center">
              <ToggleBadge
                label="3 Point ID Check Verified"
                checked={patient.isIdVerified}
                onToggle={onToggleId}
              />
              <div className="relative z-20 w-48 lg:w-56">
                <button 
                  onClick={() => setIsIdDropdownOpen(!isIdDropdownOpen)}
                  className={`
                    flex justify-between items-center w-full px-4 py-2 rounded-full text-sm lg:text-base font-medium transition-colors border-none shadow-none
                    ${isIdDropdownOpen || selectedIdForm ? 'bg-[#B6B098] text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}
                  `}
                >
                  <span className="flex items-center gap-2">
                    Form of ID {selectedIdForm && "✔"}
                  </span>
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${isIdDropdownOpen || selectedIdForm ? "bg-white border-transparent" : "bg-white border-gray-300"}`}>
                    <span className={`text-[8px] lg:text-[10px] ${isIdDropdownOpen || selectedIdForm ? "text-[#B6B098]" : "text-gray-400"}`}>
                      {isIdDropdownOpen ? '▲' : '▼'}
                    </span>
                  </div>
                </button>
                
                {isIdDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-64 lg:w-72 bg-white border border-gray-100 rounded-xl shadow-lg p-4 flex flex-col gap-3 text-sm lg:text-base z-30">
                    <div className="text-xs lg:text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Select ID Type</div>
                    
                    <label className="flex items-center justify-between cursor-pointer group">
                      <span className="text-gray-600 font-medium group-hover:text-gray-900 transition-colors">Driving License</span>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${selectedIdForm === "driving_license" ? 'border-[#B6B098] bg-[#B6B098]' : 'border-gray-300 bg-white'}`}>
                        {selectedIdForm === "driving_license" && <span className="w-2 h-2 rounded-full bg-white"></span>}
                      </div>
                      <input 
                        type="radio" 
                        name="idForm" 
                        value="driving_license"
                        onChange={(e) => setSelectedIdForm(e.target.value)}
                        checked={selectedIdForm === "driving_license"}
                        className="hidden"
                      />
                    </label>
                    
                    <label className="flex items-center justify-between cursor-pointer group">
                      <span className="text-gray-600 font-medium group-hover:text-gray-900 transition-colors">Passport</span>
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${selectedIdForm === "passport" ? 'border-[#B6B098] bg-[#B6B098]' : 'border-gray-300 bg-white'}`}>
                        {selectedIdForm === "passport" && <span className="w-2 h-2 rounded-full bg-white"></span>}
                      </div>
                      <input 
                        type="radio" 
                        name="idForm" 
                        value="passport"
                        onChange={(e) => setSelectedIdForm(e.target.value)}
                        checked={selectedIdForm === "passport"}
                        className="hidden"
                      />
                    </label>
                    
                    <label className="flex flex-col gap-2 cursor-pointer group">
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-gray-600 font-medium group-hover:text-gray-900 transition-colors">Other Options</span>
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${selectedIdForm === "other" ? 'border-[#B6B098] bg-[#B6B098]' : 'border-gray-300 bg-white'}`}>
                          {selectedIdForm === "other" && <span className="w-2 h-2 rounded-full bg-white"></span>}
                        </div>
                      </div>
                      <input 
                        type="radio" 
                        name="idForm" 
                        value="other"
                        onChange={(e) => setSelectedIdForm(e.target.value)}
                        checked={selectedIdForm === "other"}
                        className="hidden"
                      />
                      {selectedIdForm === "other" && (
                        <input 
                          type="text" 
                          value={otherIdText}
                          onChange={(e) => setOtherIdText(e.target.value)}
                          placeholder="Please specify ID type"
                          className="w-full bg-gray-50 border border-gray-200 text-gray-700 rounded-lg px-3 py-2 text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-[#B6B098]/30 focus:border-[#B6B098] transition-all"
                          onClick={(e) => e.stopPropagation()}
                        />
                      )}
                    </label>
                  </div>
                )}
              </div>
              <ToggleBadge
                label="Consent for Note Share"
                checked={patient.hasConsent}
                onToggle={onToggleConsent}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm lg:text-base xl:text-lg">
            <div>
              <label className="text-gray-400 block mb-1">D.O.B</label>
              <div className="font-semibold text-gray-700">{patient.dob}</div>
            </div>
            <div>
              <label className="text-gray-400 block mb-1">Email Address</label>
              <div className="font-semibold text-gray-700">{patient.email}</div>
            </div>
            <div>
              <label className="text-gray-400 block mb-1">Date & Time of Consultation</label>
              <div className="font-semibold text-gray-700">24 November, 2025 - 13:30</div>
            </div>
            <div>
              <label className="text-gray-400 block mb-1">Mobile Number</label>
              <div className="font-semibold text-gray-700">{patient.mobile}</div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-gray-100">
            <h3 className="font-bold text-gray-800 lg:text-xl xl:text-2xl mb-2 lg:mb-4">NHS GP Details</h3>
            <div className="text-sm lg:text-base xl:text-lg text-gray-600 grid grid-cols-1 md:grid-cols-1 gap-x-12 gap-y-2 lg:gap-y-3">
              <p><span className="font-medium text-gray-700">Surgery:</span> {patient.nhsGpDetails.surgery}</p>
              <p><span className="font-medium text-gray-700">GP:</span> {patient.nhsGpDetails.doctor}</p>
              <p>{patient.nhsGpDetails.address}</p>
              <p>{patient.nhsGpDetails.email}</p>
              <p>{patient.nhsGpDetails.phone}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-0">
        <div className="border-b border-gray-100 mb-4" />
        <ConsultationTabs activeTab={activeTab} onTabChange={onTabChange} tabs={tabs} />
      </div>
    </div>
  );
};
