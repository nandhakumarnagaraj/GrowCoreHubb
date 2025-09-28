import { Star, Quote } from "lucide-react";

export function ClientsSection() {
  const clients = [
    {
      name: "TechCorp Solutions",
      logo: "TC",
      industry: "Technology",
      employees: "5000+"
    },
    {
      name: "Global Finance Inc",
      logo: "GF",
      industry: "Finance",
      employees: "10000+"
    },
    {
      name: "Healthcare Plus",
      logo: "HP",
      industry: "Healthcare",
      employees: "3000+"
    },
    {
      name: "Manufacturing Co",
      logo: "MC",
      industry: "Manufacturing",
      employees: "7500+"
    },
    {
      name: "Creative Agency",
      logo: "CA",
      industry: "Marketing",
      employees: "1500+"
    },
    {
      name: "Retail Giants",
      logo: "RG",
      industry: "Retail",
      employees: "20000+"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "HR Director",
      company: "TechCorp Solutions",
      avatar: "SJ",
      rating: 5,
      testimonial: "GrowCore has revolutionized our hiring process. We've found exceptional talent through their platform, and the quality of candidates has exceeded our expectations."
    },
    {
      name: "Michael Chen",
      position: "Software Engineer",
      company: "Global Finance Inc",
      avatar: "MC",
      rating: 5,
      testimonial: "The certification programs helped me advance my career significantly. I landed my dream job within 3 months of completing the Data Science certification."
    },
    {
      name: "Emily Rodriguez",
      position: "Project Manager",
      company: "Healthcare Plus",
      avatar: "ER",
      rating: 5,
      testimonial: "The platform's job matching algorithm is incredibly accurate. It connected me with opportunities that perfectly aligned with my skills and career goals."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="section-container">
        {/* Trusted Companies */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of companies that trust GrowCore for their talent acquisition and employee development needs
          </p>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-20">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group flex flex-col items-center p-6 card-elevated hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-white font-bold text-lg">{client.logo}</span>
              </div>
              <h4 className="font-semibold text-foreground text-center mb-1">{client.name}</h4>
              <p className="text-sm text-muted-foreground text-center mb-1">{client.industry}</p>
              <p className="text-xs text-primary font-medium">{client.employees} employees</p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from professionals and companies who've grown with GrowCore
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-elevated group hover:-translate-y-1 transition-all duration-500 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-white" />
              </div>

              {/* Stars */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-current" />
                ))}
              </div>

              {/* Testimonial */}
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.testimonial}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold">{testimonial.avatar}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.position} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-12 bg-gradient-hero rounded-3xl text-white">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Whether you're looking for top talent or seeking your next career opportunity, 
            GrowCore is here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              For Companies
            </button>
            <button className="bg-white/20 text-white border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/30 transition-colors">
              For Professionals
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}