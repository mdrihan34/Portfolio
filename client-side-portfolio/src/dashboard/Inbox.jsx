import { useState, useEffect } from 'react';

const Inbox = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://server-site-portfolio-7mtdx1ohr-rihan2045s-projects-8a229069.vercel.app/messages')
            .then((res) => res.json())
            .then((data) => {
                setMessages(data);
                setLoading(false); 
            })
            .catch((error) => {
                console.error('Error fetching messages:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="mx-auto p-6 bg-gray-900 text-white shadow-lg rounded-xl w-full">
            <h2 className="text-2xl font-bold mb-4 text-center text-blue-400">Inbox</h2>
            
            {loading ? (
                <p className="text-center text-gray-400">Loading messages...</p>
            ) : messages.length > 0 ? (
                <div className="space-y-4">
                    {messages.map((msg) => (
                        <div key={msg._id} className="p-4 bg-gray-800 rounded-lg">
                            <h3 className="text-lg font-semibold">{msg.name}</h3>
                            <p className="text-gray-400 text-sm">{msg.email}</p>
                            <p className="mt-2">{msg.message}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-400">No messages found.</p>
            )}
        </div>
    );
};

export default Inbox;
