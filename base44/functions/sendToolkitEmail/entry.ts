import { createClientFromRequest } from 'npm:@base44/sdk@0.8.31';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    
    // Parse incoming request
    const { email, first_name } = await req.json();

    if (!email || !first_name) {
      return Response.json({ error: 'Email and first name are required' }, { status: 400 });
    }

    // Send welcome email with toolkit download link
    await base44.integrations.Core.SendEmail({
      to: email,
      subject: "Your Free Villa Owner Toolkit is Here! 🎉",
      body: `Hi ${first_name},

Welcome to Knightstrider Villas Direct!

Your FREE Villa Owner Toolkit is ready. This comprehensive guide includes 9 professional tools to help you maximize your Orlando villa investment.

📥 DOWNLOAD YOUR TOOLKIT HERE: https://knightstrider.com/toolkit

Inside you'll find:
✓ Revenue & Expense Tracker
✓ Guest Communication Templates
✓ Maintenance Schedule
✓ Pricing Strategy Guide
✓ Direct Booking Checklist
✓ And 4 more essential tools!

Need help? Reply to this email anytime.

Happy hosting!
The Knightstrider Villas Direct Team

---
Knightstrider Villas Direct
No booking fees. 0% commission. 100% Good times.
Unsubscribe anytime.
`,
      from_name: "Knightstrider Villas Direct"
    });

    return Response.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
});