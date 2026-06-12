// src/app/(landing)/nad-injection/page.tsx

import type { Metadata } from "next";
import Image from "next/image";
import { NADInjection } from "./_comp/NADInjection";
import { SimpleHero } from "@/src/components/layout/SimpleHero";


export const metadata: Metadata = {
  title: "NAD+ Injections | Online GP Services",
  description: "Boost your energy and anti-ageing naturally with NAD+ injections. GMC-registered doctor led treatment available at home.",
  keywords: ["NAD+ injections", "anti-ageing", "energy boost", "mitochondria", "online GP service"],
};

export default function NADInjectionPage() {
  return (
    <div className="bg-white ">
      <div className="relative z-20">
        <SimpleHero
          title={
            <span >
              NAD+ <br /> Injections
            </span>
          }
          titleClassName="text-[42px] lg:text-[62px] xl:text-[72px] font-bold leading-tight"
          subtitle={
            <div className="space-y-4">
              <p >
                NAD+ injections are a private, doctor-led wellness treatment designed to support energy levels, mental clarity and overall wellbeing. This service is suitable for adults experiencing fatigue, burnout, or reduced energy who are looking for a medically supervised wellness option.
              </p>
              <p >
                All patients are assessed by a GMC-registered doctor before treatment is prescribed.
              </p>
            </div>
          }
          subtitleClassName="max-w-[800px] mt-8 lg:mt-10 lg:text-[23px] leading-relaxed text-white/90"
          className="bg-transparent! border-none"
          overflowVisible={true}
        />

        {/* <div className="absolute inset-x-0 bottom-0 pointer-events-none z-50 hidden sm:block">
            <div className="mx-auto max-w-[1440px] h-full relative">
              <div className="absolute -bottom-16 right-0 lg:right-2 xl:right-0 w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] xl:max-w-[580px] translate-y-[5%] lg:translate-y-[20%] xl:translate-y-[23%] lg:translate-x-[12%] xl:translate-x-[2%]">
                <Image
                  src="/images/nadgirl.svg"
                  alt="NAD+ Welcome"
                  width={580}
                  height={780}
                  className="object-contain object-bottom scale-110 lg:scale-100 origin-bottom-right drop-shadow-[0px_20px_40px_rgba(0,0,0,0.15)]"
                  priority
                />
              </div>
            </div>
          </div> */}
      </div>
      <NADInjection />
    </div>
  );
}
