import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Search,
  FileText,
  ClipboardCheck,
  Users,
  Shield,
  Clock,
  CheckCircle,
  Play,
  Menu,
  X,
  Gavel,
  MessageSquare,
  UserMinus,
  BarChart3,
  Link2,
  Headphones,
  MapPin,
  GraduationCap,
  AwardIcon as Award,
} from "lucide-react";
import { useState } from "react";

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Gavel className="h-8 w-8 text-primary-purple" />
            <span className="text-xl font-bold text-text-heading">LegalAI</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-text-body hover:text-text-heading transition-colors"
            >
              Features
            </a>
            <a
              href="#roadmap"
              className="text-text-body hover:text-text-heading transition-colors"
            >
              Roadmap
            </a>
            <a
              href="#enterprise"
              className="text-text-body hover:text-text-heading transition-colors"
            >
              Enterprise
            </a>
            <a
              href="#faq"
              className="text-text-body hover:text-text-heading transition-colors"
            >
              FAQ
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" className="rounded-[14px]">
              Talk to Founders
            </Button>
            <Button className="rounded-[14px] bg-primary-purple hover:bg-primary-purple-dark shadow-lg">
              Join Waitlist
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background p-4">
            <nav className="flex flex-col gap-4">
              <a href="#features" className="text-text-body">
                Features
              </a>
              <a href="#roadmap" className="text-text-body">
                Roadmap
              </a>
              <a href="#enterprise" className="text-text-body">
                Enterprise
              </a>
              <a href="#faq" className="text-text-body">
                FAQ
              </a>
              <Button variant="outline" className="rounded-[14px] w-full">
                Talk to Founders
              </Button>
              <Button className="rounded-[14px] bg-primary-purple hover:bg-primary-purple-dark w-full">
                Join Waitlist
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 text-center">
        <Badge className="mb-6 rounded-full bg-primary-purple-light text-primary-purple border-primary-purple/20">
          New feature • Check out the team dashboard →
        </Badge>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-heading mb-6 leading-tight">
          AI-powered legal workflows.
          <br />
          <span className="text-primary-purple">Built for professionals.</span>
        </h1>

        <p className="text-lg md:text-xl text-text-body max-w-2xl mx-auto mb-8 leading-relaxed">
          Automate research, document generation, and form filling.
          <br className="hidden md:block" />
          Bill for thinking, not typing.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="rounded-[14px] bg-primary-purple hover:bg-primary-purple-dark text-lg px-8 py-6 shadow-lg"
          >
            Join Waitlist
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-[14px] text-lg px-8 py-6 border-2"
          >
            Talk to Founders
          </Button>
        </div>

        {/* Video Demo Placeholder */}
        <div className="relative max-w-4xl mx-auto">
          <div className="aspect-video bg-gradient-to-br from-primary-purple-light to-primary-purple/10 rounded-[14px] border-2 border-primary-purple/20 flex items-center justify-center group cursor-pointer hover:shadow-xl transition-all duration-300">
            <div className="bg-primary-purple text-white rounded-full p-6 group-hover:scale-110 transition-transform duration-300">
              <Play className="h-8 w-8 fill-current" />
            </div>
          </div>
          <p className="text-sm text-text-body mt-4">
            Watch how LegalAI transforms your workflow
          </p>
        </div>

        <div className="mt-16">
          <p className="text-sm text-text-body mb-8">
            Trusted by 4,000+ companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            <div className="text-text-body font-semibold">Boltshift</div>
            <div className="text-text-body font-semibold">Lightbox</div>
            <div className="text-text-body font-semibold">FeatherDev</div>
            <div className="text-text-body font-semibold">GlobalBank</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24">
        {/* Research Agent */}
        <div className="container mx-auto px-4 mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary-purple-light text-primary-purple border-primary-purple/20">
                Research Agent
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-6">
                Deep legal research that actually understands context
              </h2>
              <p className="text-lg text-text-body mb-6 leading-relaxed">
                Our Research Agent autonomously logs into legal databases like
                LexisNexis and Westlaw, performing intelligent searches that
                filter out noise and deliver focused, crisp summaries with
                verified citations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary-purple" />
                  <span className="text-text-body">
                    Intelligent query optimization
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary-purple" />
                  <span className="text-text-body">
                    Automated noise filtering
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary-purple" />
                  <span className="text-text-body">
                    Source verification & citations
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <Card className="p-8 shadow-xl border-2 border-primary-purple/10 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-6">
                    <Search className="h-8 w-8 text-primary-purple" />
                    <span className="font-semibold text-text-heading">
                      Research Interface
                    </span>
                  </div>
                  <div className="space-y-4">
                    <div className="h-3 bg-primary-purple-light rounded-full w-3/4"></div>
                    <div className="h-3 bg-primary-purple-light rounded-full w-1/2"></div>
                    <div className="h-3 bg-primary-purple-light rounded-full w-5/6"></div>
                    <div className="bg-primary-purple/5 p-4 rounded-lg mt-6">
                      <div className="text-sm font-medium text-primary-purple mb-2">
                        Research Summary
                      </div>
                      <div className="h-2 bg-primary-purple-light rounded w-full mb-2"></div>
                      <div className="h-2 bg-primary-purple-light rounded w-4/5"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Generate Agent */}
        <div className="container mx-auto px-4 mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Card className="p-8 shadow-xl border-2 border-primary-purple/10 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-6">
                    <FileText className="h-8 w-8 text-primary-purple" />
                    <span className="font-semibold text-text-heading">
                      Document Generator
                    </span>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-primary-purple/5 p-4 rounded-lg">
                      <div className="text-sm font-medium text-primary-purple mb-2">
                        Template Analysis
                      </div>
                      <div className="h-2 bg-primary-purple-light rounded w-full mb-2"></div>
                      <div className="h-2 bg-primary-purple-light rounded w-3/4"></div>
                    </div>
                    <div className="h-3 bg-primary-purple-light rounded-full w-2/3"></div>
                    <div className="h-3 bg-primary-purple-light rounded-full w-4/5"></div>
                    <div className="h-3 bg-primary-purple-light rounded-full w-1/2"></div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="order-1 md:order-2">
              <Badge className="mb-4 bg-primary-purple-light text-primary-purple border-primary-purple/20">
                Generate Agent
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-6">
                Transform templates into intelligent workflows
              </h2>
              <p className="text-lg text-text-body mb-6 leading-relaxed">
                Convert legal templates into smart, automated workflows that
                understand context, maintain formatting, and provide
                collaboration features with built-in version control.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary-purple" />
                  <span className="text-text-body">
                    Smart template analysis
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary-purple" />
                  <span className="text-text-body">
                    Context-aware auto-fill
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary-purple" />
                  <span className="text-text-body">
                    Version control & collaboration
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Forms Agent */}
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary-purple-light text-primary-purple border-primary-purple/20">
                Forms Agent
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-6">
                Eliminate tedious form-filling forever
              </h2>
              <p className="text-lg text-text-body mb-6 leading-relaxed">
                Automatically detects form fields, extracts data from multiple
                sources, and intelligently maps information while maintaining a
                complete audit trail.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary-purple" />
                  <span className="text-text-body">Auto field detection</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary-purple" />
                  <span className="text-text-body">
                    Multi-source data extraction
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary-purple" />
                  <span className="text-text-body">Complete audit trail</span>
                </li>
              </ul>
            </div>
            <div>
              <Card className="p-8 shadow-xl border-2 border-primary-purple/10 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-6">
                    <ClipboardCheck className="h-8 w-8 text-primary-purple" />
                    <span className="font-semibold text-text-heading">
                      Forms Processor
                    </span>
                  </div>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-8 bg-primary-purple-light rounded border-2 border-primary-purple/20"></div>
                      <div className="h-8 bg-primary-purple-light rounded border-2 border-primary-purple/20"></div>
                    </div>
                    <div className="h-12 bg-primary-purple-light rounded border-2 border-primary-purple/20"></div>
                    <div className="bg-primary-purple p-3 rounded-lg text-white text-sm text-center">
                      Form Completed Successfully ✓
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section
        id="roadmap"
        className="py-16 md:py-24 bg-primary-purple-light/30"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary-purple-light text-primary-purple border-primary-purple/20">
              Roadmap
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-6">
              The future of legal AI is already here
            </h2>
            <p className="text-lg text-text-body max-w-2xl mx-auto">
              See what's coming next in our mission to revolutionize legal
              workflows
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-2 border-primary-purple/10">
              <CardContent className="p-0">
                <MessageSquare className="h-8 w-8 text-primary-purple mb-4" />
                <h3 className="font-semibold text-text-heading mb-2">Chat</h3>
                <p className="text-text-body text-sm">
                  Conversational interface for natural language legal queries
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-2 border-primary-purple/10">
              <CardContent className="p-0">
                <UserMinus className="h-8 w-8 text-primary-purple mb-4" />
                <h3 className="font-semibold text-text-heading mb-2">
                  Anonymize
                </h3>
                <p className="text-text-body text-sm">
                  Automatically redact sensitive information from documents
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-2 border-primary-purple/10">
              <CardContent className="p-0">
                <BarChart3 className="h-8 w-8 text-primary-purple mb-4" />
                <h3 className="font-semibold text-text-heading mb-2">
                  Analyze
                </h3>
                <p className="text-text-body text-sm">
                  Deep document analysis with risk assessment and insights
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-2 border-primary-purple/10">
              <CardContent className="p-0">
                <Link2 className="h-8 w-8 text-primary-purple mb-4" />
                <h3 className="font-semibold text-text-heading mb-2">
                  Integrations
                </h3>
                <p className="text-text-body text-sm">
                  Seamless connections with your existing legal software
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section id="enterprise" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary-purple-light text-primary-purple border-primary-purple/20">
                Enterprise
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-6">
                Enterprise-scale legal operations
              </h2>
              <p className="text-lg text-text-body mb-6 leading-relaxed">
                Deploy LegalAI on-premise with complete control over your data,
                custom integrations, and dedicated support.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-primary-purple mt-0.5" />
                  <div>
                    <span className="font-semibold text-text-heading">
                      On-premise deployment
                    </span>
                    <p className="text-text-body text-sm">
                      Complete data sovereignty and security
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary-purple mt-0.5" />
                  <div>
                    <span className="font-semibold text-text-heading">
                      Dedicated support team
                    </span>
                    <p className="text-text-body text-sm">
                      24/7 technical and legal ops support
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary-purple mt-0.5" />
                  <div>
                    <span className="font-semibold text-text-heading">
                      Custom integrations
                    </span>
                    <p className="text-text-body text-sm">
                      Tailored connections to your existing systems
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <Card className="p-6 border-2 border-primary-purple/10">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-4">
                    <Headphones className="h-6 w-6 text-primary-purple" />
                    <span className="font-semibold text-text-heading">
                      Remote Setup
                    </span>
                  </div>
                  <p className="text-text-body text-sm">
                    Complete remote deployment and configuration by our expert
                    team
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 border-2 border-primary-purple/10">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="h-6 w-6 text-primary-purple" />
                    <span className="font-semibold text-text-heading">
                      On-site Training
                    </span>
                  </div>
                  <p className="text-text-body text-sm">
                    Comprehensive training sessions for your legal team
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 border-2 border-primary-purple/10">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-4">
                    <GraduationCap className="h-6 w-6 text-primary-purple" />
                    <span className="font-semibold text-text-heading">
                      Legal Ops Concierge
                    </span>
                  </div>
                  <p className="text-text-body text-sm">
                    Dedicated consultant for optimizing your legal operations
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16 md:py-24 bg-primary-purple-light/30">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-primary-purple-light text-primary-purple border-primary-purple/20">
            Security & Compliance
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-6">
            Enterprise-grade security you can trust
          </h2>
          <p className="text-lg text-text-body mb-12 max-w-2xl mx-auto">
            Built with the highest security standards for handling sensitive
            legal data
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary-purple/10 rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-primary-purple" />
              </div>
              <span className="font-semibold text-text-heading">SOC 2</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary-purple/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-8 w-8 text-primary-purple" />
              </div>
              <span className="font-semibold text-text-heading">AES-256</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary-purple/10 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-primary-purple" />
              </div>
              <span className="font-semibold text-text-heading">PCI DSS</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary-purple/10 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-primary-purple" />
              </div>
              <span className="font-semibold text-text-heading">HIPAA</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary-purple-light text-primary-purple border-primary-purple/20">
              FAQ
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-text-heading mb-6">
              Frequently asked questions
            </h2>
            <p className="text-lg text-text-body max-w-2xl mx-auto">
              Get answers to common questions about LegalAI
            </p>
          </div>

          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            <AccordionItem value="item-1" className="border-primary-purple/20">
              <AccordionTrigger className="text-left font-semibold text-text-heading">
                How does LegalAI integrate with existing legal databases?
              </AccordionTrigger>
              <AccordionContent className="text-text-body">
                LegalAI connects securely to major legal databases through
                official APIs and authentication protocols. We maintain
                partnerships with LexisNexis, Westlaw, and other major providers
                to ensure seamless access while maintaining the highest security
                standards.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-primary-purple/20">
              <AccordionTrigger className="text-left font-semibold text-text-heading">
                Is my client data secure and confidential?
              </AccordionTrigger>
              <AccordionContent className="text-text-body">
                Absolutely. We employ enterprise-grade security including
                AES-256 encryption, SOC 2 compliance, and maintain strict data
                governance policies. All data is encrypted in transit and at
                rest, and we offer on-premise deployment options for maximum
                control.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-primary-purple/20">
              <AccordionTrigger className="text-left font-semibold text-text-heading">
                How accurate are the AI-generated legal documents?
              </AccordionTrigger>
              <AccordionContent className="text-text-body">
                Our Generate Agent is trained on vetted legal templates and
                maintains high accuracy through continuous learning and
                validation. All generated documents include source citations and
                recommendations for legal review. We recommend attorney
                oversight for all final documents.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-primary-purple/20">
              <AccordionTrigger className="text-left font-semibold text-text-heading">
                What's included in the enterprise plan?
              </AccordionTrigger>
              <AccordionContent className="text-text-body">
                Enterprise plans include on-premise deployment, custom
                integrations, dedicated support, on-site training, legal ops
                consulting, and priority feature development. Contact our team
                for a customized quote based on your firm's specific needs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-primary-purple/20">
              <AccordionTrigger className="text-left font-semibold text-text-heading">
                How long does implementation typically take?
              </AccordionTrigger>
              <AccordionContent className="text-text-body">
                Implementation time varies based on complexity and integration
                requirements. Standard deployments typically take 2-4 weeks,
                while enterprise implementations with custom integrations may
                take 6-12 weeks. Our team provides detailed timelines during
                planning.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-slate-50 to-white border-t">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-text-heading">
              Ready to get started?
            </h2>
            <p className="text-xl md:text-2xl text-text-body mb-12 max-w-3xl mx-auto leading-relaxed">
              Join the legal professionals already transforming their practice
              with AI
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="rounded-[14px] text-lg px-10 py-6 bg-primary-purple hover:bg-primary-purple-dark text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Join Waitlist
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-[14px] text-lg px-10 py-6 border-2 border-primary-purple text-primary-purple hover:bg-primary-purple hover:text-white transition-all duration-300"
              >
                Talk to Founders
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Gavel className="h-6 w-6 text-primary-purple" />
              <span className="font-bold text-text-heading">LegalAI</span>
            </div>
            <div className="flex gap-6 text-text-body">
              <a href="#" className="hover:text-text-heading transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-text-heading transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-text-heading transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-text-body">
            <p>&copy; 2024 LegalAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
