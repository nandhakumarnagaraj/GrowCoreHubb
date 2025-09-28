import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/features/hero-section";
import { AboutSection } from "@/components/features/about-section";
import { ServicesSection } from "@/components/features/services-section";
import { ClientsSection } from "@/components/features/clients-section";
import { Footer } from "@/components/features/footer";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { toast } = useToast();

  const handleLogin = () => {
    window.location.href = "/auth";
  };

  const handleSignup = () => {
    window.location.href = "/auth";
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
  };

  const handleGetStarted = () => {
    if (!isAuthenticated) {
      handleSignup();
    } else {
      window.location.href = "/dashboard";
    }
  };

  const handleLearnMore = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  const handleExploreJobs = () => {
    window.location.href = "/jobs";
  };

  const handleExploreCertifications = () => {
    window.location.href = "/certifications";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation
        isAuthenticated={isAuthenticated}
        onLogin={handleLogin}
        onSignup={handleSignup}
        onLogout={handleLogout}
      />
      
      <main>
        <HeroSection
          onGetStarted={handleGetStarted}
          onLearnMore={handleLearnMore}
        />
        
        <AboutSection />
        
        <ServicesSection
          onExploreJobs={handleExploreJobs}
          onExploreCertifications={handleExploreCertifications}
        />
        
        <ClientsSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
