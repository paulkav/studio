'use server';

import { Resend } from 'resend';

export async function submitForm(formData: FormData) {
  if (!formData) {
    throw new Error('No form data provided');
  }

  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  if (!name || !email || !message) {
    const missingFields = [];
    if (!name) missingFields.push('name');
    if (!email) missingFields.push('email');
    if (!message) missingFields.push('message');
    return { error: `Missing required fields: ${missingFields.join(', ')}` };
  }

  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return { error: 'Server configuration error' };
    }

    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'kavalbusiness@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    if (!result.data?.id) {
      return { error: 'Failed to send email' };
    }

    return { success: true, id: result.data.id };
  } catch (error) {
    console.error('Email sending error:', error);
    return { error: 'Failed to send message. Please try again.' };
  }
}
