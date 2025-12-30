import Image from "next/image";
import clsx from "clsx";

type FigmaHeroProps = {
  title: React.ReactNode; // allow <br/> etc.
  subtitle?: React.ReactNode;
  description?: React.ReactNode;
  badgeSrc?: string; // e.g. "/icons/Greenbackgroundlogo1.svg"
  badgeAlt?: string;
  className?: string;
  containerClassName?: string;
};

export function FigmaHero({
  title,
  subtitle,
  description,
  badgeSrc = "/icons/Greenbackgroundlogo1.svg",
  badgeAlt = "Online GP Services",
  className,
  containerClassName,
}: FigmaHeroProps) {
  return (
    <section className={clsx("hero-gradient hero-figma", className)}>
      <div className={clsx("mx-auto max-w-[1440px] px-6 lg:px-12", containerClassName)}>
        <div className="relative flex min-h-[240px] items-center py-12 lg:min-h-[300px] lg:py-16">
          <div>
            <h1 className="max-w-[980px] text-[44px] leading-[1.05] font-semibold text-white tracking-[-0.02em] lg:text-[64px]">
              {title}
            </h1>

            {subtitle ? (
              <div className="mt-4 max-w-[720px] text-[16px] leading-[1.6] text-white/90 lg:text-[18px]">
                {subtitle}
              </div>
            ) : null}
            {description ? (
              <div className="mt-6 max-w-[720px] text-[13px] leading-[1.7] text-white/90 lg:text-[15px]">
                {description}
              </div>
            ) : null}
          </div>

          {/* Badge */}
          {badgeSrc ? (
            <div className="absolute right-10 top-14 hidden lg:block">
              <Image
                src={badgeSrc}
                alt={badgeAlt}
                width={135}
                height={135}
                className="drop-shadow-[0_14px_28px_rgba(0,0,0,0.25)]"
                priority={false}
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
