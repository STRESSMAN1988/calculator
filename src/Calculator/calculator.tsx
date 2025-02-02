import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const handleClick = (value: string) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString()); // Using eval (ensure sanitization for security)
    } catch {
      setResult("Error");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-80">
        <div className="mb-4 p-2 text-right bg-gray-200 rounded-md min-h-[50px]">
          <div className="text-gray-600 text-lg">{input}</div>
          <div className="text-black text-2xl font-bold">{result}</div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((char) => (
            <button
              key={char}
              className="bg-gray-300 text-black p-4 rounded-md text-xl font-bold hover:bg-gray-400"
              onClick={() => (char === "=" ? handleCalculate() : handleClick(char))}
            >
              {char}
            </button>
          ))}
          <button
            className="col-span-4 bg-red-500 text-white p-4 rounded-md text-xl font-bold hover:bg-red-600"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}