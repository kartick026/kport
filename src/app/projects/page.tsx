import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Metric } from "@/components/metric";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    slug: "arqengine",
    title: "Arqengine - 3D Architecture Visualization System",
    date: "2024-12-01",
    stack: ["Blender", "Unity", "Python", "OpenGL"],
    metrics: ["Interactive 3D models", "Real-time walkthroughs"],
    links: {
      code: "https://github.com/kartick026",
      demo: "#"
    },
    excerpt: "Designing a platform to generate 2D floor plans from user input and convert them into interactive 3D models with real-time walkthroughs, furniture placement, lighting effects, and spatial analysis.",
    featured: true,
    status: "In Progress"
  },
  {
    slug: "ai-disease-prediction",
    title: "AI-Powered Disease Prediction Model",
    date: "2024-12-01",
    stack: ["Python", "Flask", "Scikit-learn", "TensorFlow"],
    metrics: ["95% Accuracy", "Real-time predictions"],
    links: {
      code: "https://github.com/kartick026",
      demo: "#"
    },
    excerpt: "Built and trained a model to predict diseases from symptoms, achieving 95% accuracy. Integrated with Flask for real-time web-based predictions, evaluated multiple ML algorithms including Decision Trees, Random Forest, and Neural Networks.",
    featured: true
  },
  {
    slug: "agriconnect",
    title: "AgriConnect Platform",
    date: "2024-05-01",
    stack: ["React.js", "React Router", "Express.js", "Tailwind CSS", "MongoDB"],
    metrics: ["Real-time prices", "AI Chatbot"],
    links: {
      code: "https://github.com/kartick026",
      demo: "#"
    },
    excerpt: "Developed a platform providing farmers with real-time market prices and agricultural insights. Integrated an AI-powered chatbot to resolve queries and improve accessibility, added features like authentication, analytics dashboard, and mobile-first responsive UI.",
    featured: true
  }
];

const allStacks = Array.from(new Set(projects.flatMap(project => project.stack)));

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A collection of my recent work spanning web development, AI/ML, and 3D visualization.
            Each project represents a unique challenge and learning opportunity.
          </p>
        </div>

        {/* Stack Filter */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Filter by Technology</h2>
          <div className="flex flex-wrap gap-2">
            {allStacks.map((stack) => (
              <Badge key={stack} variant="outline" className="cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors">
                {stack}
              </Badge>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.slug} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {project.excerpt}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    {project.featured && (
                      <Badge variant="default" className="text-xs">
                        Featured
                      </Badge>
                    )}
                    {project.status && (
                      <Badge variant="outline" className="text-xs">
                        {project.status}
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Metrics */}
                <div className="flex gap-4">
                  {project.metrics.map((metric) => (
                    <Metric key={metric} label="" value={metric} className="text-sm" />
                  ))}
                </div>

                {/* Stack */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground">Technologies</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.stack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-2 pt-2">
                  <Link href={`/projects/${project.slug}`} className="flex-1">
                    <Button variant="outline" size="sm" className="w-full">
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Case Study
                    </Button>
                  </Link>
                  <Link href={project.links.code} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" size="sm" className="w-full">
                      <Github className="mr-1 h-3 w-3" />
                      Code
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center space-y-4 pt-8">
          <p className="text-muted-foreground">
            Interested in collaborating or have questions about any of these projects?
          </p>
          <Link href="/contact">
            <Button>
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
