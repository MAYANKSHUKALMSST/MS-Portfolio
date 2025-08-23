import { Code, Coffee, Lightbulb, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code"
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Creative solutions to complex technical challenges"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative approach to software development"
    },
    {
      icon: Coffee,
      title: "Continuous Learning",
      description: "Always exploring new technologies and best practices"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Learn more about my journey, skills, and passion for software development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate Embedded Software Engineer with expertise in firmware development 
                and real-time systems. My journey began with curiosity about how hardware and 
                software work together, evolving into a career focused on creating intelligent 
                embedded solutions.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With experience in C/C++, microcontrollers, and real-time operating systems, 
                I enjoy optimizing code for resource-constrained environments and developing 
                robust systems that operate reliably in challenging conditions.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">What Drives Me</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm motivated by the challenge of bridging hardware and software to create 
                intelligent systems. From automotive ECUs to IoT devices, I find fulfillment 
                in developing efficient, reliable embedded solutions that power tomorrow's 
                smart technologies.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card key={index} className="group hover:shadow-glow transition-all duration-300 border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
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