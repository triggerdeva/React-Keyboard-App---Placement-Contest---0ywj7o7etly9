import "../styles/App.css";
import React, { useState, useEffect } from "react";

const keys = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");

const App = () => {
    const [input, setInput] = useState("");
    const [quote, setQuote] = useState(null);
    function handleClick(key) {
        console.log("Clicked!");
        setInput((state) => state + key);
    }
    useEffect(() => {
        if (input === "forty two") {
            (async () => {
                const query = await fetch("https://api.quotable.io/random");
                const response = await query.json();
                setQuote(response.content);
            })();
        }
    }, [input]);
    return (
        <>
            {!quote ? (
                <div className="keyboard">
                    <div className="preview">{input}</div>
                    <div>
                        {keys.map((key) => (
                            <button
                                key={key}
                                value={input}
                                onClick={() => handleClick(key)}
                                id={key === " " ? `key-space` : `key-${key}`}
                            >
                                {key === " " ? "Space" : key.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="quote">{quote}</div>
            )}
        </>
    );
};

export default App;
