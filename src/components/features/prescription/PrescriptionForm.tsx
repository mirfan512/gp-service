"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { Plus, Trash } from "lucide-react";
import { Input } from "../../ui/Input";

type Medication = {
  nameAndDose: string;
  instructions: string;
  quantity: string;
};

type PrescriptionData = {
  patientName: string;
  dob: string;
  address: string;
  postcode: string;
  phone: string;
  email: string;
  diagnosis: string;
  allergies: string;
  medications: Medication[];
  gpName: string;
  gmcNumber: string;
  signature: string;
  date: string;
};

export const PrescriptionForm = () => {
  const { register, control, handleSubmit, formState: { errors } } = useForm<PrescriptionData>({
    defaultValues: {
      medications: [{ nameAndDose: "", instructions: "", quantity: "" }]
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "medications"
  });

  const onSubmit = (data: PrescriptionData) => {
    console.log(data);
    alert("Prescription Created!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-[20px] shadow-lg p-8 md:p-12 max-w-[1000px] mx-auto space-y-12">

      {/* Patient Details */}
      <section>
        <h3 className="text-[#A3B094] text-xl font-bold mb-6">Patient Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Input {...register("patientName")} placeholder="Full Name" />
          <Input {...register("dob")} placeholder="Date Of Birth (dd/mm/yyyy)" />
          <Input {...register("address")} placeholder="Address" />
          <Input {...register("postcode")} placeholder="Postcode" />
          <Input {...register("phone")} placeholder="Phone Number" />
          <Input {...register("email")} placeholder="Email" />
        </div>
      </section>

      {/* Diagnosis */}
      <section>
        <h3 className="text-[#A3B094] text-xl font-bold mb-6">Diagnosis</h3>
        <div className="md:w-1/3">
          <Input {...register("diagnosis")} placeholder="Chest Infection" />
        </div>
      </section>

      {/* Allergies */}
      <section>
        <h3 className="text-[#A3B094] text-xl font-bold mb-6">Allergies</h3>
        <div className="md:w-1/3">
          <Input {...register("allergies")} placeholder="Amoxicillin" />
        </div>
      </section>

      {/* Prescription List */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-[#A3B094] text-xl font-bold">Prescription</h3>
          <button
            type="button"
            onClick={() => append({ nameAndDose: "", instructions: "", quantity: "" })}
            className="flex items-center gap-1 text-[#A3B094] font-bold text-sm hover:opacity-80 transition-opacity"
          >
            Add Medication <Plus size={16} strokeWidth={3} />
          </button>
        </div>

        <div className="w-full">
          {/* Table Header */}
          <div className="hidden md:grid grid-cols-12 gap-6 bg-[var(--c-button-submit)] px-4 py-3 text-white font-bold text-sm rounded-xl mb-4">
            <div className="col-span-5">Name & Dose</div>
            <div className="col-span-4">Instructions</div>
            <div className="col-span-2 text-center">Quantity</div>
            <div className="col-span-1"></div>
          </div>

          {/* Rows */}
          <div className="space-y-4">
            {fields.map((field, index) => (
              <div key={field.id} className="grid grid-cols-12 gap-4 md:gap-6 items-center">
                <div className="col-span-12 md:col-span-5">
                  <Input {...register(`medications.${index}.nameAndDose` as const)} placeholder="Clarithromycin 500mg tablets" />
                </div>
                <div className="col-span-12 md:col-span-4">
                  <Input {...register(`medications.${index}.instructions` as const)} placeholder="Take one twice daily" />
                </div>
                <div className="col-span-10 md:col-span-2">
                  <Input {...register(`medications.${index}.quantity` as const)} placeholder="10" />
                </div>
                <div className="col-span-2 md:col-span-1 flex justify-center items-center">
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="text-red-400 hover:text-red-600 transition-colors p-2"
                    title="Remove row"
                  >
                    <Trash size={24}/>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GP Details */}
      <section>
        <h3 className="text-[#A3B094] text-xl font-bold mb-6">GP Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input {...register("gpName")} placeholder="Name" />
          <Input {...register("gmcNumber")} placeholder="GMC Number" />
          <Input {...register("signature")} placeholder="Electronic Signature" />
          <Input type="date" {...register("date")} placeholder="Date" />
        </div>
      </section>


      <div className="flex justify-center pt-8">
        <button type="submit" className="bg-[var(--c-button-submit)] hover:bg-[var(--c-button-submit)] text-white font-bold py-3 px-12 rounded-[10px] shadow-sm transition-transform hover:scale-105 uppercase tracking-wide text-xs">
          SEND TO PHARMACY
        </button>
      </div>

    </form>
  );
};
