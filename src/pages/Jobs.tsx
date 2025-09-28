import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  MapPin, 
  DollarSign, 
  Clock, 
  Briefcase, 
  Filter,
  BookmarkPlus,
  ExternalLink,
  Users,
  Building
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [jobTypeFilter, setJobTypeFilter] = useState("");
  const [salaryRangeFilter, setSalaryRangeFilter] = useState("");
  const { toast } = useToast();

  const jobs = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$95,000 - $120,000",
      postedDate: "2024-01-15",
      description: "We're looking for a senior software engineer to join our growing team. You'll be responsible for developing scalable web applications using modern technologies.",
      requirements: ["5+ years of experience", "React/Next.js", "Node.js", "AWS"],
      benefits: ["Health Insurance", "401k", "Flexible PTO", "Remote Work"],
      companySize: "500-1000 employees",
      industry: "Technology"
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Global Finance Inc",
      location: "New York, NY",
      type: "Full-time",
      salary: "$80,000 - $100,000",
      postedDate: "2024-01-12",
      description: "Join our fintech team to build innovative financial solutions. You'll work on both frontend and backend development.",
      requirements: ["3+ years of experience", "React", "Python/Django", "PostgreSQL"],
      benefits: ["Health Insurance", "Stock Options", "Gym Membership", "Learning Budget"],
      companySize: "1000+ employees",
      industry: "Finance"
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "Creative Agency",
      location: "Austin, TX",
      type: "Contract",
      salary: "$70,000 - $85,000",
      postedDate: "2024-01-10",
      description: "Create beautiful and responsive user interfaces for our clients' web applications. Strong design sensibility required.",
      requirements: ["2+ years of experience", "React/Vue.js", "CSS/SCSS", "Figma"],
      benefits: ["Flexible Hours", "Remote Work", "Creative Freedom", "Modern Equipment"],
      companySize: "50-200 employees",
      industry: "Marketing"
    },
    {
      id: 4,
      title: "DevOps Engineer",
      company: "Cloud Systems Ltd",
      location: "Seattle, WA",
      type: "Full-time",
      salary: "$90,000 - $115,000",
      postedDate: "2024-01-08",
      description: "Help us scale our infrastructure and improve our deployment processes. Experience with containerization and CI/CD required.",
      requirements: ["4+ years of experience", "Docker/Kubernetes", "AWS/GCP", "Terraform"],
      benefits: ["Health Insurance", "Stock Options", "Unlimited PTO", "Conference Budget"],
      companySize: "200-500 employees",
      industry: "Technology"
    },
    {
      id: 5,
      title: "Product Manager",
      company: "Innovation Hub",
      location: "Boston, MA",
      type: "Full-time",
      salary: "$100,000 - $130,000",
      postedDate: "2024-01-05",
      description: "Lead product strategy and work with cross-functional teams to deliver exceptional user experiences.",
      requirements: ["3+ years PM experience", "Agile/Scrum", "Data Analysis", "User Research"],
      benefits: ["Health Insurance", "Equity", "Flexible PTO", "Professional Development"],
      companySize: "100-500 employees",
      industry: "Technology"
    },
    {
      id: 6,
      title: "UX Designer",
      company: "Design Studio Pro",
      location: "Los Angeles, CA",
      type: "Part-time",
      salary: "$60,000 - $75,000",
      postedDate: "2024-01-03",
      description: "Create intuitive and engaging user experiences for web and mobile applications. Portfolio review required.",
      requirements: ["2+ years UX experience", "Figma/Sketch", "User Testing", "Prototyping"],
      benefits: ["Flexible Schedule", "Creative Environment", "Latest Design Tools", "Portfolio Support"],
      companySize: "10-50 employees",
      industry: "Design"
    }
  ];

  const handleApply = (job: any) => {
    toast({
      title: "Application Started",
      description: `Your application for ${job.title} at ${job.company} has been started. Complete your profile to submit.`,
    });
  };

  const handleSave = (job: any) => {
    toast({
      title: "Job Saved",
      description: `${job.title} at ${job.company} has been saved to your favorites.`,
    });
  };

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = !locationFilter || job.location.toLowerCase().includes(locationFilter.toLowerCase());
    const matchesType = !jobTypeFilter || job.type === jobTypeFilter;
    return matchesSearch && matchesLocation && matchesType;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="section-container py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Job Opportunities</h1>
          <p className="text-muted-foreground">
            Discover your next career opportunity from top companies
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search jobs or companies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Location"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={jobTypeFilter} onValueChange={setJobTypeFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Job Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Types</SelectItem>
                <SelectItem value="Full-time">Full-time</SelectItem>
                <SelectItem value="Part-time">Part-time</SelectItem>
                <SelectItem value="Contract">Contract</SelectItem>
                <SelectItem value="Internship">Internship</SelectItem>
              </SelectContent>
            </Select>

            <Select value={salaryRangeFilter} onValueChange={setSalaryRangeFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Salary Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Ranges</SelectItem>
                <SelectItem value="0-50k">$0 - $50k</SelectItem>
                <SelectItem value="50k-80k">$50k - $80k</SelectItem>
                <SelectItem value="80k-120k">$80k - $120k</SelectItem>
                <SelectItem value="120k+">$120k+</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between mt-4">
            <p className="text-sm text-muted-foreground">
              {filteredJobs.length} jobs found
            </p>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              More Filters
            </Button>
          </div>
        </Card>

        {/* Jobs List */}
        <div className="space-y-6">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="p-6 hover:shadow-medium transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h2 className="text-xl font-semibold text-foreground">{job.title}</h2>
                    <Badge variant="outline">{job.type}</Badge>
                  </div>
                  
                  <div className="flex items-center space-x-4 text-muted-foreground mb-3">
                    <div className="flex items-center">
                      <Building className="w-4 h-4 mr-1" />
                      {job.company}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="w-4 h-4 mr-1" />
                      {job.salary}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {new Date(job.postedDate).toLocaleDateString()}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleSave(job)}
                  >
                    <BookmarkPlus className="w-4 h-4" />
                  </Button>
                  <Button
                    onClick={() => handleApply(job)}
                    className="btn-hero"
                  >
                    Apply Now
                  </Button>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {job.description}
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Requirements</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.requirements.map((req, index) => (
                      <Badge key={index} variant="secondary">{req}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Benefits</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.benefits.map((benefit, index) => (
                      <Badge key={index} className="bg-green-100 text-green-800">{benefit}</Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {job.companySize}
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="w-4 h-4 mr-1" />
                    {job.industry}
                  </div>
                </div>

                <Button variant="ghost" size="sm">
                  View Details
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            Load More Jobs
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Jobs;