import { DoctorsHeader } from "./DoctorsHeader";
import { DoctorsFilters } from "./DoctorsFilters";
import { DoctorsGrid } from "./DoctorsGrid";
import { DoctorsPagination } from "./DoctorsPagination";


export type Doctor = {
  id: string;
  name: string;
  speciality: string;
  experienceYears: number;
  rating: number;
  avatarUrl: string;
  isFavourite?: boolean;
};



export const mockDoctors: Doctor[] = Array.from({ length: 6 }).map((_, i) => ({
  id: String(i + 1),
  name: i % 2 === 0 ? "Dr. Maha Ahmad" : "Dr. Sama Khaled",
  speciality: "Dental",
  experienceYears: 7,
  rating: 4.8,
  avatarUrl: i % 2 === 0 ? "/images/doctor1.png" : "/images/doctor2.png",
  isFavourite: i % 3 === 0,
}));




export function DoctorsPage() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "var(--c-bg)", color: "var(--c-text)" }}
    >
      <DoctorsHeader />

      <section className="py-10">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[340px_1fr]">
            <DoctorsFilters />

            <div>
              <div className="mb-5 flex items-center justify-end">
                <div className="text-[14px] font-semibold">55 doctors available</div>
              </div>

              <DoctorsGrid doctors={mockDoctors} />
              <DoctorsPagination />
            </div>
          </div>
        </div>
      </section>

      {/* bottom strip like figma */}
      <section className="footer-gradient h-[110px]" />
    </div>
  );
}
