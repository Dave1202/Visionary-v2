import React, { useState } from "react";
import axios from "axios";
import "./ChatWidget.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaComments, FaTimes, FaPaperPlane } from "react-icons/fa";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMessage, setUserMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleMessageChange = (e) => {
    setUserMessage(e.target.value);
  };

  const sendMessage = async () => {
    if (!userMessage.trim()) return;

    const newChatHistory = [...chatHistory, { role: "user", text: userMessage }];
    setChatHistory(newChatHistory);

    try {
      const response = await axios.post("http://localhost:5000/chat", {
        userMessage,
      });

      setChatHistory([
        ...newChatHistory,
        { role: "operator", text: response.data.response },
      ]);

      setUserMessage("");
    } catch (error) {
      console.error("Error al obtener respuesta", error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="chat-widget-container">
      <button className="chat-toggle-button" onClick={toggleChat}>
        {isOpen ? <FaTimes size={22} /> : <FaComments size={26} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chat-window"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            <div className="chat-header">
              <h4>Chatbot Operador</h4>
            </div>

            <div className="chat-history">
              {chatHistory.map((msg, index) => (
                <div
                  key={index}
                  className={`chat-bubble ${msg.role === "user" ? "user" : "operator"}`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            <div className="chat-input">
              <input
                type="text"
                value={userMessage}
                onChange={handleMessageChange}
                placeholder="Escribe un mensaje..."
                onKeyPress={handleKeyPress}
              />
              <button onClick={sendMessage}>
                <FaPaperPlane />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatWidget;
