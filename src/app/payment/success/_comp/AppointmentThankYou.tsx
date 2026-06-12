"use client";

interface AppointmentThankYouProps {
  doctorName: string;
  formattedDate: string;
  formattedTime: string;
  onDone: () => void;
}

export function AppointmentThankYou({
  doctorName,
  formattedDate,
  formattedTime,
  onDone,
}: AppointmentThankYouProps) {
  return (
    <div className="bg-white rounded-3xl p-10 lg:p-16 border border-gray-100 shadow-[0_8px_35px_rgb(0,0,0,0.02)] max-w-xl w-full text-center space-y-8">
      <div className="space-y-4">
        <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
          Thank You !
        </h2>
        <p className="text-lg font-semibold text-[var(--c-primary-600)]">
          Your Appointment Successful
        </p>
      </div>

      <div className="text-gray-500 space-y-1.5 py-4 text-base leading-relaxed">
        <p>You booked an appointment with</p>
        <p className="font-bold text-gray-800 text-lg">Dr. {doctorName}</p>
        <p>
          on <span className="font-semibold text-gray-700" suppressHydrationWarning>{formattedDate}</span>, at{" "}
          <span className="font-semibold text-gray-700" suppressHydrationWarning>{formattedTime}</span>
        </p>
      </div>

      <div className="pt-4">
        <button
          onClick={onDone}
          className="w-full max-w-[320px] py-3.5 px-6 rounded-full text-base font-semibold shadow-md bg-[#A3B094] hover:bg-[#8E9C85] text-white transition-all active:scale-[0.98] cursor-pointer"
        >
          Done
        </button>
      </div>
    </div>
  );
}
