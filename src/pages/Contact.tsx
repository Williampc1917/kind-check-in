import InfoPageLayout from "@/components/legal/InfoPageLayout";

const contactCards = [
  {
    title: "Email",
    detail: "hello@safecheck.app",
    note: "Best place for questions, feedback, or anything else related to the app.",
  },
];

const Contact = () => {
  return (
    <InfoPageLayout
      title="Contact"
      subtitle="A simple way to reach me while I’m building SafeCheck."
      meta="Solo builder page • Response times may vary"
    >
      <div className="max-w-2xl space-y-8">
        <section>
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-900">
            Get in touch
          </h2>
          <p className="mt-4 text-[1rem] leading-7 text-slate-600">
            SafeCheck is currently a solo project, so email is the best way to reach me. If you have feedback, found a bug, or want to talk about the product, send a note and I’ll get back to you when I can.
          </p>
        </section>

        <div className="grid gap-4">
          {contactCards.map((card) => (
            <article
              key={card.title}
              className="rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-5 shadow-[0_16px_40px_-34px_rgba(15,23,42,0.3)]"
            >
              <h3 className="text-lg font-semibold text-slate-900">{card.title}</h3>
              <p className="mt-2 text-base font-medium text-slate-700">{card.detail}</p>
              <p className="mt-2 text-sm leading-6 text-slate-500">{card.note}</p>
            </article>
          ))}
        </div>

        <section className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_46px_-36px_rgba(15,23,42,0.22)]">
          <h2 className="text-xl font-semibold tracking-[-0.03em] text-slate-900">
            Good reasons to reach out
          </h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
            <li>Bug reports or rough edges you noticed</li>
            <li>Ideas for reminders, alerts, or trusted contact flows</li>
            <li>Questions about what SafeCheck is trying to do</li>
            <li>Early feedback from using the landing page or product</li>
          </ul>
        </section>
      </div>
    </InfoPageLayout>
  );
};

export default Contact;
