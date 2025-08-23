import { Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo/Name */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Mayank Shukla
            </h3>
            <p className="text-muted-foreground text-sm">
              Software Engineer & Full Stack Developer
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-muted-foreground text-sm flex items-center justify-center gap-1">
              © {currentYear} Made with <Heart className="h-4 w-4 text-red-500" /> by Mayank Shukla
            </p>
          </div>

          {/* Back to Top */}
          <div className="flex justify-center md:justify-end">
            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="group hover:shadow-glow transition-all duration-300"
            >
              <ArrowUp className="h-4 w-4 mr-2 transition-transform group-hover:-translate-y-1" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;