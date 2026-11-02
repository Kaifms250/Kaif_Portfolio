import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Download,
  Share2,
  ExternalLink,
  Copy,
  Check,
  Maximize2,
  FileText,
  Mail,
  Linkedin,
  MessageCircle,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

// Resume path inside the public/ directory
const RESUME_PATH = "/resume.pdf";
const RESUME_FILENAME = "Mohammad_Kaif_Resume.pdf";

const Resume = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getFullResumeUrl = () => {
    if (typeof window !== "undefined") {
      return `${window.location.origin}${RESUME_PATH}`;
    }
    return RESUME_PATH;
  };

  const handleCopyLink = async () => {
    try {
      const url = getFullResumeUrl();
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast({
        title: "Link Copied!",
        description: "Resume direct link has been copied to your clipboard.",
      });
      setTimeout(() => setCopied(false), 2500);
    } catch {
      toast({
        title: "Copy Failed",
        description: "Please copy the link directly from your browser bar.",
        variant: "destructive",
      });
    }
  };

  const handleNativeShare = async () => {
    const url = getFullResumeUrl();
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Mohammad Kaif - Resume",
          text: "Check out Mohammad Kaif's resume (Software Engineer)",
          url: url,
        });
        toast({
          title: "Shared successfully!",
          description: "Thank you for sharing my resume.",
        });
      } catch (err) {
        // User cancelled share or aborted
        if ((err as Error)?.name !== "AbortError") {
          handleCopyLink();
        }
      }
    } else {
      handleCopyLink();
    }
  };

  const handleShareWhatsApp = () => {
    const url = encodeURIComponent(getFullResumeUrl());
    const text = encodeURIComponent("Check out Mohammad Kaif's resume: ");
    window.open(`https://api.whatsapp.com/send?text=${text}${url}`, "_blank");
  };

  const handleShareLinkedIn = () => {
    const url = encodeURIComponent(getFullResumeUrl());
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      "_blank"
    );
  };

  const handleShareEmail = () => {
    const url = getFullResumeUrl();
    const subject = encodeURIComponent("Mohammad Kaif - Resume");
    const body = encodeURIComponent(
      `Hi,\n\nI wanted to share Mohammad Kaif's resume with you:\n${url}\n\nBest regards.`
    );
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  return (
    <section
      ref={sectionRef}
      id="resume"
      className="py-20 px-4 bg-background relative overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border text-xs font-medium text-muted-foreground mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <FileText className="w-3.5 h-3.5 text-primary" />
            Curriculum Vitae
          </div>

          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 hero-text transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            My Resume
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Review my professional background, skills, and qualifications. You
            can view the resume directly, save a copy, or share it with others.
          </p>
        </div>

        {/* Action Controls Toolbar */}
        <div
          className={`flex flex-wrap items-center justify-between gap-4 mb-6 p-4 rounded-xl border border-border bg-card/60 backdrop-blur-sm transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* File Information */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-border flex items-center justify-center text-primary">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold text-sm sm:text-base text-foreground">
                Mohammad Kaif - Resume
              </div>
              <div className="text-xs text-muted-foreground flex items-center gap-2">
                <span>PDF Document</span>
                <span>•</span>
                <span className="text-primary font-medium">Ready for viewing</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Download Button */}
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect transition-all duration-300 hover:scale-105"
            >
              <a href={RESUME_PATH} download={RESUME_FILENAME}>
                <Download className="w-4 h-4 mr-2" />
                Download
              </a>
            </Button>

            {/* Share Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="border-border hover:border-primary text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-52">
                <DropdownMenuLabel>Share Resume</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={handleCopyLink}
                  className="cursor-pointer"
                >
                  {copied ? (
                    <Check className="w-4 h-4 mr-2 text-green-500" />
                  ) : (
                    <Copy className="w-4 h-4 mr-2" />
                  )}
                  {copied ? "Link Copied!" : "Copy Link"}
                </DropdownMenuItem>

                {typeof navigator !== "undefined" && "share" in navigator && (
                  <DropdownMenuItem
                    onClick={handleNativeShare}
                    className="cursor-pointer"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Share via Device...
                  </DropdownMenuItem>
                )}

                <DropdownMenuItem
                  onClick={handleShareLinkedIn}
                  className="cursor-pointer"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  Share on LinkedIn
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={handleShareWhatsApp}
                  className="cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Share on WhatsApp
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={handleShareEmail}
                  className="cursor-pointer"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send via Email
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Open in New Tab Button */}
            <Button
              asChild
              variant="outline"
              size="icon"
              className="border-border hover:border-primary text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
              title="Open in new tab"
            >
              <a href={RESUME_PATH} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
                <span className="sr-only">Open in new tab</span>
              </a>
            </Button>

            {/* Fullscreen Modal Button */}
            <Button
              variant="outline"
              size="icon"
              className="border-border hover:border-primary text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
              onClick={() => setIsFullscreenOpen(true)}
              title="Expand preview"
            >
              <Maximize2 className="w-4 h-4" />
              <span className="sr-only">Expand preview</span>
            </Button>
          </div>
        </div>

        {/* Embedded Document Frame */}
        <Card
          className={`overflow-hidden border border-border shadow-lg hover:shadow-neon transition-all duration-1000 delay-500 bg-card ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Mockup Window Header */}
          <div className="bg-secondary/40 border-b border-border px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-yellow-400/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-green-400/80 inline-block" />
              <span className="ml-3 text-xs text-muted-foreground hidden sm:inline-block font-mono">
                {RESUME_FILENAME}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyLink}
                className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors px-2 py-1 rounded hover:bg-secondary"
              >
                {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                <span className="hidden sm:inline">{copied ? "Copied" : "Copy Link"}</span>
              </button>
              <a
                href={RESUME_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors px-2 py-1 rounded hover:bg-secondary"
              >
                <ExternalLink className="w-3 h-3" />
                <span className="hidden sm:inline">Pop out</span>
              </a>
            </div>
          </div>

          {/* Document Viewer Frame */}
          <div className="relative w-full h-[650px] md:h-[820px] bg-muted/20">
            <object
              data={`${RESUME_PATH}#toolbar=1&navpanes=0`}
              type="application/pdf"
              className="w-full h-full"
            >
              <iframe
                src={`${RESUME_PATH}#toolbar=1&navpanes=0`}
                className="w-full h-full border-0"
                title="Mohammad Kaif Resume"
              >
                {/* Fallback card if browser does not embed PDF directly */}
                <div className="h-full flex flex-col items-center justify-center p-8 text-center bg-card">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <FileText className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Resume Document Ready
                  </h3>
                  <p className="text-muted-foreground max-w-md mb-6">
                    Your browser does not support inline PDF previews. You can view
                    or download the resume directly using the buttons below.
                  </p>
                  <div className="flex gap-4">
                    <Button asChild>
                      <a href={RESUME_PATH} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Open Resume
                      </a>
                    </Button>
                    <Button asChild variant="outline">
                      <a href={RESUME_PATH} download={RESUME_FILENAME}>
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </a>
                    </Button>
                  </div>
                </div>
              </iframe>
            </object>
          </div>
        </Card>

        {/* Fullscreen Dialog Modal */}
        <Dialog open={isFullscreenOpen} onOpenChange={setIsFullscreenOpen}>
          <DialogContent className="max-w-6xl w-[95vw] h-[90vh] p-0 flex flex-col overflow-hidden">
            <DialogHeader className="p-4 border-b border-border flex flex-row items-center justify-between space-y-0">
              <DialogTitle className="flex items-center gap-2 text-base font-semibold">
                <FileText className="w-4 h-4 text-primary" />
                {RESUME_FILENAME}
              </DialogTitle>
              <div className="flex items-center gap-2 mr-6">
                <Button asChild size="sm" variant="outline">
                  <a href={RESUME_PATH} download={RESUME_FILENAME}>
                    <Download className="w-3.5 h-3.5 mr-1.5" />
                    Download
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleCopyLink}
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 mr-1.5 text-green-500" />
                  ) : (
                    <Copy className="w-3.5 h-3.5 mr-1.5" />
                  )}
                  {copied ? "Copied" : "Copy Link"}
                </Button>
              </div>
            </DialogHeader>
            <div className="flex-1 w-full h-full bg-muted/20">
              <iframe
                src={`${RESUME_PATH}#toolbar=1`}
                className="w-full h-full border-0"
                title="Mohammad Kaif Resume Full View"
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Resume;

