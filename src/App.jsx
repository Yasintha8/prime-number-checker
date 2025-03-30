function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-96">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">
          Prime Number Checker
        </h2>
        <div className="mb-4">
          <input
            type="number"
            placeholder="Enter a number"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex justify-between">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
            Check
          </button>
          <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition">
            Clear
          </button>
        </div>
        <p className="text-center text-lg text-green-600 font-semibold mt-4">
          It is a prime number
        </p>
      </div>
    </div>
  );
}

export default App;
