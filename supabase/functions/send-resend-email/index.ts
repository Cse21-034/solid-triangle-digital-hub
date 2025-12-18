import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email, phone, company, message } = await req.json()

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      )
    }

    // Send email using Resend API
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'Contact Form <noreply@solidtrianglebotswana.com>',
        to: ['info@solidtrianglebotswana.com'],
        reply_to: email,
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
            <div style="background-color: #561530; color: white; padding: 20px; border-radius: 10px 10px 0 0;">
              <h2 style="margin: 0;">New Contact Form Submission</h2>
            </div>
            <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <div style="margin-bottom: 20px;">
                <p style="margin: 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">From</p>
                <p style="margin: 5px 0; color: #333; font-size: 18px; font-weight: bold;">${name}</p>
              </div>
              
              <div style="margin-bottom: 20px;">
                <p style="margin: 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</p>
                <p style="margin: 5px 0; color: #561530; font-size: 16px;">
                  <a href="mailto:${email}" style="color: #561530; text-decoration: none;">${email}</a>
                </p>
              </div>
              
              ${phone ? `
              <div style="margin-bottom: 20px;">
                <p style="margin: 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Phone</p>
                <p style="margin: 5px 0; color: #333; font-size: 16px;">${phone}</p>
              </div>
              ` : ''}
              
              ${company ? `
              <div style="margin-bottom: 20px;">
                <p style="margin: 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Company</p>
                <p style="margin: 5px 0; color: #333; font-size: 16px;">${company}</p>
              </div>
              ` : ''}
              
              <div style="margin-bottom: 20px;">
                <p style="margin: 0; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
                <div style="margin: 10px 0; padding: 15px; background-color: #f5f5f5; border-left: 4px solid #561530; border-radius: 4px;">
                  <p style="margin: 0; color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                </div>
              </div>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                <p style="margin: 0; color: #999; font-size: 12px;">
                  This email was sent from the contact form at 
                  <a href="https://www.solidtrianglebotswana.com" style="color: #561530; text-decoration: none;">solidtrianglebotswana.com</a>
                </p>
              </div>
            </div>
          </div>
        `,
      }),
    })

    const data = await res.json()

    if (!res.ok) {
      console.error('Resend API error:', data)
      return new Response(
        JSON.stringify({ error: data.message || 'Failed to send email' }),
        {
          status: res.status,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      )
    }

    return new Response(
      JSON.stringify({ success: true, data }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: error.message || 'Internal server error' }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  }
})
