"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/src/components/ui/Button";

export function WeightLossContent() {
    return (
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 flex flex-col gap-12 lg:gap-20">

            {/* SECTION 1: Intro + Pen */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-8 items-start relative">
                <div className="flex flex-col pt-4">
                    <h2 className="font-inter font-bold text-[30px] leading-[36px] text-[#A3B094]">
                        What Are Weight Loss Injections?
                    </h2>
                    <p className="mt-8 text-[20px] leading-[152%] text-text-secondary max-w-[820px]">
                        Weight loss injections such as Wegovy and Mounjaro are clinically approved medications that help control appetite, support calorie reduction, and improve long-term weight management.
                        <br />
                        <br />
                        Our UK doctors carefully assess suitability prior to a prescription being issued.
                    </p>

                    <h3 className="mt-14 font-inter font-bold text-[30px] leading-[36px] text-[#A3B094]">
                        How it Works
                    </h3>

                    <div className="mt-10 space-y-12">
                        <Step
                            number={1}
                            title="Complete the Online Assessment"
                            description="Fill out a short medical questionnaire. It takes just a few minutes. Buy your medication."
                        />
                        <Step
                            number={2}
                            title="A UK Doctor Reviews Your Answers"
                            description="A GMC-registered GP evaluates your form to ensure weight loss injections are safe and appropriate for you."
                        />
                        <Step
                            number={3}
                            title="Fast Pharmacy Dispensing & Delivery"
                            description="If approved, a UK-regulated pharmacy will dispense your medication and ship directly to your door with discreet delivery. If this is not approved, your purchase is refunded."
                        />
                    </div>
                </div>

                <div className="flex justify-center lg:justify-end -mt-10 lg:-mt-2">
                    <Image
                        src="/images/pen.svg"
                        alt="Weight loss injection pen"
                        width={882}
                        height={960}
                        className="object-contain w-full h-auto max-w-[520px]"
                    />
                </div>
            </div>

            {/* SECTION 2: Body Grid (Treatments, Eligibility, Desk, Sidebar) */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-x-8 xl:gap-x-20">

                {/* LEFT COLUMN */}
                <div className="flex flex-col gap-16 lg:gap-24">

                    {/* Treatments */}
                    <div className="flex flex-col gap-6">
                        <h3 className="font-inter font-bold text-[30px] leading-[36px] text-[#A3B094]">
                            UK Weight Loss Injection Treatments We Offer
                        </h3>
                        <ul className="lg:pl-28 space-y-4 text-[20px] leading-[152%] text-text-secondary max-w-[750px]">
                            <li>Wegovy (semaglutide) – weekly injection for weight management</li>
                            <li>Mounjaro (tirzepatide) – powerful weekly dual-action treatment</li>
                        </ul>
                    </div>

                    {/* Eligibility */}
                    <div className="flex flex-col gap-8">
                        <h3 className="font-inter font-bold text-[30px] leading-[36px] text-[#A3B094]">
                            Who Is Eligible for Weight Loss Injections in the UK?
                        </h3>
                        <div className="lg:pl-28">
                            <p className="text-[20px] leading-[152%] text-text-secondary">
                                You may qualify if:
                            </p>
                            <ul className="mt-6 lg:pl-   space-y-3 text-[20px] leading-[152%] text-text-secondary">
                                <li>- Your BMI is 30 or above</li>
                                <li>- Or your BMI is 27+ with a weight-related medical condition</li>
                                <li>- You are not pregnant or breastfeeding</li>
                                <li>- You do not have contraindicated medical conditions</li>
                            </ul>
                        </div>
                    </div>

                    {/* Desk Illustration + Why Choose Us Pair */}
                    <div className="flex flex-col xl:flex-row gap-12 items-start xl:items-center -mt-4 lg:mt-0">
                        <div className="flex-shrink-0">
                            <Image
                                src="/images/homepic2.svg"
                                alt="Doctor at desk illustration"
                                width={680}
                                height={550}
                                className="object-contain w-full h-auto max-w-[480px] xl:max-w-[420px]"
                            />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="font-inter font-bold text-[30px] leading-[36px] text-[#A3B094]">
                                Why Patients Choose Us
                            </h3>
                            <ul className="mt-8 space-y-3 text-[20px] leading-[151.52%] text-text-secondary max-w-[420px]">
                                <li>GMC-registered UK doctors</li>
                                <li>Safe online prescribing</li>
                                <li>UK pharmacy dispensing</li>
                                <li>Fast nationwide delivery</li>
                                <li>No appointment required</li>
                                <li className="leading-tight">Optional doctor consultation anytime to discuss your medication and queries</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN (Sidebar) */}
                <div className="flex flex-col">

                    {/* Consultation Card */}
                    <div className="flex flex-col items-center lg:items-end -mt-10 lg:-mt-18">
                        <div className="relative lg:mt-[-117px] inline-block">
                            <Image
                                src="/images/homepic1.svg"
                                alt="Doctor consultation"
                                width={520}
                                height={517}
                                className="w-full h-auto object-contain max-w-[520px]"
                            />
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 hidden lg:block w-max"
                                style={{ filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))" }}>
                                <div className="rounded-[10px] px-6 py-3 text-[14px] font-semibold text-white bg-cta shadow-lg">
                                    Optional GP Consultation £49
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 w-full max-w-[520px] flex justify-center">
                            <p className="text-text-secondary text-[20px] font-medium leading-[152%] text-center text-balance max-w-[90%] md:max-w-[470px]">
                                If you'd like to speak directly with a doctor at any point, you can book a consultation instantly.
                            </p>
                        </div>
                    </div>

                    {/* Pricing */}
                    <div className="mt-16 lg:mt-[220px] w-full flex justify-center lg:justify-end">
                        <div className="max-w-[490px] w-full">
                            <h3 className="font-inter font-bold text-[30px] leading-[36px] text-[#A3B094]">
                                Pricing
                            </h3>
                            <div className="mt-8 space-y-4  text-[20px] leading-[152%] text-text-secondary lg:text-left">
                                <p>The price of each injectable treatment varies depending on the dose. Please see our pages on Mounjaro and Wegovy for more information.</p>
                                <p>Medical review included free.</p>
                                <p>Optional GP consultation: £49.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            {/* BOTTOM CTA */}
            <div className="mt-12 lg:mt-1 flex flex-col items-center text-center pb-20">
                <Link href="/assessment" className="w-full max-w-[422px]">
                    <Button
                        className="w-full rounded-[10px] px-8 py-4 text-[22px] font-bold text-white bg-cta shadow-[0px_4px_4px_rgba(0,0,0,0.25)]"
                        variant="cta"
                    >
                        Start Assessment
                    </Button>
                </Link>
                <p className="mt-6 max-w-[536px]  text-[20px] leading-[151.52%] text-text-secondary">
                    Begin your online form today and receive a same-day doctor review. Achieve effective and safe weight loss with clinically proven injections available in the UK.
                </p>
            </div>

        </div>
    );
}

function Step({ number, title, description }: { number: number; title: string; description: string }) {
    return (
        <div className="flex gap-6 lg:gap-10 items-start max-w-[950px]">
            <div className="flex-shrink-0">
                <Image src={`/icons/${number}.svg`} alt={`Step ${number}`} width={72} height={72} className="object-contain" />
            </div>
            <div>
                <div className="text-[24px] font-bold text-text-secondary">
                    {title}
                </div>
                <div className="mt-2 text-[20px] leading-[152%] text-text-secondary">
                    {description}
                </div>
            </div>
        </div>
    );
}
