import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type SceneItem = {
  title: string;
  illustrationBrief: string;
};

const SCENES: SceneItem[] = [
  {
    title: "Late-night commute",
    illustrationBrief: "Person walking under streetlights, headphones on, relaxed posture",
  },
  {
    title: "Gym session",
    illustrationBrief: "Person mid-workout, phone in locker implied",
  },
  {
    title: "Date night",
    illustrationBrief: "Two people at cafe table, warm ambient lighting",
  },
  {
    title: "Rideshare",
    illustrationBrief: "Person in back seat, city buildings passing by",
  },
  {
    title: "Walking home",
    illustrationBrief: "Person on quiet residential street, peaceful night",
  },
  {
    title: "Quick errand",
    illustrationBrief: "Person at coffee shop counter, casual vibe",
  },
];

const SECTION_COPY = {
  title: "Backup for the moments you don't overthink",
  subtitle: "From late rides to quick errands, SafeCheck quietly has your back.",
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
    {/* Gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/20 transition-all duration-500 group-hover:from-primary/10 group-hover:to-primary/25" />
    
    {/* Illustration placeholder */}
    <div className="absolute inset-0 flex items-center justify-center p-6">
      <div className="text-center">
        <div className="w-28 h-36 sm:w-32 sm:h-40 mx-auto rounded-2xl border-2 border-dashed border-primary/30 flex items-center justify-center p-3 bg-background/50 backdrop-blur-sm">
          <span className="text-[10px] sm:text-xs text-muted-foreground text-center leading-relaxed">
            {scene.illustrationBrief}
          </span>
        </div>
      </div>
    </div>
    
    {/* Title overlay at bottom */}
    <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-background via-background/80 to-transparent">
      <h3 className="text-lg font-semibold text-foreground">{scene.title}</h3>
    </div>
    
    {/* Subtle hover scale effect */}
    <div className="absolute inset-0 transition-transform duration-300 group-hover:scale-[1.02]" />
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

          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-secondary to-transparent z-[5] pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-secondary to-transparent z-[5] pointer-events-none" />

          {/* Horizontal scroll container */}
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 px-4 -mx-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
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
