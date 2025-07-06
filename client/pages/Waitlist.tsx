import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Gavel,
  Scale,
  Shield,
  CheckCircle,
  ArrowLeft,
  Mail,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-primary-purple-light/20 flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full bg-white/80 backdrop-blur-sm border-primary-purple/20 shadow-2xl">
          <CardContent className="p-12 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-text-heading mb-6">
              Welcome to the future of legal AI
            </h1>
            <p className="text-lg text-text-body mb-8 leading-relaxed">
              You're now on the waitlist! We'll notify you as soon as LegalAI is
              available. Get ready to transform your legal practice.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3 text-text-body">
                <Shield className="h-5 w-5 text-primary-purple" />
                <span>Your data is secure and encrypted</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-text-body">
                <Mail className="h-5 w-5 text-primary-purple" />
                <span>Expect updates within 2-3 weeks</span>
              </div>
            </div>
            <Link to="/" className="inline-block mt-8">
              <Button variant="outline" className="rounded-[14px]">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-primary-purple-light/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary-purple/10 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary-purple-light/40 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div
        className="absolute top-1/2 left-1/3 w-32 h-32 bg-primary-purple/5 rounded-full blur-2xl opacity-20 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Header */}
      <header className="relative z-10 p-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-text-heading hover:text-primary-purple transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span className="font-medium">Back to home</span>
        </Link>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center px-4 py-12">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-12">
            {/* Logo and Branding */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <Gavel className="h-10 w-10 text-primary-purple" />
              <h1 className="text-2xl font-bold text-text-heading">LegalAI</h1>
            </div>

            <Badge className="mb-6 bg-primary-purple-light text-primary-purple border-primary-purple/20 px-4 py-2">
              Limited Beta • Legal Professionals Only
            </Badge>

            <h2 className="text-4xl md:text-6xl font-bold text-text-heading mb-6 leading-tight">
              Join the legal AI
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-purple to-primary-purple-dark">
                revolution
              </span>
            </h2>

            <p className="text-xl text-text-body max-w-2xl mx-auto mb-8 leading-relaxed">
              Be among the first legal professionals to experience AI-powered
              research, document generation, and form automation.
            </p>
          </div>

          {/* Simple Waitlist Form */}
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-text-heading mb-3">
                Join Waitlist
              </h3>
              <p className="text-text-body">
                Get early access to AI-powered legal tools
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  placeholder="your-email@lawfirm.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 text-base rounded-[14px] border-2 border-slate-200 focus:border-primary-purple bg-white"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={!email || isLoading}
                className="w-full h-12 text-base rounded-[14px] bg-primary-purple hover:bg-primary-purple-dark shadow-lg transition-all duration-300"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Joining...
                  </div>
                ) : (
                  "Join Waitlist"
                )}
              </Button>
            </form>
          </div>

          {/* Legal Partners Marquee */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <p className="text-sm text-text-body">Trusted by lawyers at</p>
            </div>
            <div className="relative overflow-hidden py-4">
              <div className="flex space-x-8 animate-marquee whitespace-nowrap">
                {/* Law Firm Logos */}
                <div className="flex items-center gap-3 px-6 py-3 bg-white/80 rounded-xl shadow-sm border border-slate-200 min-w-fit">
                  <Scale className="h-6 w-6 text-primary-purple" />
                  <span className="text-sm font-semibold text-slate-700">
                    Kirkland & Ellis
                  </span>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-white/80 rounded-xl shadow-sm border border-slate-200 min-w-fit">
                  <Gavel className="h-6 w-6 text-primary-purple" />
                  <span className="text-sm font-semibold text-slate-700">
                    Latham & Watkins
                  </span>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-white/80 rounded-xl shadow-sm border border-slate-200 min-w-fit">
                  <Shield className="h-6 w-6 text-primary-purple" />
                  <span className="text-sm font-semibold text-slate-700">
                    Baker McKenzie
                  </span>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-white/80 rounded-xl shadow-sm border border-slate-200 min-w-fit">
                  <Scale className="h-6 w-6 text-primary-purple" />
                  <span className="text-sm font-semibold text-slate-700">
                    DLA Piper
                  </span>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-white/80 rounded-xl shadow-sm border border-slate-200 min-w-fit">
                  <Gavel className="h-6 w-6 text-primary-purple" />
                  <span className="text-sm font-semibold text-slate-700">
                    Skadden Arps
                  </span>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-white/80 rounded-xl shadow-sm border border-slate-200 min-w-fit">
                  <Shield className="h-6 w-6 text-primary-purple" />
                  <span className="text-sm font-semibold text-slate-700">
                    White & Case
                  </span>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-white/80 rounded-xl shadow-sm border border-slate-200 min-w-fit">
                  <Scale className="h-6 w-6 text-primary-purple" />
                  <span className="text-sm font-semibold text-slate-700">
                    Sullivan & Cromwell
                  </span>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-white/80 rounded-xl shadow-sm border border-slate-200 min-w-fit">
                  <Gavel className="h-6 w-6 text-primary-purple" />
                  <span className="text-sm font-semibold text-slate-700">
                    Cravath Swaine
                  </span>
                </div>
                {/* Duplicate for seamless loop */}
                <div className="flex items-center gap-3 px-6 py-3 bg-white/80 rounded-xl shadow-sm border border-slate-200 min-w-fit">
                  <Scale className="h-6 w-6 text-primary-purple" />
                  <span className="text-sm font-semibold text-slate-700">
                    Kirkland & Ellis
                  </span>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-white/80 rounded-xl shadow-sm border border-slate-200 min-w-fit">
                  <Gavel className="h-6 w-6 text-primary-purple" />
                  <span className="text-sm font-semibold text-slate-700">
                    Latham & Watkins
                  </span>
                </div>
                <div className="flex items-center gap-3 px-6 py-3 bg-white/80 rounded-xl shadow-sm border border-slate-200 min-w-fit">
                  <Shield className="h-6 w-6 text-primary-purple" />
                  <span className="text-sm font-semibold text-slate-700">
                    Baker McKenzie
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <p className="text-sm text-text-body mb-4">
            By joining the waitlist, you agree to our Terms of Service and
            Privacy Policy. We'll never share your information with third
            parties.
          </p>
          <div className="flex items-center justify-center gap-6 text-xs text-text-body">
            <a href="#" className="hover:text-text-heading transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-text-heading transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-text-heading transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
