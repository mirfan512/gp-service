import { Doctor } from "@/src/store/services/doctorsApi";
import { DoctorCard } from "./DoctorCard";

interface DoctorsGridProps {
  doctors: Doctor[];
  onViewDetails: (doctor: Doctor) => void;
  onBookNow: (doctor: Doctor) => void;
}

export function DoctorsGrid({ doctors, onViewDetails, onBookNow }: DoctorsGridProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-2">
      {doctors.map((d, index) => {
        // Alternate placeholder avatars
        const avatarUrl = index % 2 === 0 ? "/images/dr1.svg" : "/images/dr2.svg";
        return (
          <DoctorCard
            key={d._id}
            doctor={d}
            avatarUrl={avatarUrl}
            onViewDetails={() => onViewDetails(d)}
            onBookNow={() => onBookNow(d)}
          />
        );
      })}
    </div>
  );
}
