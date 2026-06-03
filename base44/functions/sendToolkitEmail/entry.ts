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

    // Step 2: Send the toolkit email with full branding
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
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Villa Owner Toolkit</title>
          </head>
          <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #050d1a;">
            <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #050d1a;">
              <tr>
                <td align="center" style="padding: 40px 20px;">
                  <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background: linear-gradient(135deg, #0A1628 0%, #1a2a4a 100%); border-radius: 16px; overflow: hidden; border: 1px solid rgba(255, 102, 0, 0.3);">
                    
                    <!-- Header -->
                    <tr>
                      <td align="center" style="padding: 30px 20px; background-color: #0A1628; border-bottom: 2px solid #ff6600;">
                        <img src="https://media.base44.com/images/public/6a2044635ec5a2f4f231ed78/dfc95bf9f_Untitleddesign23.png" alt="Knightstrider Villas Direct" width="80" height="80" style="display: block; filter: invert(1) brightness(1.2);" />
                      </td>
                    </tr>
                    
                    <!-- Hero -->
                    <tr>
                      <td style="padding: 40px 30px;">
                        <h1 style="margin: 0 0 20px; font-size: 28px; font-weight: 800; color: #ffffff; text-align: center; line-height: 1.3;">
                          Welcome to Knightstrider Villas Direct! 🎉
                        </h1>
                        <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.6; color: #ffffff;">
                          Hi ${first_name},
                        </p>
                        <p style="margin: 0 0 25px; font-size: 16px; line-height: 1.6; color: #ffffff;">
                          Your FREE <strong style="color: #ff6600;">Villa Owner Toolkit</strong> is ready! This comprehensive guide includes 9 professional tools to help you maximize your Orlando villa investment.
                        </p>
                        
                        <!-- CTA Button -->
                        <table role="presentation" style="margin: 30px auto;">
                          <tr>
                            <td align="center" style="border-radius: 12px; background: linear-gradient(135deg, #ff6600 0%, #ff8533 100%);">
                              <a href="https://knightstrider.com/toolkit" target="_blank" style="display: inline-block; padding: 16px 32px; font-size: 16px; font-weight: 700; color: #ffffff; text-decoration: none; border-radius: 12px; text-transform: uppercase; letter-spacing: 0.5px;">
                                📥 Download Your Toolkit Now
                              </a>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    
                    <!-- Video Section -->
                    <tr>
                      <td style="padding: 0 30px 30px;">
                        <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #0d1b2a; border-radius: 12px; overflow: hidden; border: 1px solid rgba(255, 102, 0, 0.3);">
                          <tr>
                            <td align="center" style="padding: 0;">
                              <a href="https://www.youtube.com/watch?v=O_kYqax63B4" target="_blank" style="text-decoration: none; display: block;">
                                <img src="https://img.youtube.com/vi/O_kYqax63B4/maxresdefault.jpg" alt="7 Things They Don't Tell You About Owning an Orlando Villa" width="540" height="304" style="display: block; width: 100%; max-width: 540px; height: auto;" />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 20px;">
                              <h2 style="margin: 0 0 10px; font-size: 18px; font-weight: 700; color: #ffffff; text-align: center;">
                                ▶ Watch: 7 Things They Don't Tell You
                              </h2>
                              <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #ffffff; text-align: center;">
                                The webinar UK Orlando owners are calling "A Wake-Up Call"
                              </p>
                              <p style="margin: 15px 0 0; font-size: 14px; line-height: 1.6; color: #ffffff; text-align: center;">
                                <a href="https://www.youtube.com/watch?v=O_kYqax63B4" target="_blank" style="color: #ff6600; text-decoration: none; font-weight: 600;">Watch Now →</a>
                              </p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    
                    <!-- What's Inside -->
                    <tr>
                      <td style="padding: 0 30px 30px;">
                        <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: rgba(255, 255, 255, 0.05); border-radius: 12px; padding: 20px; border: 1px solid rgba(255, 255, 255, 0.1);">
                          <tr>
                            <td>
                              <h2 style="margin: 0 0 15px; font-size: 18px; font-weight: 700; color: #ff6600; text-align: center;">
                                Inside Your Toolkit:
                              </h2>
                              <table role="presentation" style="width: 100%;">
                                <tr>
                                  <td style="padding: 5px 0; font-size: 14px; line-height: 1.8; color: #ffffff;">✓ Revenue & Expense Tracker</td>
                                </tr>
                                <tr>
                                  <td style="padding: 5px 0; font-size: 14px; line-height: 1.8; color: #ffffff;">✓ Guest Communication Templates</td>
                                </tr>
                                <tr>
                                  <td style="padding: 5px 0; font-size: 14px; line-height: 1.8; color: #ffffff;">✓ Maintenance Schedule</td>
                                </tr>
                                <tr>
                                  <td style="padding: 5px 0; font-size: 14px; line-height: 1.8; color: #ffffff;">✓ Pricing Strategy Guide</td>
                                </tr>
                                <tr>
                                  <td style="padding: 5px 0; font-size: 14px; line-height: 1.8; color: #ffffff;">✓ Direct Booking Checklist</td>
                                </tr>
                                <tr>
                                  <td style="padding: 5px 0; font-size: 14px; line-height: 1.8; color: #ffffff;">✓ And 4 more essential tools!</td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    
                    <!-- Free Assessment Offer -->
                    <tr>
                      <td style="padding: 0 30px 30px;">
                        <table role="presentation" style="width: 100%; border-collapse: collapse; background: linear-gradient(135deg, rgba(255, 102, 0, 0.15) 0%, rgba(255, 133, 51, 0.15) 100%); border-radius: 12px; padding: 25px; border: 2px solid #ff6600;">
                          <tr>
                            <td align="center">
                              <h2 style="margin: 0 0 10px; font-size: 20px; font-weight: 800; color: #ff6600; text-transform: uppercase; letter-spacing: 1px;">
                                🎁 BONUS: Free Villa Assessment
                              </h2>
                              <p style="margin: 0 0 20px; font-size: 15px; line-height: 1.6; color: #ffffff; text-align: center;">
                                Get a comprehensive audit of your villa's profit potential. Discover hidden revenue opportunities and avoid costly mistakes.
                              </p>
                              <table role="presentation" style="margin: 0 auto;">
                                <tr>
                                  <td align="center" style="border-radius: 10px; background-color: #ffffff;">
                                    <a href="https://knightstrider.com/toolkit" target="_blank" style="display: inline-block; padding: 14px 28px; font-size: 15px; font-weight: 700; color: #ff6600; text-decoration: none; border-radius: 10px; text-transform: uppercase;">
                                      Claim Your Free Assessment
                                    </a>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                      <td style="padding: 30px; background-color: #0A1628; border-top: 1px solid rgba(255, 255, 255, 0.1); text-align: center;">
                        <p style="margin: 0 0 10px; font-size: 14px; line-height: 1.6; color: #ffffff;">
                          Need help? Reply to this email anytime.
                        </p>
                        <p style="margin: 0 0 20px; font-size: 16px; line-height: 1.6; color: #ffffff;">
                          Happy hosting!<br>
                          <strong style="color: #ff6600;">The Knightstrider Villas Direct Team</strong>
                        </p>
                        <hr style="border: none; border-top: 1px solid rgba(255, 255, 255, 0.1); margin: 20px 0;" />
                        <p style="margin: 0; font-size: 12px; line-height: 1.6; color: rgba(255, 255, 255, 0.5);">
                          Knightstrider Villas Direct<br>
                          No booking fees. 0% commission. 100% Good times.<br>
                          <a href="#" style="color: rgba(255, 255, 255, 0.5); text-decoration: underline;">Unsubscribe anytime</a>
                        </p>
                      </td>
                    </tr>
                    
                  </table>
                </td>
              </tr>
            </table>
          </body>
          </html>
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