import clsx from "clsx";
import Image from "next/image";

type SimpleHeroProps = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  className?: string;
  badgeSrc?: string;
  titleClassName?: string;
  titleStyle?: React.CSSProperties;
  subtitleClassName?: string;
  subtitleStyle?: React.CSSProperties;
  containerClassName?: string;
  textColumnClassName?: string;
  overflowVisible?: boolean;
};

export function SimpleHero({
  title,
  subtitle,
  className,
  badgeSrc = "/icons/online-gp-services-logo.jpg",
  titleClassName,
  titleStyle,
  subtitleClassName,
  subtitleStyle,
  containerClassName,
  textColumnClassName = "lg:w-[75%]",
  overflowVisible = false,
}: SimpleHeroProps) {
  return (
    <section
      className={clsx(
        "relative bg-white px-0",
        !overflowVisible && "overflow-hidden",
        className
      )}
    >
      {/* Background Gradient */}
      <div
        className="absolute inset-0 z-0 hero-gradient -translate-y-px"
        style={{
          background: "linear-gradient(180deg, #5B7553 0%, #D6C4B0 100%)",
        }}
      />



      <div
        className={clsx(
          "relative z-10 mx-auto max-w-[1950px] px-6 lg:px-12",
          containerClassName
        )}
      >
        <div className="relative flex flex-col items-start py-8 lg:py-12 justify-center h-full min-h-[inherit]">
          {/* Left Text Content - Left Aligned to match site content */}
          <div className={clsx("w-full flex flex-col justify-center text-left lg:pl-20 xl:pl-24 2xl:pl-[120px]", textColumnClassName)}>
            <h1
              className={clsx(
                "text-white font-inter font-bold text-[clamp(40px,4.5vw,72px)] leading-[1.05] tracking-[0.01em]",
                titleClassName
              )}
              style={{
                textShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                ...titleStyle,
              }}
            >
              {title}
            </h1>

            {subtitle && (
              <div
                className={clsx(
                  "mt-6 text-white/90 font-inter text-[16px] leading-[1.6] lg:text-[20px] lg:leading-[1.7] font-normal",
                  subtitleClassName
                )}
                style={subtitleStyle}
              >
                {subtitle}
              </div>
            )}
          </div>
        </div>
      </div>

      
    </section>
  );
}
