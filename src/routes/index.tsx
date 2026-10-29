import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Copy, Check, Wallet, MessageCircle, Twitter, Facebook, Instagram, Mail } from "lucide-react";
import hero from "@/assets/hero-collage.jpg.asset.json";
import portrait from "@/assets/creator-portrait.jpg.asset.json";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Learn to Draw Faces — Artist Vipin Bala" },
      { name: "description", content: "Face വരയ്ക്കാൻ പഠിക്കാം — drawing course by Artist Vipin Bala." },
      { property: "og:title", content: "Learn to Draw Faces — Artist Vipin Bala" },
      { property: "og:description", content: "Face വരയ്ക്കാൻ പഠിക്കാം — drawing course by Artist Vipin Bala." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const ml = { fontFamily: '"Poppins", "Noto Sans Malayalam", sans-serif' };

function LinkBtn({ href, className, children }: { href: string; className: string; children: React.ReactNode }) {
  return (
    <a href={href || undefined} target={href ? "_blank" : undefined} rel="noreferrer" className={className}>
      {children}
    </a>
  );
}

function Index() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(siteConfig.upiId);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  const steps = ["Screenshot", "Name", "Email", "Whatsapp Number (Active ആയത്)"];

  return (
    <main className="min-h-screen overflow-x-hidden bg-background font-sans text-navy" style={ml}>
      <div className="mx-auto w-full max-w-[800px] px-4">
        {/* 1 Hero */}
        <section className="pt-5 text-center">
          <h1 className="text-xl font-bold sm:text-2xl">Face വരയ്ക്കാൻ പഠിക്കാം ❤️</h1>
          <img src={hero.url} alt="Portrait artworks by Vipin Bala" className="mx-auto mt-3 block w-full max-w-[780px]" />
          <LinkBtn href={siteConfig.checkoutUrl} className="btn-brand mx-auto mt-4 flex h-14 w-full max-w-[780px] items-center justify-center gap-3 text-lg tracking-wide">
            JOIN NOW <ArrowRight className="h-5 w-5" />
          </LinkBtn>
        </section>

        {/* 2 Help */}
        <section className="mt-6 flex flex-col gap-5 rounded-xl bg-mint p-5 md:flex-row md:p-6">
          <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-mint-strong">
            <Wallet className="h-8 w-8" />
          </div>
          <div className="min-w-0">
            <h2 className="text-xl font-bold sm:text-2xl">Pay ചെയ്യാൻ ബുദ്ധിമുട്ട് Face ചെയ്യുന്നുണ്ടോ ?</h2>
            <div className="mt-1 h-1 w-24 rounded bg-brand" />
            <p className="mt-3 text-sm leading-relaxed sm:text-[15px]">
              എങ്കിൽ താഴെ കാണുന്ന Pay Pal , UPI id or Scanner വഴി പേയ്മെന്റ് ചെയ്യുക . പേയ്മെന്റ് ചെയ്ത ശേഷം Screenshot, Name, Email and Whatsapp Number (Active ആയത്) എന്നിവ ഞങ്ങളെ Whatsapp ൽ Forward ചെയ്യുക.
            </p>
            <div className="mt-4 text-center">
              <button onClick={copy} className="inline-flex max-w-full items-center gap-3 break-all rounded-md bg-upi px-4 py-1.5 text-sm font-semibold sm:text-base">
                UPI ID - {siteConfig.upiId}
                {copied ? <Check className="h-4 w-4 shrink-0" /> : <Copy className="h-4 w-4 shrink-0" />}
              </button>
            </div>
          </div>
        </section>

        {/* 3 Payment card */}
        <section className="relative mt-12 rounded-xl bg-card p-5 pt-10 shadow-sm sm:p-10">
          <span className="absolute -top-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-brand-deep px-6 py-2 font-semibold text-primary-foreground sm:px-10">
            Gpay / Phonepay
          </span>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl border-2 border-border p-4 text-center">
              <div className="grid aspect-[4/3] place-items-center rounded-md bg-muted">
                {siteConfig.qrImageUrl ? (
                  <img src={siteConfig.qrImageUrl} alt="Payment QR" className="h-40 w-40" />
                ) : (
                  <div className="grid h-32 w-32 place-items-center rounded border-2 border-dashed border-navy/40 text-xs text-muted-foreground">QR placeholder</div>
                )}
                <p className="text-2xl font-semibold">Payment QR</p>
              </div>
              <p className="mt-3 font-medium">artistvipin158@fbl</p>
              <hr className="my-2" />
              <p className="font-bold">ARTIST VIPIN BALA</p>
            </div>
            <div className="min-w-0">
              <h3 className="text-2xl font-bold">Pay ചെയ്യൂ</h3>
              <ol className="mt-4 space-y-2">
                {steps.map((s, i) => (
                  <li key={s} className="flex items-center gap-3 rounded-md bg-mint py-1 pl-1 pr-3">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand text-sm font-semibold text-primary-foreground">{i + 1}</span>
                    <span className="text-[15px]">{s}</span>
                  </li>
                ))}
              </ol>
              <LinkBtn href={siteConfig.whatsappUrl} className="btn-brand mt-5 flex h-14 items-center justify-center gap-3 tracking-[0.2em]">
                <MessageCircle className="h-7 w-7" /> WHATSAPP
              </LinkBtn>
              <p className="mt-3 text-sm">എന്നിവ മുകളിലെ Whatsapp Button Click ചെയ്ത് Personal Whatsapp ൽ Forward ചെയ്യുക.</p>
            </div>
          </div>
        </section>

        {/* 4 Offer */}
        <section className="mt-6 rounded-lg bg-navy px-5 py-6 text-center text-primary-foreground">
          <p className="flex flex-wrap items-baseline justify-center gap-3">
            <s className="text-xl decoration-destructive decoration-2">10000</s>
            <span className="text-4xl font-bold sm:text-5xl">589/-</span>
            <span className="text-lg">( 499 + GST )</span>
          </p>
          <LinkBtn href={siteConfig.checkoutUrl} className="btn-brand mx-auto mt-4 flex h-14 w-full max-w-[310px] items-center justify-center gap-2 text-xl">
            Get Special Offer <ArrowRight className="h-5 w-5" />
          </LinkBtn>
          <p className="mt-2 text-sm">Hurry! Grab the deal today!</p>
        </section>

        {/* 5 Creator */}
        <section className="mt-10 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Meet Your Creator</h2>
          <p className="mt-2 text-sm tracking-[0.3em]">ARTIST VIPIN BALA</p>
          <div className="mx-auto mt-2 h-1 w-14 rounded bg-brand" />
          <div className="mt-6 grid items-center gap-6 md:grid-cols-[320px_1fr]">
            <img src={portrait.url} alt="Artist Vipin Bala" className="mx-auto w-full max-w-[320px] rounded-full" />
            <div className="space-y-3 text-left text-sm leading-snug">
              <p>Vipin is a passionate artist with over 8 years of experience in drawing and painting. He studied Business Administration at Calicut University and also completed a course in Animation and VFX in Kochi.</p>
              <p>He worked as a professional artist at the famous Dileef International Art Shop in Oberon Mall, Kochi, from 2019 to 2021, where he created live portraits and customized artworks for hundreds of clients.</p>
              <p>In 2022, he completed advanced marketing training and won the <strong>Hall of Fame</strong> award for his achievements. Today, Vipin is on a mission to help other artists grow. He teaches simple and practical ways to turn your art into a strong source of income.</p>
              <p>Whether you're a beginner or someone who wants to improve your skills, Vipin is here to guide you every step of the way!</p>
            </div>
          </div>
        </section>

        {/* 6 Footer */}
        <footer className="mt-6 flex flex-col items-center gap-2 border-t py-4 text-xs sm:flex-row sm:justify-between sm:px-12">
          <span className="font-semibold">Artist Vipin Bala</span>
          <span className="text-muted-foreground">© Copyright</span>
          <span className="flex gap-4">
            <a href={siteConfig.social.twitter || undefined} aria-label="Twitter"><Twitter className="h-4 w-4" /></a>
            <a href={siteConfig.social.facebook || undefined} aria-label="Facebook"><Facebook className="h-4 w-4" /></a>
            <a href={siteConfig.social.instagram || undefined} aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
            <a href={siteConfig.social.email || undefined} aria-label="Email"><Mail className="h-4 w-4" /></a>
          </span>
        </footer>
      </div>
    </main>
  );
}
