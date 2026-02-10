"use client";


const faqs = [
  {
    question: "How should I store the pen?",
    answer: (
      <p>Keep Wegovy® in the original packaging to protect from sunlight. Store it in the refrigerator from 2°C to 8°C. You can take the pen out of the refrigerator to let it reach room temperature before using it. Keep the cap on, until you're ready to inject. Do not freeze. Throw away pen if Wegovy® has been frozen, exposed to light or temperatures above 30°C, out of the refrigerator for 28 days or longer. Wegovy® can be stored outside of the refrigerator from 8°C to 30°C in the original packaging for up to 28 days.</p>
    )
  },
  {
    question: "How should I dispose of the pen?",
    answer: (
      <p>A sharps bin is included as part of the order. Place the used pen into the sharps disposal box and return to any nearest pharmacy once full. Do not throw away into household refuse bins.</p>
    )
  },
  {
    question: "Are there any side effects?",
    answer: (
      <div className="space-y-6">
        <p>The most common side effects include the following. These usually subside with time as your body gets used to the medication.</p>
        <ul className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-y-2 pl-4">
          <li className="before:content-['•'] before:mr-2">Nausea</li>
          <li className="before:content-['•'] before:mr-2">Diarrhoea</li>
          <li className="before:content-['•'] before:mr-2">Vomiting</li>
          <li className="before:content-['•'] before:mr-2">Constipation</li>
          <li className="before:content-['•'] before:mr-2">Stomach (abdomen) pain</li>
          <li className="before:content-['•'] before:mr-2">Headache</li>
          <li className="before:content-['•'] before:mr-2">Tiredness (fatigue)</li>
          <li className="before:content-['•'] before:mr-2">Upset stomach</li>
          <li className="before:content-['•'] before:mr-2">Dizziness</li>
          <li className="before:content-['•'] before:mr-2">Feeling bloated</li>
          <li className="before:content-['•'] before:mr-2">Belching</li>
          <li className="before:content-['•'] before:mr-2">Low blood sugar in people with type 2 diabetes</li>
          <li className="before:content-['•'] before:mr-2">Gas</li>
          <li className="before:content-['•'] before:mr-2">Stomach flu</li>
          <li className="before:content-['•'] before:mr-2">Heartburn</li>
          <li className="before:content-['•'] before:mr-2">Runny nose or sore throat</li>
        </ul>
        <p className="italic">If you have any concerns regarding possible side effects, please book a consultation with one of our GPs online.</p>
      </div>
    )
  },
  {
    question: "Am I eligible for this injection?",
    answer: (
      <div className="space-y-4">
        <p>You may be eligible for this injection if you have:</p>
        <ul className="space-y-2 pl-4">
          <li className="before:content-['•'] before:mr-2">A BMI of 30 or higher</li>
          <li className="before:content-['•'] before:mr-2">A BMI of 27 or higher if you also have a pre-existing medical condition that is affected by your weight, such as cardiovascular disease or high blood pressure</li>
          <li className="before:content-['•'] before:mr-2">Aged over 18</li>
        </ul>
        <p>You will be asked to fill in a medical form which is reviewed by a doctor before a prescription is issued.</p>
      </div>
    )
  },
  {
    question: "Is the Wegovy® Pill Available?",
    answer: (
      <p>This is not yet available in the UK, but is available in the US.</p>
    )
  },
  {
    question: "Are there any rare side effects?",
    answer: (
      <div className="space-y-6">
        <p className="italic">Rare/uncommon side effects</p>
        <div className="space-y-6">
          <div className="space-y-1">
            <h5 className="font-bold text-wegovy-brown text-lg">Pancreatitis</h5>
            <p>This is a condition which leads to inflammation of the pancreas. Symptoms could include: severe abdominal pain spreading into the back with nausea, vomiting or diarrhoea. Please contact a doctor immediately if you have concerns.</p>
          </div>
          <div className="space-y-1">
            <h5 className="font-bold text-wegovy-brown text-lg">Gallbladder Problems</h5>
            <p>If you develop any pain under the ribs on the right side or middle of the upper belly, alongside nausea/vomiting, please contact your doctor.</p>
          </div>
          <div className="space-y-1">
            <h5 className="font-bold text-wegovy-brown text-lg">Low Blood Sugar</h5>
            <p>This medication can lower your sugar levels when used alongside other medications for diabetes eg insulin or sulfonylureas.</p>
          </div>
          <div className="space-y-1">
            <h5 className="font-bold text-wegovy-brown text-lg">Dehydration</h5>
            <p>Keep adequately hydrated drinking a minimum of 2.5L daily.</p>
          </div>
          <div className="space-y-1">
            <h5 className="font-bold text-wegovy-brown text-lg">Allergic Reactions</h5>
            <p>As with all medications allergies are possible. Stop using Wegovy® and contact a doctor immediately if you develop swelling to the face, lips, tongue or throat or develop any breathing difficulties or an abnormal rash.</p>
          </div>
          <p className="italic">Vision changes in people with type 2 diabetes, increased heart, depression.</p>
        </div>
      </div>
    )
  },
  {
    question: "What should I do if I miss a dose?",
    answer: (
      <p>If a dose is more than 5 days late, the missed dose should not be administered and the next dose should be administered at the normal time. If a dose is less than 5 days late, take the dose as normal. If more doses of Wegovy® are missed, consider re-starting at a reduced dose.</p>
    )
  },
  {
    question: "Are there any reasons why I can't have Wegovy®?",
    answer: (
      <div className="space-y-4">
        <p>There may be reasons why a prescription is not suitable for you. Some reasons may include the following:</p>
        <ul className="space-y-2 pl-4">
          <li className="before:content-['•'] before:mr-2">Severe kidney disease or liver disease</li>
          <li className="before:content-['•'] before:mr-2">Pregnant or breastfeeding</li>
          <li className="before:content-['•'] before:mr-2">History of thyroid cancer or MEN2</li>
          <li className="before:content-['•'] before:mr-2">History of pancreatitis or gallbladder disease</li>
          <li className="before:content-['•'] before:mr-2">Allergies to semaglutide</li>
          <li className="before:content-['•'] before:mr-2">Diabetic eye disease</li>
          <li className="before:content-['•'] before:mr-2">Your BMI is below 30, or below 27 and you do not have a weight related medical condition</li>
          <li className="before:content-['•'] before:mr-2">Low sugar levels</li>
        </ul>
      </div>
    )
  },
  {
    question: "I am taking the pill. Will using a GLP-1 agonist like Wegovy® affect my contraception?",
    answer: (
      <div className="space-y-6">
        <p>There is currently no evidence that Wegovy® (semaglutide) affects the effectiveness of the pill (i.e. the combined pill, or the progesterone only pill 'mini-pill').</p>
        <p>If you are using Mounjaro® (tirzepatide) you should use a barrier method of contraception (e.g. condoms) in addition to your pill for four weeks after starting the medication, and for four weeks after any increase in dose. This is because tirzepatide works slightly differently to the other GLP-1 agonists. Alternatively, you may wish to consider another (non-oral) method of contraception whilst using tirzepatide.</p>
      </div>
    )
  }
];

export const WegovyFAQ = () => {
  return (
    <section className="py-12 px-6 max-w-[1240px] mx-auto font-primary bg-white">
      <div className="flex flex-col gap-16 lg:gap-24">
        {faqs.map((faq, index) => (
          <div key={index} className="space-y-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-wegovy-brown tracking-tight">
              {faq.question}
            </h3>
            <div className="text-wegovy-red-3 text-lg lg:text-[22px] leading-relaxed italic font-light font-secondary max-w-5xl">
              {faq.answer}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};