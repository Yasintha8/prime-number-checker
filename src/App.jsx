import { useState } from "react";

function App() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  const checkPrime = ()=>{
    if(number === '' || isNaN(number)){
      setResult('Please enter a valid number.');
      return;
    }
    let num = parseInt(number);
    if(num < 2){
      setResult("It is not a prime number.");
      return;
    }
    let isPrime = true;
    for(let i = 2; i <= Math.sqrt(num); i++){
      if(num % i === 0){
        isPrime = false;
        break;
      }
    }
    setResult(isPrime ? "It is a prime number." : "It is not a prime number.");
  };
  const clearInput = ()=>{
    setNumber('');
    setResult('');
  };

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
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div className="flex justify-between">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            onClick={checkPrime}>
            Check
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          onClick={clearInput}>
            Clear
          </button>
        </div>
        <p className="text-center text-lg text-green-600 font-semibold mt-4">
          {result}
        </p>
      </div>
    </div>
  );
}

export default App;
