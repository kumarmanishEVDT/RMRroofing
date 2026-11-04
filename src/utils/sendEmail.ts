export interface QuoteSubmissionData {
  fullName: string;
  phone: string;
  email: string;
  suburb: string;
  services: string[];
  description: string;
}

export const RECIPIENT_EMAILS = [
  "salesrmrroofingservices@gmail.com",
  "troy@premiumranks.com"
];

// Configure your EmailJS credentials here or via NEXT_PUBLIC_EMAILJS_* env variables
const EMAILJS_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_rmr_roofing";
const EMAILJS_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_rmr_quote";
const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY";

export async function sendQuoteEmails(data: QuoteSubmissionData): Promise<boolean> {
  const servicesList = data.services.join(", ");
  const submittedAt = new Date().toLocaleString("en-AU", {
    timeZone: "Australia/Sydney"
  });

  // 1. Send directly via FormSubmit.co AJAX (Zero-config, unlimited free emails to both addresses)
  const formSubmitPromises = RECIPIENT_EMAILS.map((recipientEmail) =>
    fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        _subject: `New Roofing Quote Request - ${data.fullName} (${data.suburb})`,
        _template: "table",
        _captcha: "false",
        "Full Name": data.fullName,
        "Phone Number": data.phone,
        "Email Address": data.email,
        "Property Suburb": data.suburb,
        "Requested Services": servicesList,
        "Project Description": data.description || "No additional description provided.",
        "Submitted At (AEST)": submittedAt,
        _replyto: data.email
      })
    }).catch(() => null)
  );

  // 2. Also send via EmailJS REST API if custom EmailJS credentials are configured
  const emailJsPromises =
    EMAILJS_PUBLIC_KEY !== "YOUR_EMAILJS_PUBLIC_KEY"
      ? RECIPIENT_EMAILS.map((recipientEmail) =>
          fetch("https://api.emailjs.com/api/v1.0/email/send", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              service_id: EMAILJS_SERVICE_ID,
              template_id: EMAILJS_TEMPLATE_ID,
              user_id: EMAILJS_PUBLIC_KEY,
              template_params: {
                to_email: recipientEmail,
                recipients: RECIPIENT_EMAILS.join(", "),
                from_name: data.fullName,
                full_name: data.fullName,
                phone: data.phone,
                email: data.email,
                reply_to: data.email,
                suburb: data.suburb,
                services: servicesList,
                description: data.description || "No additional description provided.",
                submitted_at: submittedAt
              }
            })
          }).catch(() => null)
        )
      : [];

  try {
    await Promise.allSettled([...formSubmitPromises, ...emailJsPromises]);
    return true;
  } catch {
    return true;
  }
}
