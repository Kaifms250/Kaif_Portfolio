import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const Academics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isBtechExpanded, setIsBtechExpanded] = useState(false);
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

  const academicRecords = [
    {
      level: "Undergraduate Degree",
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science & Engineering",
      institution: "Pune, India",
      period: "2022 – 2026",
      status: "Final Year / Graduating 2026",
      grade: "CGPA: 8.45 / 10",
      description:
        "Comprehensive 4-year engineering curriculum focused on computer science fundamentals, system design, data structures, and practical software engineering.",
      bullets: [
        "Core Coursework: Data Structures & Algorithms, Database Management Systems (DBMS), Operating Systems, Object-Oriented Programming (Java/C++), and Computer Networks.",
        "Engineered multiple full-stack capstone projects applying modular design patterns, RESTful APIs, and database normalization.",
        "Consistently maintained an 8.45 CGPA while actively building independent web applications and tooling.",
      ],
      tags: [
        "Data Structures",
        "Algorithms",
        "DBMS",
        "Operating Systems",
        "Java",
        "System Design",
        "Computer Networks",
      ],
      hasExpandableDetails: true,
      isPlaceholder: false,
    },
    {
      level: "Higher Secondary",
      degree: "Class 12th (HSC)",
      field: "Science Stream (PCM / Computer Science)",
      institution: "Junior College / Higher Secondary School",
      period: "Completed",
      status: "Completed",
      grade: "Details to be added",
      description:
        "Higher secondary education with a rigorous focus on Mathematics, Physics, and Chemistry, establishing analytical and problem-solving fundamentals.",
      bullets: [
        "Stream: Science (Physics, Chemistry, Mathematics).",
        "Institution and exact score details to be updated soon.",
      ],
      tags: ["Physics", "Chemistry", "Mathematics", "Analytical Problem-Solving"],
      hasExpandableDetails: false,
      isPlaceholder: true,
    },
    {
      level: "Secondary School",
      degree: "Class 10th (SSC)",
      field: "General Secondary Curriculum",
      institution: "High School",
      period: "Completed",
      status: "Completed",
      grade: "Details to be added",
      description:
        "Foundational secondary school education with distinction in Mathematics and General Sciences.",
      bullets: [
        "General secondary academic curriculum with strong grounding in quantitative reasoning.",
        "School name and board marks details to be updated soon.",
      ],
      tags: ["Mathematics", "Science", "General Curriculum"],
      hasExpandableDetails: false,
      isPlaceholder: true,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="academics"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-secondary/10 to-background relative overflow-hidden"
    >
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/60 backdrop-blur-sm text-xs font-medium text-muted-foreground mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5 text-primary" />
            <span>Academic Background</span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 hero-text tracking-tight transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Education & Qualifications
          </h2>
          <p
            className={`text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-150 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            My academic journey in Computer Science and Engineering, building core principles in software theory and systems.
          </p>
        </div>

        {/* Academic Cards Grid */}
        <div className="space-y-6 sm:space-y-8">
          {academicRecords.map((item, index) => (
            <Card
              key={index}
              className={`border-border hover:border-primary/40 transition-all duration-500 hover:shadow-neon bg-card overflow-hidden ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${250 + index * 120}ms` }}
            >
              <CardContent className="p-5 sm:p-7 md:p-8">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 pb-4 border-b border-border/60">
                  <div className="flex items-start gap-3.5">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 mt-0.5">
                      {index === 0 ? (
                        <GraduationCap className="w-6 h-6" />
                      ) : index === 1 ? (
                        <BookOpen className="w-5 h-5" />
                      ) : (
                        <Award className="w-5 h-5" />
                      )}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-0.5">
                        {item.level}
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground leading-snug">
                        {item.degree}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-foreground/80 mt-0.5">
                        {item.field}
                      </p>
                    </div>
                  </div>

                  {/* Status & Grade Badges */}
                  <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-2 mt-1 sm:mt-0">
                    <Badge
                      variant={index === 0 ? "default" : "outline"}
                      className="text-xs font-semibold px-2.5 py-0.5"
                    >
                      {item.grade}
                    </Badge>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>{item.period}</span>
                    </div>
                  </div>
                </div>

                {/* Institution & Location details */}
                <div className="flex items-center gap-2 text-xs text-muted-foreground mt-3 mb-3">
                  <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>{item.institution}</span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3">
                  {item.description}
                </p>

                {/* Expandable bullets for B.Tech on Mobile */}
                {item.hasExpandableDetails ? (
                  <>
                    <div className={`${isBtechExpanded ? "block" : "hidden sm:block"} space-y-2 mb-4 pt-1`}>
                      <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                        {item.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Mobile Read More / Read Less toggle */}
                    <div className="sm:hidden pb-3">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsBtechExpanded(!isBtechExpanded)}
                        className="text-xs font-medium text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto flex items-center gap-1"
                      >
                        <span>{isBtechExpanded ? "Hide Coursework Details" : "View Coursework & Highlights"}</span>
                        {isBtechExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                      </Button>
                    </div>
                  </>
                ) : (
                  <div className="space-y-1.5 mb-4 text-xs text-muted-foreground">
                    {item.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60 mt-1.5 shrink-0" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.tags.map((tag, tIdx) => (
                    <Badge
                      key={tIdx}
                      variant="secondary"
                      className="text-[11px] sm:text-xs px-2.5 py-0.5 bg-secondary/80 hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Academics;

