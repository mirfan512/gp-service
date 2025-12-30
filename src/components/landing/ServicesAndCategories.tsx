import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Button";

type ServiceCard = {
  title: string;
  icon: string; // /icons/...
};

type CategoryCard = {
  title: string;
  icon: string; // /icons/...
};

const servicesRight: ServiceCard[] = [
  { title: "Consultation with\na Doctor", icon: "/icons/g1.svg" },
  { title: "Prescriptions", icon: "/icons/g3.svg" },
  { title: "FIT / SICK notes", icon: "/icons/g4.svg" },
  { title: "Referral letters", icon: "/icons/g5.svg" },
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
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
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
          <div className="mb-8">
            <h2
              className="text-[28px] font-semibold"
              style={{ color: "#A3B094" }}
            >
              Our Services
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr]">
            {/* LEFT big card */}
            <div
              className="relative overflow-hidden rounded-[18px] border"
              style={{
                background: "#A3B094",
                borderColor: "rgba(255,255,255,0.35)",
                boxShadow: "0 8px 18px rgba(0,0,0,0.08)",
              }}
            >
              <div className="flex h-full min-h-[150px] items-center justify-between gap-6 px-6 py-6 lg:min-h-[170px]">
                <div>
                  <div className="flex items-center gap-3">
                    <Image
                      src="/icons/g1.svg"
                      alt=""
                      width={28}
                      height={28}
                    />
                  </div>

                  <p className="mt-4 text-[18px] font-semibold leading-tight text-white">
                    Remote <br /> GP consultations
                  </p>
                </div>

                {/* Right illustration inside the card */}
                <div className="flex shrink-0">
                  <Image
                    src="/icons/s1.svg"
                    alt="Remote consultation"
                     width={200}
                      height={200}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT 2x2 grid cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {servicesRight.map((s) => (
                <div
                  key={s.title}
                  className="rounded-[16px] border px-5 py-5"
                  style={{
                    background: "#A3B094",
                    borderColor: "rgba(255,255,255,0.35)",
                    boxShadow: "0 6px 14px rgba(0,0,0,0.08)",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <Image src={s.icon} alt="" width={26} height={26} />
                    <p className="text-[14px] font-semibold leading-snug text-white whitespace-pre-line">
                      {s.title}
                    </p>
                  </div>
                </div>
              ))}

              {/* long “Weight Loss injections” card */}
              <div
                className="sm:col-span-2 rounded-[16px] border px-5 py-4 text-center"
                style={{
                  background: "#A3B094",
                  borderColor: "rgba(255,255,255,0.35)",
                  boxShadow: "0 6px 14px rgba(0,0,0,0.08)",
                }}
              >
                <p className="text-[14px] font-semibold text-white">
                  Weight Loss Injections
                </p>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="mt-10">
            <div className="flex items-end justify-between">
              <h3
                className="text-[26px] font-semibold"
                style={{ color: "#A3B094" }}
              >
                Categories
              </h3>

              <Link
                href="/categories"
                className="text-[13px] font-semibold hover:opacity-80"
                style={{ color: "#A3B094" }}
              >
                See All
              </Link>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
              {categories.map((c) => (
                <Button
                  key={c.title}
                  className="flex flex-col items-center justify-center gap-2 rounded-[14px] border px-4 py-5 transition-opacity hover:opacity-90"
                  style={{
                    background: "#A3B094",
                    borderColor: "rgba(255,255,255,0.35)",
                    boxShadow: "0 6px 14px rgba(0,0,0,0.08)",
                  }}
                  type="button"
                >
                  <Image src={c.icon} alt="" width={26} height={26} />
                  <span className="text-[13px] font-semibold text-white">
                    {c.title}
                  </span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
