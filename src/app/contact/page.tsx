import ContactForm from './contact-form';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-12">Contact Us</h1>
        <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-zinc-800">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
