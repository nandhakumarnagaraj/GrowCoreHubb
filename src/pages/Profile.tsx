import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase,
  Calendar,
  Award,
  Settings,
  Camera,
  Download,
  Upload,
  Eye,
  EyeOff,
  Bell,
  Shield,
  Globe,
  Linkedin,
  Github,
  Twitter,
  Link as LinkIcon,
  Edit,
  Save,
  X
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    title: "Senior Software Engineer",
    company: "TechCorp Solutions",
    bio: "Passionate software engineer with 5+ years of experience in full-stack development. Specialized in React, Node.js, and cloud technologies.",
    website: "https://johndoe.dev",
    linkedin: "https://linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
    twitter: "https://twitter.com/johndoe"
  });

  const [settings, setSettings] = useState({
    emailNotifications: true,
    jobAlerts: true,
    marketingEmails: false,
    profileVisible: true,
    showEmail: false,
    showPhone: false,
    twoFactorAuth: false
  });

  const { toast } = useToast();

  const skills = [
    "JavaScript", "React", "Node.js", "TypeScript", "Python", "AWS", 
    "Docker", "Kubernetes", "PostgreSQL", "MongoDB", "GraphQL", "REST APIs"
  ];

  const experience = [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      description: "Lead development of scalable web applications using React and Node.js. Mentored junior developers and improved system performance by 40%."
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description: "Developed end-to-end features for a fintech platform. Worked with React, Express.js, and PostgreSQL to build customer-facing applications."
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "Creative Agency Inc",
      period: "2019 - 2020",
      description: "Created responsive web applications and landing pages for various clients. Collaborated with designers to implement pixel-perfect UIs."
    }
  ];

  const education = [
    {
      id: 1,
      degree: "Bachelor of Science in Computer Science",
      school: "University of California, Berkeley",
      period: "2015 - 2019",
      gpa: "3.8/4.0"
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-123456789"
    },
    {
      id: 2,
      name: "React Professional Certification",
      issuer: "Meta",
      date: "2022",
      credentialId: "META-987654321"
    },
    {
      id: 3,
      name: "JavaScript Fundamentals",
      issuer: "Code Academy",
      date: "2023",
      credentialId: "CA-456789123"
    }
  ];

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your profile information has been successfully updated.",
    });
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset form data here if needed
  };

  const handleUploadResume = () => {
    toast({
      title: "Resume Upload",
      description: "Resume upload functionality would be implemented here.",
    });
  };

  const handleSettingChange = (key: string, value: boolean) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
    toast({
      title: "Settings Updated",
      description: `${key} setting has been ${value ? 'enabled' : 'disabled'}.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="section-container py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Profile</h1>
          <p className="text-muted-foreground">
            Manage your personal information and account settings
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="p-6 text-center">
              <div className="relative inline-block mb-4">
                <Avatar className="w-24 h-24">
                  <AvatarImage src="/api/placeholder/100/100" alt="Profile" />
                  <AvatarFallback className="text-2xl bg-gradient-primary text-white">
                    {formData.firstName[0]}{formData.lastName[0]}
                  </AvatarFallback>
                </Avatar>
                <Button
                  size="sm"
                  className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0"
                >
                  <Camera className="w-4 h-4" />
                </Button>
              </div>
              
              <h2 className="text-xl font-semibold text-foreground mb-1">
                {formData.firstName} {formData.lastName}
              </h2>
              <p className="text-muted-foreground mb-2">{formData.title}</p>
              <p className="text-sm text-muted-foreground mb-4">{formData.location}</p>

              <div className="flex items-center justify-center space-x-2 mb-6">
                <Badge className="bg-green-100 text-green-800">
                  <Eye className="w-3 h-3 mr-1" />
                  Profile Visible
                </Badge>
              </div>

              <div className="space-y-2">
                <Button variant="outline" className="w-full" onClick={handleUploadResume}>
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Resume
                </Button>
                <Button variant="outline" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </Card>

            {/* Quick Stats */}
            <Card className="p-6 mt-6">
              <h3 className="font-semibold text-foreground mb-4">Profile Stats</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Profile Views</span>
                  <span className="font-semibold text-foreground">124</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Job Applications</span>
                  <span className="font-semibold text-foreground">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Certifications</span>
                  <span className="font-semibold text-foreground">3</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="personal">Personal</TabsTrigger>
                <TabsTrigger value="professional">Professional</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="preferences">Preferences</TabsTrigger>
              </TabsList>

              <TabsContent value="personal" className="mt-6">
                <Card className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-foreground">Personal Information</h3>
                    {!isEditing ? (
                      <Button onClick={() => setIsEditing(true)}>
                        <Edit className="w-4 h-4 mr-2" />
                        Edit
                      </Button>
                    ) : (
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" onClick={handleCancel}>
                          <X className="w-4 h-4 mr-2" />
                          Cancel
                        </Button>
                        <Button onClick={handleSave}>
                          <Save className="w-4 h-4 mr-2" />
                          Save
                        </Button>
                      </div>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        disabled={!isEditing}
                        onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        disabled={!isEditing}
                        onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        disabled={!isEditing}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        disabled={!isEditing}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        value={formData.location}
                        disabled={!isEditing}
                        onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        value={formData.bio}
                        disabled={!isEditing}
                        onChange={(e) => setFormData(prev => ({ ...prev, bio: e.target.value }))}
                        rows={4}
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-semibold text-foreground mb-4">Social Links</h4>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Globe className="w-5 h-5 text-muted-foreground" />
                        <Input
                          placeholder="Website URL"
                          value={formData.website}
                          disabled={!isEditing}
                          onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
                        />
                      </div>
                      <div className="flex items-center space-x-3">
                        <Linkedin className="w-5 h-5 text-blue-600" />
                        <Input
                          placeholder="LinkedIn URL"
                          value={formData.linkedin}
                          disabled={!isEditing}
                          onChange={(e) => setFormData(prev => ({ ...prev, linkedin: e.target.value }))}
                        />
                      </div>
                      <div className="flex items-center space-x-3">
                        <Github className="w-5 h-5 text-foreground" />
                        <Input
                          placeholder="GitHub URL"
                          value={formData.github}
                          disabled={!isEditing}
                          onChange={(e) => setFormData(prev => ({ ...prev, github: e.target.value }))}
                        />
                      </div>
                      <div className="flex items-center space-x-3">
                        <Twitter className="w-5 h-5 text-blue-400" />
                        <Input
                          placeholder="Twitter URL"
                          value={formData.twitter}
                          disabled={!isEditing}
                          onChange={(e) => setFormData(prev => ({ ...prev, twitter: e.target.value }))}
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="professional" className="mt-6">
                <div className="space-y-6">
                  {/* Skills */}
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="mt-4">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit Skills
                    </Button>
                  </Card>

                  {/* Experience */}
                  <Card className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-foreground">Work Experience</h3>
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4 mr-2" />
                        Add Experience
                      </Button>
                    </div>
                    <div className="space-y-6">
                      {experience.map((exp) => (
                        <div key={exp.id} className="border-l-2 border-primary pl-4">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-semibold text-foreground">{exp.title}</h4>
                            <Button variant="ghost" size="sm">
                              <Edit className="w-4 h-4" />
                            </Button>
                          </div>
                          <p className="text-primary font-medium mb-1">{exp.company}</p>
                          <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
                          <p className="text-muted-foreground">{exp.description}</p>
                        </div>
                      ))}
                    </div>
                  </Card>

                  {/* Education */}
                  <Card className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-foreground">Education</h3>
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4 mr-2" />
                        Add Education
                      </Button>
                    </div>
                    <div className="space-y-4">
                      {education.map((edu) => (
                        <div key={edu.id} className="border-l-2 border-primary pl-4">
                          <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                          <p className="text-primary font-medium">{edu.school}</p>
                          <p className="text-sm text-muted-foreground">{edu.period}</p>
                          <p className="text-sm text-muted-foreground">GPA: {edu.gpa}</p>
                        </div>
                      ))}
                    </div>
                  </Card>

                  {/* Certifications */}
                  <Card className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-foreground">Certifications</h3>
                      <Button variant="outline" size="sm">
                        <Award className="w-4 h-4 mr-2" />
                        View All
                      </Button>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      {certifications.map((cert) => (
                        <div key={cert.id} className="p-4 border border-border rounded-lg">
                          <div className="flex items-start justify-between mb-2">
                            <Award className="w-5 h-5 text-primary mt-1" />
                            <Badge variant="outline" className="text-xs">
                              {cert.date}
                            </Badge>
                          </div>
                          <h4 className="font-semibold text-foreground mb-1">{cert.name}</h4>
                          <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
                          <p className="text-xs text-muted-foreground">
                            ID: {cert.credentialId}
                          </p>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="security" className="mt-6">
                <div className="space-y-6">
                  {/* Password */}
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Password & Security</h3>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="currentPassword">Current Password</Label>
                        <Input
                          id="currentPassword"
                          type="password"
                          placeholder="Enter current password"
                        />
                      </div>
                      <div>
                        <Label htmlFor="newPassword">New Password</Label>
                        <Input
                          id="newPassword"
                          type="password"
                          placeholder="Enter new password"
                        />
                      </div>
                      <div>
                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                        <Input
                          id="confirmPassword"
                          type="password"
                          placeholder="Confirm new password"
                        />
                      </div>
                      <Button>Update Password</Button>
                    </div>
                  </Card>

                  {/* Two-Factor Authentication */}
                  <Card className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">Two-Factor Authentication</h3>
                        <p className="text-sm text-muted-foreground">
                          Add an extra layer of security to your account
                        </p>
                      </div>
                      <Switch
                        checked={settings.twoFactorAuth}
                        onCheckedChange={(checked) => handleSettingChange('twoFactorAuth', checked)}
                      />
                    </div>
                    {settings.twoFactorAuth && (
                      <div className="space-y-4">
                        <p className="text-sm text-muted-foreground">
                          Two-factor authentication is enabled for your account.
                        </p>
                        <Button variant="outline">View Recovery Codes</Button>
                      </div>
                    )}
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="preferences" className="mt-6">
                <div className="space-y-6">
                  {/* Notifications */}
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Notification Preferences</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="emailNotifications">Email Notifications</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive email notifications about account activity
                          </p>
                        </div>
                        <Switch
                          id="emailNotifications"
                          checked={settings.emailNotifications}
                          onCheckedChange={(checked) => handleSettingChange('emailNotifications', checked)}
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="jobAlerts">Job Alerts</Label>
                          <p className="text-sm text-muted-foreground">
                            Get notified about new job opportunities
                          </p>
                        </div>
                        <Switch
                          id="jobAlerts"
                          checked={settings.jobAlerts}
                          onCheckedChange={(checked) => handleSettingChange('jobAlerts', checked)}
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="marketingEmails">Marketing Emails</Label>
                          <p className="text-sm text-muted-foreground">
                            Receive updates about new features and promotions
                          </p>
                        </div>
                        <Switch
                          id="marketingEmails"
                          checked={settings.marketingEmails}
                          onCheckedChange={(checked) => handleSettingChange('marketingEmails', checked)}
                        />
                      </div>
                    </div>
                  </Card>

                  {/* Privacy */}
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Privacy Settings</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="profileVisible">Profile Visibility</Label>
                          <p className="text-sm text-muted-foreground">
                            Make your profile visible to employers
                          </p>
                        </div>
                        <Switch
                          id="profileVisible"
                          checked={settings.profileVisible}
                          onCheckedChange={(checked) => handleSettingChange('profileVisible', checked)}
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="showEmail">Show Email Address</Label>
                          <p className="text-sm text-muted-foreground">
                            Display your email address on your public profile
                          </p>
                        </div>
                        <Switch
                          id="showEmail"
                          checked={settings.showEmail}
                          onCheckedChange={(checked) => handleSettingChange('showEmail', checked)}
                        />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="showPhone">Show Phone Number</Label>
                          <p className="text-sm text-muted-foreground">
                            Display your phone number on your public profile
                          </p>
                        </div>
                        <Switch
                          id="showPhone"
                          checked={settings.showPhone}
                          onCheckedChange={(checked) => handleSettingChange('showPhone', checked)}
                        />
                      </div>
                    </div>
                  </Card>

                  {/* Account Actions */}
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">Account Actions</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label>Download Account Data</Label>
                          <p className="text-sm text-muted-foreground">
                            Download a copy of all your account data
                          </p>
                        </div>
                        <Button variant="outline">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label>Delete Account</Label>
                          <p className="text-sm text-muted-foreground">
                            Permanently delete your account and all data
                          </p>
                        </div>
                        <Button variant="outline" className="text-red-600 hover:text-red-700">
                          Delete Account
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;