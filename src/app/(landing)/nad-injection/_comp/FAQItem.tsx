"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

type FAQItemProps = {
  question: string;
  answer: React.ReactNode | string | string[];
};

export const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const content = Array.isArray(answer) ? (
    <div className="space-y-4 pr-2">
      {answer.map((line, index) => (
        <p
          key={index}
          className="font-secondary text-base lg:text-lg leading-relaxed text-text-secondary"
        >
          {line}
        </p>
      ))}
    </div>
  ) : typeof answer === "string" ? (
    <div className="space-y-4 pr-2">
      <p className="font-secondary text-base lg:text-lg leading-relaxed text-text-secondary">
        {answer}
      </p>
    </div>
  ) : (
    <div className="pr-2 pb-2">
      {answer}
    </div>
  );

  return (
    <div className="border-b border-[#E8E8E8] last:border-none">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-lg lg:text-xl font-bold text-nad-accent">
          {question}
        </span>

        <ChevronDown
          className={clsx(
            "h-5 w-5 shrink-0 text-[#EDB984] transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>

      <div
        className={clsx(
          "grid transition-all duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          {content}
        </div>
      </div>
    </div>
  );
};