import Image from "next/image";
import { Doctor } from "./DoctorsPage";


export function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <div
      className="rounded-[18px] px-6 py-5"
      style={{
        background: "var(--c-surface-2)",
        border: "1px solid var(--c-border)",
        boxShadow: "var(--shadow-soft)",
      }}
    >
      <div className="flex items-start justify-between">
        <div className="text-[12px] font-semibold" style={{ color: "var(--c-text-muted)" }}>
          {doctor.rating.toFixed(1)} <span className="ml-1">⭐</span>
        </div>

        <div className="text-[18px]" style={{ color: "#ff4d6d" }}>
          {doctor.isFavourite ? "♥" : "♡"}
        </div>
      </div>

      <div className="mt-3 flex flex-col items-center">
        <div className="relative h-[86px] w-[86px] overflow-hidden rounded-full">
          <Image
            src={doctor.avatarUrl}
            alt={doctor.name}
            fill
            className="object-cover"
            sizes="86px"
          />
        </div>

        <div className="mt-4 text-[15px] font-semibold">{doctor.name}</div>
        <div className="text-[12px]" style={{ color: "var(--c-primary-600)" }}>
          {doctor.speciality}
        </div>

        <div className="mt-2 text-[12px]" style={{ color: "var(--c-text-muted)" }}>
          {doctor.experienceYears} Years experience
        </div>

        <div className="mt-5 grid w-full grid-cols-2 gap-3">
          <button
            className="h-[36px] rounded-[10px] text-[12px] font-semibold"
            style={{
              background: "color-mix(in srgb, var(--c-primary) 18%, white)",
              border: "1px solid var(--c-border)",
              color: "var(--c-text)",
            }}
          >
            View Details
          </button>

          <button
            className="h-[36px] rounded-[10px] text-[12px] font-semibold text-white"
            style={{
              background: "var(--c-primary-600)",
              boxShadow: "var(--shadow-elev)",
            }}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
