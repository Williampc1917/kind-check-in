import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "Do my contacts need the app?",
    answer:
      "No. Contacts receive alerts over SMS, so they don't need to download anything. The app is designed to work with people who aren't tech-savvy.",
  },
  {
    question: "Does it share my live location?",
    answer:
      "Never. Only your check-in status is shared, whether you're safe or if your timer expired. Your exact location is never sent to anyone.",
  },
  {
    question: "What happens if I'm just running late?",
    answer:
      "Grace periods are built in. Set extra buffer time when creating a check-in, and even if an alert goes out, one tap on 'I'm safe' stops everything immediately.",
  },
  {
    question: "Can I stop alerts after they've sent?",
    answer:
      "Yes. Tapping 'I'm safe' at any point stops further escalations and sends your contacts an all-clear message.",
  },
  {
    question: "How customizable is escalation?",
    answer:
      "Very. You control who gets notified first, who's next, and the timing between each tier. It's completely up to you.",
  },
  {
    question: "What about pricing?",
    answer:
      "We'll share pricing closer to launch. Our goal is to make personal safety accessible, with a free tier for core features and affordable plans for power users.",
  },
];

const FAQ = () => {
  const left = FAQS.slice(0, 3);
  const right = FAQS.slice(3, 6);

  return (
    <section id="faq" className="bg-background py-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">

        <div className="mb-10 md:mb-14">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slate-500">
            FAQ
          </p>
          <h2 className="mt-3 max-w-[18ch] text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-slate-900 md:text-5xl">
            A few things to know.
          </h2>
        </div>

        <div className="grid gap-x-16 md:grid-cols-2">
          {[left, right].map((col, colIndex) => (
            <Accordion key={colIndex} type="single" collapsible className="border-t border-slate-200">
              {col.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`col-${colIndex}-item-${i}`}
                  className="border-b border-slate-200"
                >
                  <AccordionTrigger className="py-5 text-left text-[0.95rem] font-semibold leading-snug tracking-[-0.01em] text-slate-900 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-[0.88rem] leading-7 text-slate-500">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
