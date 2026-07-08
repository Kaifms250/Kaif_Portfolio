import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, ExternalLink } from "lucide-react";

const Experience = () => {
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
      id="experience"
      className="py-20 px-4 bg-gradient-to-br from-background via-secondary/10 to-background"
    >
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 hero-text transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Work Experience
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            A glimpse into my professional journey so far.
          </p>
        </div>

        {/* Experience Card */}
        <Card
          className={`group hover:shadow-neon transition-all duration-500 border-border hover:border-primary/30 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <CardContent className="p-5 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  Software Engineer Intern
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-1 mb-3">
                  <a
                    href="https://www.milora.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    Milora
                    <ExternalLink size={14} />
                  </a>
                  <span className="text-muted-foreground text-sm">Feb 2026 - Present</span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm sm:text-base">
                  During my internship at Milora, I worked on real-world projects alongside a talented
                  engineering team. I strengthened my skills in full-stack development, collaborated with
                  cross-functional teams, and contributed to building scalable web applications using
                  modern frameworks and best practices.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Node.js",
                    "Team Collaboration",
                    "REST APIs",
                    "Git",
                    "Agile",
                  ].map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Experience;
