import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-zinc-900 opacity-40"></div>
        <div className="z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Your Podcast Studio</h1>
          <p className="text-xl md:text-2xl mb-8 text-zinc-200">Professional Recording Space in the Heart of the City</p>
          <Link href="/booking" className="bg-white hover:bg-zinc-100 text-black font-bold py-3 px-8 rounded-full text-lg transition-colors inline-block">
            Book Now
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg text-white text-center border border-zinc-800">
            <h3 className="text-2xl font-bold mb-4">Professional Equipment</h3>
            <p className="text-zinc-400">State-of-the-art microphones, mixers, and recording gear</p>
          </div>
          <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg text-white text-center border border-zinc-800">
            <h3 className="text-2xl font-bold mb-4">Soundproof Rooms</h3>
            <p className="text-zinc-400">Perfectly acoustic treated spaces for crystal clear recording</p>
          </div>
          <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg text-white text-center border border-zinc-800">
            <h3 className="text-2xl font-bold mb-4">Expert Support</h3>
            <p className="text-zinc-400">Technical assistance and production guidance available</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-8">Ready to Record?</h2>
          <p className="text-xl mb-8 text-zinc-200">Contact us to book your session or schedule a tour of our facilities</p>
          <button className="bg-white hover:bg-zinc-100 text-black font-bold py-3 px-8 rounded-full text-lg transition-colors">
            Contact Us
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-zinc-400 py-8 px-4 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto text-center">
          <p>© {new Date().getFullYear()} Your Podcast Studio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
