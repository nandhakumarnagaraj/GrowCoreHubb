import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  BookOpen, 
  Clock, 
  Award, 
  Users,
  Star,
  Play,
  CheckCircle,
  Calendar,
  Trophy,
  Target,
  BookmarkPlus
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import certificationsImage from "@/assets/certifications-image.jpg";

const Certifications = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const availableCertifications = [
    {
      id: 1,
      title: "React Advanced Certification",
      provider: "Tech Academy",
      duration: "40 hours",
      price: 299,
      rating: 4.8,
      students: 12450,
      level: "Advanced",
      category: "Frontend Development",
      description: "Master advanced React concepts including hooks, context, performance optimization, and testing strategies.",
      modules: ["Advanced Hooks", "State Management", "Performance", "Testing", "Best Practices"],
      skills: ["React", "JavaScript", "Redux", "Testing", "Performance"],
      certificate: true,
      featured: true
    },
    {
      id: 2,
      title: "AWS Cloud Practitioner",
      provider: "Amazon Web Services",
      duration: "60 hours",
      price: 149,
      rating: 4.9,
      students: 89230,
      level: "Beginner",
      category: "Cloud Computing",
      description: "Learn fundamental AWS cloud concepts and prepare for the AWS Certified Cloud Practitioner exam.",
      modules: ["Cloud Concepts", "AWS Services", "Security", "Pricing", "Support"],
      skills: ["AWS", "Cloud Computing", "Security", "Architecture"],
      certificate: true,
      featured: true
    },
    {
      id: 3,
      title: "Full Stack JavaScript Developer",
      provider: "Code Institute",
      duration: "120 hours",
      price: 599,
      rating: 4.7,
      students: 5670,
      level: "Intermediate",
      category: "Full Stack Development",
      description: "Complete full stack development course covering both frontend and backend JavaScript technologies.",
      modules: ["HTML/CSS", "JavaScript", "Node.js", "MongoDB", "React", "Express"],
      skills: ["JavaScript", "Node.js", "React", "MongoDB", "Express"],
      certificate: true,
      featured: false
    },
    {
      id: 4,
      title: "Digital Marketing Professional",
      provider: "Marketing Pro",
      duration: "30 hours",
      price: 199,
      rating: 4.6,
      students: 8900,
      level: "Beginner",
      category: "Marketing",
      description: "Learn digital marketing fundamentals including SEO, social media, and analytics.",
      modules: ["SEO Basics", "Social Media", "Google Analytics", "Email Marketing", "PPC"],
      skills: ["SEO", "Social Media", "Analytics", "Email Marketing"],
      certificate: true,
      featured: false
    },
    {
      id: 5,
      title: "Data Science with Python",
      provider: "Data Academy",
      duration: "80 hours",
      price: 449,
      rating: 4.8,
      students: 15600,
      level: "Intermediate",
      category: "Data Science",
      description: "Comprehensive data science course covering Python, statistics, machine learning, and data visualization.",
      modules: ["Python Basics", "Statistics", "Pandas", "Machine Learning", "Visualization"],
      skills: ["Python", "Pandas", "Machine Learning", "Statistics"],
      certificate: true,
      featured: true
    },
    {
      id: 6,
      title: "UI/UX Design Fundamentals",
      provider: "Design School",
      duration: "50 hours",
      price: 349,
      rating: 4.7,
      students: 7800,
      level: "Beginner",
      category: "Design",
      description: "Learn the fundamentals of user interface and user experience design with hands-on projects.",
      modules: ["Design Principles", "Figma", "User Research", "Prototyping", "Testing"],
      skills: ["UI Design", "UX Design", "Figma", "Prototyping"],
      certificate: true,
      featured: false
    }
  ];

  const myCertifications = [
    {
      id: 1,
      title: "React Advanced Certification",
      provider: "Tech Academy",
      progress: 75,
      status: "In Progress",
      enrolledDate: "2024-01-10",
      dueDate: "2024-02-15",
      completedModules: 6,
      totalModules: 8,
      certificateUrl: null
    },
    {
      id: 2,
      title: "AWS Cloud Practitioner",
      provider: "Amazon Web Services",
      progress: 40,
      status: "In Progress",
      enrolledDate: "2024-01-05",
      dueDate: "2024-03-01",
      completedModules: 3,
      totalModules: 8,
      certificateUrl: null
    },
    {
      id: 3,
      title: "JavaScript Fundamentals",
      provider: "Code Academy",
      progress: 100,
      status: "Completed",
      enrolledDate: "2023-11-15",
      dueDate: "2023-12-30",
      completedModules: 10,
      totalModules: 10,
      certificateUrl: "/certificates/javascript-fundamentals.pdf"
    }
  ];

  const handleEnroll = (certification: any) => {
    toast({
      title: "Enrollment Started",
      description: `You're about to enroll in ${certification.title}. Payment processing would happen here.`,
    });
  };

  const handleContinueLearning = (certification: any) => {
    toast({
      title: "Resuming Course",
      description: `Continuing ${certification.title}. Module ${certification.completedModules + 1} is loading.`,
    });
  };

  const filteredCertifications = availableCertifications.filter(cert =>
    cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cert.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cert.provider.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      "In Progress": { color: "bg-blue-100 text-blue-800", icon: <Play className="w-3 h-3 mr-1" /> },
      "Completed": { color: "bg-green-100 text-green-800", icon: <CheckCircle className="w-3 h-3 mr-1" /> },
      "Not Started": { color: "bg-gray-100 text-gray-800", icon: <BookOpen className="w-3 h-3 mr-1" /> }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig["Not Started"];
    return (
      <Badge className={config.color}>
        {config.icon}
        {status}
      </Badge>
    );
  };

  const getLevelColor = (level: string) => {
    const colors = {
      "Beginner": "bg-green-100 text-green-800",
      "Intermediate": "bg-yellow-100 text-yellow-800",
      "Advanced": "bg-red-100 text-red-800"
    };
    return colors[level as keyof typeof colors] || colors.Beginner;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="section-container py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Professional Certifications</h1>
          <p className="text-muted-foreground">
            Advance your career with industry-recognized certifications
          </p>
        </div>

        <Tabs defaultValue="browse" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:w-96">
            <TabsTrigger value="browse">Browse Certifications</TabsTrigger>
            <TabsTrigger value="my-learning">My Learning</TabsTrigger>
          </TabsList>

          <TabsContent value="browse" className="mt-8">
            {/* Search */}
            <Card className="p-6 mb-8">
              <div className="relative max-w-lg">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search certifications..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </Card>

            {/* Featured Hero Section */}
            <Card className="p-8 mb-8 relative overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <Badge className="mb-4 bg-primary/10 text-primary">
                    <Star className="w-3 h-3 mr-1" />
                    Featured Programs
                  </Badge>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    Boost Your Career with Professional Certifications
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6">
                    Get industry-recognized certifications from top institutions and experts. 
                    Learn at your own pace with comprehensive programs designed for career advancement.
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">50+</div>
                      <div className="text-sm text-muted-foreground">Programs</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">95%</div>
                      <div className="text-sm text-muted-foreground">Completion Rate</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary">24/7</div>
                      <div className="text-sm text-muted-foreground">Support</div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={certificationsImage}
                    alt="Professional certifications"
                    className="rounded-2xl shadow-large w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </Card>

            {/* Certifications Grid */}
            <div className="grid lg:grid-cols-2 gap-6">
              {filteredCertifications.map((cert) => (
                <Card key={cert.id} className="p-6 hover:shadow-medium transition-all duration-300">
                  {cert.featured && (
                    <Badge className="mb-4 bg-primary/10 text-primary">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                  
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{cert.title}</h3>
                      <p className="text-muted-foreground mb-3">{cert.provider}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">${cert.price}</div>
                      <Badge className={getLevelColor(cert.level)}>{cert.level}</Badge>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {cert.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      {cert.students.toLocaleString()} students
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-2 text-yellow-500" />
                      {cert.rating} rating
                    </div>
                    <div className="flex items-center">
                      <Award className="w-4 h-4 mr-2" />
                      Certificate included
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">Skills you'll learn</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <Button
                      variant="outline"
                      size="sm"
                    >
                      <BookmarkPlus className="w-4 h-4 mr-2" />
                      Save
                    </Button>
                    <Button
                      onClick={() => handleEnroll(cert)}
                      className="btn-hero"
                    >
                      Enroll Now
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="my-learning" className="mt-8">
            <div className="grid gap-6">
              {myCertifications.map((cert) => (
                <Card key={cert.id} className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold text-foreground">{cert.title}</h3>
                        {getStatusBadge(cert.status)}
                      </div>
                      <p className="text-muted-foreground">{cert.provider}</p>
                    </div>
                    
                    {cert.status === "Completed" ? (
                      <Button variant="outline">
                        <Trophy className="w-4 h-4 mr-2" />
                        View Certificate
                      </Button>
                    ) : (
                      <Button
                        className="btn-hero"
                        onClick={() => handleContinueLearning(cert)}
                      >
                        Continue Learning
                      </Button>
                    )}
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-foreground">
                        Progress: {cert.completedModules}/{cert.totalModules} modules
                      </span>
                      <span className="text-sm font-medium text-primary">
                        {cert.progress}%
                      </span>
                    </div>
                    <Progress value={cert.progress} className="h-2" />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      Enrolled: {new Date(cert.enrolledDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Target className="w-4 h-4 mr-2" />
                      Due: {new Date(cert.dueDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-2" />
                      {cert.status}
                    </div>
                  </div>
                </Card>
              ))}

              {myCertifications.length === 0 && (
                <Card className="p-12 text-center">
                  <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    No Certifications Yet
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Start your learning journey by enrolling in a certification program.
                  </p>
                  <Button className="btn-hero">
                    Browse Certifications
                  </Button>
                </Card>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Certifications;