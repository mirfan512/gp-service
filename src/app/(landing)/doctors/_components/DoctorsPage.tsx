"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { DoctorsHeader } from "./DoctorsHeader";
import { DoctorsFilters } from "./DoctorsFilters";
import { DoctorsGrid } from "./DoctorsGrid";
import { DoctorsPagination } from "./DoctorsPagination";
import { DoctorDetailsModal } from "./DoctorDetailsModal";
import { SymptomFormModal } from "./SymptomFormModal";
import { useGetDoctorsQuery, Doctor } from "@/src/store/services/doctorsApi";

export function DoctorsPage() {
  const router = useRouter();
  const { data: responseData, isLoading, isError, refetch } = useGetDoctorsQuery();
  const doctors = responseData?.data || [];

  // Filter States
  const [search, setSearch] = useState("");
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const [experienceRange, setExperienceRange] = useState(0);
  const [ratingRange, setRatingRange] = useState(0);

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Selected Doctor for Details Modal
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  // Symptom Form Modal State
  const [isSymptomModalOpen, setIsSymptomModalOpen] = useState(false);
  const [selectedSlotTime, setSelectedSlotTime] = useState<string | null>(null);

  // Extract unique specialties from API data dynamically
  const availableSpecialties = useMemo(() => {
    const specialtiesSet = new Set(
      doctors.map((d) => d.specialty).filter(Boolean)
    );
    return Array.from(specialtiesSet);
  }, [doctors]);

  // Client-side filtering logic
  const filteredDoctors = useMemo(() => {
    return doctors.filter((doc) => {
      // 1. Search term check (case-insensitive name check)
      if (search && !doc.name.toLowerCase().includes(search.toLowerCase())) {
        return false;
      }
      
      // 2. Specialty check
      if (
        selectedSpecialties.length > 0 &&
        !selectedSpecialties.includes(doc.specialty)
      ) {
        return false;
      }

      // 3. Experience check (parse numeric experience years from bio or default to 5)
      const bioExperienceMatch = doc.bio ? doc.bio.match(/(\d+)\+?\s*years?/i) : null;
      const experienceYears = bioExperienceMatch ? Number(bioExperienceMatch[1]) : 5;
      if (experienceRange > 0 && experienceYears < experienceRange) {
        return false;
      }

      // 4. Rating check
      if (ratingRange > 0 && (doc.averageRating ?? 0) < ratingRange) {
        return false;
      }

      return true;
    });
  }, [doctors, search, selectedSpecialties, experienceRange, ratingRange]);

  // Paginated list
  const paginatedDoctors = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredDoctors.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredDoctors, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(filteredDoctors.length / itemsPerPage);

  // Clear filters callback
  const handleClearFilters = () => {
    setSearch("");
    setSelectedSpecialties([]);
    setExperienceRange(0);
    setRatingRange(0);
    setCurrentPage(1);
  };

  // Helper to determine selected doctor's avatar url
  const getSelectedDoctorAvatarUrl = () => {
    if (!selectedDoctor) return "";
    const index = doctors.findIndex((d) => d._id === selectedDoctor._id);
    return index % 2 === 0 ? "/images/dr1.svg" : "/images/dr2.svg";
  };

  // Booking action routing (opens the details modal so they can select a date/slot first)
  const handleBookNowClick = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
  };

  // Triggered when a slot is confirmed in the details modal
  const handleSlotSelect = (scheduledAt: string) => {
    const token = Cookies.get("token");
    if (!token) {
      // Redirect to login page with redirect query parameter
      router.push(`/login?redirect=${encodeURIComponent("/doctors")}`);
      return;
    }
    
    // Save scheduled slot, close details, and open symptom form modal
    setSelectedSlotTime(scheduledAt);
    setIsSymptomModalOpen(true);
  };

  // Callback when symptom form is posted successfully
  const handleBookingSuccess = (consultationId: string) => {
    setIsSymptomModalOpen(false);
    if (selectedDoctor && selectedSlotTime) {
      router.push(
        `/doctors/packages?consultationId=${consultationId}&doctorName=${encodeURIComponent(
          selectedDoctor.name
        )}&scheduledAt=${encodeURIComponent(selectedSlotTime)}`
      );
    }
  };

  return (
    <div
      className="min-h-screen"
      style={{ background: "var(--c-bg)", color: "var(--c-text)" }}
    >
      <DoctorsHeader />

      <section className="py-10">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[300px_1fr] items-start">
            
            {/* Filters Sidebar */}
            <DoctorsFilters
              search={search}
              onSearchChange={(v) => {
                setSearch(v);
                setCurrentPage(1); // Reset page on filter changes
              }}
              selectedSpecialties={selectedSpecialties}
              onSpecialtiesChange={(specs) => {
                setSelectedSpecialties(specs);
                setCurrentPage(1);
              }}
              availableSpecialties={availableSpecialties}
              experienceRange={experienceRange}
              onExperienceRangeChange={(v) => {
                setExperienceRange(v);
                setCurrentPage(1);
              }}
              ratingRange={ratingRange}
              onRatingRangeChange={(v) => {
                setRatingRange(v);
                setCurrentPage(1);
              }}
              onClear={handleClearFilters}
            />

            {/* Doctors Grid & Pagination */}
            <div>
              {isLoading ? (
                /* Loading State Skeleton */
                <div className="space-y-6">
                  <div className="h-[24px] w-[140px] bg-gray-200 animate-pulse rounded-md ml-auto" />
                  <div className="grid gap-8 md:grid-cols-2">
                    {Array.from({ length: 4 }).map((_, idx) => (
                      <div key={idx} className="h-[280px] w-full bg-gray-100 animate-pulse rounded-[18px]" />
                    ))}
                  </div>
                </div>
              ) : isError ? (
                /* Error State Card */
                <div className="flex flex-col items-center justify-center p-12 bg-red-50/50 border border-red-100 rounded-[20px] text-center max-w-xl mx-auto my-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 text-red-500 mb-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                    />
                  </svg>
                  <h4 className="text-lg font-bold text-red-900 mb-1">Failed to load clinicians</h4>
                  <p className="text-sm text-red-700/80 mb-5">There was an error communicating with our services. Please try again.</p>
                  <button
                    onClick={() => refetch()}
                    className="px-5 py-2.5 bg-[#A3B094] hover:opacity-90 transition-all font-semibold rounded-xl text-white text-sm"
                  >
                    Retry Loading
                  </button>
                </div>
              ) : filteredDoctors.length === 0 ? (
                /* Empty Filtered Results State */
                <div className="flex flex-col items-center justify-center p-12 bg-gray-50/50 border border-gray-100 rounded-[20px] text-center max-w-xl mx-auto my-10 space-y-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 text-gray-400 mb-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.603 10.603Z"
                    />
                  </svg>
                  <h4 className="text-lg font-bold text-gray-800">No clinicians found</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    No doctors matched your current search parameters. Try expanding your ratings/experience criteria or choosing a different specialty.
                  </p>
                  <button
                    onClick={handleClearFilters}
                    className="px-5 py-2 text-sm font-semibold border border-gray-200 bg-white hover:bg-gray-50 transition-colors text-gray-700 rounded-xl"
                  >
                    Reset All Filters
                  </button>
                </div>
              ) : (
                /* Active Clinicians List */
                <div>
                  <div className="mb-6 flex items-center justify-end">
                    <div className="text-[13px] font-semibold text-gray-500">
                      Showing {filteredDoctors.length} {filteredDoctors.length === 1 ? "clinician" : "clinicians"} available
                    </div>
                  </div>

                  <DoctorsGrid
                    doctors={paginatedDoctors}
                    onViewDetails={(doc) => setSelectedDoctor(doc)}
                    onBookNow={handleBookNowClick}
                  />

                  <DoctorsPagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={(p) => setCurrentPage(p)}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Details Modal Popup (Slot & Date picker) */}
      {selectedDoctor && !isSymptomModalOpen && (
        <DoctorDetailsModal
          isOpen={!!selectedDoctor}
          onClose={() => setSelectedDoctor(null)}
          doctor={selectedDoctor}
          avatarUrl={getSelectedDoctorAvatarUrl()}
          onBookClick={handleSlotSelect}
        />
      )}

      {/* Symptoms & Upload Attachments Modal */}
      {isSymptomModalOpen && selectedDoctor && selectedSlotTime && (
        <SymptomFormModal
          isOpen={isSymptomModalOpen}
          onClose={() => {
            setIsSymptomModalOpen(false);
            setSelectedSlotTime(null);
          }}
          doctorId={selectedDoctor._id}
          doctorName={selectedDoctor.name}
          scheduledAt={selectedSlotTime}
          onSuccess={handleBookingSuccess}
        />
      )}
    </div>
  );
}
