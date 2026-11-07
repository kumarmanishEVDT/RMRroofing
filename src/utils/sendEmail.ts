
import emailjs from "@emailjs/browser";

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
  "troy@premiumranks.com",
];

const EMAILJS_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;

const EMAILJS_TEMPLATE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;

const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

export async function sendQuoteEmails(
  data: QuoteSubmissionData
): Promise<boolean> {
  if (
    !EMAILJS_SERVICE_ID ||
    !EMAILJS_TEMPLATE_ID ||
    !EMAILJS_PUBLIC_KEY
  ) {
    throw new Error("EmailJS credentials are missing.");
  }

  const submittedAt = new Date().toLocaleString("en-AU", {
    timeZone: "Australia/Sydney",
  });

  const templateParams = {
    to_email: RECIPIENT_EMAILS.join(", "),
    full_name: data.fullName,
    phone: data.phone,
    email: data.email,
    reply_to: data.email,
    suburb: data.suburb,
    services: data.services.join(", "),
    description:
      data.description || "No additional description provided.",
    submitted_at: submittedAt,
  };

  await emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    templateParams,
    {
      publicKey: EMAILJS_PUBLIC_KEY,
    }
  );

  return true;
}
