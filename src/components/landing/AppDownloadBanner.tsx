"use client";

import Image from "next/image";

export function AppDownloadBanner() {
  return (
    <section className="bg-transparent py-20 lg:py-32 overflow-hidden lg:overflow-visible">
      <div className="mx-auto max-w-[1950px] px-6 lg:pr-12 lg:pl-32 xl:pl-[144px] 2xl:pl-[168px]">
        {/* BANNER CONTAINER */}
        <div className="relative w-full rounded-[20px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] lg:h-[406px]"
          style={{ background: "rgba(94, 119, 85, 0.26)" }}>


          <div className="hidden lg:block">
            {/* Phone 1 (Login 1) - Left */}
            <div
              className="absolute z-20"
              style={{
                width: '290px',
                height: '627px',
                left: '115px',
                top: '-135px',
              }}
            >
              <Image
                src="/images/phone3.svg"
                alt="App Screen 1"
                width={290}
                height={627}
                className="w-full h-auto drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
              />
            </div>

            <div
              className="absolute z-10"
              style={{
                width: '280px',
                height: '606px',
                left: '306px',
                top: '-79px',
              }}
            >
              <Image
                src="/images/phone2.svg"
                alt="App Screen 2"
                width={280}
                height={606}
                className="w-full h-auto drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
              />
            </div>
            <div
              className="absolute z-30 flex items-center justify-center overflow-hidden "
              style={{
                width: '192px',
                height: '500px',
                left: '165px',
                top: '-77px',
                borderRadius: '40px',
              }}
            >
              <Image
                src="/images/phone1.svg"
                alt="Logo"
                width={442}
                height={442}
                className="w-[409] h-[409] object-cover"
              />
            </div>

            {/* Green background logo 2 */}
            <div
              className="absolute z-30 flex items-center justify-center overflow-hidden "
              style={{
                width: '166px',
                height: '163px',
                left: '362px',
                top: '100px',
                borderRadius: '40px',

              }}
            >
              <Image
                src="/icons/online-gp-services-logo.jpg"
                alt="Logo"
                width={142}
                height={142}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* WHITE CARD (Text) - Positioned Right */}
          <div className="hidden lg:flex absolute right-[8%] top-1/2 -translate-y-1/2 w-auto flex-col justify-center items-start p-8 xl:p-10 rounded-[20px] border border-[#DEDEDE] shadow-[inset_0px_4px_20px_#B1B1B1]">
            <h2 className="text-[40px] xl:text-[48px] font-bold leading-[1.2] font-sans text-black mb-8">
              Download the <br />
              <span className="text-white">Online GP Services</span> <br />
              App
            </h2>
            <div className="flex gap-4">
              <StoreButton type="google" />
              <StoreButton type="apple" />
            </div>
          </div>

          {/* MOBILE LAYOUT (Stacked) */}
          <div className="lg:hidden flex flex-col items-center p-6 text-center">
            <div className="relative w-full max-w-[280px] h-[350px] mb-8">
              {/* Stacked phones for mobile */}
              <div className="absolute left-4 top-0 z-10 w-[80%] opacity-90 scale-95">
                <Image src="/images/phone2.svg" alt="App" width={220} height={440} className="w-full h-auto" />
              </div>
              <div className="absolute right-4 top-8 z-20 w-[85%]">
                <Image src="/images/phone1.svg" alt="App" width={220} height={440} className="w-full h-auto drop-shadow-lg" />
              </div>
            </div>

            {/* Mobile Card */}
            <div className="bg-white rounded-[20px] border border-[#DEDEDE] shadow-[inset_0px_4px_20px_#B1B1B1] p-6 w-full max-w-sm mx-auto z-30 relative">
              <h2 className="text-3xl font-bold text-black mb-6 leading-tight">
                Download the <br />
                <span className="text-white">Online GP Services</span> <br />
                App
              </h2>
              <div className="flex flex-wrap justify-center gap-4">
                <StoreButton type="google" />
                <StoreButton type="apple" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// Reusable Button Component matching official store badges
function StoreButton({ type }: { type: "google" | "apple" }) {
  const isGoogle = type === "google";
  return (
    <button
      className="flex items-center justify-start gap-2.5 rounded-[8px] px-3.5 w-[168px] h-[50px] text-white bg-black border border-[#A6A6A6] transition-all hover:opacity-90 hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98] shrink-0 select-none cursor-pointer"
      type="button"
    >
      {isGoogle ? (
        // Colorful Google Play Logo
        <svg viewBox="0 0 24 24" className="w-[24px] h-[24px] shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.25 1.5C3.04 1.71 2.92 2.06 2.92 2.51V21.49C2.92 21.94 3.04 22.29 3.25 22.5L3.33 22.58L13.81 12.09V11.91L3.33 1.42L3.25 1.5Z" fill="#3BCCFF"/>
          <path d="M17.29 15.58L13.81 12.09V11.91L17.29 8.42L17.37 8.47L21.5 10.82C22.68 11.49 22.68 12.51 21.5 13.18L17.37 15.53L17.29 15.58Z" fill="#FFC72C"/>
          <path d="M17.37 15.53L13.81 11.99L3.25 22.5C3.59 22.84 4.15 22.88 4.79 22.52L17.37 15.53Z" fill="#FF3A44"/>
          <path d="M17.37 8.47L4.79 1.48C4.15 1.12 3.59 1.16 3.25 1.5L13.81 12.01L17.37 8.47Z" fill="#00E676"/>
        </svg>
      ) : (
        // White Apple Logo
        <svg viewBox="0 0 24 24" className="w-[25px] h-[25px] shrink-0 fill-white -translate-y-[1px]" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.3 3.832c.84-1.014 1.404-2.427 1.25-3.832c-1.208.049-2.67.805-3.535 1.819c-.777.898-1.457 2.335-1.273 3.712c1.346.105 2.722-.684 3.56-1.699m3.02 8.918c.034 3.632 3.186 4.841 3.22 4.857c-.025.085-.502 1.722-1.66 3.413c-1 1.462-2.038 2.919-3.674 2.949c-1.607.029-2.123-.953-3.961-.953c-1.836 0-2.41.923-3.932.982c-1.578.06-2.78-1.581-3.79-3.037c-2.06-2.98-3.635-8.42-1.52-12.092C4.054 7.045 5.932 5.89 7.97 5.861c1.55-.03 3.013 1.043 3.96 1.043c.948 0 2.726-1.29 4.595-1.101c.783.033 2.979.316 4.39 2.381c-.114.07-2.621 1.53-2.594 4.566"/>
        </svg>
      )}
      <div className="flex flex-col items-start leading-none gap-[2.5px]">
        <span className="text-[9px] font-normal tracking-wide text-gray-200">
          {isGoogle ? "GET IT ON" : "Download on the"}
        </span>
        <span className="text-[16px] font-semibold font-sans text-white tracking-[0.01em]">
          {isGoogle ? "Google Play" : "App Store"}
        </span>
      </div>
    </button>
  );
}