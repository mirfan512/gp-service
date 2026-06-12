import React from 'react';

export type FAQEntry = {
  id: string;
  question: string;
  answer: React.ReactNode;
};

export const nadFaqData: FAQEntry[] = [
  {
    id: "why-choose-vivere",
    question: "Why Choose NAD+ Injections by Vivere?",
    answer: (
      <div className="flex flex-col gap-6">
        <div>
          <h4 className="text-lg lg:text-xl font-bold text-[#EDB984] mb-3">What is NAD+?</h4>
          <div className="space-y-4 font-secondary text-base lg:text-lg text-text-secondary leading-relaxed">
            <p>NAD+ stands for Nicotinamide Adenine Dinucleotide, a vital coenzyme found in every living cell. It plays a major role in converting the food we eat into usable energy and is essential for healthy cellular function. Derived from vitamin B3, NAD+ is involved in many biological processes that keep your body working efficiently, including DNA repair and maintaining a healthy metabolism.</p>
            <p>NAD exists in two forms: NAD+ (oxidised) and NADH (reduced). These two forms work together to generate ATP, the primary energy source for your cells. Without enough NAD, your body’s ability to produce energy and carry out important repair processes is significantly reduced.</p>
            <p>As we age, natural NAD+ levels decline. This can lead to reduced energy, slower metabolism and impaired brain function. NAD+ supplementation can help restore these levels, supporting long-term cellular health and potentially slowing the ageing process. For this reason, NAD+ therapy is increasingly used by people looking to optimise energy, focus, recovery, and overall well-being.</p>
            <p>Vivere NAD+ Injections deliver high purity Nicotinamide Adenine Dinucleotide (NAD) into the body. This method ensures rapid absorption and maximum bioavailability, which is more effective than oral supplements. By bypassing the digestive system, NAD+ Injections by Vivere provide an effective means to replenish and rejuvenate cellular NAD levels. These injections help to support cellular regeneration, enhance metabolic functions and promote overall well-being.</p>
          </div>
        </div>

        <div>
          <h4 className="text-lg lg:text-xl font-bold text-[#EDB984] mb-3">Who is NAD+ for?</h4>
          <div className="space-y-4 font-secondary text-base lg:text-lg text-text-secondary leading-relaxed">
            <p>People who might benefit from NAD+ therapy include all adults who want to boost their energy levels, sharpen their concentration or support healthy ageing. As we get older, natural levels of NAD+ decline. This can contribute to tiredness, slower recovery, reduced mental clarity and visible signs of ageing. These effects make NAD+ a popular option with adults over 30.</p>
            <p>Vivere NAD+ injections may also suit people with busy or demanding lifestyles, athletes or physically active people seeking faster recovery, or those looking to support metabolic and cellular health.</p>
          </div>
        </div>

        <div>
           <h4 className="text-lg lg:text-xl font-bold text-[#EDB984] mb-3">Manufactured in One of the UK's Most Trusted Licensed Facilities</h4>
           <p className="font-secondary text-base lg:text-lg text-text-secondary leading-relaxed">The NAD+ used in these pens is manufactured to GMP standards at a UK-based, GMP-licensed, NHS-approved site. The site where the NAD+ is manufactured holds an MHRA license for sterile liquids, one of only 24 in the country, and it is also the only NAD+ facility that is UKAS-accredited.</p>
        </div>
        
        <div>
           <h4 className="text-lg lg:text-xl font-bold text-[#EDB984] mb-3">NHS-Approved Supplier</h4>
           <p className="font-secondary text-base lg:text-lg text-text-secondary leading-relaxed">Vivere’s NAD+ supplier is approved by the NHS, ensuring products meet stringent public health and safety standards.</p>
        </div>
        
        <div>
           <h4 className="text-lg lg:text-xl font-bold text-[#EDB984] mb-3">Pharmaceutical-Grade Glass Vials</h4>
           <p className="font-secondary text-base lg:text-lg text-text-secondary leading-relaxed">Each cartridge of NAD+ is stored in pre-sterilised, endotoxin-free, pharmaceutical-grade type I glass vials. These are the same high-quality containers used in the production of insulin, ensuring exceptional safety and purity.</p>
        </div>
        
        <div>
           <h4 className="text-lg lg:text-xl font-bold text-[#EDB984] mb-3">Highest Quality Ingredients</h4>
           <p className="font-secondary text-base lg:text-lg text-text-secondary leading-relaxed">Vivere’s partner manufacturer only uses drug-grade, endotoxin-free active pharmaceutical ingredients (API). This ensures the NAD+ you receive is of the highest possible standard for injectable use.</p>
        </div>
        
        <div>
           <h4 className="text-lg lg:text-xl font-bold text-[#EDB984] mb-3">Ultra-Sterile Production Environment</h4>
           <p className="font-secondary text-base lg:text-lg text-text-secondary leading-relaxed">NAD+ is manufactured in a validated Grade C cleanroom and filled in a Grade A sterile space, the same clean conditions used in hospitals.</p>
        </div>
        
        <div>
           <h4 className="text-lg lg:text-xl font-bold text-[#EDB984] mb-3">NHS-Level Testing and Quality Assurance</h4>
           <p className="font-secondary text-base lg:text-lg text-text-secondary leading-relaxed">Extensive method validation has been completed through QC North West (part of Stockport NHS Trust). This includes HPLC analysis and validated sterility testing. Every batch is issued with a drug-grade Certificate of Analysis to confirm it has been tested for purity, potency and sterility. This helps ensure transparency and reliability.</p>
        </div>
      </div>
    )
  },
  {
    id: "whats-included",
    question: "What's included in Vivere NAD+ Injection Pen kits?",
    answer: (
      <div className="flex flex-col gap-8">
        <div className="space-y-4 font-secondary text-base lg:text-lg text-text-secondary leading-relaxed">
           <p className="font-bold text-[#EDB984]">Each NAD+ injection pen kit includes:</p>
           <ul className="list-disc pl-6 space-y-2">
             <li>1x NAD+ Injection Pen</li>
             <li>
               NAD+ Cartridges
               <ul className="list-[circle] pl-6 mt-2 space-y-1">
                 <li>1 months supply - 1x1000mg/3ml</li>
                 <li>2 months supply - 2x1000mg/3ml</li>
                 <li>3 months supply - 3x1000mg/3ml</li>
               </ul>
             </li>
             <li>1x NAD+ Travel Case by Vivere (inc. cool pack)</li>
             <li>Micro-Needles (enough for your order)</li>
             <li>Alcohol Wipes (enough for your order)</li>
             <li>Sharps Bin</li>
           </ul>
        </div>

        <div className="space-y-4 font-secondary text-base lg:text-lg text-text-secondary leading-relaxed">
           <p className="font-bold text-[#EDB984]">The NAD+ Refill Cartridges include:</p>
           <ul className="list-disc pl-6 space-y-2">
             <li>
               NAD+ Cartridges
               <ul className="list-[circle] pl-6 mt-2 space-y-1">
                 <li>1 months supply - 1x1000mg/3ml</li>
                 <li>2 months supply - 2x1000mg/3ml</li>
                 <li>3 months supply - 3x1000mg/3ml</li>
               </ul>
             </li>
             <li>Micro-Needles</li>
             <li>Alcohol Wipes</li>
             <li>1x Sharps Bin</li>
           </ul>
        </div>
        
        <div className="space-y-4 font-secondary text-base lg:text-lg text-text-secondary leading-relaxed">
          <p>Please note that the refills do not include:</p>
          <ul className="list-disc pl-6">
            <li>NAD+ Injection Pen</li>
          </ul>
        </div>

        <div className="space-y-4">
          <p className="font-secondary text-base lg:text-lg text-text-secondary leading-relaxed">Here is an easy-to-understand table that shows what is included within the NAD+ by Vivere kits:</p>
          
          <div className="overflow-x-auto pb-4">
             <table className="w-full text-left font-secondary text-sm lg:text-base text-text-secondary border-collapse min-w-[800px]">
               <thead>
                 <tr>
                    <th colSpan={7} className="text-xl font-bold text-[#EDB984] pb-4 pt-2 border-b-2 border-[#EDB984]">NAD+ Injection Pen Kits</th>
                 </tr>
                 <tr className="border-b border-gray-200">
                    <th className="py-3 px-4 font-bold">Supply Duration</th>
                    <th className="py-3 px-4 font-bold">NAD+ Injection Pen (Vivere)</th>
                    <th className="py-3 px-4 font-bold">NAD+ Cartridges (1000mg / 3ml)</th>
                    <th className="py-3 px-4 font-bold">NAD+ Travel Case (incl. cool pack)</th>
                    <th className="py-3 px-4 font-bold">Micro-Needles</th>
                    <th className="py-3 px-4 font-bold">Alcohol Wipes</th>
                    <th className="py-3 px-4 font-bold">Sharps Bin</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-gray-100">
                 <tr>
                   <td className="py-3 px-4 font-bold">1 month supply</td>
                   <td className="py-3 px-4">✓ Included</td>
                   <td className="py-3 px-4">1</td>
                   <td className="py-3 px-4">✓ Included</td>
                   <td className="py-3 px-4">20</td>
                   <td className="py-3 px-4">20</td>
                   <td className="py-3 px-4">✓ x1</td>
                 </tr>
                 <tr>
                   <td className="py-3 px-4 font-bold">2 months supply</td>
                   <td className="py-3 px-4">✓ Included</td>
                   <td className="py-3 px-4">2</td>
                   <td className="py-3 px-4">✓ Included</td>
                   <td className="py-3 px-4">40</td>
                   <td className="py-3 px-4">40</td>
                   <td className="py-3 px-4">✓ x2</td>
                 </tr>
                 <tr>
                   <td className="py-3 px-4 font-bold">3 months supply</td>
                   <td className="py-3 px-4">✓ Included</td>
                   <td className="py-3 px-4">3</td>
                   <td className="py-3 px-4">✓ Included</td>
                   <td className="py-3 px-4">60</td>
                   <td className="py-3 px-4">60</td>
                   <td className="py-3 px-4">✓ x3</td>
                 </tr>
               </tbody>
             </table>
          </div>

          <div className="overflow-x-auto pb-4 mt-6">
             <table className="w-full text-left font-secondary text-sm lg:text-base text-text-secondary border-collapse min-w-[800px]">
               <thead>
                 <tr>
                    <th colSpan={7} className="text-xl font-bold text-[#EDB984] pb-4 pt-2 border-b-2 border-[#EDB984]">NAD+ Refill Cartridges</th>
                 </tr>
                 <tr className="border-b border-gray-200">
                    <th className="py-3 px-4 font-bold">Supply Duration</th>
                    <th className="py-3 px-4 font-bold">NAD+ Injection Pen (Vivere)</th>
                    <th className="py-3 px-4 font-bold">NAD+ Cartridges (1000mg / 3ml)</th>
                    <th className="py-3 px-4 font-bold">NAD+ Travel Case (incl. cool pack)</th>
                    <th className="py-3 px-4 font-bold">Micro-Needles</th>
                    <th className="py-3 px-4 font-bold">Alcohol Wipes</th>
                    <th className="py-3 px-4 font-bold">Sharps Bin</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-gray-100">
                 <tr>
                   <td className="py-3 px-4 font-bold">1 month supply</td>
                   <td className="py-3 px-4">✗ Not included</td>
                   <td className="py-3 px-4">1</td>
                   <td className="py-3 px-4">✓ Included</td>
                   <td className="py-3 px-4">20</td>
                   <td className="py-3 px-4">20</td>
                   <td className="py-3 px-4">✓ x1</td>
                 </tr>
                 <tr>
                   <td className="py-3 px-4 font-bold">2 months supply</td>
                   <td className="py-3 px-4">✗ Not included</td>
                   <td className="py-3 px-4">2</td>
                   <td className="py-3 px-4">✓ Included</td>
                   <td className="py-3 px-4">40</td>
                   <td className="py-3 px-4">40</td>
                   <td className="py-3 px-4">✓ x2</td>
                 </tr>
                 <tr>
                   <td className="py-3 px-4 font-bold">3 months supply</td>
                   <td className="py-3 px-4">✗ Not included</td>
                   <td className="py-3 px-4">3</td>
                   <td className="py-3 px-4">✓ Included</td>
                   <td className="py-3 px-4">60</td>
                   <td className="py-3 px-4">60</td>
                   <td className="py-3 px-4">✓ x2</td>
                 </tr>
               </tbody>
             </table>
          </div>
        </div>

        <div>
           <h4 className="text-lg lg:text-xl font-bold text-[#EDB984] mb-3">NAD+ Injection Pen by Vivere</h4>
           <p className="font-secondary text-base lg:text-lg text-text-secondary leading-relaxed">The Vivere NAD+ Injection Pen is an easy-to-use device that allows you to administer precise doses of NAD+ directly under the skin. Designed with both ease and comfort in mind, this pen gives you a convenient way to support cellular energy, cognitive function, and recovery from the comfort of your home. Its user-friendly design makes it ideal for people who want to maintain consistent levels of NAD+, without having to visit a clinic.</p>
        </div>

        <div>
           <h4 className="text-lg lg:text-xl font-bold text-[#EDB984] mb-3">NAD+ Cartridges</h4>
           <p className="font-secondary text-base lg:text-lg text-text-secondary leading-relaxed">Each Vivere NAD+ cartridge contains a high-purity, pharmaceutical-grade dose of NAD+, a powerful coenzyme that plays a vital role in energy production, DNA repair and healthy ageing. Each cartridge is manufactured using pharmaceutical-grade type I glass vials that are pre-sterilised and endotoxin-free. These are filled with drug-grade, endotoxin-free NAD+ using unique high-speed vacuum technology in an ultra-sterile cleanroom environment. Every batch of Vivere NAD+ is issued with a Certificate of Analysis to confirm it has been tested for purity, potency and sterility.</p>
        </div>

        <div>
           <h4 className="text-lg lg:text-xl font-bold text-[#EDB984] mb-3">NAD+ Travel Case by Vivere (Including Vivere Cool Pack)</h4>
           <p className="font-secondary text-base lg:text-lg text-text-secondary leading-relaxed">The Vivere NAD+ Travel Case keeps your NAD+ Pen and cartridges safe, clean and stored away wherever you are. Made from durable, lightweight materials with a soft, cushioned interior, it protects your NAD+ from bumps, dust and spills while travelling or during day-to-day use. Included with your case is a handy reusable cool pack that helps keep your NAD+ cartridges cool whilst on the move. Please note that your NAD+ cartridges will be sent to you with cool packs included. We recommend storing your NAD+ in the fridge (between 2-8°C) when you receive it, as this will help to prolong the life of your product. This case provides you with a convenient place to store your NAD+ pen for both privacy and peace of mind.</p>
        </div>

        <div>
           <h4 className="text-lg lg:text-xl font-bold text-[#EDB984] mb-3">Micro-Needles</h4>
           <p className="font-secondary text-base lg:text-lg text-text-secondary leading-relaxed">Included with your kit are sterile, single-use micro-needles designed for minimal discomfort and maximum precision. These ultra-fine needles allow for safe and accurate subcutaneous delivery of NAD+, ensuring it reaches your bloodstream efficiently for optimal effectiveness. These needles are easy to apply and suitable for people new to self-injectables.</p>
        </div>

        <div>
           <h4 className="text-lg lg:text-xl font-bold text-[#EDB984] mb-3">Alcohol Wipes</h4>
           <p className="font-secondary text-base lg:text-lg text-text-secondary leading-relaxed">Each kit contains high-quality alcohol wipes to ensure proper skin cleansing before each injection. Cleaning the injection site helps to prevent infection and maintain the highest standard of hygiene during use. These wipes are individually packaged and can be easily stored in your travel case.</p>
        </div>

        <div>
           <h4 className="text-lg lg:text-xl font-bold text-[#EDB984] mb-3">Sharps Bin</h4>
           <p className="font-secondary text-base lg:text-lg text-text-secondary leading-relaxed">To ensure safe and responsible use, your kit includes a sharps bin for the disposal of used micro-needles. This sealable bin ensures that all needles are disposed of securely and hygienically, to protect both yourself and others.</p>
        </div>
      </div>
    )
  },
  {
    id: "delivery",
    question: "How will my NAD+ injection pens by Vivere be delivered to me?",
    answer: (
      <p className="font-secondary text-base lg:text-lg text-text-secondary leading-relaxed">
        Your NAD+ injection pen kits will be delivered by a trusted courier from our pharmacy partner. Please note that your NAD+ cartridges will be sent to you with cool packs included. We recommend storing your NAD+ in the fridge (between 2-8°C) when you receive it, as this will help to prolong the life of your product.
      </p>
    )
  },
  {
    id: "how-to-use",
    question: "How to use NAD+ Injection Pens by Vivere",
    answer: (
      <div className="flex flex-col gap-6">
        <p className="font-secondary text-base lg:text-lg text-text-secondary leading-relaxed">
          The NAD+ in this pen is delivered under your skin via a self-administered injection. When you first start using the pen, you should do so for three days in a row. After these three days, you should use your pen every other day. The recommended daily dosage for a NAD+ shot is up to 50mg per injection. On the Vivere pen, this is indicated as 15 units with a 1000mg cartridge.
        </p>

        <div>
          <h4 className="text-lg lg:text-xl font-bold text-[#EDB984] mb-3">How to set up your pen</h4>
          <ol className="list-decimal pl-6 space-y-2 font-secondary text-base lg:text-lg text-text-secondary leading-relaxed">
            <li>Remove your pen and cartridge from the packaging and allow it to rest at room temperature for around 2-3 minutes.</li>
            <li>Take the lid off the pen.</li>
            <li>Unscrew the cartridge holder from the pen.</li>
            <li>If exposed, gently push the plunger into the base of the pen.</li>
            <li>Insert the NAD+ cartridge into the cartridge holder.</li>
            <li>Screw the cartridge holder with the cartridge inside into the pen.</li>
            <li>Twist your pen until the dosage meter is fully exposed.</li>
            <li>Push the dosage meter and watch the plunger move inside the cartridge holder. Repeat until the plunger is touching the bottom of the cartridge and you start to feel resistance.</li>
          </ol>
          <p className="mt-3 font-secondary text-base lg:text-lg text-text-secondary leading-relaxed">Your pen should now be ready to use.</p>
        </div>

        <div>
          <h4 className="text-lg lg:text-xl font-bold text-[#EDB984] mb-3">How to administer NAD+</h4>
          <ol className="list-decimal pl-6 space-y-2 font-secondary text-base lg:text-lg text-text-secondary leading-relaxed">
            <li>Gently screw a 6mm micro-needle onto the end of your pen. Do not remove the needle tip cover.</li>
            <li>Clean your chosen injection site (your stomach, thigh or buttock is ideal) using an alcohol wipe.</li>
            <li>Remove the needle tip cover.</li>
            <li>Select your dosage by twisting the dosage meter to your desired reading. As noted, the recommended daily dosage is 50mg (0.3ml).</li>
            <li>Gently pinch the skin of your injection site to pull it away from your muscle.</li>
            <li>Insert the needle into your skin. Try not to move as this may cause bruising.</li>
            <li>Press the button on the pen to push down the plunger. This will administer the NAD+ subcutaneously.</li>
            <li>Once your dosage is delivered, count roughly three seconds before removing the needle from your skin.</li>
            <li>Put the needle cover back onto the needle and unscrew it from the pen.</li>
            <li>Put the lid of the pen back on and store it in the fridge.</li>
            <li>Dispose of the used needle in your sharps bin.</li>
            <li>Moving forward, ensure you change where you inject regularly to avoid skin damage.</li>
          </ol>
          <div className="mt-4 space-y-2 font-secondary text-base lg:text-lg text-text-secondary leading-relaxed">
            <p>Please remember that it is very normal to experience the below when using NAD+ injection pens:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>A red mark around the injection site. This is completely normal and is not causing you any harm.</li>
              <li>A drop of NAD+ on the skin after you have injected it.</li>
              <li>Bruising around the injection site. This is most common if you have moved during your injection.</li>
              <li>A small drop of blood on the skin where you have injected.</li>
            </ul>
          </div>
        </div>

        <div>
          <h4 className="text-lg lg:text-xl font-bold text-[#EDB984] mb-3">Where should I inject NAD+ into my body?</h4>
          <p className="font-secondary text-base lg:text-lg text-text-secondary leading-relaxed mb-2">NAD+ Injections are administered into muscle or fatty tissue. Common injection sites include:</p>
          <ul className="list-disc pl-6 space-y-1 font-secondary text-base lg:text-lg text-text-secondary leading-relaxed">
            <li>Abdomen/lower belly</li>
            <li>Upper thigh</li>
            <li>Buttocks</li>
          </ul>
          <p className="mt-2 font-secondary text-base lg:text-lg text-text-secondary leading-relaxed">Please note it is important to change injection sites of NAD+ shots regularly to minimise discomfort and ensure effective absorption of the NAD+ solution into your body.</p>
        </div>

        <div>
           <h4 className="text-lg lg:text-xl font-bold text-[#EDB984] mb-3">How should I dispose of NAD+ needles?</h4>
           <p className="font-secondary text-base lg:text-lg text-text-secondary leading-relaxed">After use, dispose of your needles safely to prevent accidents and environmental contamination. Place used needles into your sharps bin or a puncture-proof container designated for medical waste disposal. Seal the container and store it out of reach of children and pets.</p>
        </div>

        <div>
           <h4 className="text-lg lg:text-xl font-bold text-[#EDB984] mb-3">Where should I store my NAD+ cartridges?</h4>
           <p className="font-secondary text-base lg:text-lg text-text-secondary leading-relaxed mb-2">You should store the NAD+ cartridges in a fridge between 2°C and 8°C. Before you use the injection pen, you should take a cartridge out of the fridge, 2-3 minutes before use, to allow it to come up to room temperature. Please note that your NAD+ cartridges will be sent to you with cool packs included. We recommend storing your NAD+ in the fridge (between 2-8°C) when you receive it, as this will help to prolong the life of your product.</p>
           <p className="font-secondary text-base lg:text-lg text-text-secondary leading-relaxed">Store the entire kit in a safe place away from direct sunlight, heat sources and moisture. Ensure it is stored securely to prevent access by children and pets.</p>
        </div>

        <div>
           <h4 className="text-lg lg:text-xl font-bold text-[#EDB984] mb-3">How do I refill my NAD+ Injection Pen?</h4>
           <p className="font-secondary text-base lg:text-lg text-text-secondary leading-relaxed mb-2">Here are some straightforward instructions you can follow to change the cartridge and refill your pen:</p>
           <ol className="list-decimal pl-6 space-y-2 font-secondary text-base lg:text-lg text-text-secondary leading-relaxed">
             <li>Remove the lid from the pen.</li>
             <li>Unscrew the clear section from the pen.</li>
             <li>Push the plunger down.</li>
             <li>Slide the used NAD+ cartridge from the clear section.</li>
             <li>Dispose of the used cartridge in a sharps bin.</li>
             <li>Slide your new refill cartridge into the clear section.</li>
             <li>Screw the clear section back onto the pen</li>
             <li>Continue using as normal, checking your dose before you inject.</li>
           </ol>
        </div>
      </div>
    )
  },
  {
    id: "typical-dosage",
    question: "What is the typical dosage for NAD+ injections?",
    answer: (
       <div className="flex flex-col gap-6">
        <div className="space-y-4 font-secondary text-base lg:text-lg text-text-secondary leading-relaxed">
          <p>The recommended daily dosage for NAD+ injections is 50mg a day.</p>
          <p>For a 1000mg cartridge, a 50mg dose is indicated as 15 units on the Vivere pen.</p>
          <p>You should use your pen once a day for the first 3 days, and then once every other day. A dosage of 50mg means a 1000mg cartridge should last for 37 days. Because of this, you will need one 1000mg cartridge for a months supply.</p>
        </div>

        <div>
           <h4 className="text-lg lg:text-xl font-bold text-[#EDB984] mb-4">Dosing Schedule</h4>
           <div className="grid grid-cols-2 max-w-sm gap-4">
             <div className="border border-gray-200 rounded-lg overflow-hidden">
                <table className="w-full text-left font-secondary text-[15px] text-text-secondary border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                       <th className="py-2 px-3 font-bold">Day</th>
                       <th className="py-2 px-3 font-bold">Units Injected</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr><td className="py-2 px-3">1</td><td className="py-2 px-3">15 units</td></tr>
                    <tr><td className="py-2 px-3">2</td><td className="py-2 px-3">15 units</td></tr>
                    <tr><td className="py-2 px-3">3</td><td className="py-2 px-3">15 units</td></tr>
                  </tbody>
                </table>
             </div>
             
             <div className="border border-gray-200 rounded-lg overflow-hidden">
                <table className="w-full text-left font-secondary text-[15px] text-text-secondary border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                       <th className="py-2 px-3 font-bold">Day</th>
                       <th className="py-2 px-3 font-bold">Units Injected</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr><td className="py-2 px-3">5</td><td className="py-2 px-3">15 units</td></tr>
                    <tr><td className="py-2 px-3">7</td><td className="py-2 px-3">15 units</td></tr>
                    <tr><td className="py-2 px-3">9</td><td className="py-2 px-3">15 units</td></tr>
                    <tr><td className="py-2 px-3">11</td><td className="py-2 px-3">15 units</td></tr>
                    <tr><td className="py-2 px-3">13</td><td className="py-2 px-3">15 units</td></tr>
                    <tr><td className="py-2 px-3">15</td><td className="py-2 px-3">15 units</td></tr>
                    <tr><td className="py-2 px-3">17</td><td className="py-2 px-3">15 units</td></tr>
                    <tr><td className="py-2 px-3">19</td><td className="py-2 px-3">15 units</td></tr>
                    <tr><td className="py-2 px-3">21</td><td className="py-2 px-3">15 units</td></tr>
                    <tr><td className="py-2 px-3">23</td><td className="py-2 px-3">15 units</td></tr>
                    <tr><td className="py-2 px-3">25</td><td className="py-2 px-3">15 units</td></tr>
                    <tr><td className="py-2 px-3">27</td><td className="py-2 px-3">15 units</td></tr>
                    <tr><td className="py-2 px-3">29</td><td className="py-2 px-3">15 units</td></tr>
                    <tr><td className="py-2 px-3">31</td><td className="py-2 px-3">15 units</td></tr>
                    <tr><td className="py-2 px-3">33</td><td className="py-2 px-3">15 units</td></tr>
                    <tr><td className="py-2 px-3">35</td><td className="py-2 px-3">15 units</td></tr>
                    <tr><td className="py-2 px-3">37</td><td className="py-2 px-3">15 units</td></tr>
                  </tbody>
                </table>
             </div>
           </div>
           <p className="mt-4 font-secondary text-base lg:text-lg text-text-secondary leading-relaxed">After 20 doses, you will need a new cartridge. When you have a new cartridge, continue injecting 15 units every other day.</p>
        </div>

        <div>
           <h4 className="text-lg lg:text-xl font-bold text-[#EDB984] mb-3">Who is a higher strength of NAD+ suitable for?</h4>
           <div className="space-y-4 font-secondary text-base lg:text-lg text-text-secondary leading-relaxed">
             <p>Our 1000mg NAD+ cartridge is ideal for people who are already familiar with using NAD+ and are looking for a more practical and efficient way to maintain their treatment.</p>
             <p>If you’ve already experienced the benefits of NAD+ and are ready to make it part of your regular routine, the 1000mg option could be more appropriate. Depending on your dosing schedule, it can reduce the number of injections needed, making day-to-day use simpler.</p>
             <p>By moving to the 1000mg cartridge, many users only need one cartridge per month instead of two, which may help to make your treatment easier to manage.</p>
           </div>
        </div>
       </div>
    )
  },
  {
    id: "side-effects",
    question: "Do NAD+ injections have any side effects?",
    answer: (
      <div className="font-secondary text-base lg:text-lg text-text-secondary leading-relaxed">
        <p className="mb-2">Vivere NAD+ injections are generally well-tolerated, but some individuals may experience mild side effects. Common side effects include:</p>
        <ul className="list-disc pl-6 space-y-1 mb-4">
          <li>Mild nausea</li>
          <li>Headaches</li>
          <li>Dizziness</li>
          <li>Fatigue</li>
          <li>Flushing</li>
          <li>Pain where you inject</li>
        </ul>
        <p>These side effects are usually temporary and should disappear shortly after the injection. If you experience severe or persistent side effects, seek medical attention as soon as possible.</p>
      </div>
    )
  },
  {
    id: "what-should-i-know",
    question: "What should I know before using NAD+ injections?",
    answer: (
      <div className="flex flex-col gap-6">
        <div className="font-secondary text-base lg:text-lg text-text-secondary leading-relaxed">
          <p className="mb-2">NAD+ is a natural molecule found in the body, however for your safety, keep the following points in mind:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Allergies:</strong> Don’t use NAD+ injections if you’re allergic to any of the ingredients. Ask your pharmacist or healthcare provider for a full list if you’re unsure.</li>
            <li><strong>Pregnancy & breastfeeding:</strong> Not recommended due to limited safety data in humans.</li>
            <li><strong>Children:</strong> NAD+ injection pens are only available to adults, aged 18+.</li>
            <li><strong>Liver or kidney conditions:</strong> Speak to a healthcare professional before using NAD+ injections, especially if you have issues with your liver or kidneys.</li>
            <li><strong>Chronic illnesses:</strong> If you live with a long-term condition like cancer or inflammatory disease (e.g. rheumatoid arthritis), consult a doctor before using NAD+ injections.</li>
          </ul>
          <p>Our clinicians will review your medical history prior to NAD+ being prescribed. Please answer all questions fully and accurately.</p>
        </div>

        <div>
           <h4 className="text-lg lg:text-xl font-bold text-[#EDB984] mb-3">Can you take NAD+ injections while pregnant or breastfeeding?</h4>
           <p className="font-secondary text-base lg:text-lg text-text-secondary leading-relaxed">No, NAD+ injections are not recommended for pregnant or breastfeeding women due to the lack of sufficient research on their safety. It is essential to consult with a healthcare provider before considering NAD+ injections if you are pregnant, planning to become pregnant, or breastfeeding.</p>
        </div>

        <div>
           <h4 className="text-lg lg:text-xl font-bold text-[#EDB984] mb-3">Can I take NAD+ injections if I have active cancer/a history of cancer?</h4>
           <p className="font-secondary text-base lg:text-lg text-text-secondary leading-relaxed">If you have cancer, it is advised to exercise caution with NAD+ injections as the potential risks are still being studied. For those in remission or with a history of cancer, it is important to get guidance from your doctor or a healthcare provider to ensure NAD+ use is safe and appropriate for you.</p>
        </div>
      </div>
    )
  },
  {
    id: "higher-strengths",
    question: "Are higher strengths of NAD+ safe?",
    answer: (
      <div className="flex flex-col gap-6">
        <div className="space-y-4 font-secondary text-base lg:text-lg text-text-secondary leading-relaxed">
          <p>Yes, higher strength NAD+ is safe when used correctly. The 1000mg version contains double the amount found in a 500mg cartridge but is otherwise used in the same way.</p>
          <p>Always follow the recommended dosing guidance and seek support if you’re unsure about what to do. The 1000mg cartridge is compatible with the Vivere self-injection pen.</p>
        </div>

        <div>
           <h4 className="text-lg lg:text-xl font-bold text-[#EDB984] mb-3">Do 1000mg NAD cartridges have a different colour to 500mg cartridges?</h4>
           <p className="font-secondary text-base lg:text-lg text-text-secondary leading-relaxed">Yes, the 1000mg cartridge has a slightly more yellow tint than other 500mg versions. This is completely normal and simply reflects the higher concentration of NAD+.</p>
        </div>
        
        <div>
           <h4 className="text-lg lg:text-xl font-bold text-[#EDB984] mb-4">Why does the higher strength appear more yellow?</h4>
           <p className="font-secondary text-base lg:text-lg text-text-secondary leading-relaxed mb-4">There are a few reasons why this happens, none of which indicate poor quality or instability:</p>
           
           <div className="space-y-4">
             <div>
               <p className="font-bold text-text-secondary text-base lg:text-lg mb-1">Higher concentration, deeper colour</p>
               <p className="font-secondary text-base lg:text-lg text-text-secondary leading-relaxed">The 1000mg cartridge contains a higher concentration of NAD. This higher concentration increases the optical density of the solution, meaning it absorbs more light and appears darker or more yellow. This is a common feature of many liquid supplements.</p>
             </div>
             
             <div>
               <p className="font-bold text-text-secondary text-base lg:text-lg mb-1">Trace conversion to NADH is expected and harmless</p>
               <p className="font-secondary text-base lg:text-lg text-text-secondary leading-relaxed">NAD+ can very slightly convert to NADH, which is another naturally occurring molecule in the body. NADH absorbs light in a way that can make the solution appear more yellow. This is not a sign of degradation or product failure.</p>
             </div>

             <div>
               <p className="font-bold text-text-secondary text-base lg:text-lg mb-1">Pharmaceutical colour variation is permitted</p>
               <p className="font-secondary text-base lg:text-lg text-text-secondary leading-relaxed mb-1">Regulatory authorities allow for slight colour variation in pharmaceutical products. This is acceptable as long as the solution:</p>
               <ul className="list-disc pl-6 space-y-1 font-secondary text-base lg:text-lg text-text-secondary leading-relaxed">
                 <li>Retains its potency and bioactivity</li>
                 <li>Meets stability requirements</li>
               </ul>
             </div>

             <div>
               <p className="font-bold text-text-secondary text-base lg:text-lg mb-1">Natural variation in raw materials and stabilisers</p>
               <p className="font-secondary text-base lg:text-lg text-text-secondary leading-relaxed">The appearance of NAD+ can also vary slightly depending on the source of the raw material, the presence of excipients or stabilisers, and the formulation process. In fact, more stable or longer-lasting formulations are often slightly more coloured.</p>
             </div>

             <div>
               <p className="font-bold text-text-secondary text-base lg:text-lg mb-1">Quality is measured by testing, not colour</p>
               <p className="font-secondary text-base lg:text-lg text-text-secondary leading-relaxed mb-1">The colour of the solution is not a reliable way to assess quality. All our NAD+ formulations undergo rigorous testing, including:</p>
               <ul className="list-disc pl-6 space-y-1 font-secondary text-base lg:text-lg text-text-secondary leading-relaxed mb-2">
                 <li>HPLC (High-Performance Liquid Chromatography)</li>
                 <li>UV-Vis Spectrophotometry</li>
                 <li>Mass Spectrometry (MS)</li>
               </ul>
               <p className="font-secondary text-base lg:text-lg text-text-secondary leading-relaxed">These tests confirm the strength, purity and stability of the product. A yellow tint is simply a cosmetic difference and does not affect the effectiveness or safety of the injection.</p>
             </div>
           </div>
        </div>
      </div>
    )
  },
  {
    id: "how-long-keep",
    question: "How Long Will My NAD+ Cartridges Keep in the Fridge?",
    answer: (
      <div className="flex flex-col gap-6">
        <p className="font-secondary text-base lg:text-lg text-text-secondary leading-relaxed">
          If left unopened and stored correctly, your NAD+ cartridges will remain effective for up to 24 months (2 years). It is recommended that you store them in a fridge that has a consistent temperature between 2-8°C. They should be stored away from direct light or heat. You should only open a cartridge when you're ready to use it. Please note that your NAD+ cartridges will be sent to you with cool packs included. We recommend storing your NAD+ in the fridge (between 2-8°C) when you receive it, as this will help to prolong the life of your product.
        </p>
        
        <div>
           <h4 className="text-lg lg:text-xl font-bold text-[#EDB984] mb-3">Can I take my NAD+ on a plane?</h4>
           <p className="font-secondary text-base lg:text-lg text-text-secondary leading-relaxed">Yes, you are usually able to take your Vivere NAD+ pen kit and cartridges onto a plane with you, either in your hand luggage or in your suitcase. Please note, regulations regarding the transport of supplements and medical devices may vary depending on the airline and the country of destination. You may need to carry supporting documents. Always check the specific regulations of your airline and destination country before you travel.</p>
        </div>
      </div>
    )
  },
  {
    id: "buy",
    question: "Buy the NAD+ Injection Pen by Vivere",
    answer: (
      <div className="flex flex-col gap-6">
        <div>
           <h4 className="text-lg lg:text-xl font-bold text-[#EDB984] mb-3">Where can I buy the NAD+ Injection Pen by Vivere?</h4>
           <div className="space-y-4 font-secondary text-base lg:text-lg text-text-secondary leading-relaxed">
             <p>You can buy Vivere’s NAD+ injection pens online from our website, which will be delivered directly to your door. You may wish to consult with a doctor before you begin using any new supplement, including NAD+ injections. Please book a consultation online using our platform.</p>
             <p>The NAD+ used in these injections is the only NAD+ that is UKAS-accredited.</p>
             <p className="font-bold">NAD+ by Vivere Delivery</p>
             <p>Please note, next-day delivery is required for this product.</p>
           </div>
        </div>
        
        <div>
           <h4 className="text-lg lg:text-xl font-bold text-[#EDB984] mb-3">What strengths is the NAD+ injection available in?</h4>
           <p className="font-secondary text-base lg:text-lg text-text-secondary leading-relaxed mb-2">Our NAD+ injection comes in one cartridge size:</p>
           <ul className="list-disc pl-6 space-y-2 mb-4 font-secondary text-base lg:text-lg text-text-secondary leading-relaxed">
             <li><strong>1000mg:</strong> Designed to reduce the number of cartridges required. In many cases, just one is needed each month when following the suggested dosing plan.</li>
           </ul>
           <p className="font-secondary text-base lg:text-lg text-text-secondary leading-relaxed">The 1000mg cartridge is currently the only NAD+ cartridge of this size in the UK designed for a self-injection pen. Unlike traditional 1000mg vials that require syringes, our cartridge format simplifies the process. Just insert it into the pen and use as normal.</p>
        </div>
      </div>
    )
  }
];
