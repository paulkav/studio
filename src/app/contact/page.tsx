'use client';

import { useTransition } from 'react';
import { submitForm } from '../actions';

export default function ContactPage() {
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      try {
        await submitForm(formData);
        const form = document.querySelector('form') as HTMLFormElement;
        form?.reset();
        alert('Message sent successfully!');
      } catch {
        alert('Failed to send message. Please try again.');
      }
    });
  };

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-12">Contact Us</h1>
        <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-zinc-800">
          <form action={handleSubmit} className="space-y-6">
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
                className="w-full px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-zinc-200 mb-2">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-zinc-200 mb-2">Message</label>
              <textarea
                name="message"
              id="message"
                rows={4}
                className="w-full px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-white"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isPending}
              className="bg-white hover:bg-zinc-100 text-black font-bold py-3 px-8 rounded-full text-lg transition-colors disabled:opacity-50"
            >
              {isPending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
