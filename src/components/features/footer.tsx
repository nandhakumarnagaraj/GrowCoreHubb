import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "/team" },
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
      { name: "Blog", href: "/blog" },
    ],

    legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
      { name: "Data Protection", href: "/data-protection" },
    ],
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/company/growcorehub",
    },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/growcorehub" },
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://facebook.com/growcorehub",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/growcorehub",
    },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="section-container py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-bold text-lg text-primary hover:underline">

              <span className="text-2xl font-bold text-background">
                GrowCoreHub
              </span>
            </Link>

            <p className="text-background/80 leading-relaxed mb-6">
              Empowering careers through innovative job placement and
              professional certification programs.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-background/80">contact@growcorehub.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-background/80">+91 9150677889</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-background/80">Tambaram, Chennai</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div>
            <h3 className="text-background font-semibold text-lg mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-background font-semibold text-lg mb-4">
              Legal
            </h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-background/80 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5 text-background" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-background/20 pt-8 mb-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-background font-semibold text-xl mb-2">
              Stay Updated
            </h3>
            <p className="text-background/80 mb-6">
              Get the latest job opportunities and career insights delivered to
              your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-background/10 border border-background/20 text-background placeholder-background/60 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary-light transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60">
            © {currentYear} GrowCoreHub. All rights reserved. | Empowering careers
            worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}
