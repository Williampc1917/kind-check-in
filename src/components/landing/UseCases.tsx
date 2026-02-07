import { Moon, Dumbbell, Heart, Car, Clock, House, type LucideIcon } from "lucide-react";

type UseCaseItem = {
  icon: LucideIcon;
  title: string;
  moment: string;
  backup: string;
};

const USE_CASES: UseCaseItem[] = [
  {
    icon: Moon,
    title: "Late-night commute",
    moment: "You are heading home and do not want to remember a manual safety text.",
    backup: "Set a check-in once. If you miss it, your contact gets a calm status alert.",
  },
  {
    icon: Dumbbell,
    title: "Gym session",
    moment: "Your phone is in a locker and your routine runs long.",
    backup: "SafeCheck waits through your grace window before escalating anything.",
  },
  {
    icon: Heart,
    title: "Date night",
    moment: "You want quiet reassurance without live location sharing.",
    backup: "Only check-in status is shared if you do not confirm on time.",
  },
  {
    icon: Car,
    title: "Rideshare or travel",
    moment: "Plans change fast with transfers, delays, or a longer route.",
    backup: "Adjust timing in seconds and keep your backup plan intact.",
  },
  {
    icon: House,
    title: "Walking home",
    moment: "It is a short route, but you still want someone in your corner.",
    backup: "A quick timer runs in the background while you focus on getting home.",
  },
  {
    icon: Clock,
    title: "Quick errand",
    moment: "You step out for ten minutes and forget to update anyone.",
    backup: "No check-in needed unless time runs out and you stay silent.",
  },
];

const SECTION_COPY = {
  title: "Backup for the moments you don't overthink",
  subtitle: "From late rides to quick errands, SafeCheck quietly has your back.",
};

interface UseCasePillProps {
  item: UseCaseItem;
  index: number;
}

const UseCaseCard = ({ item, index }: UseCasePillProps) => (
  <li
    className="rounded-2xl border border-border/80 bg-card p-4 md:p-5 card-shadow transition-transform duration-300 hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-2"
    style={{ animationDelay: `${index * 80}ms` }}
  >
    <div className="flex items-center gap-2.5">
      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
        <item.icon className="w-4 h-4 text-primary" />
      </div>
      <h3 className="text-sm md:text-base font-semibold">{item.title}</h3>
    </div>

    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.moment}</p>

    <div className="mt-4 rounded-xl border border-border/70 bg-muted/40 p-3">
      <p className="text-[11px] uppercase tracking-[0.08em] text-muted-foreground">How SafeCheck helps</p>
      <p className="mt-1 text-sm leading-relaxed">{item.backup}</p>
    </div>
  </li>
);

const UseCases = () => {
  return (
    <section className="py-16 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">{SECTION_COPY.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{SECTION_COPY.subtitle}</p>
        </div>

        <ul className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {USE_CASES.map((item, index) => (
            <UseCaseCard key={item.title} item={item} index={index} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default UseCases;
