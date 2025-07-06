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
              <div className="relative">
                <Gavel className="h-12 w-12 text-primary-purple" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary-purple-light rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary-purple rounded-full animate-pulse"></div>
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-text-heading">
                  LegalAI
                </h1>
                <p className="text-sm text-text-body">Early Access Program</p>
              </div>
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

          {/* Waitlist Form */}
          <Card className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm border-primary-purple/20 shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <Scale className="h-16 w-16 text-primary-purple mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-text-heading mb-3">
                  Reserve your spot
                </h3>
                <p className="text-text-body">
                  Join 4,000+ legal professionals already on the waitlist
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-text-heading mb-3"
                  >
                    Professional Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-text-body" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="partner@lawfirm.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-12 h-14 text-lg rounded-[14px] border-2 border-primary-purple/20 focus:border-primary-purple bg-white/50 backdrop-blur-sm"
                      required
                    />
                  </div>
                  <p className="text-sm text-text-body mt-2">
                    We only accept applications from verified legal
                    professionals
                  </p>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={!email || isLoading}
                  className="w-full h-14 text-lg rounded-[14px] bg-primary-purple hover:bg-primary-purple-dark shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Joining waitlist...
                    </div>
                  ) : (
                    "Join Exclusive Waitlist"
                  )}
                </Button>

                <div className="grid md:grid-cols-3 gap-4 pt-6 border-t border-primary-purple/10">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-primary-purple/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Shield className="h-5 w-5 text-primary-purple" />
                    </div>
                    <p className="text-sm font-medium text-text-heading">
                      Enterprise Security
                    </p>
                    <p className="text-xs text-text-body">
                      SOC 2 & HIPAA compliant
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-primary-purple/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Scale className="h-5 w-5 text-primary-purple" />
                    </div>
                    <p className="text-sm font-medium text-text-heading">
                      Legal-First Design
                    </p>
                    <p className="text-xs text-text-body">
                      Built by legal experts
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-primary-purple/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Gavel className="h-5 w-5 text-primary-purple" />
                    </div>
                    <p className="text-sm font-medium text-text-heading">
                      Exclusive Access
                    </p>
                    <p className="text-xs text-text-body">
                      Beta features first
                    </p>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Trust Indicators */}
          <div className="text-center mt-12">
            <p className="text-sm text-text-body mb-6">
              Trusted by legal professionals at
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              <div className="text-text-body font-semibold">
                BigLaw Partners
              </div>
              <div className="text-text-body font-semibold">
                Solo Practitioners
              </div>
              <div className="text-text-body font-semibold">
                Legal Tech Leaders
              </div>
              <div className="text-text-body font-semibold">
                Corporate Counsel
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
