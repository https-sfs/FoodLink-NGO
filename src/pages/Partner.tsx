const Partner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 px-6">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-soft space-y-4">
        <h2 className="text-2xl font-bold text-center">
          Partner Up With Us
        </h2>

        <input
          type="text"
          placeholder="Organization Name"
          className="w-full border rounded-lg px-4 py-2"
        />

        <select className="w-full border rounded-lg px-4 py-2">
          <option>Partner Type</option>
          <option>NGO</option>
          <option>Restaurant</option>
          <option>Corporate</option>
          <option>Individual</option>
        </select>

        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded-lg px-4 py-2"
        />

        <input
          type="text"
          placeholder="Phone Number"
          className="w-full border rounded-lg px-4 py-2"
        />

        <textarea
          placeholder="How would you like to partner with us?"
          className="w-full border rounded-lg px-4 py-2"
          rows={4}
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Partner;
