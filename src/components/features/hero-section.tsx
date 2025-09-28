import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, Briefcase } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

interface HeroSectionProps {
  onGetStarted?: () => void;
  onLearnMore?: () => void;
}

export function HeroSection({ onGetStarted, onLearnMore }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional team collaboration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/80"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 section-container py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Grow Your Career with{" "}
              <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">
                GrowCoreHub
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              Your comprehensive platform for career advancement. Find your dream job, 
              earn professional certifications, and build the future you deserve.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button 
                className="btn-hero group"
                onClick={onGetStarted}
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                className="btn-secondary"
                onClick={onLearnMore}
              >
                Learn More
              </Button>
            </div>

          </div>

          {/* Right Column - Features Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="card-elevated text-center group hover:-translate-y-2 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Job Portal</h3>
              <p className="text-muted-foreground text-sm">
                Browse thousands of opportunities from top companies
              </p>
            </div>

            <div className="card-elevated text-center group hover:-translate-y-2 transition-all duration-300 mt-8">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Certifications</h3>
              <p className="text-muted-foreground text-sm">
                Earn industry-recognized certificates to boost your career
              </p>
            </div>

            <div className="card-elevated text-center group hover:-translate-y-2 transition-all duration-300 -mt-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Networking</h3>
              <p className="text-muted-foreground text-sm">
                Connect with professionals and expand your network
              </p>
            </div>

            <div className="card-elevated text-center group hover:-translate-y-2 transition-all duration-300 mt-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Career Growth</h3>
              <p className="text-muted-foreground text-sm">
                Track your progress and achieve your career goals
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
    </section>
  );
}