import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Do my contacts need the app?",
      answer: "No! That's the beauty of it. Contacts receive notifications via SMS, so they don't need to download anything. The app is designed to work seamlessly with people who aren't tech-savvy.",
    },
    {
      question: "Does it share my live location?",
      answer: "Never. We only send status updates, whether you're safe or if your timer has expired. Your exact location is never shared with contacts. Privacy is at the core of everything we build.",
    },
    {
      question: "What happens if I'm just late?",
      answer: "Grace periods are built in! You can set extra buffer time when creating a check-in. And even if alerts go out, one tap on 'I'm safe' immediately stops everything and updates your contacts.",
    },
    {
      question: "Can I stop alerts after they start?",
      answer: "Absolutely. You can tap 'I'm safe' at any point, even after the initial alert. This immediately stops any future escalations and sends your contacts an 'all good' message.",
    },
    {
      question: "How customizable is escalation?",
      answer: "Very! You control a three-tier escalation ladder. Choose who gets notified first, who's next, and when. Set the timing between tiers. It's completely up to you.",
    },
    {
      question: "Is it free? What about pricing?",
      answer: "We'll share pricing details closer to launch. Our goal is to make personal safety accessible to everyone, with a free tier for basic features and affordable plans for power users.",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Frequently asked questions</h2>
            <p className="text-muted-foreground">
              Everything you need to know about SafeCheck.
            </p>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 card-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
