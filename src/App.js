import { useState } from "react";

export default function Calculator() {
    const [display, setDisplay] = useState("");

    const handleClick = (value) => {
        if (value === "C") {
            setDisplay("");
        } else if (value === "=") {
            try {
                setDisplay(eval(display).toString());
            } catch {
                setDisplay("Error");
            }
        } else {
            setDisplay(display + value);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                <input className="w-full p-3 text-right text-xl border rounded-lg mb-4" value={display} disabled />
                <div className="grid grid-cols-4 gap-2">
                    {["7", "8", "9", "C", "4", "5", "6", "/", "1", "2", "3", "*", "0", ".", "=", "+", "-"].map((btn, index) => (
                        <button 
                            key={index} 
                            className={`btn ${btn === "C" ? "bg-red-500 text-white" : btn === "=" ? "bg-green-500 text-white" : ["/", "*", "+", "-"].includes(btn) ? "bg-blue-500 text-white" : ""}`} 
                            onClick={() => handleClick(btn)}
                        >
                            {btn}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

  