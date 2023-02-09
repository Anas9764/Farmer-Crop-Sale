import React, { useState } from 'react';
import './chatbot.css';

const initialQuestions = [
  { question: 'Hello! How can I help you today?', sender: 'bot' },
];

const responses = [
  {
    question: 'What is your name?',
    answer: 'My name is Chatbot!',
  },
  {
    question: 'What is your purpose?',
    answer: 'I am here to help answer any questions you may have!',
  },
  {
    question: 'What can you do?',
    answer: 'I can provide information and assist with various tasks. Just ask!',
  },
  {
    question: 'What is the weather like today?',
    answer: "I'm sorry, I don't have access to real-time weather information.",
  },
];

function Chatbot() {
  const [questions, setQuestions] = useState(initialQuestions);
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuestions([...questions, { question: inputValue, sender: 'user' }]);

    responses.forEach(({ question, answer }) => {
      if (question.toLowerCase() === inputValue.toLowerCase()) {
        setQuestions([...questions, { question: answer, sender: 'bot' }]);
      }
    });

    setInputValue('');
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="toggle-chatbot-button" onClick={toggleChatbot}>
        {isOpen ? 'Close Chatbot' : 'Open Chatbot'}
      </button>
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <h3>Chatbot</h3>
          </div>
          <div className="chatbot-body">
            {questions.map((question, index) => (
              <div
                key={index}
                className={`chatbot-message ${
                  question.sender === 'bot' ? 'chatbot-message-bot' : ''
                }`}
              >
                {question.question}
              </div>
            ))}
          </div>
          <form className="chatbot-footer" onSubmit={handleSubmit}>
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              placeholder="Type a message"
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </>
  );
}

export default Chatbot;
