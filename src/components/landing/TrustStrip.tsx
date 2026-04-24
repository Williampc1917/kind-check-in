import { EyeOff, MapPinOff, RouteOff, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

const privacyPromises = [
  {
    title: "No live location sharing",
    body: "Your location is not streamed or watched in real time.",
    icon: MapPinOff,
  },
  {
    title: "No route history",
    body: "MadeIt does not save where you have been or where you are going.",
    icon: RouteOff,
  },
  {
    title: "No background tracking",
    body: "The app waits for your check-in. It does not follow your day.",
    icon: EyeOff,
  },
] satisfies Array<{
  title: string;
  body: string;
  icon: LucideIcon;
}>;

const TrustStrip = () => (
  <section className="relative overflow-hidden border-y border-slate-200/70 bg-white py-20 md:py-28">
    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-slate-100/70" />

    <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-xl"
      >
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-primary">
          Privacy
        </p>
        <h2 className="mt-4 max-w-[11ch] text-4xl font-semibold leading-[0.98] tracking-[-0.04em] text-slate-950 md:text-5xl lg:text-[3.6rem]">
          Safety, not surveillance.
        </h2>
      </motion.div>

      <div className="mt-12 divide-y divide-slate-200 border-y border-slate-200 md:mt-16">
        {privacyPromises.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.62,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group grid gap-5 py-7 transition duration-300 hover:bg-slate-50/70 sm:grid-cols-[3rem_minmax(0,0.74fr)_minmax(0,1fr)] sm:items-center sm:gap-7 sm:px-4 md:py-8"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-primary transition duration-300 group-hover:border-primary/30 group-hover:bg-primary/5">
                <Icon className="h-5 w-5" strokeWidth={1.9} aria-hidden="true" />
              </div>
              <p className="text-xl font-semibold leading-tight tracking-[-0.035em] text-slate-950 md:text-2xl">
                {item.title}
              </p>
              <p className="max-w-2xl text-sm leading-6 text-slate-500 md:text-base md:leading-7">
                {item.body}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default TrustStrip;
