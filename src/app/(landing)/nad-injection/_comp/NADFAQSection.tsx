;
import { nadFaqData } from "@/src/lib/constants/nadFaqData";
import { FAQItem } from "./FAQItem";


export const NADFAQSection = () => {
  return (
    <div className="flex flex-col gap-8 rounded-[40px] bg-[#F9F9F9] p-8 lg:p-14">
      <h2 className="text-center lg:text-left text-[32px] lg:text-[42px] font-bold text-[#EDB984] leading-tight">
        Frequently Asked Questions
      </h2>

      <div className="flex flex-col">
        {nadFaqData.map((item) => (
          <FAQItem
            key={item.id}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
};