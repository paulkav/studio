import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-sm border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-white font-bold text-xl">
            Your Studio
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/about" className="text-zinc-200 hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="/services" className="text-zinc-200 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-zinc-200 hover:text-white transition-colors">
              Contact
            </Link>
            <Link href="/content" className="text-zinc-200 hover:text-white transition-colors">
              Content
            </Link>
            <Link 
              href="/booking" 
              className="bg-white hover:bg-zinc-100 text-black px-4 py-2 rounded-full transition-colors"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-white">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/about" className="text-zinc-200 hover:text-white block px-3 py-2">
            About Us
          </Link>
          <Link href="/services" className="text-zinc-200 hover:text-white block px-3 py-2">
            Services
          </Link>
          <Link href="/contact" className="text-zinc-200 hover:text-white block px-3 py-2">
            Contact
          </Link>
          <Link href="/content" className="text-zinc-200 hover:text-white block px-3 py-2">
            Content
          </Link>
          <Link href="/booking" className="text-zinc-200 hover:text-white block px-3 py-2">
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
