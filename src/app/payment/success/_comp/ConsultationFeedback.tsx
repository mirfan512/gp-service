"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/src/components/ui/Button";

interface FeedbackData {
  ratingDoctor: number;
  ratingApp: number;
  bookingEase: number;
  recommendationScore: number;
  comments: string;
}

interface ConsultationFeedbackProps {
  isSubmitting: boolean;
  onSubmit: (data: FeedbackData) => void;
}

export function ConsultationFeedback({
  isSubmitting,
  onSubmit,
}: ConsultationFeedbackProps) {
  const [ratingDoctor, setRatingDoctor] = useState(5);
  const [ratingApp, setRatingApp] = useState(5);
  const [bookingEase, setBookingEase] = useState(5);
  const [recommendationScore, setRecommendationScore] = useState(10);
  const [comments, setComments] = useState("");

  const handleSubmit = () => {
    onSubmit({
      ratingDoctor,
      ratingApp,
      bookingEase,
      recommendationScore,
      comments,
    });
  };

  const renderRatingFace = (
    category: "doctor" | "app" | "ease",
    value: number,
    currentValue: number
  ) => {
    const isSelected = currentValue === value;

    // Choose styling color based on selection status
    let faceClass = "text-gray-300 hover:text-gray-400";
    if (isSelected) {
      if (value <= 2) faceClass = "text-red-500 scale-110";
      else if (value === 3) faceClass = "text-amber-500 scale-110";
      else faceClass = "text-[var(--c-primary-600)] scale-110";
    }

    // Mouth vectors for ratings 1-5
    let mouthPath = null;
    if (value === 1) {
      mouthPath = <path d="M8.5 16.5C9.5 15 14.5 15 15.5 16.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" fill="none" />;
    } else if (value === 2) {
      mouthPath = <path d="M9 16C10 15.3 14 15.3 15 16" stroke="currentColor" strokeWidth={2} strokeLinecap="round" fill="none" />;
    } else if (value === 3) {
      mouthPath = <line x1="9" y1="15.5" x2="15" y2="15.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />;
    } else if (value === 4) {
      mouthPath = <path d="M9 14.5C10 16 14 16 15 14.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" fill="none" />;
    } else {
      mouthPath = <path d="M8.5 14C9.5 17 14.5 17 15.5 14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" fill="none" />;
    }

    const clickHandler = () => {
      if (category === "doctor") setRatingDoctor(value);
      if (category === "app") setRatingApp(value);
      if (category === "ease") setBookingEase(value);
    };

    return (
      <button
        key={value}
        type="button"
        onClick={clickHandler}
        className={`focus:outline-none transition-all duration-300 transform p-1.5 cursor-pointer ${faceClass}`}
        title={`Rating ${value}`}
      >
        <svg viewBox="0 0 24 24" className="w-9 h-9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={2} fill={isSelected ? "currentColor" : "transparent"} fillOpacity={0.05} />
          <circle cx="8.5" cy="9.5" r="1.25" fill="currentColor" />
          <circle cx="15.5" cy="9.5" r="1.25" fill="currentColor" />
          {mouthPath}
        </svg>
      </button>
    );
  };

  return (
    <div className="bg-white rounded-3xl p-8 lg:p-12 border border-gray-100 shadow-[0_8px_35px_rgb(0,0,0,0.02)] max-w-2xl w-full space-y-8 relative">
      {/* Header row with logo */}
      <div className="flex justify-between items-center border-b border-gray-100 pb-5">
        <div className="flex items-center gap-2">
          <span className="text-gray-400 text-sm">‹</span>
          <h2 className="text-xl font-bold text-gray-800">Ratings</h2>
        </div>
        <div className="relative h-9 w-9 overflow-hidden rounded-lg">
          <Image
            src="/icons/online-gp-services-logo.jpg"
            alt="Logo"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="space-y-6">
        {/* Rating Question 1 */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-gray-700">How do you rate your doctor today?</h4>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((val) => renderRatingFace("doctor", val, ratingDoctor))}
          </div>
        </div>

        {/* Rating Question 2 */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-gray-700">How do you rate the app?</h4>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((val) => renderRatingFace("app", val, ratingApp))}
          </div>
        </div>

        {/* Rating Question 3 */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-gray-700">How easy was it for you to book an appointment online?</h4>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((val) => renderRatingFace("ease", val, bookingEase))}
          </div>
        </div>

        {/* Recommendation NPS Score Selector (1-10) */}
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-gray-700">Would you recommend this service to your friends / family?</h4>
          <div className="flex justify-between items-center gap-1.5 overflow-x-auto pb-1">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((score) => {
              const isSelected = recommendationScore === score;
              return (
                <button
                  key={score}
                  type="button"
                  onClick={() => setRecommendationScore(score)}
                  className={`w-9 h-9 shrink-0 rounded-lg text-xs font-bold border transition-all cursor-pointer flex items-center justify-center ${
                    isSelected
                      ? "bg-[var(--c-primary-600)] border-[var(--c-primary-600)] text-white shadow-sm scale-105"
                      : "bg-gray-50 border-gray-150 text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {score}
                </button>
              );
            })}
          </div>
        </div>

        {/* Comments Textarea */}
        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-gray-700">Do you have any other comments?</h4>
          <textarea
            placeholder="It was good experience ..."
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            className="w-full h-28 p-4 text-[13px] border border-gray-200 rounded-xl bg-gray-50/50 outline-none resize-none focus:border-[var(--c-primary)] focus:bg-white transition-all text-gray-800 placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Done / Submission Button */}
      <div className="pt-4 border-t border-gray-100 flex justify-end">
        <Button
          onClick={handleSubmit}
          disabled={isSubmitting}
          variant="primary"
          className="w-full max-w-[200px] py-3.5 rounded-full text-base font-semibold shadow-md bg-[#A3B094] hover:bg-[#8E9C85] text-white hover:scale-[1.01] transition-all disabled:opacity-40"
        >
          {isSubmitting ? "Submitting..." : "Done"}
        </Button>
      </div>
    </div>
  );
}
