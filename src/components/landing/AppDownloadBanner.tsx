"use client";

import Image from "next/image";

export function AppDownloadBanner() {
  return (
    <section className="bg-[var(--c-bg)] py-10 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        
        {/* CARD CONTAINER */}
        <div
          className="relative rounded-[30px] px-6 py-3 lg:px-16 lg:py-14"
          style={{
            background: "rgba(94, 119, 85, 0.26)", // #5E775542 converted for better compatibility
            boxShadow: "var(--shadow-soft)",
          }}
        >
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            
            {/* 1. LEFT COLUMN (Spacer on Desktop, Phones on Mobile) */}
            <div className="relative">
              {/* Desktop Spacer: Keeps the left side empty so the absolute phones fit there */}
              <div className="hidden lg:block h-[300px]" />

              {/* Mobile Phones (Visible < lg) */}
              <div className="relative mx-auto h-[370px] w-full max-w-[340px] lg:hidden">
                {/* Back Phone */}
                <div className="absolute left-4 top-0 w-[180px] opacity-90 z-0">
                  <Image
                    src="/images/phone1.svg"
                    alt="App Screen Back"
                    width={220}
                    height={440}
                    className="w-full h-auto drop-shadow-xl"
                  />
                </div>
                {/* Front Phone */}
                <div className="absolute right-4 top-12 w-[190px] z-10">
                  <Image
                    src="/images/phone2.svg"
                    alt="App Screen Front"
                    width={245}
                    height={490}
                    className="w-full h-auto drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>

            {/* 2. RIGHT COLUMN (Text Content) */}
            <div className="text-center lg:text-left z-10">
              <h3 className="text-[32px] leading-[1.1] font-extrabold lg:text-[48px] tracking-tight">
                <span style={{ color: "var(--c-text)" }}>Download the</span>
                <br />
                <span style={{ color: "#EA2E83" }}>Online GP Services</span>
                <br />
                <span style={{ color: "var(--c-text)" }}>App</span>
              </h3>

              <p className="mt-5 text-lg font-medium opacity-80 max-w-md mx-auto lg:mx-0">
                 Access 24/7 healthcare from your phone. Book appointments and manage prescriptions instantly.
              </p>

              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                <StoreButton icon="/images/google.svg" label="Google Play" />
                <StoreButton icon="/images/apple.svg" label="App Store" />
              </div>
            </div>

          </div>

          {/* ✅ DESKTOP POP-OUT PHONES (Absolute Overlay) */}
          {/* Placed outside the grid but inside the relative card to anchor them */}
          <div className="hidden lg:block absolute left-10 -top-24 bottom-0 w-[500px] pointer-events-none">
             <div className="relative w-full h-full">
                {/* Back Phone - Higher & Left */}
                <div className="absolute left-0 top-0 w-[260px] z-0">
                   <Image
                      src="/images/phone1.svg"
                      alt="Back Phone"
                      width={280}
                      height={560}
                      className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
                   />
                </div>

                {/* Front Phone - Lower & Right */}
                <div className="absolute left-32 top-16 w-[280px] z-10">
                   <Image
                      src="/images/phone2.svg"
                      alt="Front Phone"
                      width={300}
                      height={600}
                      className="w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
                   />
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Reusable Button Component
function StoreButton({ icon, label }: { icon: string; label: string }) {
  return (
    <button
      className="flex items-center gap-3 rounded-[12px] px-6 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:shadow-lg active:scale-95"
      style={{
        background: "#1F2937", // Dark Gray/Black
        boxShadow: "0 10px 20px rgba(0,0,0,0.15)",
      }}
      type="button"
    >
      <Image src={icon} alt="" width={22} height={22} />
      <div className="flex flex-col items-start leading-none">
        <span className="text-[15px]">{label}</span>
      </div>
    </button>
  );
}