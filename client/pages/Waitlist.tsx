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

          {/* Legal Document Style Form */}
          <div className="max-w-2xl mx-auto">
            {/* Document Header */}
            <div className="bg-white border-4 border-primary-purple/20 relative shadow-2xl">
              {/* Legal Document Header */}
              <div className="bg-gradient-to-r from-primary-purple to-primary-purple-dark text-white p-6 relative">
                <div className="absolute top-4 right-4 opacity-20">
                  <Scale className="h-16 w-16" />
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Gavel className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">
                      LEGAL AI ACCESS AGREEMENT
                    </h3>
                    <p className="text-white/80">
                      Exclusive Early Access Program
                    </p>
                  </div>
                </div>

                {/* Legal Seal */}
                <div className="absolute -bottom-8 left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                  <Shield className="h-8 w-8 text-white" />
                </div>
              </div>

              {/* Document Body */}
              <div className="p-8 pt-12 bg-gradient-to-b from-slate-50 to-white">
                {/* Legal Document Style Text */}
                <div className="mb-8 space-y-4 font-serif">
                  <p className="text-sm text-slate-600 tracking-wide">
                    <span className="font-bold">WHEREAS,</span> the undersigned
                    legal professional seeks access to revolutionary AI-powered
                    legal tools;
                  </p>
                  <p className="text-sm text-slate-600 tracking-wide">
                    <span className="font-bold">WHEREAS,</span> LegalAI
                    represents the future of legal practice automation;
                  </p>
                  <p className="text-sm text-slate-600 tracking-wide">
                    <span className="font-bold">NOW THEREFORE,</span> by
                    providing contact information below, you hereby request
                    inclusion in the exclusive waitlist:
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Signature Line Style Input */}
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-slate-700 tracking-wide">
                      PROFESSIONAL EMAIL ADDRESS:
                    </label>
                    <div className="relative">
                      <div className="border-b-2 border-slate-300 focus-within:border-primary-purple transition-colors">
                        <Input
                          id="email"
                          type="email"
                          placeholder="partner@lawfirm.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="border-none bg-transparent text-lg font-serif pb-2 px-0 focus:ring-0 placeholder:text-slate-400"
                          required
                        />
                      </div>
                      <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
                        <Mail className="h-5 w-5 text-slate-400" />
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 font-serif italic">
                      * Restricted to verified legal professionals and law firms
                    </p>
                  </div>

                  {/* Legal Signature Section */}
                  <div className="border-t-2 border-slate-200 pt-6 mt-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-xs text-slate-600 font-serif">
                        By submitting, I agree to the terms and conditions
                      </div>
                      <div className="text-xs text-slate-600 font-serif">
                        Date: {new Date().toLocaleDateString()}
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={!email || isLoading}
                      className="w-full h-16 text-lg bg-gradient-to-r from-primary-purple to-primary-purple-dark hover:from-primary-purple-dark hover:to-primary-purple text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 font-serif tracking-wide"
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-3">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          PROCESSING REQUEST...
                        </div>
                      ) : (
                        <>
                          <Gavel className="h-5 w-5 mr-3" />
                          EXECUTE AGREEMENT
                        </>
                      )}
                    </Button>
                  </div>
                </form>

                {/* Legal Notice */}
                <div className="mt-6 p-4 bg-slate-100 border-l-4 border-primary-purple">
                  <p className="text-xs text-slate-600 font-serif leading-relaxed">
                    <span className="font-bold">NOTICE:</span> This agreement
                    grants access to proprietary legal technology. All
                    communications are protected by attorney-client privilege
                    where applicable. SOC 2 Type II certified and HIPAA
                    compliant.
                  </p>
                </div>
              </div>

              {/* Document Footer with Stamps */}
              <div className="bg-slate-50 p-4 border-t-2 border-slate-200 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-xs font-serif text-slate-600">
                    VERIFIED SECURE
                  </span>
                </div>
                <div className="text-xs font-serif text-slate-500">
                  Document ID: LA-
                  {Math.random().toString(36).substr(2, 9).toUpperCase()}
                </div>
              </div>
            </div>
          </div>

          {/* Legal Partners Marquee */}
          <div className="mt-16">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-primary-purple-light text-primary-purple border-primary-purple/20">
                Trusted by Legal Professionals
              </Badge>
              <p className="text-sm text-text-body">
                From BigLaw to solo practitioners worldwide
              </p>
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
