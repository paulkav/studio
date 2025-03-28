export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-12">Our Services</h1>
        <div className="grid gap-8">
          <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-zinc-800">
            <h2 className="text-2xl font-bold mb-4">Studio Recording</h2>
            <p className="text-zinc-200">Professional recording sessions in our soundproof studios with top-tier equipment.</p>
          </div>
          
          <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-zinc-800">
            <h2 className="text-2xl font-bold mb-4">Post-Production</h2>
            <p className="text-zinc-200">Expert editing, mixing, and mastering services to make your podcast sound perfect.</p>
          </div>
          
          <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-zinc-800">
            <h2 className="text-2xl font-bold mb-4">Consultation</h2>
            <p className="text-zinc-200">Professional guidance on content strategy, equipment setup, and podcast launch.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
