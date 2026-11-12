import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  Code2,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2,
  Database,
  Server,
  Workflow,
  ExternalLink,
} from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
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

  // Categorized tech stack
  const techCategories = [
    {
      title: "Frontend Engineering",
      icon: Code2,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5 / CSS3", "State Management"],
    },
    {
      title: "Backend & APIs",
      icon: Server,
      skills: ["Node.js", "Express", "RESTful APIs", "Authentication", "Middleware", "JSON / Webhooks"],
    },
    {
      title: "Databases & Storage",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "Database Design", "SQL Queries", "Prisma ORM", "Data Modeling"],
    },
    {
      title: "Tools & Practices",
      icon: Workflow,
      skills: ["Git & GitHub", "Vite", "Postman", "Agile / Scrum", "Code Reviews", "Performance Tuning"],
    },
  ];

  // Career & Education Timeline
  const timeline = [
    {
      type: "work",
      title: "Software Engineer Intern",
      organization: "Simplium Technologies",
      link: "https://www.milora.org/",
      location: "Pune, India",
      period: "Feb 2026 – Present",
      status: "Current Role",
      description:
        "Actively contributing to production-grade web applications including Milora and mDigim. Working across the full software lifecycle with engineering mentors to deliver resilient features.",
      bullets: [
        "Engineered reusable, accessible UI components in React and TypeScript with responsive layouts.",
        "Integrated robust REST APIs and backend logic with Node.js to support dynamic application data flows.",
        "Performed database querying, data modeling, and schema operations with PostgreSQL and MongoDB.",
        "Participated in Agile sprint planning, asynchronous code reviews, and Git-based collaborative workflows.",
      ],
      tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "REST APIs", "Git", "Agile"],
    },
    {
      type: "education",
      title: "Bachelor of Technology (B.Tech)",
      organization: "Computer Science & Engineering",
      location: "Pune, India",
      period: "2022 – 2026",
      status: "CGPA: 8.45 / 10",
      description:
        "Solid theoretical and practical computer science foundation with a strong academic track record and multiple real-world software engineering projects.",
      bullets: [
        "Core coursework: Data Structures & Algorithms, Object-Oriented Programming (Java/C++), DBMS, Operating Systems, and Computer Networks.",
        "Designed and implemented multiple full-stack academic capstone systems applying modular design patterns.",
        "Maintained a consistent 8.45 CGPA while actively developing independent web applications and tooling.",
      ],
      tags: ["Data Structures", "Algorithms", "DBMS", "Java", "System Architecture", "Computer Networks"],
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
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-secondary/30 relative overflow-hidden"
    >
      {/* Background ambient blur */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-card/60 backdrop-blur-sm text-xs font-medium text-muted-foreground mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>Engineering Profile & Background</span>
          </div>

          <h2
            className={`text-4xl sm:text-5xl font-bold mb-6 hero-text tracking-tight transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            About Me
          </h2>
          <p
            className={`text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            I am a Full-Stack Developer focused on building practical, scalable web applications
            and solving real-world engineering problems with modern, maintainable architectures.
          </p>
        </div>

        {/* Two-Column Section: Narrative & Achievements */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-20">
          {/* Left Column: Professional Journey & Philosophy */}
          <div
            className={`lg:col-span-7 space-y-6 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Professional Journey Card */}
            <Card className="border-border hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-neon bg-card">
              <CardContent className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">My Professional Journey</h3>
                    <p className="text-xs text-muted-foreground">From core frontend to full-stack systems</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  My development journey started with frontend engineering, exploring how to transform
                  ideas into functional, intuitive web experiences. Over time, that curiosity evolved
                  into end-to-end full-stack development, architecting applications using{" "}
                  <span className="text-foreground font-medium">React, Node.js, TypeScript, and PostgreSQL</span>.
                </p>

                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  Currently, as a Software Engineer Intern at{" "}
                  <span className="text-foreground font-medium">Simplium Technologies</span>, I actively
                  contribute to production products like{" "}
                  <span className="text-foreground font-medium">Milora</span> and{" "}
                  <span className="text-foreground font-medium">mDigim</span>. My day-to-day responsibilities
                  include crafting reusable frontend components, integrating REST APIs, implementing backend logic,
                  handling database queries, and systematically diagnosing production issues.
                </p>
              </CardContent>
            </Card>

            {/* Engineering Philosophy Card */}
            <Card className="border-border hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-neon bg-card">
              <CardContent className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Engineering Philosophy</h3>
                    <p className="text-xs text-muted-foreground">How I think about building software</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  I believe good software engineering goes well beyond just getting code to run. It demands
                  deep problem analysis, selecting the right architectural abstraction, writing self-documenting
                  code, and ensuring systems behave predictably under real user loads.
                </p>

                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  I value simplicity over premature optimization, practical problem-solving, strict type safety,
                  and building software that remains maintainable long after deployment.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Genuine Achievements & Tech Matrix */}
          <div
            className={`lg:col-span-5 space-y-6 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {/* Genuine Achievement Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((item, index) => (
                <Card
                  key={index}
                  className="border-border hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-neon bg-card"
                >
                  <CardContent className="p-5 flex flex-col justify-between h-full">
                    <div>
                      <div className="text-2xl sm:text-3xl font-extrabold text-primary mb-1 tracking-tight">
                        {item.value}
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-foreground mb-1">
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

            {/* Categorized Tech Stack Quick Matrix */}
            <Card className="border-border hover:border-primary/40 transition-all duration-300 bg-card">
              <CardContent className="p-6 space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-border">
                  <div className="flex items-center gap-2.5">
                    <Layers className="w-5 h-5 text-primary" />
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">
                      Categorized Tech Stack
                    </h4>
                  </div>
                  <Badge variant="outline" className="text-[10px] uppercase tracking-wider">
                    Core Stack
                  </Badge>
                </div>

                <div className="space-y-4">
                  {techCategories.map((cat, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="flex items-center gap-2 text-xs font-medium text-foreground/90">
                        <cat.icon className="w-3.5 h-3.5 text-primary" />
                        <span>{cat.title}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {cat.skills.map((skill, sIdx) => (
                          <Badge
                            key={sIdx}
                            variant="secondary"
                            className="text-[11px] py-0.5 px-2 bg-secondary/80 hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Clean Career Timeline: Simplium Technologies & B.Tech */}
        <div
          className={`mb-20 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold hero-text mb-3">
              Career & Academic Timeline
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
              Key milestones marking my journey through professional engineering and computer science education.
            </p>
          </div>

          <div className="relative border-l-2 border-border/80 ml-4 sm:ml-8 md:ml-32 pl-6 sm:pl-8 space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className="relative group">
                {/* Timeline node icon */}
                <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-background border-2 border-primary flex items-center justify-center text-primary shadow-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {item.type === "work" ? (
                    <Briefcase className="w-4 h-4" />
                  ) : (
                    <GraduationCap className="w-4 h-4" />
                  )}
                </div>

                {/* Timeline Card */}
                <Card className="border-border hover:border-primary/40 transition-all duration-300 hover:shadow-neon bg-card">
                  <CardContent className="p-6 sm:p-8 space-y-4">
                    {/* Header info */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-2 border-b border-border/60">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h4 className="text-lg sm:text-xl font-bold text-foreground">
                            {item.title}
                          </h4>
                          {item.link ? (
                            <a
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-primary hover:underline text-sm font-semibold"
                            >
                              @{item.organization}
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          ) : (
                            <span className="text-primary font-semibold text-sm">
                              @{item.organization}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {item.period}
                          </span>
                          <span>•</span>
                          <span>{item.location}</span>
                        </div>
                      </div>

                      <Badge
                        variant={item.type === "work" ? "default" : "secondary"}
                        className="self-start sm:self-auto text-xs font-medium"
                      >
                        {item.status}
                      </Badge>
                    </div>

                    {/* Summary */}
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>

                    {/* Bullet points */}
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="leading-snug">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {item.tags.map((tag, tIdx) => (
                        <Badge
                          key={tIdx}
                          variant="secondary"
                          className="text-xs px-2.5 py-0.5 bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Engineering Principles Grid */}
        <div
          className={`transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold hero-text mb-2">
              Core Engineering Principles
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
              The fundamental standards that guide how I write, review, and deliver production software.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-neon transition-all duration-300 hover:scale-[1.03] border-border hover:border-primary/40 bg-card"
              >
                <CardContent className="p-6 text-center space-y-3">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <item.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h4 className="text-base font-bold text-foreground group-hover:text-primary transition-colors duration-300">
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
