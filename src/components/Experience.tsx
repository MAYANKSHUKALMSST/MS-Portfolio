import { Building, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      company: "Automotive Solutions Ltd.",
      position: "Senior Embedded Software Engineer",
      location: "Bangalore, India",
      duration: "2022 - Present",
      description: [
        "Led development of automotive ECU firmware for engine control systems",
        "Implemented CAN bus communication protocols for vehicle networks",
        "Optimized real-time algorithms reducing response time by 30%",
        "Mentored junior engineers and established coding standards"
      ],
      technologies: ["C/C++", "AUTOSAR", "CAN", "FreeRTOS", "MISRA-C"]
    },
    {
      company: "IoT Innovations Pvt Ltd.",
      position: "Embedded Software Engineer",
      location: "Pune, India",
      duration: "2020 - 2022",
      description: [
        "Developed firmware for ESP32-based IoT devices and sensors",
        "Implemented wireless communication protocols (WiFi, Bluetooth, LoRa)",
        "Created bootloader and OTA update mechanisms",
        "Collaborated with hardware team for board bring-up and testing"
      ],
      technologies: ["C/C++", "ESP32", "FreeRTOS", "MQTT", "WiFi"]
    },
    {
      company: "TechStart Electronics",
      position: "Junior Embedded Developer",
      location: "Delhi, India",
      duration: "2019 - 2020",
      description: [
        "Programmed ARM Cortex-M microcontrollers for industrial automation",
        "Developed device drivers for various sensors and actuators",
        "Participated in code reviews and debugging sessions",
        "Learned embedded systems fundamentals and best practices"
      ],
      technologies: ["C", "ARM", "STM32", "I2C", "SPI"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and key achievements in software development
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="group hover:shadow-glow transition-all duration-300 border-l-4 border-l-primary/50 hover:border-l-primary">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {exp.position}
                      </h3>
                      <div className="flex items-center gap-2 text-muted-foreground mt-1">
                        <Building className="h-4 w-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;