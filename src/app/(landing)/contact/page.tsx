// d:\Albaqi\GP-serviecs\src\app\(landing)\contact\page.tsx

import type { Metadata } from "next";
import { ContactUs } from "./_comp/ContactUs";

export const metadata: Metadata = {
  title: "Contact Us | Online GP Services",
  description: "Need to speak with us? Contact our team anytime. We are available 24/7 to assist with your healthcare needs.",
  keywords: ["contact us", "24/7 support", "online gp service", "customer support"],
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <ContactUs />
    </div>
  );
}
