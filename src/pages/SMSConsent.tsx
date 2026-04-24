import { Link } from "react-router-dom";
import InfoPageLayout from "@/components/legal/InfoPageLayout";

const optInSteps = [
  "A MadeIt user adds a trusted contact in the MadeIt app.",
  "The contact appears in the app as not yet contacted.",
  "The user sends a consent request from the trusted contact screen.",
  "MadeIt sends that contact a consent request SMS.",
  "The contact moves to a pending/waiting state while MadeIt waits for their reply.",
  "The contact must reply YES to accept.",
  "MadeIt records the YES reply and marks the contact as confirmed.",
  "Only confirmed contacts can receive MadeIt safety alert SMS messages.",
];

const statuses = [
  {
    status: "Not contacted",
    meaning: "The contact was added, but no consent request has been sent yet.",
    eligible: "No",
  },
  {
    status: "Pending",
    meaning: "A consent request was sent and MadeIt is waiting for the contact to reply YES.",
    eligible: "No",
  },
  {
    status: "Confirmed",
    meaning: "The contact replied YES or later rejoined with START/UNSTOP after opting out.",
    eligible: "Yes",
  },
  {
    status: "Opted out",
    meaning: "The contact replied STOP or another opt-out keyword.",
    eligible: "No",
  },
  {
    status: "Unreachable",
    meaning: "The consent request could not be delivered or the number appears invalid.",
    eligible: "No",
  },
];

const messageSamples = [
  {
    title: "Consent request message",
    description: "This is the first SMS MadeIt sends to a trusted contact. The name changes based on the MadeIt user's display name.",
    body: "Sarah added you as a safety contact on MadeIt. If they\ndon't check in safely, you'll receive a text alert.\nReply YES to accept or STOP to decline.",
  },
  {
    title: "Confirmation after YES",
    description: "When the trusted contact replies YES, MadeIt confirms the opt-in.",
    body: "MadeIt: You're confirmed as Sarah's safety contact. Reply STOP to opt out.",
  },
  {
    title: "Safety alert without a personal note",
    description: "MadeIt sends safety alerts only to trusted contacts who have replied YES.",
    body: "MadeIt: Sarah hasn't checked in for Walking Home - due by 11:30 PM.",
  },
  {
    title: "Safety alert with a personal note",
    description: "A MadeIt user may include a personal note with an alert.",
    body: "MadeIt: Sarah hasn't checked in for Walking Home - due by 11:30 PM.\n\nSarah says: \"Please try calling me.\"",
  },
  {
    title: "Follow-up alert",
    description: "Follow-up alerts can be sent to confirmed contacts if the user still has not checked in.",
    body: "MadeIt: Follow-up - Sarah still hasn't checked in for Walking Home.\n\nSarah says: \"I'm not picking up texts, please call.\"",
  },
  {
    title: "Resolved update",
    description: "Confirmed contacts may receive a resolved update when the user later checks in safely.",
    body: "MadeIt: Sarah checked in safely.",
  },
];

const messageTypes = [
  "consent requests",
  "opt-in confirmations",
  "safety alerts when a MadeIt user misses a check-in deadline",
  "resolved updates when the user later checks in safely",
];

