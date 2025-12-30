import type { Doctor } from "./DoctorsPage";
import { DoctorCard } from "./DoctorCard";

export function DoctorsGrid({ doctors }: { doctors: Doctor[] }) {
  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {doctors.map((d) => (
        <DoctorCard key={d.id} doctor={d} />
      ))}
    </div>
  );
}
