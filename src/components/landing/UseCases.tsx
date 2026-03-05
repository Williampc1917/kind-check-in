import { type CSSProperties, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type SceneItem = {
  title: string;
  illustrationBrief?: string;
  image?: {
    src: string;
    webp?: string;
    alt: string;
  };
};

const SCENES: SceneItem[] = [
  {
    title: "Yoga Class",
    image: {
      src: "/moments/backup-yoga-mockup.jpg",
      webp: "/moments/backup-yoga-mockup.webp",
      alt: "iPhone mockup with workout gear for yoga practice",
    },
  },
  {
    title: "At the Gym",
    image: {
      src: "/moments/Mockuuups iPhone mockup in the gym.jpeg",
      alt: "iPhone mockup in the gym",
    },
  },
  {
    title: "On a Park Bench",
    image: {
      src: "/moments/Mockuuups iPhone mockup on the outdoor bench.jpeg",
      alt: "iPhone mockup on an outdoor bench",
    },
  },
  {
    title: "Out and About",
    image: {
      src: "/moments/Mockuuups Woman in sweater holding an iPhone mockup.jpeg",
      alt: "Woman in sweater holding an iPhone mockup",
    },
  },
  {
    title: "Date Night",
    image: {
      src: "/moments/Mockuuups iPhone mockup held by woman in the lounge setting.jpeg",
      alt: "Woman holding an iPhone mockup in a lounge setting",
    },
  },
  {
    title: "Walking the Dog",
    image: {
      src: "/moments/Mockuuups Woman holding an iPhone while scratching a dog in autumn mockup.jpeg",
      alt: "Woman holding an iPhone while scratching a dog in autumn",
    },
  },
];

const SECTION_COPY = {
  title: "Backup for the moments you don't overthink",
  subtitle: "From late rides to quick errands, SafeCheck quietly has your back.",
};

const EDGE_FADE_MASK: CSSProperties = {
  WebkitMaskImage:
    "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
  maskImage:
    "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
  WebkitMaskSize: "100% 100%",
  maskSize: "100% 100%",
};

interface SceneCardProps {
  scene: SceneItem;
  index: number;
}

const SceneCard = ({ scene, index }: SceneCardProps) => (
  <div
    className="min-w-[260px] sm:min-w-[280px] h-[340px] sm:h-[380px] rounded-3xl overflow-hidden relative group flex-shrink-0 snap-center"
    style={{ animationDelay: `${index * 100}ms` }}
  >
    {/* Card visual */}
    <div className="absolute inset-0">
      {scene.image ? (
        <picture>
          {scene.image.webp && <source srcSet={scene.image.webp} type="image/webp" />}
          <img
            src={scene.image.src}
            alt={scene.image.alt}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </picture>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <div className="text-center">
            <div className="w-28 h-36 sm:w-32 sm:h-40 mx-auto rounded-2xl border-2 border-dashed border-primary/30 flex items-center justify-center p-3 bg-background/50 backdrop-blur-sm">
              <span className="text-[10px] sm:text-xs text-muted-foreground text-center leading-relaxed">
                {scene.illustrationBrief ?? "Scene concept preview"}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>

    {/* Darken photo slightly for readable title text */}
    {scene.image && (
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
    )}

    {/* Title overlay at bottom */}
    <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
      <h3 className="text-lg font-semibold text-white">{scene.title}</h3>
    </div>
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
    <section className="py-16 md:py-24 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3">
            {SECTION_COPY.title}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {SECTION_COPY.subtitle}
          </p>
        </div>

        {/* Scroll container wrapper */}
        <div className="relative">
          {/* Navigation arrows - hidden on mobile */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 hidden md:flex h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm shadow-lg border-border/50 hover:bg-background"
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 hidden md:flex h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm shadow-lg border-border/50 hover:bg-background"
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Horizontal scroll container */}
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 px-4 -mx-4"
            style={{ ...EDGE_FADE_MASK, scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {SCENES.map((scene, index) => (
              <SceneCard key={scene.title} scene={scene} index={index} />
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
