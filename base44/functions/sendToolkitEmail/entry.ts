Deno.serve(async (req) => {
  try {
    // Parse incoming request
    const { email, first_name, lead_score } = await req.json();

    if (!email || !first_name) {
      return Response.json({ error: 'Email and first name are required' }, { status: 400 });
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY not configured');
    }

    // Step 1: Create or update contact in Resend with lead score attribute
    // Contacts are saved with lead_score - use this to create segments in Resend dashboard
    const contactPayload = {
      email: email,
      first_name: first_name,
      unsubscribed: false,
      attributes: {
        lead_score: lead_score || 0,
        source: "landing_page",
      }
    };

    const contactResponse = await fetch('https://api.resend.com/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify(contactPayload),
    });

    // 409 = contact already exists, that's OK
    if (!contactResponse.ok && contactResponse.status !== 409) {
      const contactError = await contactResponse.json();
      console.error('Contact creation failed:', contactError);
      // Continue anyway - we still want to send the email
    }

    // Step 2: Send the toolkit email
    const FROM_EMAIL = 'Knightstrider Villas <onboarding@resend.dev>';

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: email,
        subject: "Your Free Villa Owner Toolkit is Here! 🎉",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #ff6600; font-size: 28px;">Welcome to Knightstrider Villas Direct! 🎉</h1>
            
            <p style="font-size: 16px; line-height: 1.6;">Hi ${first_name},</p>
            
            <p style="font-size: 16px; line-height: 1.6;">
              Your FREE <strong>Villa Owner Toolkit</strong> is ready! This comprehensive guide includes 
              9 professional tools to help you maximize your Orlando villa investment.
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://knightstrider.com/toolkit" 
                 style="background-color: #ff6600; color: white; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; display: inline-block;">
                📥 Download Your Toolkit Now
              </a>
            </div>
            
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h2 style="color: #1a3a6b; font-size: 18px; margin-top: 0;">Inside you'll find:</h2>
              <ul style="line-height: 1.8;">
                <li>✓ Revenue & Expense Tracker</li>
                <li>✓ Guest Communication Templates</li>
                <li>✓ Maintenance Schedule</li>
                <li>✓ Pricing Strategy Guide</li>
                <li>✓ Direct Booking Checklist</li>
                <li>✓ And 4 more essential tools!</li>
              </ul>
            </div>
            
            <p style="font-size: 14px; color: #666; line-height: 1.6;">
              Need help? Reply to this email anytime.
            </p>
            
            <p style="font-size: 16px; line-height: 1.6;">
              Happy hosting!<br>
              <strong>The Knightstrider Villas Direct Team</strong>
            </p>
            
            <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;" />
            
            <p style="font-size: 12px; color: #999; text-align: center;">
              Knightstrider Villas Direct<br>
              No booking fees. 0% commission. 100% Good times.<br>
              <a href="#" style="color: #999;">Unsubscribe anytime</a>
            </p>
          </div>
        `,
      }),
    });

    const result = await emailResponse.json();
    
    if (!emailResponse.ok) {
      throw new Error(result.message || 'Failed to send email');
    }

    return Response.json({ success: true, message: 'Email sent successfully', data: result });
  } catch (error) {
    console.error('Error sending email:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
});