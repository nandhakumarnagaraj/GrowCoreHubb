import { Button } from "@/components/ui/button";
import { ArrowRight, Search, BookOpen, CreditCard, User, BarChart3, Shield } from "lucide-react";
import jobsImage from "@/assets/jobs-image.jpg";
import certificationsImage from "@/assets/certifications-image.jpg";

interface ServicesSectionProps {
  onExploreJobs?: () => void;
  onExploreCertifications?: () => void;
}

export function ServicesSection({ onExploreJobs, onExploreCertifications }: ServicesSectionProps) {
  const services = [
    {
      icon: Search,
      title: "Job Search & Matching",
      description: "Advanced AI-powered job matching based on your skills, experience, and preferences.",
      features: ["Smart job recommendations", "Salary insights", "Company reviews", "Application tracking"]
    },
    {
      icon: BookOpen,
      title: "Professional Certifications",
      description: "Industry-recognized certification programs to enhance your skills and career prospects.",
      features: ["Self-paced learning", "Expert instructors", "Digital certificates", "Progress tracking"]
    },
    {
      icon: CreditCard,
      title: "Payment & Billing",
      description: "Secure payment processing for certifications with detailed invoicing and receipts.",
      features: ["Multiple payment methods", "Digital invoices", "Payment history", "Refund support"]
    },
    {
      icon: User,
      title: "Profile Management",
      description: "Create a comprehensive professional profile to showcase your skills and experience.",
      features: ["Resume builder", "Portfolio showcase", "Skill assessments", "Privacy controls"]
    },
    {
      icon: BarChart3,
      title: "Career Analytics",
      description: "Track your career progress with detailed analytics and insights.",
      features: ["Application metrics", "Skill gap analysis", "Market trends", "Career roadmap"]
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Enterprise-grade security to protect your personal and professional information.",
      features: ["Data encryption", "Privacy compliance", "Secure payments", "Account protection"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Comprehensive Career Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to advance your career in one integrated platform
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-elevated group hover:-translate-y-1 transition-all duration-500"
            >
              <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Featured Services */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Jobs Section */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src={jobsImage}
                alt="Job search and recruitment"
                className="rounded-2xl shadow-large w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full">
              <Search className="w-4 h-4 text-primary mr-2" />
              <span className="text-primary font-medium">Job Portal</span>
            </div>
            
            <h3 className="text-3xl font-bold text-foreground">
              Find Your Dream Job
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Access thousands of job opportunities from leading companies. Our intelligent 
              matching system connects you with positions that align with your skills, 
              experience, and career goals.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-accent rounded-lg">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Match Accuracy</div>
              </div>
              <div className="text-center p-4 bg-accent rounded-lg">
                <div className="text-2xl font-bold text-primary">24h</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </div>
            </div>
            
            <Button 
              className="btn-hero group"
              onClick={onExploreJobs}
            >
              Explore Jobs
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-20">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full">
              <BookOpen className="w-4 h-4 text-primary mr-2" />
              <span className="text-primary font-medium">Certifications</span>
            </div>
            
            <h3 className="text-3xl font-bold text-foreground">
              Advance Your Skills
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Earn industry-recognized certifications from top institutions and experts. 
              Our comprehensive programs are designed to help you stay ahead in your career 
              and acquire in-demand skills.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-accent rounded-lg">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Programs</div>
              </div>
              <div className="text-center p-4 bg-accent rounded-lg">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Completion Rate</div>
              </div>
            </div>
            
            <Button 
              className="btn-hero group"
              onClick={onExploreCertifications}
            >
              View Certifications
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div>
            <div className="relative">
              <img
                src={certificationsImage}
                alt="Professional certifications and learning"
                className="rounded-2xl shadow-large w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}