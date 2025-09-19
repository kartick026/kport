import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Metric } from "@/components/metric";

const featuredProjects = [
  {
    title: "AI-Powered Disease Prediction Model",
    description: "Built and trained a model to predict diseases from symptoms, achieving 95% accuracy with real-time web-based predictions",
    metrics: ["95% Accuracy", "Real-time API"],
    stack: ["Python", "Flask", "Scikit-learn", "TensorFlow"],
    links: {
      caseStudy: "/projects/ai-disease-prediction",
      code: "https://github.com/kartick026"
    }
  },
  {
    title: "AgriConnect Platform",
    description: "Developed a platform providing farmers with real-time market prices and agricultural insights with AI-powered chatbot",
    metrics: ["Real-time prices", "AI Chatbot"],
    stack: ["React.js", "Express.js", "Tailwind CSS", "MongoDB"],
    links: {
      caseStudy: "/projects/agriconnect",
      code: "https://github.com/kartick026"
    }
  },
  {
    title: "Arqengine - 3D Architecture Visualization",
    description: "Designing a platform to generate 2D floor plans from user input and convert them into interactive 3D models with real-time walkthroughs",
    metrics: ["Interactive 3D", "Real-time walkthroughs"],
    stack: ["Blender", "Unity", "Python", "OpenGL"],
    links: {
      caseStudy: "/projects/arqengine",
      code: "https://github.com/kartick026"
    }
  }
];

const experience = [
  {
    company: "KuppiSmart Solutions Pvt. Ltd.",
    role: "Sales & Marketing Intern",
    period: "Jul–Sep 2025",
    achievement: "Developed and executed marketing strategies for Livestockify platform, improving client engagement and identifying growth opportunities"
  },
  {
    company: "KuppiSmart Solutions Pvt. Ltd.",
    role: "Website Developer Intern",
    period: "May–Jul 2025",
    achievement: "Designed and deployed responsive corporate website with cross-device compatibility, implemented new features using JavaScript/Express.js"
  },
  {
    company: "Monolith Technologies Pvt. Ltd.",
    role: "Software Development Intern",
    period: "Jan–Mar 2025",
    achievement: "Researched AR/VR technologies, tested different VR headsets and identified use cases, authored documentation and presented findings"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-container container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="hero-title floating">
              Kartick Sharma
            </h1>
            <p className="hero-subtitle text-muted-foreground glow-text">
              Computer Science Student & Full-Stack Developer
            </p>
            <p className="hero-description text-muted-foreground max-w-2xl mx-auto">
              B.Tech CSE student at VIT Vellore (2023-2027) passionate about AI/ML, web development, and 3D visualization. 
              Building innovative solutions with Python, React, and cutting-edge technologies.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects">
              <Button size="lg" className="w-full sm:w-auto cool-button">
                View Projects
              </Button>
            </Link>
            <Link href="/autoCV (1).pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="w-full sm:w-auto cool-button">
                Resume
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="ghost" size="lg" className="w-full sm:w-auto cool-button">
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-4 py-16">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From AI-powered disease prediction to 3D architecture visualization - exploring the intersection of technology and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={project.title} className="project-card group">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-4">
                    {project.metrics.map((metric) => (
                      <Metric key={metric} label="" value={metric} className="text-sm" />
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Link href={project.links.caseStudy} className="flex-1">
                      <Button variant="outline" size="sm" className="w-full">
                        Case Study
                      </Button>
                    </Link>
                    <Link href={project.links.code} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="outline" size="sm" className="w-full">
                        Code
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Teaser */}
      <section className="container mx-auto px-4 py-16">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">Professional Experience</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Internship experience at KuppiSmart and Monolith Technologies, working on web development, marketing strategies, and AR/VR research.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experience.map((exp, index) => (
              <Card key={`${exp.company}-${exp.role}`} className="experience-card group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{exp.role}</CardTitle>
                      <CardDescription className="text-base font-medium text-foreground">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <Badge variant="outline">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {exp.achievement}
                  </p>
                  <Link href="/experience">
                    <Button variant="outline" size="sm">
                      See more
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}