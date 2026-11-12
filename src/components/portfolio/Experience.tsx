import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Briefcase,
  ExternalLink,
  Calendar,
  MapPin,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Sparkles,
} from "lucide-react";

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isBulletsExpanded, setIsBulletsExpanded] = useState(false);
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

  const experience = {
    role: "Software Engineer Intern",
    company: "Simplium Technologies",
    link: "https://www.milora.org/",
    products: ["Milora", "mDigim"],
    period: "Feb 2026 – Present",
    status: "Current Internship",
    location: "Pune, India (Hybrid)",
    summary:
      "Working as a full-stack engineer on active production products Milora and mDigim. Collaborating alongside a team of engineers to develop, optimize, and maintain real-world web applications.",
    contributions: [
      "Engineered modular, reusable UI components using React, TypeScript, and modern CSS frameworks, ensuring high responsiveness across mobile, tablet, and desktop devices.",
      "Developed and integrated RESTful backend APIs with Node.js and Express to power core product workflows and handle data transformations.",
      "Executed database querying, schema modeling, and data persistence using PostgreSQL and MongoDB.",
      "Profiled and resolved frontend rendering issues, component lifecycle state synchronization, and API edge-case handling.",
      "Actively engaged in Agile engineering practices: daily standups, sprint retrospectives, peer code reviews, and Git feature-branch workflows.",
    ],
    skills: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "REST APIs",
      "Git & GitHub",
      "Agile Development",
      "Performance Optimization",
    ],
  };

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-secondary/20 relative overflow-hidden"
    >
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/60 backdrop-blur-sm text-xs font-medium text-muted-foreground mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Briefcase className="w-3.5 h-3.5 text-primary" />
            <span>Professional Track Record</span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 hero-text tracking-tight transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Career Experience
          </h2>
          <p
            className={`text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Hands-on software engineering experience shipping features and solving technical problems in production systems.
          </p>
        </div>

        {/* Experience Card */}
        <Card
          className={`border-border hover:border-primary/40 transition-all duration-500 hover:shadow-neon bg-card overflow-hidden ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "250ms" }}
        >
          <CardContent className="p-5 sm:p-7 md:p-8 space-y-6">
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 pb-4 border-b border-border/60">
              <div className="flex items-start gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-snug">
                      {experience.role}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 mt-1 flex-wrap">
                    <a
                      href={experience.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary font-semibold hover:underline inline-flex items-center gap-1 text-sm sm:text-base"
                    >
                      @{experience.company}
                      <ExternalLink size={14} />
                    </a>
                    <span className="text-muted-foreground text-xs">•</span>
                    <span className="text-xs text-muted-foreground">
                      Products: {experience.products.join(" & ")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Status and dates */}
              <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 mt-1 sm:mt-0">
                <Badge className="bg-primary text-primary-foreground text-xs font-semibold px-2.5 py-0.5">
                  {experience.status}
                </Badge>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" />
                  <span>{experience.period}</span>
                </div>
              </div>
            </div>

            {/* Location & Context */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
              <span>{experience.location}</span>
            </div>

            {/* Summary */}
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              {experience.summary}
            </p>

            {/* Key Contributions List */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground">
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                <span>Key Engineering Contributions</span>
              </div>

              {/* Always visible first 2 bullets on mobile, all on desktop */}
              <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
                {experience.contributions
                  .slice(0, isBulletsExpanded ? undefined : 2)
                  .map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
              </ul>

              {/* Mobile Read More / Read Less button */}
              <div className="sm:hidden pt-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsBulletsExpanded(!isBulletsExpanded)}
                  className="text-xs font-medium text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto flex items-center gap-1"
                >
                  <span>
                    {isBulletsExpanded
                      ? "Show Fewer Details"
                      : `View All Responsibilities (+${experience.contributions.length - 2} more)`}
                  </span>
                  {isBulletsExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </Button>
              </div>

              {/* On Desktop/Tablet, show the rest automatically */}
              <ul className="hidden sm:block space-y-2.5 text-xs sm:text-sm text-muted-foreground">
                {experience.contributions.slice(2).map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Badges */}
            <div className="pt-2 border-t border-border/60">
              <div className="text-xs text-muted-foreground mb-2 font-medium">
                Technologies & Methodologies Used:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {experience.skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-xs px-2.5 py-0.5 bg-secondary/80 hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Experience;
