import InfoPageLayout from "@/components/legal/InfoPageLayout";

const sections = [
  {
    title: "Information We Collect",
    paragraphs: [
      "SafeCheck may collect information you provide directly, including your name, email address, account details, trusted contact information, and any check-in notes you choose to save.",
      "We may also collect device and usage information such as app version, browser type, IP address, approximate location derived from your network, and diagnostic events used to keep the service reliable.",
    ],
  },
  {
    title: "How We Use Information",
    paragraphs: [
      "We use information to operate the service, deliver check-in reminders, notify trusted contacts when your alert settings require it, respond to support requests, and improve product performance.",
      "We may also use aggregated and de-identified usage data to understand trends, measure feature adoption, and plan future product improvements.",
    ],
  },
  {
    title: "Sharing and Disclosure",
    paragraphs: [
      "We may share information with service providers who support hosting, customer communications, analytics, and security monitoring, but only as needed for them to perform those services.",
      "If you designate trusted contacts, the information shared with them will depend on your alert settings and may include your name, check-in status, and the last update you chose to share.",
    ],
  },
  {
    title: "Data Retention",
    paragraphs: [
      "We keep account information for as long as your account remains active and for a limited period afterward when necessary for legal, security, or operational purposes.",
      "Check-in history and support correspondence may be retained for a reasonable period so we can troubleshoot issues, resolve disputes, and improve the service experience.",
    ],
  },
  {
    title: "Your Choices",
    paragraphs: [
      "You may request access to, correction of, or deletion of certain personal information by contacting our team. Depending on your jurisdiction, you may also have rights related to data portability or limiting specific uses.",
      "You can manage notification permissions, update trusted contact details, and change reminder preferences from within your account settings when those features are available.",
    ],
  },
  {
    title: "Security",
    paragraphs: [
      "We use reasonable administrative, technical, and physical safeguards designed to protect personal information. No system is perfectly secure, and we cannot guarantee absolute security.",
    ],
  },
];

const Privacy = () => {
  return (
    <InfoPageLayout
      title="Privacy"
      subtitle="This demo privacy policy shows how SafeCheck could explain what data it collects, how it uses it, and the choices available to customers."
      meta="Demo content • Last updated March 27, 2026"
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

export default Privacy;
