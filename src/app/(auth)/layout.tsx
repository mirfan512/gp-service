import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12" style={{ background: "var(--c-bg)" }}>
        <div className="w-full max-w-[520px]">
          {/* Logo */}
          <div className="mb-12">
            <h2 className="text-[24px] font-semibold" style={{ color: "var(--c-text-muted)" }}>
              Online GP Services
            </h2>
          </div>

          {/* Auth Form Content */}
          {children}
        </div>
      </div>

      {/* Right Side - Hero Illustration */}
      <div 
        className="hidden lg:flex lg:w-1/2 items-center justify-center p-12"
        style={{
          background: "linear-gradient(180deg, #6B8469 0%, #A8987D 100%)",
        }}
      >
        <div className="relative w-full max-w-[600px]">
          {/* Decorative blob background */}
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: "radial-gradient(ellipse at center, rgba(255, 255, 255, 0.2) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />

          {/* Main Illustration */}
          <div className="relative z-10 text-center">
            <Image
              src="/images/loginLogo.svg"
              alt="Doctor Consultation"
              width={500}
              height={400}
              className="w-full h-auto"
              priority
            />

            {/* Pricing Badge */}
            <div className="mt-8 space-y-4">
              <h3 className="text-[32px] font-bold text-white">
                Start for £49
              </h3>
              <h2 className="text-[42px] font-bold text-white leading-tight">
                Book Your GP Consultation!
              </h2>
              <p className="text-[18px] text-white/90 max-w-[400px] mx-auto">
                Care you can trust, whenever you need it
              </p>

              {/* Pagination dots */}
              <div className="flex items-center justify-center gap-2 pt-6">
                <div className="w-8 h-1 rounded-full bg-white/40" />
                <div className="w-8 h-1 rounded-full bg-white" />
                <div className="w-8 h-1 rounded-full bg-white/40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}