"use client";

import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function Home() {
  // Business constants
  const businessName = "Siva Tuitions and Coachings";
  const ownerName = "Yadlapalli Naga Murali Krishna, M.Tech., M.C.A., M.B.A., M.Sc.";
  const phoneDisplay = "+91 88797 97777";
  const phoneHref = "tel:+918879797777";
  const whatsappHref = "https://wa.me/8879797777";

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#111111]">
      {/* Top announcement / promo bar */}
      <div className="w-full bg-[#ED1C24] text-white text-center text-xs sm:text-sm py-2 px-4">
        Admissions Open • Personalized Coaching
      </div>

      {/* Header */}
      <header className="w-full sticky top-0 z-40 border-b border-black/5 backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3" aria-label={businessName}>
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Offical-Logo-1759120729402.jpg"
              alt="Siva Tuitions logo"
              className="h-8 w-auto rounded-sm"
              loading="eager"
            />
          </a>

          <div className="flex items-center gap-2 sm:gap-3">
            <Button asChild className="bg-[#25D366] text-white hover:opacity-90">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Chat with us on WhatsApp">
                <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.52 3.48A11.8 11.8 0 0 0 12.06 0C5.5.02.2 5.32.2 11.88c0 2.1.55 4.15 1.6 5.96L0 24l6.33-1.76a11.7 11.7 0 0 0 5.73 1.52h.03c6.56 0 11.86-5.3 11.86-11.86 0-3.17-1.23-6.16-3.43-8.42ZM12.1 21.3h-.02a9.5 9.5 0 0 1-4.85-1.33l-.35-.2-3.76 1.05 1.04-3.66-.23-.38a9.6 9.6 0 0 1-1.47-5.1C2.46 6.5 6.6 2.36 12.08 2.34 14.75 2.33 17.3 3.37 19.2 5.26c1.9 1.9 2.95 4.45 2.95 7.15 0 5.48-4.46 9.95-10.04 9.95Zm5.75-7.2c-.31-.15-1.83-.9-2.11-1a.5.5 0 0 0-.53.1c-.15.15-.6.73-.73.88a.49.49 0 0 1-.55.12c-1-.4-3.23-1.88-4.58-3.6-.33-.45-.7-1-.28-1.38.15-.15.33-.4.5-.6.15-.2.2-.35.3-.58a.52.52 0 0 0-.03-.5c-.08-.16-.53-1.28-.73-1.77-.2-.48-.4-.42-.55-.43h-.47a.9.9 0 0 0-.65.3c-.22.23-.85.83-.85 2.03 0 1.2.87 2.36 1 2.52.15.2 1.7 2.6 4.1 3.64 2.4 1.04 2.4.7 2.83.67.43-.04 1.4-.58 1.6-1.15.2-.57.2-1.06.15-1.16-.06-.1-.27-.17-.57-.32Z" />
                </svg>
                Chat with us
              </a>
            </Button>
            <Button asChild className="sm:ml-2 bg-[#318CE7] text-white hover:opacity-90">
              <a href={phoneHref} aria-label={`Call ${businessName} at ${phoneDisplay}`}>
                <Phone className="h-4 w-4 mr-2" /> Call Now
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative isolate bg-white">
        <div className="max-w-6xl mx-auto px-4 py-12 sm:py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Photo left */}
            <div className="w-full">
              <img
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/NEW-FACE-1759120754380.jpg"
                alt="Owner portrait"
                className="w-full max-w-sm mx-auto rounded-lg shadow border border-black/10 object-cover"
                loading="eager"
                fetchPriority="high"
              />
            </div>

            {/* Name and creds right */}
            <div>
              <div className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-[#F3F146] text-[#111111] shadow">
                Trusted Educational Coaching
              </div>
              <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-[#6495ed]">
                SIVA TUITIONS — Your Path to Academic Success
              </h1>
              <div className="mt-4">
                <p className="text-xl sm:text-2xl font-serif font-semibold leading-snug">
                  {ownerName.split(",")[0]}
                </p>
                <p className="mt-4 text-xl sm:text-2xl font-serif font-semibold leading-snug">
                  {ownerName.replace(/^[^,]+,\s?/, "")}
                </p>
              </div>
              <p className="mt-4 text-base sm:text-lg text-black/80">
                Personalized tuitions, strong fundamentals, and exam-focused preparation.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="bg-[#25D366] text-white hover:opacity-90">
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                    <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M20.52 3.48A11.8 11.8 0 0 0 12.06 0C5.5.02.2 5.32.2 11.88c0 2.1.55 4.15 1.6 5.96L0 24l6.33-1.76a11.7 11.7 0 0 0 5.73 1.52h.03c6.56 0 11.86-5.3 11.86-11.86 0-3.17-1.23-6.16-3.43-8.42ZM12.1 21.3h-.02a9.5 9.5 0 0 1-4.85-1.33l-.35-.2-3.76 1.05 1.04-3.66-.23-.38a9.6 9.6 0 0 1-1.47-5.1C2.46 6.5 6.6 2.36 12.08 2.34 14.75 2.33 17.3 3.37 19.2 5.26c1.9 1.9 2.95 4.45 2.95 7.15 0 5.48-4.46 9.95-10.04 9.95Zm5.75-7.2c-.31-.15-1.83-.9-2.11-1a.5.5 0 0 0-.53.1c-.15.15-.6.73-.73.88a.49.49 0 0 1-.55.12c-1-.4-3.23-1.88-4.58-3.6-.33-.45-.7-1-.28-1.38.15-.15.33-.4.5-.6.15-.2.2-.35.3-.58a.52.52 0 0 0-.03-.5c-.08-.16-.53-1.28-.73-1.77-.2-.48-.4-.42-.55-.43h-.47a.9.9 0 0 0-.65.3c-.22.23-.85.83-.85 2.03 0 1.2.87 2.36 1 2.52.15.2 1.7 2.6 4.1 3.64 2.4 1.04 2.4.7 2.83.67.43-.04 1.4-.58 1.6-1.15.2-.57.2-1.06.15-1.16-.06-.1-.27-.17-.57-.32Z" />
                    </svg>
                    Chat with us
                  </a>
                </Button>
                <Button asChild size="lg" className="bg-[#318CE7] text-white hover:opacity-90">
                  <a href={phoneHref}>
                    <Phone className="h-5 w-5 mr-2" /> Call {phoneDisplay}
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Promotional poster */}
          <div className="mt-10">
            <img
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/offical-Ad-1758996495333.jpg"
              alt="Promotional poster"
              className="w-full max-w-2xl mx-auto rounded-md border border-black/10 shadow"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Local SEO Content */}
      <section id="about" className="bg-white">
        <div className="max-w-6xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-[#6495ed]">About Siva Tuitions and Coachings</h2>
          <p className="mt-3 text-black/80">
            Siva Tuitions and Coachings offers expert classroom and personalized home tuition focused on fundamentals, concept clarity, and confident exam performance. Our approach is student-first—structured, motivating, and results-driven.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="font-semibold text-[#111111]">What We Offer</h3>
              <ul className="mt-2 list-disc pl-5 text-black/80 space-y-2">
                <li>
                  <span className="font-medium">Short-Term EAMCET &amp; EAPCET Intensive Crash Courses</span>
                  <div className="text-sm">Targeted drills, full-length mock tests, performance analytics.</div>
                </li>
                <li>
                  <span className="font-medium">Betterment &amp; Supplementary Exam Support</span>
                  <div className="text-sm">Strategic remediation plans, one-on-one doubt sessions.</div>
                </li>
                <li>
                  <span className="font-medium">Intermediate &amp; 10th Standard Coaching</span>
                  <div className="text-sm">CBSE, State &amp; ICSE board–aligned syllabus, adaptive lesson plans.</div>
                </li>
                <li>
                  <span className="font-medium">Foundation Classes (Grade 6–10)</span>
                  <div className="text-sm">Concept-building exercises, critical-thinking workshops, progress tracking.</div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-[#111111]">Why Choose Us</h3>
              <ul className="mt-2 list-disc pl-5 text-black/80 space-y-1">
                <li>Small batches and focused 1‑to‑1 attention</li>
                <li>Weekly assessments and transparent progress updates</li>
                <li>Concept-first teaching with simple, memorable explanations</li>
                <li>Flexible scheduling to suit school timetables</li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-black/80">
            We coach students from Grade 6 to 12 only—helping them build strong foundations and excel in board and entrance exams with confidence.
          </p>
          <div className="mt-5 flex gap-3">
            <Button asChild className="bg-[#318CE7] text-white hover:opacity-90">
              <a href={phoneHref} aria-label={`Call ${businessName} at ${phoneDisplay}`}>
                <Phone className="h-4 w-4 mr-2" /> Call {phoneDisplay}
              </a>
            </Button>
            <Button asChild className="bg-[#25D366] text-white hover:opacity-90">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.52 3.48A11.8 11.8 0 0 0 12.06 0C5.5.02.2 5.32.2 11.88c0 2.1.55 4.15 1.6 5.96L0 24l6.33-1.76a11.7 11.7 0 0 0 5.73 1.52h.03c6.56 0 11.86-5.3 11.86-11.86 0-3.17-1.23-6.16-3.43-8.42ZM12.1 21.3h-.02a9.5 9.5 0 0 1-4.85-1.33l-.35-.2-3.76 1.05 1.04-3.66-.23-.38a9.6 9.6 0 0 1-1.47-5.1C2.46 6.5 6.6 2.36 12.08 2.34 14.75 2.33 17.3 3.37 19.2 5.26c1.9 1.9 2.95 4.45 2.95 7.15 0 5.48-4.46 9.95-10.04 9.95Zm5.75-7.2c-.31-.15-1.83-.9-2.11-1a.5.5 0 0 0-.53.1c-.15.15-.6.73-.73.88a.49.49 0 0 1-.55.12c-1-.4-3.23-1.88-4.58-3.6-.33-.45-.7-1-.28-1.38.15-.15.33-.4.5-.6.15-.2.2-.35.3-.58a.52.52 0 0 0-.03-.5c-.08-.16-.53-1.28-.73-1.77-.2-.48-.4-.42-.55-.43h-.47a.9.9 0 0 0-.65.3c-.22.23-.85.83-.85 2.03 0 1.2.87 2.36 1 2.52.15.2 1.7 2.6 4.1 3.64 2.4 1.04 2.4.7 2.83.67.43-.04 1.4-.58 1.6-1.15.2-.57.2-1.06.15-1.16-.06-.1-.27-.17-.57-.32Z" />
                </svg>
                Chat with us
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section id="location" className="bg-white">
        <div className="max-w-6xl mx-auto px-4 pb-12">
          <h2 className="text-2xl font-bold text-[#6495ed] mb-4">Find Us</h2>
          <div className="w-full aspect-[16/9] rounded-md border border-black/10 overflow-hidden shadow">
            <iframe
              className="w-full h-full"
              src={`https://www.google.com/maps?q=${encodeURIComponent(businessName)}&output=embed`}
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="mt-4">
            <Button asChild className="bg-[#318CE7] text-white hover:opacity-90">
              <a
                href="https://maps.app.goo.gl/UJDr6C7QdUUaemuQ6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-black/5 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <div className="text-black/60">
            © {new Date().getFullYear()} {businessName}. All rights reserved. Developed by HR Innovations.
          </div>
          <div className="flex items-center gap-4">
            <a href={phoneHref} className="hover:underline">
              Call {phoneDisplay}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}