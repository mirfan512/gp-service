"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { Modal } from "@/src/components/ui/Modal";
import { Select } from "@/src/components/ui/Select";
import { Doctor, useGetDoctorReviewsQuery, useGetAvailableSlotsQuery } from "@/src/store/services/doctorsApi";

interface DoctorDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  doctor: Doctor;
  avatarUrl: string;
  onBookClick: (scheduledAt: string) => void;
}

export function DoctorDetailsModal({
  isOpen,
  onClose,
  doctor,
  avatarUrl,
  onBookClick,
}: DoctorDetailsModalProps) {
  const [activeTab, setActiveTab] = useState<"about" | "reviews">("about");
  
  // Calendar states
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  // Fetch reviews when modal is open
  const { data: reviewsData, isLoading: reviewsLoading } = useGetDoctorReviewsQuery(
    doctor._id,
    { skip: !isOpen }
  );

  const reviews = reviewsData?.data || [];

  // Generate next 12 months for the dropdown select
  const monthOptions = useMemo(() => {
    const options = [];
    const today = new Date();
    for (let i = 0; i < 12; i++) {
      const d = new Date(today.getFullYear(), today.getMonth() + i, 1);
      options.push(d);
    }
    return options;
  }, []);

  // Format selected date as YYYY-MM-DD for the API call
  const formattedSelectedDate = useMemo(() => {
    const year = selectedDate.getFullYear();
    const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
    const day = String(selectedDate.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }, [selectedDate]);

  // Fetch available slots from backend GET /consultations/available-slots
  const { data: slotsResponse, isLoading: slotsLoading } = useGetAvailableSlotsQuery(
    {
      consultantId: doctor._id,
      date: formattedSelectedDate,
    },
    { skip: !isOpen || !formattedSelectedDate }
  );

  // Group slots list into morning, afternoon, evening
  const parsedSlots = useMemo(() => {
    const morning: string[] = [];
    const afternoon: string[] = [];
    const evening: string[] = [];
    
    const slotsList = slotsResponse?.data || [];
    
    slotsList.forEach((slot) => {
      // Slot is expected in "HH:MM" format
      const hour = parseInt(slot.split(":")[0], 10);
      if (hour < 12) {
        morning.push(slot);
      } else if (hour < 17) {
        afternoon.push(slot);
      } else {
        evening.push(slot);
      }
    });
    
    return { morning, afternoon, evening };
  }, [slotsResponse]);

  // Calendar days grid generator
  const calendarGrid = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);
    const startDayOfWeek = firstDayOfMonth.getDay(); // 0 = Sunday, 1 = Monday ...
    const totalDays = new Date(year, month + 1, 0).getDate();

    const grid = [];

    // Pad blank cells for days of week before first of month
    for (let i = 0; i < startDayOfWeek; i++) {
      grid.push(null);
    }

    // Days in current month
    for (let day = 1; day <= totalDays; day++) {
      grid.push(new Date(year, month, day));
    }

    return grid;
  }, [currentMonth]);

  const isSameDay = (date1: Date, date2: Date) => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  const isPastDay = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  const isPrevMonthDisabled = useMemo(() => {
    const today = new Date();
    return (
      currentMonth.getFullYear() === today.getFullYear() &&
      currentMonth.getMonth() === today.getMonth()
    );
  }, [currentMonth]);

  const handlePrevMonth = () => {
    if (isPrevMonthDisabled) return;
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  // Helper to handle slot selection
  const handleSlotClick = (timeStr: string) => {
    setSelectedSlot((prev) => (prev === timeStr ? null : timeStr));
  };

  // Handle Book Action
  const handleBookAction = () => {
    if (!selectedSlot) return;
    const [hours, minutes] = selectedSlot.split(":").map(Number);
    const combinedDate = new Date(selectedDate);
    combinedDate.setHours(hours, minutes, 0, 0);
    onBookClick(combinedDate.toISOString());
  };

  // Star renderer helper
  const renderStars = (rating?: number) => {
    return (
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, index) => (
          <Image
            key={index}
            src="/icons/Star.svg"
            alt="star"
            width={14}
            height={14}
            className={index < Math.round(rating || 0) ? "" : "opacity-30 grayscale"}
          />
        ))}
      </div>
    );
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`Doctor Profile: ${doctor.name}`}
      maxWidth="max-w-2xl"
      actionLabel="Book Appointment"
      onAction={handleBookAction}
      isActionDisabled={!selectedSlot}
    >
      <div className="flex flex-col gap-6">
        {/* Profile Card Header */}
        <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center pb-4 border-b border-gray-100">
          <div className="relative h-[80px] w-[80px] overflow-hidden rounded-full shrink-0 border border-gray-100 shadow-sm">
            <Image
              src={avatarUrl}
              alt={doctor.name}
              fill
              className="object-cover"
              sizes="80px"
            />
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-bold text-gray-900 leading-snug">{doctor.name}</h4>
            <p className="text-sm font-medium text-[var(--c-primary-600)]">{doctor.specialty}</p>
            
            <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
              <div className="flex items-center gap-1.5 font-semibold">
                {renderStars(doctor.averageRating)}
                <span>({doctor.averageRating && doctor.averageRating > 0 ? doctor.averageRating.toFixed(1) : "N/A"})</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
              <div>{doctor.reviewCount ?? 0} {(doctor.reviewCount ?? 0) === 1 ? "Review" : "Reviews"}</div>
            </div>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-gray-100">
          <button
            onClick={() => setActiveTab("about")}
            className={`px-4 py-2 text-sm font-semibold border-b-2 transition-all ${
              activeTab === "about"
                ? "border-[var(--c-primary)] text-[var(--c-primary)]"
                : "border-transparent text-gray-400 hover:text-gray-600"
            }`}
          >
            About & Availability
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={`px-4 py-2 text-sm font-semibold border-b-2 transition-all ${
              activeTab === "reviews"
                ? "border-[var(--c-primary)] text-[var(--c-primary)]"
                : "border-transparent text-gray-400 hover:text-gray-600"
            }`}
          >
            Patient Reviews ({doctor.reviewCount ?? 0})
          </button>
        </div>

        {/* Tab Content */}
        <div className="min-h-[220px]">
          {activeTab === "about" && (
            <div className="space-y-6 max-h-[50vh] md:max-h-[400px] overflow-y-auto pr-2 -mr-2">
              {/* Bio */}
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Biography</h5>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {doctor.bio || "No biography provided by the doctor."}
                </p>
              </div>

              {/* Qualifications */}
              {doctor.qualifications && doctor.qualifications.length > 0 && (
                <div>
                  <h5 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Qualifications</h5>
                  <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                    {doctor.qualifications.map((q, idx) => (
                      <li key={idx}>{q}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Availability Slots */}
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Select Date & Time</h5>
                
                <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
                  {/* Left: Professional Month Calendar */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between px-1 gap-2">
                      <Select
                        value={`${currentMonth.getFullYear()}-${currentMonth.getMonth()}`}
                        onChange={(e) => {
                          const [year, month] = e.target.value.split("-").map(Number);
                          setCurrentMonth(new Date(year, month, 1));
                          const today = new Date();
                          if (year === today.getFullYear() && month === today.getMonth()) {
                            setSelectedDate(today);
                          } else {
                            setSelectedDate(new Date(year, month, 1));
                          }
                          setSelectedSlot(null);
                        }}
                        className="h-10 rounded-xl px-3 py-1.5 text-xs font-bold border-slate-200 text-slate-800 cursor-pointer w-[180px]"
                      >
                        {monthOptions.map((opt) => (
                          <option
                            key={`${opt.getFullYear()}-${opt.getMonth()}`}
                            value={`${opt.getFullYear()}-${opt.getMonth()}`}
                          >
                            {opt.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                          </option>
                        ))}
                      </Select>
                      <div className="flex gap-1">
                        <button
                          type="button"
                          disabled={isPrevMonthDisabled}
                          onClick={handlePrevMonth}
                          className="p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          onClick={handleNextMonth}
                          className="p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 transition-all cursor-pointer"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    {/* Weekday headers */}
                    <div className="grid grid-cols-7 text-center text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                        <div key={day} className="py-1">{day}</div>
                      ))}
                    </div>

                    {/* Calendar grid */}
                    <div className="grid grid-cols-7 gap-1">
                      {calendarGrid.map((date, index) => {
                        if (!date) {
                          return <div key={`empty-${index}`} />;
                        }

                        const isSelected = isSameDay(date, selectedDate);
                        const isPast = isPastDay(date);

                        return (
                          <button
                            key={date.toISOString()}
                            type="button"
                            disabled={isPast}
                            onClick={() => {
                              setSelectedDate(date);
                              setSelectedSlot(null);
                            }}
                            className={`aspect-square flex items-center justify-center text-xs font-semibold rounded-lg transition-all ${
                              isSelected
                                ? "bg-[var(--c-primary)] text-white shadow-md font-bold scale-105"
                                : isPast
                                ? "text-slate-300 cursor-not-allowed"
                                : "text-slate-700 bg-white border border-slate-100 hover:border-[var(--c-primary)] hover:bg-[rgba(163,176,148,0.05)] cursor-pointer"
                            }`}
                          >
                            {date.getDate()}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Right: Slots List */}
                  <div className="border-t md:border-t-0 md:border-l border-slate-200/80 pt-6 md:pt-0 md:pl-6 flex flex-col justify-start">
                    <h6 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-1.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 text-[#A3B094]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Available Times ({selectedDate.toLocaleDateString("en-GB", { day: 'numeric', month: 'short' })})
                    </h6>

                    {slotsLoading ? (
                      <div className="flex flex-col gap-2 items-center justify-center py-12 flex-1">
                        <svg className="animate-spin h-6 w-6 text-[var(--c-primary)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span className="text-[10px] text-slate-400 font-medium">Loading slots...</span>
                      </div>
                    ) : (!parsedSlots.morning.length && 
                      !parsedSlots.afternoon.length && 
                      !parsedSlots.evening.length) ? (
                      <div className="flex flex-col items-center justify-center py-12 text-slate-400 text-center flex-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 opacity-40 mb-2 text-slate-400">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                        </svg>
                        <p className="text-xs font-semibold text-slate-500">Fully Booked</p>
                        <p className="text-[10px] opacity-80 mt-0.5">Please try another date.</p>
                      </div>
                    ) : (
                      <div className="space-y-4 max-h-[260px] overflow-y-auto pr-1 flex-1">
                        {/* Morning */}
                        {parsedSlots.morning.length > 0 && (
                          <div className="space-y-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Morning</span>
                            <div className="grid grid-cols-3 gap-1.5">
                              {parsedSlots.morning.map((slot) => {
                                const isSelected = selectedSlot === slot;
                                return (
                                  <button
                                    key={slot}
                                    type="button"
                                    onClick={() => handleSlotClick(slot)}
                                    className={`py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer text-center ${
                                      isSelected
                                        ? "bg-[var(--c-primary)] border-[var(--c-primary)] text-white shadow-sm font-bold"
                                        : "bg-white border-slate-200/60 text-slate-700 hover:border-[var(--c-primary)] hover:bg-[rgba(163,176,148,0.05)]"
                                    }`}
                                  >
                                    {slot}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        {/* Afternoon */}
                        {parsedSlots.afternoon.length > 0 && (
                          <div className="space-y-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Afternoon</span>
                            <div className="grid grid-cols-3 gap-1.5">
                              {parsedSlots.afternoon.map((slot) => {
                                const isSelected = selectedSlot === slot;
                                return (
                                  <button
                                    key={slot}
                                    type="button"
                                    onClick={() => handleSlotClick(slot)}
                                    className={`py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer text-center ${
                                      isSelected
                                        ? "bg-[var(--c-primary)] border-[var(--c-primary)] text-white shadow-sm font-bold"
                                        : "bg-white border-slate-200/60 text-slate-700 hover:border-[var(--c-primary)] hover:bg-[rgba(163,176,148,0.05)]"
                                    }`}
                                  >
                                    {slot}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        {/* Evening */}
                        {parsedSlots.evening.length > 0 && (
                          <div className="space-y-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Evening</span>
                            <div className="grid grid-cols-3 gap-1.5">
                              {parsedSlots.evening.map((slot) => {
                                const isSelected = selectedSlot === slot;
                                return (
                                  <button
                                    key={slot}
                                    type="button"
                                    onClick={() => handleSlotClick(slot)}
                                    className={`py-2 text-xs font-semibold rounded-lg border transition-all cursor-pointer text-center ${
                                      isSelected
                                        ? "bg-[var(--c-primary)] border-[var(--c-primary)] text-white shadow-sm font-bold"
                                        : "bg-white border-slate-200/60 text-slate-700 hover:border-[var(--c-primary)] hover:bg-[rgba(163,176,148,0.05)]"
                                    }`}
                                  >
                                    {slot}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="space-y-4 max-h-[300px] overflow-y-auto pr-1">
              {reviewsLoading ? (
                <div className="flex flex-col gap-2 items-center justify-center py-10">
                  <svg className="animate-spin h-7 w-7 text-[var(--c-primary)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span className="text-sm text-gray-500">Loading patient reviews...</span>
                </div>
              ) : reviews.length === 0 ? (
                <p className="text-sm text-gray-500 italic py-6 text-center">No reviews submitted for this GP yet.</p>
              ) : (
                reviews.map((review) => (
                  <div
                    key={review._id}
                    className="p-4 rounded-xl border border-gray-100 bg-gray-50/50 space-y-2.5"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <span className="text-sm font-semibold text-gray-800">{review.patientName}</span>
                        <span className="text-xs text-gray-400 ml-2">
                          {new Date(review.createdAt).toLocaleDateString(undefined, {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div>{renderStars(review.ratingDoctor)}</div>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed italic">
                      &ldquo;{review.comments}&rdquo;
                    </p>

                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-400">
                      <div>
                        Booking Ease: <span className="font-semibold text-gray-600">{review.bookingEase}/5</span>
                      </div>
                      <div className="w-1 h-1 rounded-full bg-gray-300 self-center" />
                      <div>
                        App Experience: <span className="font-semibold text-gray-600">{review.ratingApp}/5</span>
                      </div>
                      <div className="w-1 h-1 rounded-full bg-gray-300 self-center" />
                      <div>
                        Recommendation Score: <span className="font-semibold text-gray-600">{review.recommendationScore}/10</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}
