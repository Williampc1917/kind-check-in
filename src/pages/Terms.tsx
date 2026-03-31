import InfoPageLayout from "@/components/legal/InfoPageLayout";

const sections = [
  {
    title: "Acceptance of Terms",
    paragraphs: [
      "By accessing or using SafeCheck, you agree to these Terms of Service and any additional guidelines or policies incorporated by reference, including our Privacy Policy.",
      "If you use the service on behalf of an organization, you represent that you have authority to bind that organization to these terms.",
    ],
  },
  {
    title: "Service Description",
    paragraphs: [
      "SafeCheck is a personal safety check-in app that allows you to schedule check-ins, set deadlines and grace periods, and notify trusted contacts via SMS if you do not check in on time.",
      "The service is provided for informational and coordination purposes only. SafeCheck is not a substitute for emergency services, law enforcement, medical support, or other time-critical assistance. If you or someone else is in immediate danger, call 911 or your local emergency number.",
    ],
  },
  {
    title: "SMS Messaging",
    paragraphs: [
      "SafeCheck sends SMS text messages to the trusted contacts you designate. By adding a trusted contact, you represent that you have a legitimate personal relationship with that contact and that sending them a consent request is appropriate.",
      "Your trusted contacts will receive a consent request SMS before any alert messages are sent to them. Contacts must reply YES to opt in. No escalation alerts are sent to contacts who have not consented.",
      "Contacts can opt out at any time by replying STOP to any message from SafeCheck. All opt-out requests are honored immediately. Contacts may re-enable messages by replying START or UNSTOP.",
      "Message and data rates may apply to messages sent to and received from your trusted contacts. Message frequency depends on how often you run check-ins and how many contacts you have.",
      "You agree not to add contacts for the purpose of sending unsolicited messages, to misrepresent your identity in check-in templates, or to use the SMS feature in any way that violates applicable law including the Telephone Consumer Protection Act (TCPA).",
    ],
  },
  {
    title: "Account Responsibilities",
    paragraphs: [
      "You are responsible for maintaining the accuracy of your account information, protecting your login credentials, and ensuring that the trusted contacts you add are appropriate recipients for safety alerts.",
      "You agree not to misuse the service, interfere with platform operations, or use SafeCheck in a way that violates applicable law or the rights of others.",
      "You are responsible for the content of any personal notes you attach to check-in templates and include in SMS alerts sent to your contacts.",
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
      "If paid plans are introduced, pricing, billing intervals, and renewal terms will be presented to you before purchase. Trial periods, if offered, may convert to paid subscriptions unless canceled before the trial ends.",
    ],
  },
  {
    title: "Intellectual Property",
    paragraphs: [
      "SafeCheck and its content, features, and functionality are owned by us and are protected by applicable intellectual property laws. You may not copy, modify, distribute, or reverse engineer any part of the service.",
    ],
  },
  {
    title: "Disclaimer of Warranties",
    paragraphs: [
      "The service is provided on an 'as is' and 'as available' basis without warranties of any kind, either express or implied, including warranties of merchantability, fitness for a particular purpose, or non-infringement.",
      "We do not warrant that the service will be uninterrupted, error-free, or that SMS alerts will be delivered in every instance.",
    ],
  },
  {
    title: "Limitation of Liability",
    paragraphs: [
      "To the fullest extent permitted by law, SafeCheck and its affiliates will not be liable for indirect, incidental, special, consequential, or punitive damages arising from or related to your use of the service, including any failure of SMS delivery.",
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
  {
    title: "Governing Law",
    paragraphs: [
      "These terms are governed by the laws of the State of New York, without regard to its conflict of law principles. Any disputes arising under these terms will be subject to the exclusive jurisdiction of the courts located in New York.",
    ],
  },
  {
    title: "Changes to These Terms",
    paragraphs: [
      "We may update these Terms of Service from time to time. When we do, we will update the effective date at the top of this page. Continued use of SafeCheck after changes take effect constitutes your acceptance of the updated terms.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "For questions about these terms, contact us at support@safecheck.app.",
    ],
  },
];

const Terms = () => {
  return (
    <InfoPageLayout
      title="Terms of Service"
      subtitle="Please read these terms carefully before using SafeCheck."
      meta="Effective March 31, 2026"
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
