import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import { formatDate } from "@/lib/utils";

const projects = {
  "disease-prediction": {
    content: `
      <h2>The Problem</h2>
      <p>Traditional symptom-to-disease diagnosis relies heavily on medical expertise and can be time-consuming. Patients often struggle to understand their symptoms and need quick, reliable preliminary assessments before consulting healthcare professionals.</p>
      
      <h2>The Approach</h2>
      <p>I developed a machine learning system that analyzes patient symptoms and predicts potential diseases with high accuracy. The solution involved:</p>
      <ul>
        <li><strong>Model Comparison</strong>: Evaluated multiple algorithms including Random Forest, SVM, and Neural Networks</li>
        <li><strong>Cross-Validation</strong>: Implemented k-fold validation to ensure robust performance across different data splits</li>
        <li><strong>Feature Engineering</strong>: Extracted meaningful symptom patterns and relationships</li>
      </ul>
      
      <h2>API Deployment</h2>
      <p>The prediction model was deployed as a RESTful API using Flask, featuring:</p>
      <ul>
        <li><strong>Fast Inference</strong>: Optimized for sub-200ms response times at the 95th percentile</li>
        <li><strong>Scalable Architecture</strong>: Containerized deployment with load balancing</li>
        <li><strong>Input Validation</strong>: Comprehensive error handling and data sanitization</li>
      </ul>
      
      <h2>Results & Impact</h2>
      <p>The system successfully demonstrates the potential of AI in healthcare diagnostics:</p>
      <ul>
        <li><strong>Improved Accessibility</strong>: Provides preliminary assessments to underserved populations</li>
        <li><strong>Reduced Healthcare Burden</strong>: Helps prioritize urgent cases</li>
        <li><strong>Educational Value</strong>: Helps users understand symptom-disease relationships</li>
      </ul>
    `,
    metadata: {
      title: "AI-Powered Disease Prediction",
      date: "2024-12-01",
      stack: ["Python", "Flask", "scikit-learn", "TensorFlow"],
      metrics: ["Accuracy 95%", "p95 API <200 ms (target)"],
      links: {
        code: "#",
        demo: "#"
      }
    }
  },
  "agricommunity": {
    content: `
      <h2>The Problem</h2>
      <p>Farmers in rural areas often lack access to real-time market prices, agricultural advice, and efficient communication channels. This information gap leads to suboptimal pricing decisions and limited access to expert knowledge.</p>
      
      <h2>The Solution</h2>
      <p>AgriConnect is a comprehensive platform that bridges the gap between farmers and agricultural resources through:</p>
      <ul>
        <li><strong>Real-time Price Tracking</strong>: Live market prices for various crops and commodities</li>
        <li><strong>AI-Powered Chatbot</strong>: Instant agricultural advice and problem diagnosis</li>
        <li><strong>Community Features</strong>: Farmer-to-farmer communication and knowledge sharing</li>
      </ul>
      
      <h2>Technical Implementation</h2>
      <p>Built with React and modern web technologies featuring component-based design, responsive layout, and efficient state management with React Router for navigation.</p>
      
      <h2>Performance Optimizations</h2>
      <p>Implemented aggressive caching strategies that reduced Time to Interactive by approximately 30%:</p>
      <ul>
        <li><strong>Image Optimization</strong>: WebP format with lazy loading</li>
        <li><strong>Code Splitting</strong>: Route-based bundle splitting for faster initial loads</li>
        <li><strong>API Caching</strong>: Redis-based caching for frequently accessed data</li>
        <li><strong>CDN Integration</strong>: Static asset delivery through content delivery networks</li>
      </ul>
    `,
    metadata: {
      title: "AgriConnect",
      date: "2024-11-15",
      stack: ["React", "Express", "Tailwind", "React Router"],
      metrics: ["TTI ~30% faster via caching (est.)"],
      links: {
        code: "#",
        demo: "#"
      }
    }
  },
  "arch-3d": {
    content: `
      <h2>The Challenge</h2>
      <p>Traditional 2D architectural blueprints and static renders fail to provide clients with an immersive understanding of spatial relationships and design intent. Architects need tools that allow real-time exploration of 3D spaces with realistic lighting and materials.</p>
      
      <h2>The Solution</h2>
      <p>I developed a comprehensive 3D architecture visualization pipeline that transforms architectural designs into interactive, photorealistic environments suitable for client presentations and design iteration.</p>
      
      <h2>Technical Pipeline</h2>
      <p><strong>3D Modeling & Asset Creation</strong>:</p>
      <ul>
        <li><strong>Blender Workflow</strong>: Precise geometric modeling of buildings and spaces</li>
        <li><strong>Material Creation</strong>: Physically-based materials with realistic surface properties</li>
        <li><strong>Lighting Setup</strong>: Global illumination and realistic light bounces</li>
        <li><strong>Animation</strong>: Camera paths and object animations for presentations</li>
      </ul>
      
      <h2>Interactive Features</h2>
      <ul>
        <li><strong>Navigation System</strong>: Smooth, intuitive navigation across desktop and VR platforms</li>
        <li><strong>Dynamic Elements</strong>: Time-of-day simulation and weather effects</li>
        <li><strong>Performance Optimization</strong>: Target 60 FPS on mid-range gaming GPUs</li>
      </ul>
      
      <h2>Results & Applications</h2>
      <p>The visualization system enables:</p>
      <ul>
        <li><strong>Client Presentations</strong>: Immersive walkthroughs that clearly communicate design intent</li>
        <li><strong>Design Iteration</strong>: Rapid prototyping and modification of architectural elements</li>
        <li><strong>Marketing Materials</strong>: High-quality renders and animations for promotional use</li>
        <li><strong>Collaborative Review</strong>: Multi-user environments for team design reviews</li>
      </ul>
    `,
    metadata: {
      title: "3D Architecture Visualization",
      date: "2024-10-20",
      stack: ["Blender", "Unity", "Python", "OpenGL"],
      metrics: ["Smooth on mid-range GPUs (target 60 FPS)"],
      links: {
        code: "#",
        demo: "#"
      }
    }
  }
};

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects[slug as keyof typeof projects];
  
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.metadata.title} - Kartick Portfolio`,
    description: `Case study for ${project.metadata.title} project by Kartick`,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects[slug as keyof typeof projects];
  
  if (!project) {
    notFound();
  }

  const { content, metadata } = project;

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/projects">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
          </Link>
        </div>

        {/* Project Header */}
        <div className="mb-12 space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold">{metadata.title}</h1>
            <p className="text-lg text-muted-foreground">
              Published on {formatDate(metadata.date)}
            </p>
          </div>

          {/* Project Links */}
          <div className="flex flex-wrap gap-4">
            <Link href={metadata.links.code} target="_blank" rel="noopener noreferrer">
              <Button>
                <Github className="mr-2 h-4 w-4" />
                View Code
              </Button>
            </Link>
            {metadata.links.demo && (
              <Link href={metadata.links.demo} target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
              </Link>
            )}
          </div>

          {/* Stack */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {metadata.stack.map((tech) => (
                <Badge key={tech} variant="default">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <Card>
            <CardHeader>
              <CardTitle>Key Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {metadata.metrics.map((metric) => (
                  <div key={metric} className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-accent">{metric}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Project Content */}
        <article className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </article>

        {/* Navigation */}
        <div className="mt-16 pt-8 border-t">
          <div className="flex justify-between">
            <Link href="/projects">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                All Projects
              </Button>
            </Link>
            <Link href="/contact">
              <Button>
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
