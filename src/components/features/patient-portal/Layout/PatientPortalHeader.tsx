import Link from "next/link";
import Image from "next/image";

export const PatientPortalHeader = () => {
  return (
    <header className="h-[100px] hero-linear-gradient text-white px-8 flex items-center justify-between shadow-md">
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <span>‹</span>
          <span className="text-sm font-medium">Back</span>
        </Link>
      </div>

      <h1 className="text-2xl font-semibold absolute left-1/2 -translate-x-1/2">
        Patient Portal
      </h1>

      <div className="flex items-center gap-3">
        <div className="">
          <Image src="/icons/online-gp-services-logo.jpg" alt="Logo" width={40} height={40} className="w-20 h-20 object-contain" />
        </div>
      </div>
    </header>
  );
};
