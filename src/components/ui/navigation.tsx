import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./button";
import { Menu, X, User, LogOut, Settings } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";

interface NavigationProps {
  isAuthenticated?: boolean;
  onLogin?: () => void;
  onSignup?: () => void;
  onLogout?: () => void;
}

export function Navigation({
  isAuthenticated,
  onLogin,
  onSignup,
  onLogout,
}: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const authenticatedNavItems = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Jobs", href: "/jobs" },
    { name: "Certifications", href: "/certifications" },
    { name: "Payments", href: "/payments" },
  ];

  const currentNavItems = isAuthenticated ? authenticatedNavItems : navItems;

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-soft">
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-55 h-20 bg-gradient-primary rounded-lg flex items-center justify-center">
              <img
                src="/public/Final Logo.png"
                alt="GrowCore Logo"
                className="h-20 w-35"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {currentNavItems.map((item) => {
              const isAnchor = item.href.startsWith("#");
              if (isAnchor) {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </a>
                );
              } else {
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-foreground hover:text-primary transition-colors duration-200 font-medium ${
                      location.pathname === item.href ? "text-primary" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              }
            })}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center space-x-2"
                  >
                    <User className="w-4 h-4" />
                    <span>Account</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      to="/settings"
                      className="flex items-center space-x-2"
                    >
                      <Settings className="w-4 h-4" />
                      <span>Settings</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={onLogout}
                    className="flex items-center space-x-2 text-destructive focus:text-destructive"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button variant="ghost" onClick={onLogin}>
                  Login
                </Button>
                <Button className="btn-hero" onClick={onSignup}>
                  Sign Up
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border bg-white">
            <div className="flex flex-col space-y-4">
              {currentNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border flex flex-col space-y-2">
                {isAuthenticated ? (
                  <>
                    <Link
                      to="/profile"
                      className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors px-2 py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <User className="w-4 h-4" />
                      <span>Profile</span>
                    </Link>
                    <button
                      onClick={() => {
                        onLogout?.();
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center space-x-2 text-destructive hover:text-destructive/80 transition-colors px-2 py-1 text-left"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Logout</span>
                    </button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="ghost"
                      onClick={onLogin}
                      className="justify-start"
                    >
                      Login
                    </Button>
                    <Button
                      className="btn-hero justify-start"
                      onClick={onSignup}
                    >
                      Sign Up
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
