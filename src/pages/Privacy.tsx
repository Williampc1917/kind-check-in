import InfoPageLayout from "@/components/legal/InfoPageLayout";

type Block = string | { list: string[] };

const sections: { title: string; paragraphs: Block[] }[] = [
  {
    title: "Information We Collect",
    paragraphs: [
      "Account information: When you create a MadeIt: Safety Check-Ins account, we collect your email address and the display name you provide during onboarding. Sign in with Apple may provide your email address or an Apple private relay email address. MadeIt does not request your Apple account name; your app display name is entered during onboarding and can be edited in Settings.",
      "App preferences: We store your time format preference (12-hour or 24-hour), time zone, and notification settings — including whether you have enabled check-in reminders and promotional updates.",
      "Device information: We collect your device's push notification token (APNs), app version, iOS version, notification permission state, Live Activities permission state, and last active timestamp. This is used solely to deliver push notifications to your device.",
      "Trusted contact information: When you add a trusted contact, we store their name, phone number (normalized to E.164 international format), the source of the contact (typed in, or picked from Apple Contacts), and their consent status with us. When you pick from Apple Contacts, MadeIt receives only the contact you choose, not your address book.",
      "Check-in data: We store the check-in templates you create, including names, deadlines, grace periods, escalation steps, and any personal notes you attach. We store active and completed check-in run history including start times, deadlines, and alert delivery records.",
      "SMS delivery and consent data: We record when consent request messages are sent to trusted contacts, delivery status, whether contacts replied YES (opt-in) or STOP (opt-out), START/UNSTOP delivery restoration signals after prior STOP, and timestamps for all consent state changes. Inbound keyword replies (YES, STOP, START, UNSTOP, HELP) from contacts are captured for consent management.",
      "Subscription information: If paid plans, trials, or purchase restoration are offered in the app, we may receive subscription status and purchase-event information from Apple and RevenueCat, such as plan state, trial or entitlement status, purchase and renewal timestamps, cancellation or refund state, and restore history. We use this information to manage paid features, restore purchases, enforce plan limits, and handle billing-related account lifecycle events. RevenueCat purchase flows are not the source of payment-card details; App Store billing is handled by Apple.",
      "Usage and audit data: We maintain internal logs of rate-limit enforcement, message delivery attempts, and system events for security, abuse prevention, and service reliability. These logs do not contain message content beyond system-generated safety alerts.",
      "Name and note review: Before your display name, a check-in name or a personal note is saved, MadeIt checks it with automated rules and with OpenAI's moderation and language models to keep texts safe, because these words are texted to your trusted contacts. We send only the text being checked, never your email or your contacts. OpenAI does not use it to train its models. See OpenAI in \"Third-Party Service Providers\".",
    ],
  },
  {
    title: "How We Use Your Information",
    paragraphs: [
      "We use your information to operate MadeIt: Safety Check-Ins: to authenticate you, run check-in timers, deliver push notifications to your device, send SMS alerts to your trusted contacts when a check-in is missed, and send resolved updates to already-notified trusted contacts when you check in safely.",
      "SMS/text messages may include safety check-ins, account notices, emergency-contact alerts, trusted contact consent requests, missed check-in alerts, and safe/resolved updates.",
      "Your display name is included in SMS messages sent to your trusted contacts so they know who the alert is from. For example: \"MadeIt: [Your Name] hasn't checked in for Walking Home. Due by 11:30 PM.\"",
      "We use your device token to send push notifications about check-in reminders and escalation status. We use your time zone to schedule these notifications at the right local time.",
      "If paid plans, trials, or purchase restoration are offered, we use subscription status from Apple and RevenueCat to determine your plan tier, restore purchases, and enforce the corresponding feature limits.",
      "We use audit and rate-limit data to prevent abuse, enforce daily SMS caps, and ensure the service operates safely for all users.",
      "We do not use your information for advertising, behavioral profiling, or sale to third parties.",
    ],
  },
  {
    title: "SMS Messaging and Trusted Contact Consent",
    paragraphs: [
      "By providing your phone number, you agree to receive safety check-in, account, and emergency-contact-related SMS messages from MadeIt: Safety Check-Ins. Message frequency varies based on your use of the app. Message and data rates may apply. Reply STOP to opt out and HELP for help. Consent is not a condition of purchase.",
      "MadeIt sends SMS/text messages to the trusted contacts you designate in the app. These messages are transactional safety and emergency-contact alerts — not marketing. MadeIt sends:",
      {
        list: [
          "A consent request asking the contact to agree to receive MadeIt texts",
          "A confirmation once they reply YES, and a short reply if they answer an expired request",
          "An alert when you don't check in by your check-in time, when you tap Alert now, or when you don't answer a Check on me in 5 (Pro)",
          "A request to call you when you tap Call me (Pro)",
          "A safe update when you tap I'm safe after a contact got a MadeIt text during that check-in",
        ],
      },
      "With MadeIt Pro, alerts and Call me texts end with a private link to the contact page. For example: \"MadeIt: [Your Name] asks you to call them. Check-in due 11:30 PM. Location: getmadeitapp.com/l/7fQ2xK9mPa4L\". Call me can be sent at most 3 times per check-in, at least 10 minutes apart.",
      "Trusted contacts receive a consent-request SMS asking them to reply YES. No missed check-in alerts, Call me texts or safe/resolved updates are sent for that relationship until the contact has consented. The consent request explains: \"Sarah added you as a trusted contact on MadeIt. Reply YES to agree to receive MadeIt SMS/text messages about Sarah's safety check-ins, including active check-in status updates, missed check-in alerts, and safe/resolved updates. If this was not expected, ignore this message. Reply STOP to opt out. Msg & data rates may apply.\" Only contacts who reply YES for an active pending consent request become eligible for SMS alerts for that trusted-contact relationship. Ignoring the consent SMS means no consent and no alerts.",
      "Replying STOP immediately stops MadeIt SMS messages to your number. Replying START or UNSTOP restores delivery for eligible previously consented relationships; it does not give consent to new trusted-contact relationships.",
      "STOP, START, UNSTOP, and HELP keywords may be handled automatically by our SMS provider or carrier-level toll-free messaging systems. Replying STOP will always be honored immediately, and no further SMS messages will be sent to that number unless delivery ability is restored and the relationship is eligible under MadeIt policy.",
      "MadeIt is not a chat service. Replies other than YES, STOP, START, UNSTOP and HELP are not shown to you.",
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
      "Twilio — delivers every text MadeIt sends and receives the replies (YES, STOP, START, UNSTOP, HELP). Twilio receives your trusted contacts' phone numbers and the full text of each message, including your display name, the check-in's name, any personal note and, with Pro, the contact page link. Twilio keeps message records, including the text, under its own retention rules. Opt-outs (STOP and similar words) are handled by Twilio and the carriers' toll-free messaging systems so they take effect immediately. Twilio privacy policy: twilio.com/en-us/legal/privacy.",
      "Temporal Cloud — provides server-side workflow orchestration for check-in timers, grace period countdowns, and escalation step sequencing. Temporal is the authoritative system for tracking active check-in run state. Temporal privacy policy: temporal.io/privacy.",
      "RevenueCat — if paid plans, trials, or purchase restoration are offered, RevenueCat manages subscription status and purchase validation for iOS. RevenueCat may receive an app user identifier and subscription event data such as trial start, renewal, cancellation, refund, and restore events. RevenueCat privacy policy: revenuecat.com/privacy.",
      "Apple Push Notification service (APNs) — delivers push notifications to your iOS device. APNs receives your device push token, which MadeIt registers on each app launch. Apple privacy policy: apple.com/privacy.",
      "Apple — if you choose Sign in with Apple, Apple authenticates your identity and provides your email address, which may be an Apple private relay address, to Supabase. MadeIt does not request your Apple account name; your app display name is entered during onboarding and can be edited in Settings. Apple privacy policy: apple.com/privacy.",
      "OpenAI — checks display names, check-in names and personal notes before they are saved, so that texts to your contacts don't carry spam, links or abuse that could get MadeIt's texts blocked for everyone. OpenAI receives only the text being checked. OpenAI privacy policy: openai.com/policies/privacy-policy.",
      "Render — hosts MadeIt's servers, which run your check-ins. Render privacy policy: render.com/privacy.",
      "Upstash — stores short-lived rate-limit counters that protect MadeIt from abuse. Upstash privacy policy: upstash.com/trust/privacy.pdf.",
      "Resend — sends the sign-in codes MadeIt emails you. Resend receives your email address and the code. Resend privacy policy: resend.com/legal/privacy-policy.",
      "All the above categories exclude text messaging originator opt-in data and consent; this information won’t be shared with any third parties.",
    ],
  },
  {
    title: "Data Retention",
    paragraphs: [
      "We retain your account information, profile, device records, trusted contacts, check-in templates, and run history for as long as your account is active and for a limited period afterward to support account recovery and resolve disputes.",
      "Audit records — including SMS consent event logs, message delivery records, and system audit trails — may be retained after account deletion with your user identifier removed. These anonymized records are kept for legal, compliance, and abuse-prevention purposes.",
      "Device records that have been inactive for 90 or more days are eligible for cleanup to prevent unbounded data accumulation from uninstalls.",
      "SMS rate-limit and usage meter data is maintained on rolling 24-hour windows and does not persist beyond what is needed for enforcement.",
      "You may request deletion of your account and associated personal data by contacting support@getmadeitapp.com. Account deletion cascades to all personal data: profile, devices, contacts, check-in history, and consent records. Anonymized audit rows are retained as described above.",
    ],
  },
  {
    title: "Your Rights and Choices",
    paragraphs: [
      "Opt out of SMS at any time: If you are a trusted contact who has received messages from MadeIt, reply STOP to any MadeIt message to opt out. No further messages will be sent unless delivery ability is restored and the relationship is eligible under MadeIt policy. Reply START or UNSTOP to re-enable delivery after a prior STOP.",
      "Manage notification preferences: You can manage promotional updates in MadeIt Settings. To turn off all MadeIt notifications, use your iPhone’s Settings.",
      "Your privacy rights: You can ask us to tell you what personal data we have about you and give you a copy, correct it, or delete it, by emailing support@getmadeitapp.com from the email on your account. You can change your display name, time zone, notifications and contacts in the app at any time. We answer within 30 days. If we turn down a request, you can appeal by replying to our answer with \"Appeal\"; we answer appeals within 60 days, and if you disagree you may contact your state attorney general. We don't sell personal data, use it for targeted advertising, or use it to make decisions that have legal or similarly significant effects on you, so there is nothing to opt out of. Using these rights never changes your plan or price.",
      "Trusted contacts: If someone added you as a trusted contact, reply STOP to any MadeIt text to stop all MadeIt texts. To have your name and number deleted from MadeIt, email support@getmadeitapp.com from any address and include the number. We delete it from every account that added it, except a record that the number opted out, which we keep so it is never texted again.",
      "Do Not Track: MadeIt's website and contact page don't track visitors across other sites and don't respond differently to browser Do Not Track signals, because there is no tracking to turn off.",
      "Account deletion: To delete your account and all associated personal data, email support@getmadeitapp.com. We will process deletion requests within a reasonable timeframe.",
    ],
  },
  {
    title: "Sensitive Data and Health Information",
    paragraphs: [
      "Sensitive data: Some US state laws treat precise location as sensitive data. MadeIt collects no sensitive data.",
      "Health information: MadeIt doesn't ask for health information and doesn't use anything you write to guess about your health. A personal note is texted to your contacts exactly as you write it, so only include medical details you want them to read.",
    ],
  },
  {
    title: "Security",
    paragraphs: [
      "We use Row-Level Security on all database tables so authenticated users can only access their own data. Sensitive operations — including consent management, subscription writes, and audit logging — are performed exclusively by backend services using elevated access that is not available to client applications.",
      "Apple provides a push notification token for this app on your device. We update our records when that token changes. No passwords are stored — authentication is passwordless via email one-time code or OAuth provider.",
      "No system is perfectly secure. We cannot guarantee absolute security, and we encourage you to use a strong, unique email account for your MadeIt login.",
    ],
  },
  {
    title: "Children's Privacy",
    paragraphs: [
      "MadeIt is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have inadvertently collected such information, please contact support@getmadeitapp.com and we will delete it promptly.",
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
      "For privacy questions, data requests, or to exercise your rights, contact us at support@getmadeitapp.com. We aim to respond to all requests within 30 days.",
    ],
  },
];

const Privacy = () => {
  return (
    <InfoPageLayout
      title="Privacy Policy"
      subtitle="This policy explains what data MadeIt: Safety Check-Ins collects, how it is used, and the choices available to you and your trusted contacts."
      meta="Last updated November 27, 2026"
    >
      <div className="space-y-10">
        <p className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-[1rem] leading-7 text-slate-700">
          This Privacy Policy applies to MadeIt: Safety Check-Ins, also referred to as ‘MadeIt,’ operated by William Pineda as a sole proprietorship.
        </p>
        {sections.map((section) => (
          <section key={section.title} className="border-b border-slate-200 pb-8 last:border-b-0 last:pb-0">
            <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-900">
              {section.title}
            </h2>
            <div className="mt-4 space-y-4 text-[1rem] leading-7 text-slate-600">
              {section.paragraphs.map((block) =>
                typeof block === "string" ? (
                  <p key={block}>{block}</p>
                ) : (
                  <ol key={block.list.join("|")} className="list-decimal space-y-2 pl-6">
                    {block.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ol>
                ),
              )}
            </div>
          </section>
        ))}
      </div>
    </InfoPageLayout>
  );
};

export default Privacy;
