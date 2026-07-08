import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Rocket, Users } from "lucide-react";

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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code that stands the test of time.",
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Bringing ideas to life with stunning visuals and intuitive user experiences.",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing applications for speed and delivering seamless user interactions.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with teams to deliver exceptional digital products.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 px-4 bg-gradient-to-br from-background via-background to-secondary/30"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 hero-text transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            About Me
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            I'm a passionate developer who loves creating beautiful, functional, and user-friendly applications.
            With a keen eye for detail and a commitment to excellence, I transform ideas into digital reality.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                Started as a curious developer exploring the endless possibilities of code, I've evolved into
                a creative technologist who bridges the gap between innovative design and robust functionality.
                Every project is an opportunity to push boundaries and create something extraordinary.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4 text-primary">Philosophy</h3>
              <p className="text-muted-foreground leading-relaxed">
                I believe that great software is not just about code – it's about understanding users,
                solving real problems, and creating experiences that make a difference. My approach combines
                technical expertise with creative thinking to deliver solutions that exceed expectations.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-2 gap-6 transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            {[
              { number: "5+", label: "Projects Completed" },
              { number: "1+", label: "Year Experience" },
              { number: "100%", label: "Client Satisfaction" },
              { number: "24/7", label: "Dedication" },
            ].map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-neon transition-all duration-300 hover:scale-105">
                <CardContent className="p-0">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`group hover:shadow-glow transition-all duration-500 hover:scale-105 border-border hover:border-primary/50 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${600 + index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
