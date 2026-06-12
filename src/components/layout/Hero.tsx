import Image from "next/image";
import clsx from "clsx";

type FigmaHeroProps = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  description?: React.ReactNode;
  logoSrc?: string;
  logoClassName?: string;
  badgeSrc?: string;
  badgeClassName?: string;
  logoStyle?: React.CSSProperties;
  className?: string;
  containerClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  subtitleClassName?: string;
  children?: React.ReactNode;
};

export function FigmaHero({
  title,
  subtitle,
  description,
  logoSrc,
  logoClassName,
  badgeSrc,
  badgeClassName,
  logoStyle,
  className,
  containerClassName,
  titleClassName,
  descriptionClassName,
  subtitleClassName,
  children,
}: FigmaHeroProps) {
  const finalLogoSrc = logoSrc || badgeSrc || "/icons/online-gp-services-logo.jpg";
  const finalLogoClassName = logoClassName || badgeClassName;

  return (
    <section
      className={clsx(
        "relative min-h-[640px] lg:min-h-[500px] overflow-hidden bg-white",
        className
      )}
    >
      {/* Gradient shape */}
      <div className="absolute inset-0 z-0 hero-gradient" />

      <div
        className={clsx("relative z-10 mx-auto max-w-[1950px] px-6 lg:px-12", containerClassName)}
      >
        <div className="relative w-full flex flex-col lg:flex-row items-center py-16 lg:py-10 lg:min-h-[640px] justify-between gap-10 lg:gap-8">
          {/* Left Text Content */}
          <div className="w-full lg:w-[58%] xl:w-[60%] flex flex-col justify-center relative z-10 text-left mt-8 lg:mt-0 lg:pl-20 xl:pl-24 2xl:pl-[120px]">
            <h1
              className={clsx(
                "text-white font-inter font-bold text-[clamp(40px,4.5vw,72px)] leading-[1.05] tracking-[0.01em]",
                titleClassName
              )}
              style={{ textShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)" }}
            >
              {title}
            </h1>

            {subtitle ? (
              <div
                className={clsx(
                  "mt-5 max-w-[560px] mr-auto text-[15px] leading-[24px] sm:text-[17px] sm:leading-[28px] lg:text-[18px] lg:leading-[30px] text-white font-inter font-normal opacity-90 tracking-[0.01em]",
                  subtitleClassName
                )}
              >
                {subtitle}
              </div>
            ) : null}

            {description ? (
              <div
                className={clsx(
                  "mt-6 max-w-[720px] text-white/80 font-inter",
                  descriptionClassName || "text-[14px] leading-[1.7] lg:text-[16px]"
                )}
              >
                {description}
              </div>
            ) : null}
          </div>

          {/* Right Visual Content */}
          <div className="hero-right relative w-full lg:w-[42%] xl:w-[40%] flex flex-col items-center lg:items-end z-10">
            {/* Page specific children content (Doctor img + button) */}
            <div className="relative w-full flex flex-col items-center lg:items-end w-full">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}