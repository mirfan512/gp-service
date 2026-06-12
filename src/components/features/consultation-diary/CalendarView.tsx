"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MOCK_SCHEDULE, MOCK_INJECTIONS } from "./constants";
import { Appointment, DaySchedule } from "./types";
import clsx from "clsx";
import { useRouter } from "next/navigation";

const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay();

const DAYS = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

export const CalendarView = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 0, 1));
  const [selectedDay, setSelectedDay] = useState<DaySchedule | null>(null);
  const router = useRouter();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const calendarDays = [];
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push({ day: null });
  }
  for (let i = 1; i <= daysInMonth; i++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(i).padStart(2, "0")}`;
    const schedule = MOCK_SCHEDULE.find((s) => s.date === dateStr);
    calendarDays.push({ day: i, schedule });
  }

  const handleSlotClick = (schedule: DaySchedule) => setSelectedDay(schedule);
  const handleCloseModal = () => setSelectedDay(null);
  const handlePatientClick = (patientId?: string) => {
    if (patientId) router.push(`/consultant-portal?patientId=${patientId}`);
  };

  return (
    <div className="bg-white rounded-[20px] shadow-sm border border-gray-100 relative overflow-hidden">
      <div className="p-6 md:p-8">
        {/* Calendar Header */}
        <div className="bg-[#5C7C58] text-white font-bold text-center py-2 text-xl uppercase rounded-t-lg">
          {currentDate.toLocaleDateString("en-GB", { month: "long", year: "numeric" })}
        </div>

        {/* Days Header */}
        <div className="grid grid-cols-7">
          {DAYS.map((day) => (
            <div key={day} className="bg-[#8E9C85] text-white text-[10px] md:text-xs font-bold py-2 px-1 text-center border-r border-[#9CAD94] last:border-r-0 uppercase">
              {day}
            </div>
          ))}
        </div>

        {/* Days Grid */}
        <div className="grid grid-cols-7 border-l border-b border-gray-200 bg-gray-50">
          {calendarDays.map((date, idx) => {
            if (!date.day) {
              return <div key={idx} className="min-h-[100px] border-r border-b border-gray-200 bg-gray-100/50" />;
            }
            return (
              <div key={idx} className="min-h-[100px] border-r border-b border-gray-200 p-1 relative bg-white hover:bg-gray-50 transition-colors">
                <span className={clsx("text-sm font-bold ml-1 block mb-1",
                  [0, 6].includes(idx % 7) ? "text-[#4A6FA5]" : "text-gray-700"
                )}>
                  {date.day}
                </span>
                {date.schedule?.slots.map((slot, sIdx) => (
                  <button
                    key={sIdx}
                    onClick={() => handleSlotClick(date.schedule!)}
                    className="w-full text-[10px] text-white rounded px-1 py-1 mb-1 text-center hover:opacity-90 transition-opacity shadow-sm"
                    style={{ backgroundColor: "#A13333DE" }}
                  >
                    {slot.period} {slot.booked}/{slot.total}
                  </button>
                ))}
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedDay && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[fffff]/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden relative">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50">
              <h3 className="text-xl font-bold text-gray-800">Appointments Booked</h3>
              <button onClick={handleCloseModal} className="text-sm font-medium text-gray-500 hover:text-gray-800 flex items-center gap-1 transition-colors">
                <ChevronLeft size={16} /> Back
              </button>
            </div>
            <div className="p-8">
              <div className="text-center mb-8">
                <h4 className="font-bold text-2xl text-gray-800">
                  {new Date(selectedDay.date).toLocaleDateString("en-GB", { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                </h4>
              </div>
              <div className="space-y-6">
                {selectedDay.slots.map((slot, idx) => (
                  <div key={idx} className="space-y-4">
                    <div className="bg-[#8E9C85] text-white px-6 py-3 rounded-lg font-bold text-base shadow-md flex justify-between items-center">
                      <span>{slot.period}</span>
                      <span className="bg-white/20 px-2 py-0.5 rounded text-sm">{slot.booked}/{slot.total} Appointments</span>
                    </div>
                    <div className="grid gap-3 pl-4">
                      {slot.appointments.map((apt) => (
                        <button
                          key={apt.id}
                          onClick={() => handlePatientClick(apt.patientId)}
                          className={clsx(
                            "w-full text-left px-5 py-3 rounded-lg text-sm font-medium transition-all shadow-sm hover:shadow-md flex items-center group",
                            apt.type === "Review"
                              ? "bg-[#979797] text-white hover:bg-gray-500"
                              // Using raw hex here to avoid potential var() issues
                              : "bg-[#A3B094] text-white hover:opacity-90"
                          )}
                        >
                          <span className="font-mono mr-4 opacity-70 group-hover:opacity-100">{apt.time}</span>
                          <span className="font-bold text-lg">{apt.patientName}</span>
                          {apt.type === "Consultation" && <ChevronRight size={16} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Table */}
      {/* Table Card */}
      <div className="p-6 md:p-8 bg-gray-50 border-t border-gray-200">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <h3 className="text-lg font-bold text-gray-800 mb-6">Weight Loss Injections</h3>

          <div className="w-full">
            {/* Header */}
            <div className="bg-[var(--c-button-submit)] text-white rounded-lg px-8 py-4 grid grid-cols-4 items-center">
              <div className="font-bold text-sm">Name</div>
              <div className="font-bold text-sm">Dose</div>
              <div className="font-bold text-sm">Date of Issue</div>
              <div className="font-bold text-center text-sm">Action</div>
            </div>

            {/* Rows */}
            <div className="space-y-3 mt-3">
              {MOCK_INJECTIONS.map((inj) => (
                <div key={inj.id} className="bg-[#EDEDED] rounded-lg px-8 py-5 grid grid-cols-4 items-center hover:bg-gray-200 transition-colors">
                  <div className="font-extrabold text-gray-900 text-sm uppercase tracking-wide">{inj.name}</div>
                  <div className="font-extrabold text-gray-900 text-sm uppercase tracking-wide">{inj.dose}</div>
                  <div className="font-extrabold text-gray-900 text-sm tracking-wide">{inj.date}</div>
                  <div className="font-extrabold text-gray-900 text-sm uppercase tracking-wide text-center">{inj.status}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <button className="px-8 py-3 bg-[var(--c-button-submit)] text-white text-xs font-bold rounded-xl shadow-md hover:opacity-70 transition-all uppercase tracking-wide">
            View Repeat Request Form
          </button>
          <button className="px-8 py-3 bg-[var(--c-button-submit)] text-white text-xs font-bold rounded-xl shadow-md hover:opacity-70 transition-all uppercase tracking-wide">
            Issue Repeat
          </button>
        </div>
      </div>

    </div>
  );
};
