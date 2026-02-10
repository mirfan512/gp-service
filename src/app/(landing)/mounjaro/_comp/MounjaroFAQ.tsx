"use client";

import React from "react";

const faqData = [
  {
    question: "When should I take Mounjaro?",
    answer: "You should take Mounjaro once a week, on the same day each week. You can take it at any time of the day, with or without meals."
  },
  {
    question: "I am taking the pill. Will using a GLP-1 agonist like Mounjaro affect my contraception?",
    answer: "Mounjaro may reduce the effectiveness of oral contraceptives, especially when starting treatment or increasing the dose. It is recommended to use an additional barrier method for 4 weeks after starting or increasing the dose."
  },
  {
    question: "Will I gain weight if I stop using Mounjaro?",
    answer: "Weight regain is possible if you stop the medication without maintaining the lifestyle changes made during treatment. Continued healthy eating and physical activity are essential."
  },
  {
    question: "When should I avoid taking Mounjaro?",
    answer: "Avoid Mounjaro if you have a personal or family history of medullary thyroid carcinoma, multiple endocrine neoplasia syndrome type 2, or if you are allergic to tirzepatide."
  },
  {
    question: "How should I stop taking Mounjaro?",
    answer: "You can stop Mounjaro at any time, but it is recommended to discuss this with your healthcare provider to ensure you have a plan to maintain your weight loss."
  },
  {
    question: "How should I track my shipping and delivery?",
    answer: "You will receive a tracking number via email once your medication has been dispatched. You can also view status updates in your account dashboard."
  }
];

export const MounjaroFAQ = () => {
  return (
    <section className="py-24 px-6 bg-white font-primary">
      <div className="max-w-[1100px] mx-auto">
        <div className="space-y-12">
          {faqData.map((faq, idx) => (
            <div key={idx} className="border-b border-gray-100 pb-10 last:border-0">
              <h3 className="text-2xl lg:text-[28px] font-bold text-wegovy-brown mb-6 leading-tight">
                {faq.question}
              </h3>
              <p className="text-lg lg:text-[21px] italic font-light text-wegovy-brown font-secondary leading-relaxed max-w-5xl">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
