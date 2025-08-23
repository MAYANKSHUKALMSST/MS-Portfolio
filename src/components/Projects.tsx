import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "Smart Home Automation System",
      description: "ESP32-based home automation with sensor monitoring, remote control via mobile app, and voice commands. Features real-time data logging and energy optimization.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop",
      technologies: ["ESP32", "FreeRTOS", "MQTT", "WiFi", "Mobile App"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      title: "CAN Bus Vehicle Diagnostics",
      description: "Automotive diagnostic tool for real-time vehicle data monitoring, fault detection, and ECU communication using CAN protocol.",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=500&h=300&fit=crop",
      technologies: ["STM32", "CAN Bus", "AUTOSAR", "C++", "Qt"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    },
    {
      title: "Industrial IoT Sensor Network",
      description: "Wireless sensor network for industrial monitoring with LoRa communication, edge computing capabilities, and predictive maintenance algorithms.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
      technologies: ["ARM Cortex-M", "LoRa", "FreeRTOS", "Edge AI", "Python"],
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      title: "Real-Time Motor Control System",
      description: "High-precision motor control system with PID algorithms, encoder feedback, and safety mechanisms for industrial applications.",
      image: "https://images.unsplash.com/photo-1518176258769-f227c798150e?w=500&h=300&fit=crop",
      technologies: ["STM32", "PWM", "PID Control", "Encoders", "Safety"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    },
    {
      title: "Wearable Health Monitor",
      description: "Low-power wearable device for continuous health monitoring with BLE connectivity, sensor fusion, and long battery life optimization.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=300&fit=crop",
      technologies: ["nRF52", "BLE", "Sensor Fusion", "Low Power", "Mobile"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    },
    {
      title: "Embedded Linux Gateway",
      description: "Raspberry Pi-based IoT gateway with protocol translation, edge computing, and secure cloud connectivity for industrial environments.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=300&fit=crop",
      technologies: ["Raspberry Pi", "Linux", "Protocol Bridge", "Security", "Cloud"],
      githubUrl: "#",
      liveUrl: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects demonstrating various technologies and skills
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group hover:shadow-glow transition-all duration-300 overflow-hidden ${
                project.featured ? 'lg:col-span-2 xl:col-span-2' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="secondary" size="sm" className="p-2">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button variant="secondary" size="sm" className="p-2">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-secondary/50 text-xs rounded-md border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button variant="hero" size="sm" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;