import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type SceneItem = {
  image: {
    src: string;
    webp?: string;
    alt: string;
  };
};

const SCENES: SceneItem[] = [
  {
    image: {
      src: `${import.meta.env.BASE_URL}moments/backup-yoga-mockup.jpg`,
      webp: `${import.meta.env.BASE_URL}moments/backup-yoga-mockup.webp`,
      alt: "iPhone mockup with workout gear for yoga practice",
    },
  },
  {
    image: {
      src: `${import.meta.env.BASE_URL}moments/Mockuuups iPhone mockup in the gym.jpeg`,
      alt: "iPhone mockup in the gym",
    },
  },
  {
    image: {
      src: `${import.meta.env.BASE_URL}moments/Mockuuups iPhone mockup on the outdoor bench.jpeg`,
      alt: "iPhone mockup on an outdoor bench",
    },
  },
  {
    image: {
      src: `${import.meta.env.BASE_URL}moments/Mockuuups Woman in sweater holding an iPhone mockup.jpeg`,
      alt: "Woman in sweater holding an iPhone mockup",
    },
  },
  {
    image: {
      src: `${import.meta.env.BASE_URL}moments/Mockuuups iPhone mockup held by woman in the lounge setting.jpeg`,
      alt: "Woman holding an iPhone mockup in a lounge setting",
    },
  },
  {
    image: {
      src: `${import.meta.env.BASE_URL}moments/Mockuuups Woman holding an iPhone while scratching a dog in autumn mockup.jpeg`,
      alt: "Woman holding an iPhone while scratching a dog in autumn",
    },
  },
];

const SECTION_COPY = {
  eyebrow: "Use cases",
  title: "For the in-between moments",
  subtitle: "From late rides to quick errands, SafeCheck quietly has your back.",
};

interface SceneCardProps {
  scene: SceneItem;
  index: number;
}

const SceneCard = ({ scene, index }: SceneCardProps) => (
  <div
    className="group relative h-[340px] min-w-[260px] flex-shrink-0 snap-center overflow-hidden rounded-[2rem] border border-white/70 bg-white/60 shadow-[0_24px_60px_-38px_rgba(15,23,42,0.38)] sm:h-[380px] sm:min-w-[280px]"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    <div className="absolute inset-0">
      <picture>
        {scene.image.webp && <source srcSet={scene.image.webp} type="image/webp" />}
        <img
          src={scene.image.src}
          alt={scene.image.alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
        />
      </picture>
    </div>

    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_0%,rgba(15,23,42,0.08)_100%)] opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
  </div>
);

const UseCases = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="use-cases" className="py-16 md:py-24 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto mb-10 max-w-4xl text-center md:mb-14">
          <div className="mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slate-500">
            {SECTION_COPY.eyebrow}
          </div>
          <h2 className="mx-auto mb-4 max-w-[16ch] text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-slate-900 md:text-5xl lg:text-[3.5rem]">
            {SECTION_COPY.title}
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-7 text-slate-600 md:text-lg md:leading-8">
            {SECTION_COPY.subtitle}
          </p>
        </div>

        {/* Scroll container wrapper */}
        <div className="relative">
          <Button
            variant="outline"
            size="icon"
            className="absolute left-3 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 rounded-full border-white/70 bg-white/88 shadow-[0_12px_30px_-18px_rgba(15,23,42,0.35)] backdrop-blur-sm hover:bg-white md:flex"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-3 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 rounded-full border-white/70 bg-white/88 shadow-[0_12px_30px_-18px_rgba(15,23,42,0.35)] backdrop-blur-sm hover:bg-white md:flex"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto px-4 pb-4 pt-2 scrollbar-hide snap-x snap-mandatory -mx-4 md:gap-6 md:px-10"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {SCENES.map((scene, index) => (
              <SceneCard key={scene.image.src} scene={scene} index={index} />
            ))}
          </div>
        </div>

        {/* Scroll hint for mobile */}
        <p className="text-center text-xs text-muted-foreground mt-4 md:hidden">
          Swipe to explore →
        </p>
      </div>
    </section>
  );
};

export default UseCases;
