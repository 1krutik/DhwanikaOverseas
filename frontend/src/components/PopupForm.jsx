import{ useState } from 'react';

const PopupForm = ({ show , onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
  const response = await fetch('http://localhost:5000/api/leads', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name, phone }),

    });

    if (response.ok) {
      alert('✅ Thank you! Your info has been submitted.');
      setName('');
      setPhone('');
      onclose(); // Close the popup
    } else {
      alert('❌ Submission failed. Please try again.');
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('❌ Server error. Please try again later.');
  }
};


  if (!show) return null;

  return (
    <div data-aos="fade-up" className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full relative px-6 py-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-xl font-semibold text-center mb-4 text-gray-800">
          Lets Connect!
        </h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          Enter your name and number so we can assist you better.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="tel"
            placeholder="Your Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-semibold transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
