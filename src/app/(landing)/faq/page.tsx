"use client";

import React, { useMemo } from "react";
import { FaqAccordion } from "@/src/components/landing/FaqAccordion";
import { SimpleHero } from "@/src/components/layout/SimpleHero";
import { useGetFaqsQuery } from "@/src/store/services/faqApi";

// Category headers mapping
const categoryNames: Record<string, string> = {
  "about": "About Our Service",
  "about-our-service": "About Our Service",
  "weight-loss": "Weight-Loss Injections",
  "nad": "NAD+ Injections",
  "delivery": "Prescriptions & Delivery",
  "prescriptions-delivery": "Prescriptions & Delivery",
  "appointments": "Appointments & Consultations",
  "appointments-consultations": "Appointments & Consultations",
  "safety": "Safety & Suitability",
  "safety-suitability": "Safety & Suitability",
  "general": "General Platform FAQs",
};

const getCategoryName = (cat: string): string => {
  if (categoryNames[cat]) return categoryNames[cat];
  return cat
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// Parser to convert dynamic string answers into structured components
function formatAnswer(answerText: string): React.ReactNode {
  const lines = answerText
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  const isBulletList = lines.every((line) => line.startsWith("•") || line.startsWith("-"));
  const isOrderedList = lines.every((line) => /^\d+\./.test(line));

  if (isBulletList) {
    return (
      <ul className="list-disc pl-5 space-y-1 font-krub">
        {lines.map((line, idx) => (
          <li key={idx}>{line.replace(/^[•-]\s*/, "")}</li>
        ))}
      </ul>
    );
  }

  if (isOrderedList) {
    return (
      <ol className="list-decimal pl-5 space-y-1">
        {lines.map((line, idx) => (
          <li key={idx}>{line.replace(/^\d+\.\s*/, "")}</li>
        ))}
      </ol>
    );
  }

  return (
    <div className="space-y-2">
      {lines.map((line, idx) => {
        if (line.startsWith("•") || line.startsWith("-")) {
          return (
            <ul key={idx} className="list-disc pl-5 space-y-1">
              <li>{line.replace(/^[•-]\s*/, "")}</li>
            </ul>
          );
        }
        if (/^\d+\./.test(line)) {
          return (
            <ol key={idx} className="list-decimal pl-5 space-y-1">
              <li>{line.replace(/^\d+\.\s*/, "")}</li>
            </ol>
          );
        }
        return <p key={idx}>{line}</p>;
      })}
    </div>
  );
}

export default function FAQPage() {
  const { data: responseData, isLoading, isError, refetch } = useGetFaqsQuery();

  // Optimized processing of FAQs
  const { groupedFaqs, sortedCategories, isEmpty } = useMemo(() => {
    const faqs = responseData?.data || [];
    
    if (faqs.length === 0) {
      return { groupedFaqs: {}, sortedCategories: [], isEmpty: true };
    }

    // Deduplicate by question text to prevent DB duplicates from flooding page
    const uniqueFaqs = faqs.filter(
      (item, index, self) =>
        self.findIndex((t) => t.question === item.question && t.category === item.category) === index
    );

    // Group by category
    const grouped = uniqueFaqs.reduce((acc, item) => {
      const cat = item.category || "general";
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(item);
      return acc;
    }, {} as Record<string, typeof uniqueFaqs>);

    // Sort questions within each category by order
    Object.keys(grouped).forEach((cat) => {
      grouped[cat].sort((a, b) => (a.order || 0) - (b.order || 0));
    });

    // Ordered list of categories for rendering sequence
    const categoryOrder = [
      "about",
      "about-our-service",
      "weight-loss",
      "nad",
      "delivery",
      "prescriptions-delivery",
      "appointments",
      "appointments-consultations",
      "safety",
      "safety-suitability",
      "general",
    ];

    const sortedCats = Object.keys(grouped).sort((a, b) => {
      const idxA = categoryOrder.indexOf(a);
      const idxB = categoryOrder.indexOf(b);
      if (idxA === -1 && idxB === -1) return a.localeCompare(b);
      if (idxA === -1) return 1;
      if (idxB === -1) return -1;
      return idxA - idxB;
    });

    return { groupedFaqs: grouped, sortedCategories: sortedCats, isEmpty: false };
  }, [responseData?.data]);

  // Loading state skeleton
  if (isLoading) {
    return (
      <>
        <SimpleHero title="Frequently Asked Questions" />
        <main className="bg-[var(--c-bg)] min-h-[60vh] flex flex-col items-center justify-center p-6 text-gray-500">
          <svg
            className="animate-spin h-8 w-8 text-[var(--c-primary)] mb-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span className="text-sm font-semibold">Loading FAQs...</span>
        </main>
      </>
    );
  }

  return (
    <>
      <SimpleHero title="Frequently Asked Questions" />

      <main className="bg-[var(--c-bg)] min-h-[50vh]">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-12 lg:py-14">
          
          {/* Display error message */}
          {isError && (
            <div className="mb-8 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm flex flex-col sm:flex-row items-center justify-between gap-3 max-w-3xl mx-auto">
              <span className="font-medium">
                Unable to retrieve FAQs. Please try again.
              </span>
              <button
                onClick={() => refetch()}
                className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg transition-all"
              >
                Retry Loading
              </button>
            </div>
          )}

          {/* Display empty state */}
          {!isError && isEmpty && (
            <div className="flex flex-col items-center justify-center py-16 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mb-4 opacity-50">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
              </svg>
              <p className="text-lg font-medium text-gray-500">No FAQs available at the moment.</p>
              <p className="text-sm">Please check back later.</p>
            </div>
          )}

          {/* Render FAQs */}
          {sortedCategories.map((category) => {
            const items = groupedFaqs[category].map((item, idx) => ({
              q: item.question,
              a: formatAnswer(item.answer),
              defaultOpen: idx === 0, // Open first item in each section by default
            }));

            return (
              <React.Fragment key={category}>
                <SectionTitle>{getCategoryName(category)}</SectionTitle>
                <FaqAccordion items={items} />
                <div className="h-10" />
              </React.Fragment>
            );
          })}
        </div>
      </main>
    </>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-center font-semibold text-[16px] lg:text-[38px] mb-6"
      style={{ color: "var(--c-primary)" }}
    >
      {children}
    </h2>
  );
}
