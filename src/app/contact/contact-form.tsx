'use client';

import { useTransition } from 'react';
import { submitForm } from '../actions';

export default function ContactForm() {
  const [isPending, startTransition] = useTransition();

  async function clientAction(formData: FormData) {
    startTransition(async () => {
      try {
        console.log('Client - Starting form submission');
        const result = await submitForm(formData);
        console.log('Client - Form submission result:', result);
        const form = document.querySelector('form') as HTMLFormElement;
        form?.reset();
        alert('Message sent successfully!');
      } catch (error) {
        console.error('Client - Form submission error:', error);
        alert(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
      }
    });
  }

  return (
    <form action={clientAction} className="space-y-6">
      {isPending && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-white">Sending...</div>
        </div>
      )}
      <div>
        <label htmlFor="name" className="block text-zinc-200 mb-2">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="w-full px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-white"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-zinc-200 mb-2">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="w-full px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-white"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-zinc-200 mb-2">Message</label>
        <textarea
          name="message"
          id="message"
          required
          rows={4}
          className="w-full px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-white resize-none"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-white hover:bg-zinc-100 text-black font-bold py-3 px-8 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
