import InfoPageLayout from "@/components/legal/InfoPageLayout";

const sections = [
  {
    title: "Information We Collect",
    paragraphs: [
      "Account information: When you create a MadeIt account, we collect your email address and the display name you provide during onboarding. If you sign in with Google, we receive your Google account email via OAuth. Apple Sign-In may provide a private relay email address.",
      "App preferences: We store your time format preference (12-hour or 24-hour), time zone, and notification settings — including whether you have enabled check-in reminders and promotional updates.",
      "Device information: We collect your device's push notification token (APNs), app version, iOS version, notification permission state, Live Activities permission state, and last active timestamp. This is used solely to deliver push notifications to your device.",
      "Trusted contact information: When you add a trusted contact, we store their name, phone number (normalized to E.164 international format), the source of the contact (manually entered or imported from Apple Contacts), and their consent status with us.",
      "Check-in data: We store the check-in templates you create, including names, deadlines, grace periods, escalation steps, and any personal notes you attach. We store active and completed check-in run history including start times, deadlines, and alert delivery records.",
      "SMS delivery and consent data: We record when consent request messages are sent to trusted contacts, delivery status, whether contacts replied YES (opt-in) or STOP (opt-out), and timestamps for all consent state changes. Inbound keyword replies (YES, STOP, START, HELP) from contacts are captured for consent management.",
      "Subscription information: We collect your subscription state (free, trial, or Pro) through RevenueCat, including purchase timestamps, renewal status, and entitlement history.",
      "Usage and audit data: We maintain internal logs of rate-limit enforcement, message delivery attempts, and system events for security, abuse prevention, and service reliability. These logs do not contain message content beyond system-generated safety alerts.",
    ],
  },
  {
    title: "How We Use Your Information",
    paragraphs: [
      "We use your information to operate MadeIt: to authenticate you, run check-in timers, deliver push notifications to your device, send SMS alerts to your trusted contacts when a check-in is missed, and send you a resolved update when you check in safely.",
      "Your display name is included in SMS messages sent to your trusted contacts so they know who the alert is from. For example: 'MadeIt: [Your Name] hasn't checked in for Walking Home — due by 11:30 PM.'",
      "We use your device token to send push notifications about check-in reminders and escalation status. We use your time zone to schedule these notifications at the right local time.",
      "We use subscription data from RevenueCat to determine your plan tier and enforce the corresponding feature limits.",
      "We use audit and rate-limit data to prevent abuse, enforce daily SMS caps, and ensure the service operates safely for all users.",
      "We do not use your information for advertising, behavioral profiling, or sale to third parties.",
    ],
  },
  {
    title: "SMS Messaging and Trusted Contact Consent",
    paragraphs: [
      "MadeIt sends SMS text messages to the trusted contacts you designate in the app. These messages are transactional safety alerts — not marketing. We send four types of SMS: (1) a consent request asking the contact if they agree to receive alerts, (2) an opt-in confirmation once they accept, (3) escalation alerts if you miss a check-in deadline, and (4) a resolved update when you mark yourself safe.",
      "No SMS messages are sent to a contact until they have consented. When you add a trusted contact, MadeIt sends them a one-time consent request: 'Sarah added you as a safety contact on MadeIt. If they don't check in safely, you'll receive a text alert. Reply YES to accept or STOP to decline.' Only contacts who reply YES receive any further messages.",
      "Contacts can withdraw consent at any time by replying STOP to any message from MadeIt. This immediately removes them from all future alerts. Contacts who previously opted out can reinstate their consent by replying START or UNSTOP.",
      "STOP, START, UNSTOP, and HELP keywords are handled automatically by our SMS provider. Replying STOP will always be honored immediately, and no further messages will be sent to that number.",
      "Message and data rates may apply. Message frequency varies based on how often you use check-ins and how many trusted contacts you have.",
      "Mobile phone numbers and SMS consent data will not be shared with third parties or affiliates for marketing or promotional purposes.",
      "MadeIt is not an emergency service. SMS alerts are informational notifications to personal contacts you have chosen. If you are in danger, contact local emergency services.",
    ],
  },
  {
    title: "Sharing and Disclosure",
    paragraphs: [
      "We do not sell, rent, or share your personal information with third parties for marketing or promotional purposes. Mobile information including phone numbers and opt-in consent data is never shared with third parties or affiliates for marketing purposes.",
      "We share information only with the service providers listed below, strictly as needed for them to perform services on our behalf. All providers are bound by confidentiality obligations.",
      "If required by law, court order, or legal process, we may disclose information to the extent necessary to comply. We will notify you when permitted.",
      "In connection with a merger, acquisition, or sale of assets, user information may be transferred. We will provide notice before your information becomes subject to a different privacy policy.",
      "When you create a check-in and a deadline is missed, your display name, check-in name, due time, and any personal note you attached are included in the SMS alert sent to your confirmed trusted contacts. You control what information is included in your check-in templates.",
    ],
  },
  {
    title: "Third-Party Service Providers",
    paragraphs: [
      "Supabase — provides our database and authentication infrastructure. Your email address, profile data, device tokens, trusted contact records, check-in templates and run history, and all SMS consent records are stored in Supabase-hosted PostgreSQL databases. Supabase privacy policy: supabase.com/privacy.",
      "Twilio — delivers all SMS messages sent by MadeIt, including consent requests, escalation alerts, and resolved updates. Twilio processes the phone numbers of your trusted contacts and handles inbound keyword replies (YES, STOP, START, HELP). Twilio Advanced Opt-Out is enabled so STOP replies are processed automatically and immediately. Twilio privacy policy: twilio.com/en-us/legal/privacy.",
      "Temporal Cloud — provides server-side workflow orchestration for check-in timers, grace period countdowns, and escalation step sequencing. Temporal is the authoritative system for tracking active check-in run state. Temporal privacy policy: temporal.io/privacy.",
      "RevenueCat — manages in-app subscriptions and purchase validation for iOS. RevenueCat receives your anonymized app user identifier and subscription event data (trial start, renewal, cancellation, refund). RevenueCat privacy policy: revenuecat.com/privacy.",
      "Apple Push Notification service (APNs) — delivers push notifications to your iOS device. APNs receives your device push token, which MadeIt registers on each app launch. Apple privacy policy: apple.com/privacy.",
      "Google — if you choose Google Sign-In, Google authenticates your identity and provides your email address to Supabase via OAuth. Google privacy policy: policies.google.com/privacy.",
    ],
  },
  {
    title: "Data Retention",
    paragraphs: [
      "We retain your account information, profile, device records, trusted contacts, check-in templates, and run history for as long as your account is active and for a limited period afterward to support account recovery and resolve disputes.",
      "Audit records — including SMS consent event logs, message delivery records, and system audit trails — may be retained after account deletion with your user identifier removed. These anonymized records are kept for legal, compliance, and abuse-prevention purposes.",
      "Device records that have been inactive for 90 or more days are eligible for cleanup to prevent unbounded data accumulation from uninstalls.",
      "SMS rate-limit and usage meter data is maintained on rolling 24-hour windows and does not persist beyond what is needed for enforcement.",
      "You may request deletion of your account and associated personal data by contacting support@madeit.app. Account deletion cascades to all personal data: profile, devices, contacts, check-in history, and consent records. Anonymized audit rows are retained as described above.",
    ],
  },
  {
    title: "Your Rights and Choices",
    paragraphs: [
      "Opt out of SMS at any time: If you are a trusted contact who has received messages from MadeIt, reply STOP to any MadeIt message to immediately opt out. No further messages will be sent. Reply START or UNSTOP to re-enable messages.",
      "Manage notification preferences: You can disable push notifications from within the app settings or your device's system settings at any time.",
      "Access and correction: You may request a copy of the personal data we hold about you by emailing support@madeit.app. You may also update your display name, time zone, and notification preferences directly in the app.",
      "Account deletion: To delete your account and all associated personal data, email support@madeit.app. We will process deletion requests within a reasonable timeframe.",
      "California and international users: Depending on your jurisdiction, you may have additional rights including data portability, restriction of processing, and the right to lodge a complaint with a supervisory authority.",
    ],
  },
  {
    title: "Security",
    paragraphs: [
      "We use Row-Level Security on all database tables so authenticated users can only access their own data. Sensitive operations — including consent management, subscription writes, and audit logging — are performed exclusively by backend services using elevated access that is not available to client applications.",
      "Push notification tokens are rotated on each app launch. No passwords are stored — authentication is passwordless via email one-time code or OAuth provider.",
      "No system is perfectly secure. We cannot guarantee absolute security, and we encourage you to use a strong, unique email account for your MadeIt login.",
    ],
  },
  {
    title: "Children's Privacy",
    paragraphs: [
      "MadeIt is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact support@madeit.app and we will delete it promptly.",
    ],
  },
  {
    title: "Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. When we do, we will update the effective date at the top of this page. For significant changes, we will notify you through the app or by email. Continued use of MadeIt after changes take effect constitutes your acceptance of the updated policy.",
    ],
  },
  {
    title: "Contact",
    paragraphs: [
      "For privacy questions, data requests, or to exercise your rights, contact us at support@madeit.app. We aim to respond to all requests within 30 days.",
    ],
  },
];

const Privacy = () => {
  return (
    <InfoPageLayout
      title="Privacy Policy"
      subtitle="This policy explains what data MadeIt collects, how it is used, and the choices available to you and your trusted contacts."
      meta="Last updated March 31, 2026"
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
