import InfoPageLayout from "@/components/legal/InfoPageLayout";

const sections = [
  {
    title: "Acceptance of Terms",
    paragraphs: [
      "By accessing or using SafeCheck, you agree to these Terms of Service and any additional guidelines or policies incorporated by reference.",
      "If you use the service on behalf of an organization, you represent that you have authority to bind that organization to these terms.",
    ],
  },
  {
    title: "Service Description",
    paragraphs: [
      "SafeCheck is intended to help users schedule check-ins, manage reminders, and notify trusted contacts based on settings chosen by the user.",
      "The service is provided for informational and coordination purposes only and is not a substitute for emergency services, law enforcement, medical support, or other time-critical assistance.",
    ],
  },
  {
    title: "Account Responsibilities",
    paragraphs: [
      "You are responsible for maintaining the accuracy of your account information, protecting your login credentials, and ensuring that the trusted contacts you add are appropriate recipients for alerts.",
      "You agree not to misuse the service, interfere with platform operations, or use SafeCheck in a way that violates applicable law or the rights of others.",
    ],
  },
  {
    title: "Alerts and Availability",
    paragraphs: [
      "Alert delivery may depend on device settings, internet connectivity, third-party messaging providers, and recipient availability. We do not guarantee uninterrupted performance or guaranteed delivery of every alert.",
      "We may modify, suspend, or discontinue parts of the service from time to time, including in connection with maintenance, upgrades, or security needs.",
    ],
  },
  {
    title: "Fees and Trials",
    paragraphs: [
      "If paid plans are introduced, pricing, billing intervals, and renewal terms will be presented to you before purchase. Trial periods, if offered, may convert to paid subscriptions unless canceled before renewal.",
    ],
  },
  {
    title: "Limitation of Liability",
    paragraphs: [
      "To the fullest extent permitted by law, SafeCheck and its affiliates will not be liable for indirect, incidental, special, consequential, or punitive damages arising from or related to your use of the service.",
      "Our total liability for any claim related to the service will not exceed the amount you paid to use the service in the twelve months preceding the event giving rise to the claim, or fifty U.S. dollars if no fees were paid.",
    ],
  },
  {
    title: "Termination",
    paragraphs: [
      "We may suspend or terminate access to the service if you violate these terms, create risk for other users, or use the platform in a fraudulent or unlawful manner.",
      "You may stop using the service at any time. Sections that by their nature should survive termination will continue to apply.",
    ],
  },
];

const Terms = () => {
  return (
    <InfoPageLayout
      title="Terms"
      subtitle="This sample terms page is placeholder legal copy for the SafeCheck demo and is meant to feel complete without serving as final legal advice."
      meta="Demo content • Effective March 27, 2026"
    >
      <div className="space-y-10">
        {sections.map((section) => (
          <section key={section.title} className="border-b border-slate-200 pb-8 last:border-b-0 last:pb-0">
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-900">
              {section.title}
            </h2>
            <div className="mt-4 space-y-4 text-[1rem] leading-7 text-slate-600">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </InfoPageLayout>
  );
};

export default Terms;
