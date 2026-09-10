import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Beaker,
  Heart,
  Leaf,
  Menu,
  Search,
  ShieldCheck,
  UsersRound,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import familyImage from "@/assets/bliss-family-hero.jpg.asset.json";
import logoImage from "@/assets/bliss-together-logo.png.asset.json";
import brainBooster from "@/assets/kids-brain-booster.jpeg.asset.json";
import eyeCare from "@/assets/eye-care.jpeg.asset.json";
import immunity from "@/assets/kids-immunity.jpeg.asset.json";
import hairSkinNails from "@/assets/hair-skin-nails.jpeg.asset.json";
import preProbiotic from "@/assets/pre-probiotic.jpeg.asset.json";
import melatonin from "@/assets/melatonin.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bliss Together | Nourish. Balance. Thrive." },
      {
        name: "description",
        content: "Thoughtfully crafted gummy nutrition for every age, every need and every step of your wellness journey.",
      },
      { property: "og:title", content: "Bliss Together | Nourish. Balance. Thrive." },
      {
        property: "og:description",
        content: "Thoughtfully crafted gummy nutrition for every age and every need.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navigation = ["Home", "About Krishiv", "Products", "Behind the Product", "Contact"];

const products = [
  { name: "Kids Brain Booster Gummies", image: brainBooster.url },
  { name: "Eye Care Gummies", image: eyeCare.url },
  { name: "Kids Immunity Booster Gummies", image: immunity.url },
  { name: "Hair-Skin-Nails Gummies", image: hairSkinNails.url },
  { name: "Pre + Probiotic Multivitamin Gummies", image: preProbiotic.url },
  { name: "Melatonin Gummies", image: melatonin.url },
];

const values = [
  { label: "Natural Ingredients", Icon: Leaf },
  { label: "Science Backed", Icon: Beaker },
  { label: "Safe & High Quality", Icon: ShieldCheck },
  { label: "For Every Age, Every Need", Icon: UsersRound },
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-border/70 bg-background/95">
      <div className="mx-auto grid h-[76px] max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8 lg:grid-cols-[210px_minmax(0,1fr)_210px] lg:px-10 xl:px-14">
        <a href="#hero" aria-label="Bliss Together home" className="inline-flex min-w-0 items-center">
          <img
            src={logoImage.url}
            alt="Bliss Together — Nourish. Balance. Thrive."
            width={952}
            height={692}
            className="h-[68px] w-auto max-w-[180px] object-contain object-left sm:max-w-[195px]"
          />
        </a>

        <nav aria-label="Main navigation" className="hidden items-stretch justify-center self-stretch lg:flex">
          {navigation.map((item, index) => (
            <a
              key={item}
              href="#hero"
              aria-current={index === 0 ? "page" : undefined}
              className="relative flex items-center px-3 text-[0.72rem] font-medium text-foreground/80 transition-colors hover:text-primary xl:px-4 xl:text-[0.76rem]"
            >
              {item}
              {index === 0 && <span className="absolute inset-x-3 bottom-0 h-px bg-primary" />}
            </a>
          ))}
        </nav>

        <div className="hidden items-center justify-end gap-2 lg:flex">
          <Button variant="ghost" size="icon" aria-label="Search">
            <Search aria-hidden="true" />
          </Button>
          <Button variant="wellness" size="default" asChild>
            <a href="#products">Explore Wellness <ArrowRight aria-hidden="true" /></a>
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="lg:hidden"
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </Button>
      </div>

      {open && (
        <nav aria-label="Mobile navigation" className="absolute inset-x-0 top-full border-b border-border bg-background px-5 py-5 shadow-lg lg:hidden">
          <div className="mx-auto flex max-w-[1440px] flex-col">
            {navigation.map((item, index) => (
              <a
                key={item}
                href="#hero"
                onClick={() => setOpen(false)}
                aria-current={index === 0 ? "page" : undefined}
                className="border-b border-border/60 py-3 text-sm font-medium text-foreground last:border-0"
              >
                {item}
              </a>
            ))}
            <Button variant="wellness" size="wellness" asChild className="mt-4 w-full">
              <a href="#products" onClick={() => setOpen(false)}>Explore Wellness <ArrowRight aria-hidden="true" /></a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}

function ProductShowcase() {
  return (
    <div id="products" className="relative z-10 -mt-10 px-3 sm:-mt-14 sm:px-5 lg:-mt-16 lg:px-4 xl:-mt-20">
      <div className="grid grid-cols-6 items-end gap-1 sm:gap-2">
        {products.map((product, index) => (
          <figure
            key={product.name}
            className={`group relative min-w-0 ${index % 2 === 0 ? "translate-y-1" : "-translate-y-1"}`}
          >
            <div className="aspect-[0.7] overflow-hidden rounded-t-[7px] bg-hero-surface shadow-[0_10px_22px_oklch(0.22_0.04_155/0.13)] transition-transform duration-300 group-hover:-translate-y-1">
              <img
                src={product.image}
                alt={product.name}
                loading="eager"
                className="h-full w-full object-contain object-center p-1.5 sm:p-2"
              />
            </div>
            <figcaption className="sr-only">{product.name}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

function TrustIndicators() {
  return (
    <ul className="mt-8 grid grid-cols-4 gap-2 border-t border-border/80 pt-6 sm:mt-10 sm:gap-4 lg:max-w-[560px]">
      {values.map(({ label, Icon }) => (
        <li key={label} className="flex min-w-0 flex-col items-center text-center">
          <span className="mb-2 grid size-10 place-items-center rounded-full border border-primary/20 bg-background text-primary sm:size-11">
            <Icon aria-hidden="true" className="size-5" strokeWidth={1.5} />
          </span>
          <span className="text-[0.62rem] font-semibold leading-[1.25] text-foreground sm:text-[0.7rem]">{label}</span>
        </li>
      ))}
    </ul>
  );
}

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main id="hero" className="relative">
        <section className="mx-auto grid max-w-[1440px] lg:grid-cols-[43%_57%]">
          <div className="hero-reveal flex flex-col justify-center px-6 pb-9 pt-10 sm:px-10 sm:pb-12 sm:pt-12 lg:px-10 lg:py-12 xl:px-14 xl:py-14">
            <p className="mb-5 text-[0.68rem] font-semibold uppercase text-gold sm:text-xs">
              Small gummies. Bigger possibilities.
            </p>
            <h1 className="font-display text-[3.45rem] leading-[0.91] text-primary sm:text-[4.7rem] lg:text-[4.5rem] xl:text-[5.35rem]">
              Nourish.<br />Balance.<br /><span className="text-gold">Thrive.</span>
            </h1>
            <p className="mt-6 max-w-[430px] text-[0.92rem] leading-6 text-foreground/78 sm:text-base sm:leading-7">
              Thoughtfully crafted gummy nutrition for every age, every need and every step of your wellness journey.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button variant="wellness" size="wellness" asChild>
                <a href="#products">Explore Our Wellness Range <ArrowRight aria-hidden="true" /></a>
              </Button>
              <Button variant="wellnessOutline" size="wellness">
                Our Story
              </Button>
            </div>
            <TrustIndicators />
          </div>

          <div className="image-reveal relative flex min-w-0 flex-col justify-end px-4 pb-5 sm:px-8 lg:px-0 lg:pb-0 lg:pr-5 xl:pr-8">
            <div className="relative aspect-[1.2] overflow-hidden rounded-t-[28px] rounded-br-[7px] rounded-bl-[7px] bg-muted sm:aspect-[1.35] lg:aspect-auto lg:h-[575px] xl:h-[640px]">
              <img
                src={familyImage.url}
                alt="A joyful family sharing gummies together at home"
                width={1440}
                height={1080}
                fetchPriority="high"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute right-4 top-5 max-w-[130px] text-right font-display text-[1.35rem] leading-tight text-primary sm:right-7 sm:top-8 sm:text-2xl">
                Wellness is Better Together
                <Heart aria-hidden="true" className="ml-auto mt-2 size-5" strokeWidth={1.3} />
              </div>
            </div>
            <ProductShowcase />
          </div>
        </section>
      </main>
    </div>
  );
}