const SMSConsent = () => {
  return (
    <InfoPageLayout
      title="SMS Consent for MadeIt Trusted Contacts"
      subtitle="This public page explains how trusted contacts opt in before receiving MadeIt SMS safety alerts."
      meta="Public SMS consent proof • Stable URL /sms-consent"
    >
      <div className="space-y-10">
        <section className="border-b border-slate-200 pb-8">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-900">
            Who Receives MadeIt Text Messages?
          </h2>
          <div className="mt-4 space-y-4 text-[1rem] leading-7 text-slate-600">
            <p>
              MadeIt is a personal safety check-in app. A MadeIt user can add trusted contacts,
              such as a friend, family member, partner, or coworker, who may be notified if the
              user does not check in safely.
            </p>
            <p className="font-semibold text-slate-900">
              The trusted contact is the SMS recipient who must consent before receiving alerts.
              MadeIt does not send safety alert text messages to that trusted contact until they
              give consent by replying YES to MadeIt's consent request SMS.
            </p>
            <p>
              Adding a phone number in the MadeIt app does not by itself opt that contact into
              alerts. Imported contacts and manually entered contacts follow the same consent
              process.
            </p>
          </div>
        </section>

        <section className="border-b border-slate-200 pb-8">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-900">
            How Trusted Contacts Opt In
          </h2>
          <ol className="mt-5 space-y-3 text-[1rem] leading-7 text-slate-600">
            {optInSteps.map((step, index) => (
              <li key={step} className="grid grid-cols-[2rem_1fr] gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-[1rem] leading-7 text-slate-600">
            If the contact does not reply YES, the contact remains pending and does not receive
            safety alerts. The MadeIt user may resend the consent request from the app, subject to
            resend cooldowns and rate limits.
          </p>
        </section>

        <section className="border-b border-slate-200 pb-8">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-900">
            Consent Status in the App
          </h2>
          <p className="mt-4 text-[1rem] leading-7 text-slate-600">
            The MadeIt trusted contacts screen shows each contact's consent status so the user
            knows whether that contact can receive alerts.
          </p>
          <div className="mt-5 overflow-hidden rounded-[1.25rem] border border-slate-200">
            <div className="grid grid-cols-[0.8fr_1.5fr_0.7fr] gap-4 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800">
              <span>Status</span>
              <span>Meaning</span>
              <span>Alert eligible?</span>
            </div>
            {statuses.map((item) => (
              <div
                key={item.status}
                className="grid grid-cols-1 gap-2 border-t border-slate-200 px-4 py-3 text-sm sm:grid-cols-[0.8fr_1.5fr_0.7fr] sm:gap-4"
              >
                <span className="font-semibold text-slate-900">{item.status}</span>
                <span className="leading-6 text-slate-600">{item.meaning}</span>
                <span className="font-medium text-slate-700">{item.eligible}</span>
              </div>
            ))}
          </div>
          <p className="mt-5 text-[1rem] leading-7 text-slate-600">
            The app may show actions such as Send consent, Resend consent, Request consent again,
            or Retry consent depending on the contact's current status. These actions do not
            bypass consent: safety alerts are still sent only after the contact is confirmed.
          </p>
        </section>

        <section className="border-b border-slate-200 pb-8">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-900">
            Sample SMS Messages
          </h2>
          <div className="mt-5 space-y-6">
            {messageSamples.map((message) => (
              <article key={message.title}>
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-slate-900">
                  {message.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{message.description}</p>
                <pre className="mt-3 whitespace-pre-wrap rounded-[1rem] border border-slate-200 bg-slate-50 p-4 font-mono text-sm leading-6 text-slate-800">
                  {message.body}
                </pre>
              </article>
            ))}
          </div>
        </section>

        <section className="border-b border-slate-200 pb-8">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-900">
            Opting Out
          </h2>
          <div className="mt-4 space-y-4 text-[1rem] leading-7 text-slate-600">
            <p>
              Trusted contacts can opt out at any time by replying STOP to any MadeIt text
              message. After a trusted contact replies STOP, MadeIt does not send further SMS
              messages to that phone number unless the contact later opts back in.
            </p>
            <p>
              To opt back in after replying STOP, the contact can reply START or UNSTOP to the
              MadeIt SMS number.
            </p>
          </div>
        </section>

        <section className="border-b border-slate-200 pb-8">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-900">
            Message Type and Frequency
          </h2>
          <p className="mt-4 text-[1rem] leading-7 text-slate-600">
            MadeIt SMS messages are transactional safety notifications, not marketing. The
            messages are limited to:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-6 text-[1rem] leading-7 text-slate-600">
            {messageTypes.map((type) => (
              <li key={type}>{type}</li>
            ))}
          </ul>
          <p className="mt-4 text-[1rem] leading-7 text-slate-600">
            Message frequency varies based on how often the MadeIt user starts check-ins, whether
            they miss a deadline, and how many confirmed trusted contacts they have. Message and
            data rates may apply.
          </p>
        </section>

        <section className="border-b border-slate-200 pb-8">
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-900">
            Emergency Services Notice
          </h2>
          <p className="mt-4 text-[1rem] leading-7 text-slate-600">
            MadeIt is not an emergency service and is not a substitute for 911, emergency medical
            services, law enforcement, or other professional emergency response. If you are in
            immediate danger, contact local emergency services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-900">
            Privacy and SMS Consent
          </h2>
          <div className="mt-4 space-y-4 text-[1rem] leading-7 text-slate-600">
            <p>
              MadeIt does not sell or share mobile phone numbers or SMS consent information with
              third parties or affiliates for marketing or promotional purposes.
            </p>
            <p>
              This page is public, stable, and viewable without login, app install, cookies, or
              any gated flow. Review MadeIt's{" "}
              <Link className="font-medium text-slate-900 underline underline-offset-4" to="/privacy">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link className="font-medium text-slate-900 underline underline-offset-4" to="/terms">
                Terms of Service
              </Link>
              .
            </p>
          </div>
        </section>
      </div>
    </InfoPageLayout>
  );
};

export default SMSConsent;
