import { Medication } from "../types";
import { Button } from "@/src/components/ui/Button";

export const MedicationList = () => {
  const medications: Medication[] = [
    {
      id: "1",
      name: "WEGOVY",
      dosage: "2.5MG ONCE WEEKLY",
      status: "Issued",
      frequency: "Issued",
      dateIssued: "01/12/2026",
      action: "Issued"
    },
  ];

  return (
    <div className="bg-white rounded-[20px] shadow-sm p-8 mb-8">
      <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        Weight Loss Injections
      </h3>

      <div className="flex flex-col gap-4">
        {/* Header */}
        <div className="grid grid-cols-4 bg-[var(--c-button-submit)] text-white text-sm font-bold py-4 px-6 rounded-[10px] text-center uppercase tracking-wide">
          <div>Name</div>
          <div>Dose</div>
          <div>Date of Issued</div>
          <div>Action</div>
        </div>

        {/* Rows */}
        <div className="flex flex-col gap-3">
          {medications.map((med) => (
            <div key={med.id} className="grid grid-cols-4 items-center bg-[#EDEDED] py-4 px-6 rounded-[10px] text-center transition-transform hover:scale-[1.01]">
              <div className="font-bold text-gray-900 uppercase">{med.name}</div>
              <div className="font-bold text-gray-900 uppercase text-sm">{med.dosage}</div>
              <div className="font-bold text-gray-900 text-sm">{med.dateIssued}</div>
              <div className="font-bold text-gray-900 uppercase text-sm">{med.action.toUpperCase()}</div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex justify-center mt-6">
          <Button variant="submit" className="uppercase tracking-widest px-8 py-3 text-xs bg-[var(--c-button-submit)] rounded-[8px] opacity-90 shadow-none hover:shadow-md">
            Request a Repeat
          </Button>
        </div>
      </div>
    </div>
  );
};
