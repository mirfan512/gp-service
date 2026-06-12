"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/src/components/ui/Button";
import { Doctor } from "@/src/store/services/doctorsApi";

interface DoctorCardProps {
  doctor: Doctor;
  avatarUrl: string;
  onViewDetails: () => void;
  onBookNow: () => void;
}

export function DoctorCard({ doctor, avatarUrl, onViewDetails, onBookNow }: DoctorCardProps) {
  const [isFavourite, setIsFavourite] = useState(false);

  // Smart helper to extract experience from bio or default to 5+
  const getExperienceYears = () => {
    if (!doctor.bio) return "5+";
    const match = doctor.bio.match(/(\d+)\+?\s*years?/i);
    return match ? `${match[1]}+` : "5+";
  };

  return (
    <div
      className="rounded-[18px] px-6 py-5 flex flex-col justify-between"
      style={{
        background: "var(--c-surface-2)",
        border: "1px solid var(--c-border)",
        boxShadow: "var(--shadow-soft)",
      }}
    >
      <div>
        {/* Card Header (Rating & Favorite) */}
        <div className="flex items-start justify-between">
          <div
            className="flex items-center gap-1 text-[12px] font-semibold"
            style={{ color: "var(--c-text-muted)" }}
          >
            {doctor.averageRating && doctor.averageRating > 0 ? doctor.averageRating.toFixed(1) : "N/A"}
            <Image src="/icons/Star.svg" alt="star" width={14} height={14} />
          </div>

          <button
            type="button"
            className="cursor-pointer transition-opacity hover:opacity-80 focus:outline-none"
            onClick={() => setIsFavourite(!isFavourite)}
          >
            <Image
              src="/icons/Favorite_sml.svg"
              alt="favourite"
              width={20}
              height={20}
              className={isFavourite ? "" : "opacity-30 grayscale"}
            />
          </button>
        </div>

        {/* Profile Info */}
        <div className="mt-3 flex flex-col items-center text-center">
          <div className="relative h-[86px] w-[86px] overflow-hidden rounded-full border border-gray-100 shadow-sm">
            <Image
              src={avatarUrl}
              alt={doctor.name}
              fill
              className="object-cover"
              sizes="86px"
            />
          </div>

          <div className="mt-4 text-[15px] font-semibold text-gray-900">{doctor.name}</div>
          <div className="text-[12px] font-medium" style={{ color: "var(--c-primary-600)" }}>
            {doctor.specialty}
          </div>

          <div className="mt-2 text-[12px]" style={{ color: "var(--c-text-muted)" }}>
            {getExperienceYears()} Years experience
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-5 grid grid-cols-2 gap-3">
        <Button
          variant="tertiary"
          className="h-[36px] w-full rounded-[10px] text-[12px] font-semibold"
          onClick={onViewDetails}
        >
          View Details
        </Button>

        <Button
          variant="secondary"
          className="h-[36px] w-full rounded-[10px] text-[12px] font-semibold"
          onClick={onBookNow}
        >
          Book Now
        </Button>
      </div>
    </div>
  );
}
