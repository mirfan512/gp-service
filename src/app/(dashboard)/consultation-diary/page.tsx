"use client";

import { CalendarView } from "@/src/components/features/consultation-diary/CalendarView";
import { SimpleHero } from "@/src/components/layout/SimpleHero";
import { RefreshCw } from "lucide-react";

export default function ConsultationDiaryPage() {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="bg-[#fcfbf9] text-[#1f1f1f] min-h-screen">
      {/* HERO */}
      <SimpleHero
        title="Consultation Diary"
        badgeSrc="/icons/online-gp-services-logo.jpg"
        className="!min-h-[250px] lg:!min-h-[300px]"
        titleClassName="text-white text-center w-full"
      />

      {/* CALENDAR WRAP */}
      <section className="relative z-20 mt-20 pb-20 px-6 max-w-[1440px] mx-auto">
        <div className="flex justify-end mb-4">
          <button
            onClick={handleRefresh}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#5C7C58] text-white rounded-xl shadow-md hover:bg-[#4a6347] transition-colors font-bold uppercase tracking-wide text-sm"
          >
            <RefreshCw size={16} />
            Refresh Diary
          </button>
        </div>
        <CalendarView />
      </section>
    </div>
  );
}
