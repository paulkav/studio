'use server';

import { Resend } from 'resend';

export async function POST() {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    console.log('Testing Resend setup...');
    console.log('API Key exists:', !!apiKey);
    
    if (!apiKey) {
      throw new Error('RESEND_API_KEY is not configured');
    }

    const resend = new Resend(apiKey);

    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'kavalbusiness@gmail.com',
      subject: 'Resend Test Email',
      text: 'This is a test email to verify Resend setup.',
    });

    console.log('Test email result:', result);
    return Response.json({ success: true, result });
  } catch (error) {
    console.error('Test email error:', error);
    return Response.json({ success: false, error: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
  }
}
