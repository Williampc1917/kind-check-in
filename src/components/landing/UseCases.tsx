import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const MOMENTS = [
  {
    image: `${import.meta.env.BASE_URL}moments/Mockuuups iPhone mockup in the gym.jpeg`,
    alt: "Phone placed near gym gear",
    title: "After-hours workout",
    lead: true,
    imageClassName: "object-[52%_55%]",
  },
  {
    image: `${import.meta.env.BASE_URL}moments/Mockuuups Woman holding an iPhone while scratching a dog in autumn mockup.jpeg`,
    alt: "Phone during a walk with a dog",
    title: "Solo walk",
    lead: false,
    imageClassName: "object-[52%_44%]",
  },
  {
    image: `${import.meta.env.BASE_URL}moments/Mockuuups iPhone mockup held by woman in the lounge setting.jpeg`,
    alt: "Phone on a table while meeting someone new",
    title: "First meetup",
    lead: false,
    imageClassName: "object-[58%_52%]",
  },
];

const revealTransition = {
  duration: 0.85,
  ease: [0.22, 1, 0.36, 1] as const,
};

const LeadMoment = ({
  image,
  alt,
  title,
  imageClassName,
}: {
  image: string;
  alt: string;
  title: string;
  imageClassName?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [-18, 18]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.08]);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={revealTransition}
      className="group relative isolate overflow-hidden rounded-[2.4rem] bg-slate-950 aspect-[5/4] sm:aspect-[16/10] lg:aspect-[1.8/1]"
    >
      <motion.img
        src={image}
        alt={alt}
        loading="lazy"
        decoding="async"
        style={{ y: imageY, scale: imageScale }}
        className={`absolute inset-0 h-full w-full object-cover ${imageClassName ?? ""}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/16 to-black/8" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_32%)]" />

      <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9 md:p-10">
        <h3 className="max-w-[11ch] text-[2rem] font-semibold leading-[0.98] tracking-[-0.05em] text-white sm:text-[2.55rem]">
          {title}
        </h3>
      </div>
    </motion.article>
  );
};

const SupportingMoment = ({
  image,
  alt,
  title,
  delay,
  imageClassName,
}: {
  image: string;
  alt: string;
  title: string;
  delay: number;
  imageClassName?: string;
}) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ ...revealTransition, delay }}
    className="group relative isolate overflow-hidden rounded-[2rem] bg-slate-950 min-h-[18rem] sm:min-h-[19rem]"
  >
    <img
      src={image}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.035] ${imageClassName ?? ""}`}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/68 via-black/12 to-black/8 transition duration-500 group-hover:from-black/58" />

    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
      <h3 className="max-w-[12ch] text-[1.4rem] font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-[1.55rem]">
        {title}
      </h3>
    </div>
  </motion.article>
);

const UseCases = () => {
  const leadMoment = MOMENTS.find((moment) => moment.lead);
  const supportingMoments = MOMENTS.filter((moment) => !moment.lead);

  if (!leadMoment) return null;

  return (
    <section
      id="use-cases"
      className="overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-start lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={revealTransition}
            className="lg:sticky lg:top-28 lg:self-start lg:pt-8"
          >
            <h2 className="max-w-[10ch] text-4xl font-semibold leading-[0.98] tracking-[-0.05em] text-slate-950 md:text-5xl lg:text-[3.6rem]">
              There when you need it.
            </h2>
            <p className="mt-5 max-w-[26ch] text-base leading-7 text-slate-600 md:text-lg md:leading-8">
              Built for the ordinary parts of the day, not just the worst-case ones.
            </p>
            <div className="mt-7 h-px w-16 bg-slate-200" />
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            <div className="sm:col-span-2">
              <LeadMoment
                image={leadMoment.image}
                alt={leadMoment.alt}
                title={leadMoment.title}
                imageClassName={leadMoment.imageClassName}
              />
            </div>

            {supportingMoments.map((moment, index) => (
              <SupportingMoment
                key={moment.title}
                image={moment.image}
                alt={moment.alt}
                title={moment.title}
                delay={0.08 * (index + 1)}
                imageClassName={moment.imageClassName}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
