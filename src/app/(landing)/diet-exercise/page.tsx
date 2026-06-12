// src/app/(landing)/diet-exercise/page.tsx

import type { Metadata } from "next";
import { DietAndExercise } from "./_comp/DietAndExercise";

export const metadata: Metadata = {
  title: "Diet and Exercise | Online GP Services",
  description: "The importance of diet and exercise for weight loss. Learn how to eat well and stay active while on your weight loss journey.",
  keywords: ["diet", "exercise", "weight loss", "healthy living", "nutrition"],
};

export default function DietExercisePage() {
  return (
    <div className="bg-white">
      <DietAndExercise />
    </div>
  );
}
