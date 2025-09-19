import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const skills = [
  {
    category: "Languages",
    items: ["C++", "Python", "Java", "JavaScript", "TypeScript", "SQL"]
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Node.js", "Express", "Next.js", "Redux", "Tailwind CSS"]
  },
  {
    category: "Data & Machine Learning",
    items: ["NumPy", "Pandas", "scikit-learn", "TensorFlow", "OpenCV", "Jupyter"]
  },
  {
    category: "Databases",
    items: ["MySQL", "MongoDB", "PostgreSQL", "Redis"]
  },
  {
    category: "Tools & Technologies",
    items: ["Git", "GitHub", "Docker", "VS Code", "Jupyter", "Godot", "Unity"]
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Personal Story */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">My Story</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Hey there! I&apos;m Kartick, a Computer Science Engineering student at VIT Vellore who&apos;s absolutely 
                obsessed with pushing the boundaries of what&apos;s possible with technology. My journey started 
                with that classic &quot;how does this actually work?&quot; curiosity, but it&apos;s evolved into something 
                way cooler - I&apos;m building immersive experiences that blur the line between reality and digital worlds.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently crushing my B.Tech in CSE (2023-2027), I&apos;ve been diving deep into internships at 
                Kuppismart and Monolith, where I&apos;ve gotten my hands dirty with everything from web development 
                to cutting-edge AR/VR research. These experiences have taught me that the best solutions 
                come from understanding users on a deeper level - it&apos;s not just about code, it&apos;s about 
                creating experiences that people actually want to use.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me in the gym lifting weights (gotta keep the mind and body 
                sharp!), experimenting with WebXR and immersive 3D experiences, or building games that 
                challenge conventional thinking. I&apos;m passionate about AR/VR because I believe these 
                technologies will revolutionize how we interact with digital content - and I want to be 
                at the forefront of that revolution.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m all about creating technology that doesn&apos;t just solve problems, but creates entirely 
                new possibilities. Whether it&apos;s building games that tell meaningful stories or developing 
                AR experiences that enhance our daily lives, I believe in using tech to make the world 
                more connected, more immersive, and honestly, more fun.
              </p>
            </CardContent>
          </Card>

          {/* Skills */}
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold">Skills & Technologies</h2>
              <p className="text-muted-foreground">
                A comprehensive overview of my technical expertise across different domains.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skillGroup) => (
                <Card key={skillGroup.category}>
                  <CardHeader>
                    <CardTitle className="text-lg">{skillGroup.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <Badge key={skill} className="text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">VIT Vellore</h3>
                  <p className="text-muted-foreground">
                    Bachelor of Technology in Computer Science and Engineering
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Vellore, Tamil Nadu, India</span>
                  </div>
                </div>
                <Badge className="w-fit">
                  2023 - 2027
                </Badge>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold">Key Achievements</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong>Winner:</strong> Industry Academia Conclave 24-Hour Hackathon (2025)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong>Participant:</strong> DevJams &apos;24 (GDSC), Yantra Central Hack (IEEE-CS), CookOff 9.0 (CodeChef)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Multiple internship experiences at KuppiSmart and Monolith Technologies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Built AI-powered disease prediction model with 95% accuracy</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Interests */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Interests & Hobbies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold">Technical Passions</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>AR/VR Development & WebXR Experiences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Game Development & Interactive 3D Worlds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>AI/ML for Immersive Applications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Real-time 3D Rendering & Performance</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Beyond the Screen</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Powerlifting & Strength Training</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Building indie games & interactive experiences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Contributing to open-source VR/AR projects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>Exploring the future of spatial computing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact CTA */}
          <div className="text-center space-y-4 pt-8">
            <h2 className="text-2xl font-bold">Let&apos;s Connect</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I&apos;m always interested in discussing new opportunities, collaborating on projects, 
              or just having a conversation about technology and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button>
                  <Mail className="mr-2 h-4 w-4" />
                  Get in Touch
                </Button>
              </Link>
              <Link href="https://github.com/kartick026" target="_blank" rel="noopener noreferrer">
                <Button>
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/kartick-sharma" target="_blank" rel="noopener noreferrer">
                <Button>
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}