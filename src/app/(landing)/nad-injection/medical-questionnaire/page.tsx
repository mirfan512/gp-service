import { NADQuestionnaire } from "@/src/components/features/nad-injection/questionnaire/NADQuestionnaire";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NAD+ Medical Questionnaire | Online GP Services",
  description: "Complete your medical questionnaire for NAD+ injections.",
};

export default function NADQuestionnairePage() {
  return <NADQuestionnaire />;
}
