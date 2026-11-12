import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isJourneyExpanded, setIsJourneyExpanded] = useState(false);
  const [isPhilosophyExpanded, setIsPhilosophyExpanded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Genuine achievements & metrics
  const achievements = [
    {
      value: "2",
      label: "Products Contributed To",
      subtext: "Milora & mDigim at Simplium Technologies",
    },
    {
      value: "Full-Stack",
      label: "Development Focus",
      subtext: "End-to-end architecture from UI to database",
    },
    {
      value: "React + Node",
      label: "Core Ecosystem",
      subtext: "TypeScript, REST APIs & modern web standards",
    },
    {
      value: "8.45",
      label: "Academic CGPA",
      subtext: "B.Tech in Computer Science & Engineering",
    },
  ];

  // Engineering principles
  const principles = [
    {
      icon: Layers,
      title: "Architectural Simplicity",
      description: "Writing maintainable, decoupled code that solves real problems without unnecessary complexity.",
    },
    {
      icon: Cpu,
      title: "Performance & Reliability",
      description: "Prioritizing snappy load times, smooth 60fps interactions, and robust error boundaries.",
    },
    {
      icon: Terminal,
      title: "Full-Stack Ownership",
      description: "Understanding systems end-to-end — from database schemas to pixel-perfect component renders.",
    },
    {
      icon: Sparkles,
      title: "Continuous Craft",
      description: "Relentless curiosity for software quality, strict type safety, thorough debugging, and clean documentation.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-secondary/30 relative overflow-hidden"
    >
      {/* Background ambient accents */}
      <div className="absolute top-1/3 -left-36 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-36 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/60 backdrop-blur-sm text-xs font-medium text-muted-foreground mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>Profile & Engineering Mindset</span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 hero-text tracking-tight transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            About Me
          </h2>
          <p
            className={`text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            I am a Full-Stack Developer dedicated to building scalable web applications
            and solving real-world engineering challenges with clean, maintainable architecture.
          </p>
        </div>

        {/* Two-Column Section: Narrative & Achievements */}
        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-start mb-16 sm:mb-20">
          {/* Left Column: Narrative Cards with Mobile Read More */}
          <div
            className={`lg:col-span-7 space-y-6 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
            }`}
          >
            {/* Professional Journey Card */}
            <Card className="border-border hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-neon bg-card overflow-hidden">
              <CardContent className="p-5 sm:p-7 md:p-8 space-y-3.5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">
                      My Professional Journey
                    </h3>
                    <p className="text-xs text-muted-foreground">From core frontend to full-stack systems</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  My development journey started with frontend engineering, exploring how to transform
                  ideas into functional, intuitive web experiences. Over time, that curiosity evolved
                  into end-to-end full-stack development, architecting applications using{" "}
                  <span className="text-foreground font-medium">React, Node.js, TypeScript, and PostgreSQL</span>.
                </p>

                {/* Mobile Preview / Collapsible Extension */}
                <div className={`${isJourneyExpanded ? "block" : "hidden sm:block"} space-y-3.5`}>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    Currently, as a Software Engineer Intern at{" "}
                    <span className="text-foreground font-medium">Simplium Technologies</span>, I actively
                    contribute to production products like{" "}
                    <span className="text-foreground font-medium">Milora</span> and{" "}
                    <span className="text-foreground font-medium">mDigim</span>. My day-to-day responsibilities
                    include crafting reusable frontend components, integrating REST APIs, implementing backend logic,
                    handling database queries, and systematically diagnosing production issues.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    I treat every project as an opportunity to build software that is not only visually polished
                    but technically sound, accessible, and structured for scalable growth.
                  </p>
                </div>

                {/* Mobile Read More / Read Less button */}
                <div className="sm:hidden pt-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsJourneyExpanded(!isJourneyExpanded)}
                    className="text-xs font-medium text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto flex items-center gap-1"
                  >
                    <span>{isJourneyExpanded ? "Read Less" : "Read More"}</span>
                    {isJourneyExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Engineering Philosophy Card */}
            <Card className="border-border hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-neon bg-card overflow-hidden">
              <CardContent className="p-5 sm:p-7 md:p-8 space-y-3.5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground">
                      Engineering Philosophy
                    </h3>
                    <p className="text-xs text-muted-foreground">How I approach building reliable software</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  I believe good software engineering goes well beyond making code run. It demands
                  systematic problem analysis, selecting the right architectural abstractions, writing self-documenting
                  code, and ensuring systems behave reliably under real user workloads.
                </p>

                {/* Mobile Preview / Collapsible Extension */}
                <div className={`${isPhilosophyExpanded ? "block" : "hidden sm:block"} space-y-3.5`}>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    I value simplicity over premature optimization, pragmatic problem-solving, strict type safety,
                    and building software that remains maintainable long after deployment.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    Software is an evolving system—clear naming, clean separation of concerns, and resilient error
                    handling always pay high dividends over rushed shortcuts.
                  </p>
                </div>

                {/* Mobile Read More / Read Less button */}
                <div className="sm:hidden pt-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsPhilosophyExpanded(!isPhilosophyExpanded)}
                    className="text-xs font-medium text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto flex items-center gap-1"
                  >
                    <span>{isPhilosophyExpanded ? "Read Less" : "Read More"}</span>
                    {isPhilosophyExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Genuine Achievements Grid */}
          <div
            className={`lg:col-span-5 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
            }`}
          >
            <div className="grid grid-cols-2 gap-3.5 sm:gap-4">
              {achievements.map((item, index) => (
                <Card
                  key={index}
                  className="border-border hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-neon bg-card flex flex-col justify-between"
                >
                  <CardContent className="p-4 sm:p-5 flex flex-col justify-between h-full">
                    <div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-primary mb-1 tracking-tight">
                        {item.value}
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-foreground mb-1 leading-snug">
                        {item.label}
                      </div>
                    </div>
                    <p className="text-[11px] sm:text-xs text-muted-foreground leading-snug mt-2">
                      {item.subtext}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Summary Callout */}
            <div className="mt-4 p-4 sm:p-5 rounded-xl border border-border/70 bg-secondary/30 backdrop-blur-sm text-xs sm:text-sm text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Summary:</span> Computer science graduate with hands-on production engineering experience at Simplium Technologies, specializing in React, Node.js, and relational database systems.
            </div>
          </div>
        </div>

        {/* Engineering Principles Grid */}
        <div
          className={`transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-8 sm:mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold hero-text mb-2">
              Core Engineering Principles
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
              The fundamental standards that guide how I write, review, and deliver production software.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {principles.map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-neon transition-all duration-300 hover:scale-[1.02] border-border hover:border-primary/40 bg-card"
              >
                <CardContent className="p-5 sm:p-6 text-center space-y-2.5">
                  <div className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
