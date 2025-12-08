import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message }: ContactEmailRequest = await req.json();

    console.log("Received contact form submission:", { name, email, phone });

    // Validate input
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Name, email, and message are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Send notification email to company
    const notificationRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Solid Triangle <onboarding@resend.dev>",
        to: ["lamegare@yahoo.com"],
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      }),
    });

    if (!notificationRes.ok) {
      const error = await notificationRes.text();
      console.error("Failed to send notification email:", error);
      throw new Error(`Failed to send notification email: ${error}`);
    }

    console.log("Notification email sent successfully");

    // Send confirmation email to user
    const confirmationRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Solid Triangle <onboarding@resend.dev>",
        to: [email],
        subject: "Thank you for contacting Solid Triangle",
        html: `
          <h1>Thank you for reaching out, ${name}!</h1>
          <p>We have received your message and will get back to you as soon as possible.</p>
          <p>Here's a copy of your message:</p>
          <blockquote style="background: #f5f5f5; padding: 15px; border-left: 4px solid #0891b2;">
            ${message}
          </blockquote>
          <p>Best regards,<br>The Solid Triangle Team</p>
          <hr>
          <p style="color: #666; font-size: 12px;">
            Solid Triangle Pty Ltd<br>
            Phase 4 Plot 22211, Gaborone, Botswana<br>
            (+267) 73 400 400
          </p>
        `,
      }),
    });

    if (!confirmationRes.ok) {
      const error = await confirmationRes.text();
      console.error("Failed to send confirmation email:", error);
    } else {
      console.log("Confirmation email sent successfully");
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Emails sent successfully" 
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
