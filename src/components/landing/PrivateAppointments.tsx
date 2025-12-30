import Image from "next/image";
import { Button } from "@/src/components/ui/Button";
import Link from "next/link";

export function PrivateAppointments() {
  return (
    <section className="bg-[var(--c-bg)]">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
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
              className="mt-6 space-y-6 text-[15px] leading-[1.8]"
              style={{ color: "var(--c-text-muted)" }}
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

            {/* Start for £49 */}
            <div className="mt-10">
              <p
                className="text-[38px] lg:text-[44px] font-extrabold"
                style={{
                  color: "#EA2E83", // your screenshot pink
                  textShadow: "0 3px 0 rgba(0,0,0,0.08)",
                }}
              >
                Start for £49
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            {/* Top right small CTA */}
            <div className="flex justify-end">
              <button
                className="px-6 py-3 text-[14px] font-semibold text-white"
                style={{
                  background: "var(--c-cta-btn)",
                  borderRadius: "12px",
                  boxShadow: "var(--shadow-elev)",
                }}
              >
                Access Private GP Care
              </button>
            </div>

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
                className="absolute left-0 top-[280px] w-[320px] max-w-[92%] rounded-[18px] border bg-[var(--c-surface-2)] p-4"
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
                <div className="mt-6 space-y-4">
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
                <div className="mt-5">
                  <Link href="/doctors" >
                  <Button
                    className="w-full rounded-[12px] px-4 py-2 text-[12px] font-semibold"
                    style={{
                      background: "color-mix(in srgb, var(--c-surface) 85%, white)",
                      color: "var(--c-text-muted)",
                    }}
                  >
                    See All Doctors
                  </Button>
                  </Link>
                </div>
              </div>

              {/* Bottom big CTA */}
              <div className="pt-[620px] lg:pt-[540px]">
                <Link href="/doctors">
                <Button
                  variant="cta"
                  size="lg"
                  className="w-full"
                >
                  BOOK YOUR APPOINTMENT
                </Button>
                </Link>
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
