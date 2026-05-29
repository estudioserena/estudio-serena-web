"use client";

const logos = [
  { src: "/logos/dolby-atmos.png", alt: "Dolby Atmos" },
  { src: "/logos/universal-audio.png", alt: "Universal Audio" },
  { src: "/logos/neumann-berlin.png", alt: "Neumann Berlin" },
  { src: "/logos/avid-protools.png", alt: "Avid Pro Tools" },
];

export default function LogoMarquee() {
  return (
    <div className="w-full py-8" style={{ backgroundColor: "#0D1A36" }}>
      <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center items-center gap-14 md:gap-20">
        {logos.map((logo, i) => {
          const isNeumann = logo.src.includes("neumann-berlin");
          return (
          <img
            key={i}
            src={logo.src}
            alt={logo.alt}
            className={`${isNeumann ? "h-14" : "h-10"} w-auto object-contain`}
            style={{
              filter: "brightness(0) invert(1)",
              opacity: isNeumann ? 1 : 0.7,
            }}
            onError={(e) => {
              const span = document.createElement("span");
              span.className = "font-mono text-sm text-gray-500 tracking-widest";
              span.textContent = logo.alt.toUpperCase();
              (e.target as HTMLElement).replaceWith(span);
            }}
          />
          );
        })}
      </div>
    </div>
  );
}
