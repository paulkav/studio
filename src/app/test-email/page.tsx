'use client';

import { useState } from 'react';

export default function TestEmail() {
  const [status, setStatus] = useState('');

  const sendTestEmail = async () => {
    try {
      setStatus('Sending...');
      const response = await fetch('/api/test-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      const data = await response.json();
      setStatus(JSON.stringify(data, null, 2));
    } catch (error) {
      setStatus(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Test Email Page</h1>
      <button
        onClick={sendTestEmail}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Send Test Email
      </button>
      {status && (
        <pre className="mt-4 p-4 bg-gray-100 rounded">
          {status}
        </pre>
      )}
    </div>
  );
}
