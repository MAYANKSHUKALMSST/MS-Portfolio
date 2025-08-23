import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: [
        { name: "C/C++", level: 95 },
        { name: "Python", level: 85 },
        { name: "Assembly", level: 80 },
        { name: "Rust", level: 75 },
        { name: "MATLAB", level: 70 },
      ]
    },
    {
      title: "Microcontrollers",
      skills: [
        { name: "ARM Cortex", level: 90 },
        { name: "Arduino", level: 95 },
        { name: "ESP32/ESP8266", level: 90 },
        { name: "STM32", level: 85 },
        { name: "Raspberry Pi", level: 85 },
      ]
    },
    {
      title: "Protocols & RTOS",
      skills: [
        { name: "FreeRTOS", level: 85 },
        { name: "I2C/SPI", level: 90 },
        { name: "UART/CAN", level: 85 },
        { name: "WiFi/Bluetooth", level: 80 },
        { name: "MQTT", level: 85 },
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", level: 90 },
        { name: "Keil uVision", level: 80 },
        { name: "PlatformIO", level: 85 },
        { name: "Oscilloscope", level: 80 },
        { name: "PCB Design", level: 70 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="group hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-center text-lg group-hover:text-primary transition-colors">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div
                        className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;