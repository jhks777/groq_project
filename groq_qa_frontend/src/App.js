// src/App.js
/*
import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/qa/', { question });
            setAnswer(response.data.response);
        } catch (error) {
            console.error('Error fetching response:', error);
        }
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />
                <button type="submit">Ask</button>
            </form>
            {answer && <p>{answer}</p>}
        </div>
    );
}

export default App;
*/
// src/App.js
import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Make sure to import the CSS file

function App() {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/qa/', { question });
            setAnswer(response.data.response);
        } catch (error) {
            console.error('Error fetching response:', error);
        }
    };

    return (
        <div className="App">
            <div className="App-header">
                Qna with Groq
                <form className="App-form" onSubmit={handleSubmit}>
                <input
                    className="App-input"
                    type="text"
                    placeholder="Ask your question..."
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                />
                <button className="App-button" type="submit">Ask</button>
            </form>
            </div>
            
            {answer && <p className="App-answer">{answer}</p>}
        </div>
    );
}

export default App;

