import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaUser, FaMicrophone, FaPaperPlane, FaVolumeUp, FaHistory, FaInfoCircle } from 'react-icons/fa';
import './AiHealthAssistant.css';

const AiHealthAssistant = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your AI Health Assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date().toISOString()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  
  const sampleQuestions = [
    "What should I do for a fever?",
    "How to treat a minor burn?",
    "What are symptoms of dehydration?",
    "First aid for a sprained ankle?",
    "Is my headache serious?",
    "How to check blood pressure at home?"
  ];

  // Scroll to the bottom of the chat
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = () => {
    if (inputText.trim() === '') return;
    
    const userMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date().toISOString()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);
    
    // Simulate AI response after a delay
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: generateBotResponse(inputText),
        sender: 'bot',
        timestamp: new Date().toISOString()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const generateBotResponse = (query) => {
    // Simple mock responses based on query content
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes('fever')) {
      return "For fever, you can: 1) Take a lukewarm bath or apply cool compresses, 2) Stay hydrated by drinking plenty of fluids, 3) Rest adequately, 4) Take over-the-counter medication like acetaminophen or ibuprofen as directed. Seek medical help if fever persists over 3 days, exceeds 103°F (39.4°C), or is accompanied by severe symptoms like difficulty breathing, stiff neck, or severe headache.";
    } else if (lowerQuery.includes('headache')) {
      return "For a headache, try: 1) Rest in a quiet, dark room, 2) Apply a cold or warm compress to your head, 3) Stay hydrated, 4) Take over-the-counter pain relievers if needed. Seek immediate medical attention if your headache is sudden and severe, accompanied by fever, stiff neck, confusion, seizures, double vision, or occurs after a head injury.";
    } else if (lowerQuery.includes('burn')) {
      return "For minor burns: 1) Cool the burn with cool (not cold) running water for 10-15 minutes, 2) Do not apply ice directly, 3) Apply aloe vera gel or moisturizer, 4) Take over-the-counter pain relievers if needed, 5) Cover with a sterile, non-stick bandage. Seek medical help for burns that are larger than 3 inches, on face/hands/feet/genitals, or deep burns that affect all layers of skin.";
    } else if (lowerQuery.includes('blood pressure')) {
      return "To check blood pressure at home: 1) Use a validated monitor with correctly sized cuff, 2) Rest for 5 minutes before measuring, 3) Sit with back supported and feet flat on floor, 4) Place arm at heart level on a table, 5) Wrap cuff on bare upper arm, 6) Do not talk during measurement, 7) Take 2-3 readings 1 minute apart and record average. Normal BP is less than 120/80 mmHg.";
    } else if (lowerQuery.includes('ankle') || lowerQuery.includes('sprain')) {
      return "For a sprained ankle, remember RICE: 1) Rest - avoid weight bearing, 2) Ice - apply for 15-20 minutes every 2-3 hours, 3) Compression - use an elastic bandage, 4) Elevation - keep foot above heart level when possible. Take over-the-counter pain relievers if needed. Seek medical help if you can't bear weight, have severe pain, or notice significant swelling or bruising.";
    } else if (lowerQuery.includes('dehydration')) {
      return "Symptoms of dehydration include: thirst, dry mouth, dark yellow urine, fatigue, dizziness, confusion, and decreased urination. For mild dehydration, drink water or oral rehydration solutions. Severe dehydration (extreme thirst, very dark urine, dizziness, rapid heartbeat, confusion) requires immediate medical attention.";
    } else {
      return "Thank you for your question. While I can provide general health information, remember that I'm an AI assistant and not a substitute for professional medical advice. For personalized guidance, please consult with a healthcare provider. Is there something specific about your health concern you'd like to know?";
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleQuickQuestion = (question) => {
    setInputText(question);
  };

  const toggleVoiceRecording = () => {
    setIsRecording(!isRecording);
    
    // Simulate voice recognition
    if (!isRecording) {
      setTimeout(() => {
        setIsRecording(false);
        setInputText("I have a slight fever and headache");
      }, 3000);
    }
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="ai-assistant-page page-transition">
      <section className="ai-hero">
        <div className="container">
          <div className="ai-hero-content">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FaRobot /> AI Health Assistant
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Get instant health advice and first-aid tips from our intelligent assistant
            </motion.p>
          </div>
        </div>
      </section>

      <section className="chat-section section">
        <div className="container">
          <div className="chat-container">
            <div className="chat-sidebar">
              <div className="sidebar-section">
                <h3>Quick Questions</h3>
                <div className="quick-questions">
                  {sampleQuestions.map((question, index) => (
                    <button
                      key={index}
                      className="quick-question-btn"
                      onClick={() => handleQuickQuestion(question)}
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="sidebar-section">
                <h3>Health Tips</h3>
                <div className="health-tips">
                  <div className="health-tip">
                    <FaInfoCircle className="tip-icon" />
                    <p>Stay hydrated by drinking at least 8 glasses of water daily.</p>
                  </div>
                  <div className="health-tip">
                    <FaInfoCircle className="tip-icon" />
                    <p>Adults need 7-9 hours of sleep per night for optimal health.</p>
                  </div>
                  <div className="health-tip">
                    <FaInfoCircle className="tip-icon" />
                    <p>Regular physical activity helps maintain a healthy heart.</p>
                  </div>
                </div>
              </div>
              
              <div className="sidebar-section">
                <h3>Chat History</h3>
                <div className="chat-history">
                  <button className="history-btn">
                    <FaHistory /> Previous Conversations
                  </button>
                </div>
              </div>
            </div>
            
            <div className="chat-main">
              <div className="chat-header">
                <div className="chat-header-info">
                  <FaRobot className="bot-icon" />
                  <div className="bot-info">
                    <h3>Health Assistant</h3>
                    <span className="status-online">Online</span>
                  </div>
                </div>
                <div className="chat-header-actions">
                  <button className="voice-mode">
                    <FaVolumeUp /> Voice Mode
                  </button>
                </div>
              </div>
              
              <div className="chat-messages">
                {messages.map((message) => (
                  <div 
                    key={message.id} 
                    className={`message ${message.sender === 'bot' ? 'message-bot' : 'message-user'}`}
                  >
                    <div className="message-avatar">
                      {message.sender === 'bot' ? <FaRobot /> : <FaUser />}
                    </div>
                    <div className="message-content">
                      <div className="message-bubble">
                        {message.text}
                      </div>
                      <div className="message-timestamp">
                        {formatTime(message.timestamp)}
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="message message-bot">
                    <div className="message-avatar">
                      <FaRobot />
                    </div>
                    <div className="message-content">
                      <div className="message-bubble typing-indicator">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
              
              <div className="chat-input">
                <input
                  type="text"
                  placeholder="Type your health question here..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <button 
                  className={`mic-button ${isRecording ? 'recording' : ''}`}
                  onClick={toggleVoiceRecording}
                >
                  <FaMicrophone />
                </button>
                <button 
                  className="send-button"
                  onClick={handleSendMessage}
                  disabled={!inputText.trim()}
                >
                  <FaPaperPlane />
                </button>
              </div>
              
              <div className="disclaimer">
                <p>This AI assistant provides general health information and is not a substitute for professional medical advice. In case of emergency, please call your local emergency services immediately.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section section">
        <div className="container">
          <div className="section-header">
            <h2>Features of Our Health Assistant</h2>
            <p>Get instant health guidance and information</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <h3>First Aid Guidance</h3>
              <p>Get step-by-step instructions for common emergencies and injuries.</p>
            </div>
            
            <div className="feature-card">
              <h3>Symptom Assessment</h3>
              <p>Describe your symptoms to get information about possible conditions.</p>
            </div>
            
            <div className="feature-card">
              <h3>Medication Information</h3>
              <p>Learn about common medications, their uses, and side effects.</p>
            </div>
            
            <div className="feature-card">
              <h3>Voice Mode for Elderly</h3>
              <p>Elderly-friendly voice interface for easy interaction.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiHealthAssistant;