'use server';

import { Resend } from 'resend';

export async function submitForm(data: FormData) {
  console.log('Starting form submission...');
  
  const apiKey = process.env.RESEND_API_KEY;
  console.log('API Key exists:', !!apiKey);

  if (!apiKey) {
    console.error('Missing Resend API key');
    throw new Error('Server configuration error');
  }

  const resend = new Resend(apiKey);

  const name = data.get('name') as string;
  const email = data.get('email') as string;
  const message = data.get('message') as string;

  if (!name || !email || !message) {
    throw new Error('All fields are required');
  }

  console.log('Form data:', { name, email });

  try {
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'kavalbusiness@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    });

    console.log('Email sent successfully:', result);
    return;
  } catch (error: unknown) {
    console.error('Error details:', error);
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('Failed to send email');
  }
}
