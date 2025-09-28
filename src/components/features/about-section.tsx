//test for git//
import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, Users, Award, TrendingUp } from "lucide-react";

export function AboutSection() {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from job matching to certification programs."
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We maintain the highest standards of honesty and transparency in all our interactions."
    },
    {
      icon: Users,
      title: "Community",
      description: "We believe in building strong professional communities that support career growth."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We continuously innovate to provide cutting-edge career development solutions."
    }
  ];



  return (
    <section id="about" className="py-20 bg-accent/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            About GrowCore
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering professionals to achieve their career aspirations through innovative 
            job placement and certification programs.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Our Storys

            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded with a vision to bridge the gap between talent and opportunity, 
              GrowCore has been at the forefront of career development for over a decade. 
              We understand that every professional journey is unique, and we're here to 
              provide the tools, resources, and support you need to succeed.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our platform combines cutting-edge technology with human expertise to deliver 
              personalized career solutions. From job matching algorithms to expert-curated 
              certification programs, we're committed to helping you grow your career.
            </p>
            
            <Button className="btn-hero">
              Learn More About Us
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-6">

          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="card-elevated">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To become the world's leading platform for career development, where every 
              professional can discover opportunities, develop skills, and achieve their 
              career aspirations with confidence and support.
            </p>
          </div>
          
          <div className="card-elevated">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To empower professionals through innovative career solutions, connecting talent 
              with opportunity while providing world-class certification programs that drive 
              continuous learning and professional growth.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Our Values
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              
              <h4 className="text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h4>
              
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}