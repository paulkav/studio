'use server';

import { Resend } from 'resend';

export async function submitForm(formData: FormData) {
  'use server';
  
  try {
    console.log('Starting form submission...');
    console.log('Form data:', Object.fromEntries(formData));
    
    const apiKey = process.env.RESEND_API_KEY;
    console.log('API Key exists:', !!apiKey);

    if (!apiKey) {
      console.error('Missing Resend API key');
      throw new Error('Server configuration error');
    }

    const resend = new Resend(apiKey);

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;
    
    console.log('Server Action - Form Data:', { name, email, message });

    if (!name || !email || !message) {
      const missingFields = [];
      if (!name) missingFields.push('name');
      if (!email) missingFields.push('email');
      if (!message) missingFields.push('message');
      const errorMsg = `Missing required fields: ${missingFields.join(', ')}`;
      console.error(errorMsg);
      throw new Error(errorMsg);
    }

    console.log('Attempting to send email...');
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

    if (!result.data?.id) {
      console.error('No email ID returned:', result);
      throw new Error('Email sending failed - no confirmation ID');
    }

    console.log('Email sent successfully:', result);
    return result;
  } catch (error) {
    console.error('Server Action - Error:', error);
    if (error instanceof Error) {
      throw new Error(`Failed to send message: ${error.message}`);
    }
    throw new Error('Failed to send message - unknown error');
  }
}
