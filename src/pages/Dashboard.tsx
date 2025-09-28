import { StatCard } from "@/components/ui/dashboard-stats";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Briefcase, 
  Award, 
  CreditCard, 
  User, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  ArrowRight,
  Calendar,
  DollarSign,
  BookOpen,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const stats = [
    {
      title: "Job Applications",
      value: 12,
      change: 15,
      icon: <Briefcase className="w-6 h-6 text-white" />,
      description: "3 pending responses"
    },
    {
      title: "Certifications",
      value: 3,
      change: 0,
      icon: <Award className="w-6 h-6 text-white" />,
      description: "2 in progress"
    },
    {
      title: "Total Payments",
      value: "$1,240",
      change: 8,
      icon: <DollarSign className="w-6 h-6 text-white" />,
      description: "Last 30 days"
    },
    {
      title: "Profile Views",
      value: 87,
      change: 23,
      icon: <Users className="w-6 h-6 text-white" />,
      description: "This month"
    }
  ];

  const recentApplications = [
    {
      id: 1,
      company: "TechCorp Solutions",
      position: "Senior Software Engineer",
      status: "interview",
      appliedDate: "2024-01-15",
      salary: "$95,000 - $120,000"
    },
    {
      id: 2,
      company: "Global Finance Inc",
      position: "Full Stack Developer",
      status: "pending",
      appliedDate: "2024-01-12",
      salary: "$80,000 - $100,000"
    },
    {
      id: 3,
      company: "Creative Agency",
      position: "Frontend Developer",
      status: "rejected",
      appliedDate: "2024-01-10",
      salary: "$70,000 - $85,000"
    }
  ];

  const activeCertifications = [
    {
      id: 1,
      name: "React Advanced Certification",
      progress: 75,
      dueDate: "2024-02-15",
      provider: "Tech Academy"
    },
    {
      id: 2,
      name: "AWS Cloud Practitioner",
      progress: 40,
      dueDate: "2024-03-01",
      provider: "Amazon Web Services"
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      pending: { color: "bg-yellow-100 text-yellow-800", label: "Pending" },
      interview: { color: "bg-blue-100 text-blue-800", label: "Interview" },
      rejected: { color: "bg-red-100 text-red-800", label: "Rejected" },
      accepted: { color: "bg-green-100 text-green-800", label: "Accepted" }
    };
    
    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending;
    return <Badge className={config.color}>{config.label}</Badge>;
  };

  const quickActions = [
    {
      title: "Browse Jobs",
      description: "Find your next opportunity",
      icon: <Briefcase className="w-6 h-6" />,
      href: "/jobs",
      color: "bg-blue-500"
    },
    {
      title: "View Certifications",
      description: "Advance your skills",
      icon: <BookOpen className="w-6 h-6" />,
      href: "/certifications",
      color: "bg-green-500"
    },
    {
      title: "Payment History",
      description: "Manage your invoices",
      icon: <CreditCard className="w-6 h-6" />,
      href: "/payments",
      color: "bg-purple-500"
    },
    {
      title: "Edit Profile",
      description: "Update your information",
      icon: <User className="w-6 h-6" />,
      href: "/profile",
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="section-container py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, John! 👋
          </h1>
          <p className="text-muted-foreground">
            Here's what's happening with your career journey today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Quick Actions */}
        <Card className="p-6 mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">Quick Actions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <Link key={index} to={action.href}>
                <div className="group p-4 border border-border rounded-lg hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                  <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-3 text-white group-hover:scale-110 transition-transform`}>
                    {action.icon}
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{action.title}</h3>
                  <p className="text-sm text-muted-foreground">{action.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent Applications */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-foreground">Recent Applications</h2>
              <Link to="/jobs/applications">
                <Button variant="ghost" size="sm" className="group">
                  View All
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            
            <div className="space-y-4">
              {recentApplications.map((application) => (
                <div key={application.id} className="p-4 border border-border rounded-lg hover:shadow-soft transition-all duration-200">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-foreground">{application.position}</h3>
                      <p className="text-muted-foreground">{application.company}</p>
                    </div>
                    {getStatusBadge(application.status)}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(application.appliedDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="w-4 h-4 mr-1" />
                      {application.salary}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Active Certifications */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-foreground">Active Certifications</h2>
              <Link to="/certifications">
                <Button variant="ghost" size="sm" className="group">
                  View All
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            
            <div className="space-y-4">
              {activeCertifications.map((cert) => (
                <div key={cert.id} className="p-4 border border-border rounded-lg hover:shadow-soft transition-all duration-200">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-foreground">{cert.name}</h3>
                      <p className="text-sm text-muted-foreground">{cert.provider}</p>
                    </div>
                    <Badge className="bg-primary/10 text-primary">
                      {cert.progress}%
                    </Badge>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="mb-2">
                    <div className="w-full bg-secondary rounded-full h-2">
                      <div 
                        className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${cert.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    Due: {new Date(cert.dueDate).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="p-6 mt-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[
              {
                icon: <CheckCircle className="w-5 h-5 text-green-500" />,
                title: "Application submitted to TechCorp Solutions",
                time: "2 hours ago"
              },
              {
                icon: <BookOpen className="w-5 h-5 text-blue-500" />,
                title: "Completed React Advanced Module 4",
                time: "1 day ago"
              },
              {
                icon: <CreditCard className="w-5 h-5 text-purple-500" />,
                title: "Payment processed for AWS Certification",
                time: "3 days ago"
              },
              {
                icon: <AlertCircle className="w-5 h-5 text-yellow-500" />,
                title: "Profile update reminder",
                time: "1 week ago"
              }
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-accent transition-colors">
                {activity.icon}
                <div className="flex-1">
                  <p className="text-foreground">{activity.title}</p>
                  <p className="text-sm text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;