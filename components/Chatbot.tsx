
import React, { useState, useRef, useEffect } from 'react';
import { ChatbotIcon, CloseIcon, SendIcon } from './icons/UiIcons';
import { sendMessageToChat, createChatSession } from '../services/geminiService';
import type { Chat } from '@google/genai';

interface Message {
    role: 'user' | 'model';
    text: string;
}

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const chatRef = useRef<Chat | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen && !chatRef.current) {
            chatRef.current = createChatSession();
            setMessages([{ role: 'model', text: 'Bonjour ! Je suis AlicIA, votre assistant virtuel. Comment puis-je vous aider aujourd\'hui ?' }]);
        }
    }, [isOpen]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage: Message = { role: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            if (chatRef.current) {
                const responseText = await sendMessageToChat(chatRef.current, input);
                const modelMessage: Message = { role: 'model', text: responseText };
                setMessages(prev => [...prev, modelMessage]);
            }
        } catch (error) {
            console.error("Error sending message to Gemini:", error);
            const errorMessage: Message = { role: 'model', text: 'Désolé, une erreur est survenue. Veuillez réessayer.' };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 bg-gradient-to-r from-[#6366F1] to-[#00FFB3] text-white p-4 rounded-full shadow-2xl z-50 transform hover:scale-110 transition-transform duration-300"
                aria-label="Ouvrir le chatbot"
            >
                {isOpen ? <CloseIcon className="h-8 w-8" /> : <ChatbotIcon className="h-8 w-8" />}
            </button>

            <div className={`fixed bottom-24 right-6 w-[calc(100vw-3rem)] max-w-md h-[70vh] max-h-[600px] bg-gray-900/80 backdrop-blur-xl border border-gray-700 rounded-2xl shadow-2xl flex flex-col transition-all duration-500 ease-in-out z-50 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
                <div className="flex-shrink-0 p-4 border-b border-gray-700 flex justify-between items-center">
                    <h3 className="text-lg font-bold text-white">AlicIA - Assistant</h3>
                    <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white"><CloseIcon className="h-5 w-5"/></button>
                </div>
                
                <div className="flex-1 p-4 overflow-y-auto space-y-4">
                    {messages.map((msg, index) => (
                        <div key={index} className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                           {msg.role === 'model' && <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-r from-[#6366F1] to-[#00FFB3] flex items-center justify-center text-sm font-bold">A</div>}
                           <div className={`max-w-[80%] p-3 rounded-2xl ${msg.role === 'user' ? 'bg-[#6366F1] text-white rounded-br-none' : 'bg-gray-800 text-gray-300 rounded-bl-none'}`}>
                               <p className="text-sm" dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, '<br />') }}></p>
                           </div>
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex justify-start gap-3">
                            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gradient-to-r from-[#6366F1] to-[#00FFB3] flex items-center justify-center text-sm font-bold">A</div>
                            <div className="p-3 bg-gray-800 rounded-2xl rounded-bl-none flex items-center space-x-1">
                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></span>
                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse animation-delay-200"></span>
                                <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse animation-delay-400"></span>
                            </div>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>
                
                <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-700">
                    <div className="relative">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Posez votre question..."
                            className="w-full bg-gray-800 border-gray-700 text-white rounded-full py-3 pl-5 pr-12 focus:ring-2 focus:ring-[#6366F1] outline-none"
                            disabled={isLoading}
                        />
                        <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#6366F1] rounded-full text-white disabled:bg-gray-600" disabled={isLoading || !input.trim()}>
                            <SendIcon className="h-5 w-5" />
                        </button>
                    </div>
                </form>
            </div>
             <style jsx>{`
                .animation-delay-200 { animation-delay: 0.2s; }
                .animation-delay-400 { animation-delay: 0.4s; }
            `}</style>
        </>
    );
};

export default Chatbot;
