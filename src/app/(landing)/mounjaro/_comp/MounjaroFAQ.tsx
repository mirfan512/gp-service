"use client";

import React from "react";

const faqData: { question: React.ReactNode; answer: React.ReactNode }[] = [
  {
    question: "What should I do if I miss a dose?",
    answer: (
      <>
        If a dose is more than 4 days (96 hours) late, the missed dose should
        not be taken and the next dose should be administered at the normal
        time. If a dose is less than 4 days late, take the dose as normal. If
        more doses of Mounjaro<sup>®</sup> are missed, consider re-starting at a
        reduced dose.
      </>
    ),
  },
  {
    question: (
      <>
        I am taking the pill. Will using a GLP-1 agonist like Mounjaro
        <sup>®</sup> affect my contraception?
      </>
    ),
    answer: (
      <>
        If you are using Mounjaro<sup>®</sup> (tirzepatide) you should use a
        barrier method of contraception (e.g. condoms) in addition to your pill
        for four weeks after starting the medication, and for four weeks after
        any increase in dose. This is because tirzepatide works slightly
        differently to the other GLP-1 agonists. Alternatively, you may wish to
        consider another (non-oral) method of contraception whilst using
        tirzepatide.
      </>
    ),
  },
  {
    question: (
      <>
        When should I stop using Mounjaro<sup>®</sup>?
      </>
    ),
    answer: (
      <>
        You can stop Mounjaro at any point, usually this is once you have achieved your ideal goal in weight or target and have been stable for several months. You may also wish to come off of this if you are struggling with the side effects of this medication. The most common side effects are often related to the digestive system. Please contact a doctor on our platform at any point if you are experiencing problems or need support with coming off this medication.
      </>
    ),
  },
  {
    question: (
      <>
        How should I stop using Mounjaro<sup>®</sup>?
      </>
    ),
    answer: (
      <>

        We recommend coming off of Mounjaro using a gradual tapered approach. This means reducing each dose slowly, across 4 weeks, before dropping to the next lower dose. The plan may be different for you and can be reviewed by discussion with a GP on our platform. The whole time to come off the medication could take around 3-6 months (depending on the dose that you are taking) if following a gradual tapering approach.
        <br className="" />
        <br className="" />
        In some instances it can be stopped suddenly but only if you doctor has advised this.

      </>
    ),
  },
  {
    question: (
      <>
        Who should I contact regarding deliveries?
      </>
    ),
    answer: (
      <>

        If you have any queries regarding a delivery or need assistance with a delivery, please contact our pharmacy partner by email at support@signaturepharmacy.co.uk or alternatively by phone on 0330 111 0440. Their opening hours are Monday to Friday 0900-1800 and weekends from 0900-1500.

      </>
    ),
  },
  {
    question: (
      <>
        Is there a cut off for next day delivery?
      </>
    ),
    answer: (
      <>

        Please note - your medical questionnaire has to be reviewed first by a doctor, which will usually happen on the same day. Following this, if there are no issues raised, the prescription will be issued. If the prescription is issued by 1600 then a next day delivery is possible.

      </>
    ),
  },
  {
    question: (
      <>
        The ice is melted in the box, can I still use the medication?
      </>
    ),
    answer: (
      <>

        Medications are packed securely. During summer, we use two ice packs, and during winter, one ice pack. This packaging has been tested in both seasons and keeps the medication within the required temperature range for 48–72 hours, and for more than 72 hours in winter.
        <br />
        <br />
        We provide next-day delivery. If there is a delivery delay and the medication arrives with melted ice packs, it is still safe to use if it has been delivered under 5 days, provided the temperature has remained below 30°C for up to 30 days.
        <br />
        <br />
        If a delivery takes five days or longer, please contact our pharmacy partner by phone on 0330 111 0440 or by email at support@signaturepharmacy.co.uk

      </>
    ),
  },
  {
    question: (
      <>
        Can I have Mounjaro with HRT?
      </>
    ),
    answer: (
      <>
        Yes you can. However it is advisable to discuss this with one of our GPs as we may recommend switching your hormone replacement therapy to a transdermal route / mirena coil. This is because Mounjaro slows emptying of the stomach, which could affect the absorption of your HRT medication. In turn this could mean insufficient endometrial protection.
      </>
    ),
  },
];

export const MounjaroFAQ = () => {
  return (
    <section className="py-12 px-6 bg-white font-primary">
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
