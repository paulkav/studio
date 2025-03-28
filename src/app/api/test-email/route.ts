import { NextResponse } from 'next/server';
import resend from '@/lib/resend';

export async function POST() {
  try {
    console.log('Testing Resend setup...');

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
