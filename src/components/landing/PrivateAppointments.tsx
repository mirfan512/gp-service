import Image from "next/image";
import { Button } from "@/src/components/ui/Button";
import Link from "next/link";

export function PrivateAppointments() {
  return (
    <section className="bg-[var(--c-bg)]">
      <div className="mx-auto max-w-[1950px] px-6 lg:pr-12 lg:pl-32 xl:pl-[144px] 2xl:pl-[168px]">
        <div className="grid gap-10 py-16 lg:grid-cols-2 lg:items-start">
          {/* LEFT */}
          <div className="max-w-[560px]">
            <h2
              className="text-[34px] lg:text-[40px] font-semibold leading-[1.05]"
              style={{ color: "var(--c-primary)" }}
            >
              Private GP Appointments
              <br />
              Made Simple
            </h2>

            <div
              className="mt-6 space-y-6 text-[20px] leading-[1.8]"
              style={{ color: "var(--c-text-gray)" }}
            >
              <p>
                Accessing quality healthcare shouldn&apos;t be complicated. Our
                platform connects you directly to experienced UK GPs for a
                straightforward £49 fee, with no hidden costs or memberships
                required.
              </p>

              <p>
                Every consultation includes a full medical review, plus a fit
                note, referral, or prescription if you need one. Our doctors have
                NHS backgrounds and are passionate about providing safe,
                compassionate, and convenient care through telemedicine.
              </p>

              <p>
                You can book in minutes through our website or download our app on
                the App Store or Google Play to manage appointments and
                consultations on the go. We make it simple to get the trusted
                medical support you need — wherever you are.
              </p>
            </div>


          </div>

          {/* RIGHT */}
          <div className="relative">


            {/* Illustration + card */}
            <div className="relative mt-6 min-h-[360px]">
              {/* Illustration */}
              <div className="absolute right-0 top-0 w-[520px] max-w-full">
                <Image
                  src="/images/ap.svg"
                  alt="Private GP appointments illustration"
                  width={520}
                  height={260}
                  className="h-auto w-full object-contain"
                  priority={false}
                />
              </div>

              {/* Doctors list card */}
              <div
                className="absolute left-0 top-[280px] w-[320px] max-w-[280px] rounded-[18px] border bg-[var(--c-surface-2)] p-4"
                style={{
                  borderColor: "var(--c-border)",
                  boxShadow: "var(--shadow-soft)",
                }}
              >
                {/* Card header */}
                <div className="flex items-center justify-between">
                  <div>
                    <p
                      className="text-[12px] font-semibold"
                      style={{ color: "var(--c-text)" }}
                    >
                      Available Doctors
                    </p>
                    <p
                      className="text-[11px]"
                      style={{ color: "var(--c-text-muted)" }}
                    >
                      Select doctors
                    </p>
                  </div>

                  <div className="flex gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--c-border)]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--c-border)]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--c-border)]" />
                  </div>
                </div>

                {/* Doctors */}
                <div className="mt-6 space-y-8">
                  <DoctorRow
                    name="Dr. Sarah Mohamad"
                    role="General Practitioner"
                    avatar="/images/avatar1.svg"
                  />
                  <DoctorRow
                    name="Dr. Shahed Ahmad"
                    role="General Practitioner"
                    avatar="/images/avatar2.svg"
                  />
                </div>

                {/* Card button */}
                <div className="mt-5 space-y-10">
                  <Link href="/doctors" >
                    <Button
                      className="flex flex-row gap-10 group w-[240px] flex items-center justify-center px-6 text-[12px] font-semibold"
                      style={{
                        height: "43px",
                        background: "rgba(163, 176, 148, 0.1)",
                        color: "var(--c-text-muted)",
                        borderRadius: "10px",
                      }}
                    >
                      <span>See All Doctors</span>
                      <Image
                        src="/icons/back.svg"
                        alt="arrow"
                        width={18}
                        height={20}
                        className="flex -mr-10"
                      />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DoctorRow({
  name,
  role,
  avatar,
}: {
  name: string;
  role: string;
  avatar: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-9 w-9 overflow-hidden rounded-full">
        <Image src={avatar} alt={name} fill className="object-cover" />
      </div>

      <div className="min-w-0">
        <p className="text-[12px] font-semibold" style={{ color: "var(--c-text)" }}>
          {name}
        </p>
        <p className="text-[11px]" style={{ color: "var(--c-text-muted)" }}>
          {role}
        </p>
      </div>
    </div>
  );
}
