import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const experiences = [
  {
    company: "KuppiSmart Solutions Pvt. Ltd.",
    role: "Sales & Marketing Intern",
    period: "Jul–Sep 2025",
    achievements: [
      "Developed and executed marketing strategies for the Livestockify platform",
      "Improved client engagement and identified growth opportunities",
      "Conducted market research and competitor analysis to support business expansion",
      "Created comprehensive marketing campaigns for agricultural technology solutions"
    ],
    metrics: ["Improved client engagement", "Business expansion support"],
    stack: ["Marketing Strategy", "Market Research", "Client Engagement", "Business Analysis"]
  },
  {
    company: "KuppiSmart Solutions Pvt. Ltd.",
    role: "Website Developer Intern",
    period: "May–Jul 2025",
    achievements: [
      "Designed and deployed a responsive corporate website",
      "Ensured cross-device compatibility across all platforms",
      "Implemented new features using JavaScript/Express.js",
      "Enhanced site performance and user experience"
    ],
    metrics: ["Cross-device compatibility", "Enhanced performance"],
    stack: ["JavaScript", "Express.js", "Responsive Design", "Web Development"]
  },
  {
    company: "Monolith Technologies Pvt. Ltd.",
    role: "Software Development Intern",
    period: "Jan–Mar 2025",
    achievements: [
      "Researched AR/VR technologies and tested different VR headsets",
      "Identified use cases for immersive technology applications",
      "Authored comprehensive documentation and presented findings",
      "Guided adoption strategies for AR/VR implementation"
    ],
    metrics: ["VR headset testing", "Documentation & presentation"],
    stack: ["AR/VR Research", "Unity", "Technical Documentation", "VR Headsets"]
  },
  {
    company: "Monolith Technologies Pvt. Ltd.",
    role: "Research Intern",
    period: "Jun–Aug 2024",
    achievements: [
      "Analyzed VR headset components and operating systems",
      "Researched hardware configurations and technical specifications",
      "Documented findings for team knowledge sharing",
      "Contributed to VR technology research initiatives"
    ],
    metrics: ["Component analysis", "Technical documentation"],
    stack: ["VR Research", "Hardware Analysis", "Technical Writing", "Operating Systems"]
  }
];

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold">Experience</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey spans web development, marketing, and cutting-edge AR/VR research.
            Each role has contributed to my growth as a full-stack developer and technology enthusiast.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {experiences.map((exp) => (
            <Card key={`${exp.company}-${exp.role}`} className="relative">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl">{exp.company}</CardTitle>
                    <CardDescription className="text-base font-medium">
                      {exp.role}
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Achievements */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-accent mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrics */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                    Impact Metrics
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.metrics.map((metric) => (
                      <Badge key={metric} variant="secondary" className="text-xs">
                        {metric}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {exp.stack.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Education */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Education</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
              <div>
                <h3 className="font-semibold">VIT Vellore</h3>
                <p className="text-muted-foreground">Bachelor of Technology in Computer Science and Engineering</p>
              </div>
              <Badge variant="outline">2023 - 2027</Badge>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-sm">Relevant Coursework</h4>
              <div className="flex flex-wrap gap-1">
                {[
                  "Data Structures & Algorithms",
                  "Machine Learning",
                  "Computer Networks",
                  "Database Systems",
                  "Software Engineering",
                  "Web Technologies"
                ].map((course) => (
                  <Badge key={course} variant="secondary" className="text-xs">
                    {course}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center space-y-4 pt-8">
          <p className="text-muted-foreground">
            Interested in working together or learning more about my experience?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button>
                Get in Touch
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline">
                View My Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
