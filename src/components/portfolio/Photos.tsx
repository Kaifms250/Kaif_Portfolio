import { useEffect, useRef, useState } from "react";

const Photos = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="profile"
      className="py-20 px-4 bg-gradient-to-b from-background via-secondary/20 to-background"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div
            className={`relative mx-auto w-full max-w-md transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="absolute inset-6 rounded-full border border-border/70" />
            <div className="absolute inset-0 rounded-[2rem] border border-border bg-secondary/40" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-5 shadow-soft">
              <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-secondary">
                <img
                  src="/placeholder.svg"
                  alt="Profile portrait placeholder"
                  className="h-full w-full object-cover grayscale"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <p
            className={`transition-all duration-1000 delay-150 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <span className="mb-3 block text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Profile Photo
            </span>
            <span className="hero-text mb-5 block text-4xl font-bold md:text-5xl">Portrait & Presence</span>
            <span className="mb-6 block max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Add your personal photo here to give the portfolio a stronger identity and a more human first
              impression. This section is designed to highlight your portrait without making the page feel heavy.
            </span>
            <span className="grid gap-4 sm:grid-cols-3">
              {[
                { value: "01", label: "Personal introduction" },
                { value: "02", label: "Professional presence" },
                { value: "03", label: "Stronger trust" },
              ].map((item) => (
                <span key={item.label} className="rounded-lg border border-border bg-card px-4 py-5 text-left shadow-soft">
                  <span className="mb-2 block text-2xl font-semibold text-foreground">{item.value}</span>
                  <span className="block text-sm leading-relaxed text-muted-foreground">{item.label}</span>
                </span>
              ))}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Photos;