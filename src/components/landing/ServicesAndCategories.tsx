import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Button";

type ServiceCard = {
  title: string;
  icon: string; // /icons/...
  href: string;
};

type CategoryCard = {
  title: string;
  icon: string; // /icons/...
};

const servicesRight: ServiceCard[] = [
  { title: "Kate - AI Therapist", icon: "/icons/g2.svg", href: "/ai-therapist" },
  { title: "Prescriptions", icon: "/icons/g3.svg", href: "/prescription" },
  { title: "FIT / SICK notes", icon: "/icons/g4.svg", href: "/fit-note" },
  { title: "Referral letters", icon: "/icons/g5.svg", href: "#" },
];

const categories: CategoryCard[] = [
  { title: "Lung", icon: "/icons/Pulmonologists.svg" },
  { title: "Brain", icon: "/icons/Neurologists.svg" },
  { title: "Mental", icon: "/icons/Psychiatrists.svg" },
  { title: "Liver", icon: "/icons/Hepatologists.svg" },
  { title: "Heart", icon: "/icons/Cadiologist.svg" },
  { title: "Kidney", icon: "/icons/Nephrologists.svg" },
  { title: "Stomach", icon: "/icons/Gastroenterologists.svg" },
];

export function ServicesAndCategories() {
  return (
    <section className="py-14">
      <div className="mx-auto max-w-[1950px] px-6 lg:pr-12 lg:pl-32 xl:pl-[144px] 2xl:pl-[168px]">
        {/* Outer container (the big rounded panel in Figma) */}
        <div
          className="rounded-[22px] border bg-white px-6 py-7 lg:px-10 lg:py-9"
          style={{
            borderColor: "var(--c-border)",
            boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
            background: "var(--c-surface-2)",
          }}
        >
          {/* Our Services */}
          <div className="mb-8 pl-8 lg:pl-[12px]">
            <h2
              className="font-bold"
              style={{
                fontSize: "36px",
                lineHeight: "68px",
                letterSpacing: "0.02em",
                color: "#A3B094",
              }}
            >
              Our Services
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
            {/* LEFT Column */}
            <div className="flex flex-col gap-6 ">

              {/* Remote GP Card */}
              <Link
                href="/doctors"
                className="relative flex flex-1 flex-col justify-between overflow-hidden rounded-[18px] border transition-all duration-200 hover:scale-[1.02] hover:shadow-lg active:scale-98 cursor-pointer"
                style={{
                  background: "#A3B094",
                  borderColor: "rgba(255,255,255,0.35)",
                  boxShadow: "0px 5px 4px rgba(0, 0, 0, 0.25)",
                  height: "256px",
                  minHeight: "256px",
                }}
              >
                {/* Icon Top Left */}
                <div className="absolute left-[40px] top-[70px]">
                  <Image src="/icons/g1.svg" alt="" width={48} height={48} />
                </div>

                {/* Content Details */}
                <div className="absolute bottom-[64px] left-[30px] z-10">
                  <p className="max-w-[180px] text-[22px] font-semibold leading-tight text-white">
                    Remote GP
                    <br /> Consultations
                  </p>
                </div>

                {/* Illustration Right */}
                <div className="absolute right-[70px] top-[12px]">
                  <Image
                    src="/icons/s1.svg"
                    alt="Remote consultation"
                    width={232}
                    height={232}
                    className="object-contain"
                  />
                </div>
              </Link>

              {/* Blood Tests Card */}
              <Link
                href="/blood-tests"
                className="rounded-[16px] border px-5 py-6 text-center transition-all duration-200 hover:scale-[1.02] hover:shadow-lg active:scale-98 cursor-pointer"
                style={{
                  background: "#A3B094",
                  borderColor: "rgba(255,255,255,0.35)",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                <p className="text-[20px] font-medium text-white">
                 Blood Tests
                </p>
              </Link>
            </div>

            {/* RIGHT Column */}
            <div className="flex flex-col gap-6">
              {/* 2x2 Grid */}
              <div className="grid flex-1 gap-4 sm:grid-cols-2">
                {servicesRight.map((s) => (
                  <Link
                    href={s.href}
                    key={s.title}
                    className="flex flex-col justify-center rounded-[16px] border px-5 py-5 transition-all duration-200 hover:scale-[1.03] hover:shadow-lg active:scale-98 cursor-pointer"
                    style={{
                      background: "#A3B094",
                      borderColor: "rgba(255,255,255,0.35)",
                      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      minHeight: "117px",
                    }}
                  >
                    <div className="flex items-center justify-center gap-4">
                      <Image src={s.icon} alt="" width={32} height={32} />
                      <p className="text-[20px] font-medium leading-snug text-white whitespace-pre-line text-center">
                        {s.title}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Weight Loss Injections Card */}
              <Link
                href="/weight-loss"
                className="rounded-[16px] border px-5 py-6 text-center transition-all duration-200 hover:scale-[1.02] hover:shadow-lg active:scale-98 cursor-pointer"
                style={{
                  background: "#A3B094",
                  borderColor: "rgba(255,255,255,0.35)",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                <p className="text-[20px] font-medium text-white">
                  Weight Loss Injections | NAD+ Injections 
                </p>
              </Link>
            </div>
          </div>

        
        </div>
      </div>
    </section>
  );
}
