export default function BookingPage() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-12">Book a Session</h1>
        <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-zinc-800">
          <form className="space-y-6">
            <div>
              <label htmlFor="service" className="block text-zinc-200 mb-2">Service Type</label>
              <select
                id="service"
                className="w-full px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-white"
              >
                <option value="">Select a service</option>
                <option value="recording">Studio Recording</option>
                <option value="post-production">Post-Production</option>
                <option value="consultation">Consultation</option>
              </select>
            </div>
            <div>
              <label htmlFor="date" className="block text-zinc-200 mb-2">Preferred Date</label>
              <input
                type="date"
                id="date"
                className="w-full px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-white"
              />
            </div>
            <div>
              <label htmlFor="time" className="block text-zinc-200 mb-2">Preferred Time</label>
              <input
                type="time"
                id="time"
                className="w-full px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-white"
              />
            </div>
            <div>
              <label htmlFor="duration" className="block text-zinc-200 mb-2">Session Duration</label>
              <select
                id="duration"
                className="w-full px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-white"
              >
                <option value="">Select duration</option>
                <option value="1">1 hour</option>
                <option value="2">2 hours</option>
                <option value="4">4 hours</option>
                <option value="8">Full day (8 hours)</option>
              </select>
            </div>
            <div>
              <label htmlFor="notes" className="block text-zinc-200 mb-2">Additional Notes</label>
              <textarea
                id="notes"
                rows={4}
                className="w-full px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-white hover:bg-zinc-100 text-black font-bold py-3 px-8 rounded-full text-lg transition-colors"
            >
              Book Session
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
