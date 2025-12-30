import Link from "next/link";

export function DoctorsHeader() {
  return (
    <section className="hero-gradient">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        <div className="relative flex h-[120px] items-center">
          <Link
            href="/"
            className="absolute left-0 flex items-center gap-2 text-[14px] font-medium text-white/90 hover:text-white"
          >
            <span className="text-[18px] leading-none">‹</span> Back
          </Link>

          <h1 className="w-full text-center text-[34px] lg:text-[44px] font-extrabold text-white tracking-[-0.02em]">
            Available General Practitioners
          </h1>
        </div>
      </div>
    </section>
  );
}
