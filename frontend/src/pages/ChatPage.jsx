import {
    useEffect,
    useState,
} from "react";

import ChatWindow
    from "../components/ChatWindow";

import ChatInput
    from "../components/ChatInput";

import {
    sendMessage,
} from "../api/chatApi";

const ChatPage = () => {

    const [messages,
        setMessages
    ] = useState([]);

    const [sessionId,
        setSessionId
    ] = useState("");

    const [loading, setLoading] =
        useState(false);

    useEffect(() => {

        let id =
            sessionStorage.getItem(
                "loan-session"
            );

        if (!id) {

            id =
                crypto.randomUUID();

            sessionStorage.setItem(
                "loan-session",
                id
            );
        }

        setSessionId(id);

    }, []);

    const handleSend =
        async (text) => {

            setMessages(prev => [
                ...prev,
                {
                    sender: "user",
                    text
                }
            ]);

            setLoading(true);

            try {

                const response =
                    await sendMessage({

                        sessionId,
                        message: text

                    });

                setMessages(prev => [
                    ...prev,
                    {
                        sender: "bot",
                        text: response.reply
                    }
                ]);

            } catch {

                setMessages(prev => [
                    ...prev,
                    {
                        sender: "bot",
                        text: "Try again later, your limit exceeds."
                    }
                ]);

            } finally {

                setLoading(false);

            }
        };

    return (

        <div
            className="
    flex-1
    flex
    justify-center
    items-center
    p-6
    "
        >

            <div
                className="
      w-full
      max-w-4xl
      h-[85vh]
      bg-white
      rounded-3xl
      shadow-2xl
      overflow-hidden
      flex
      flex-col
      "
            >

                <ChatWindow
                    messages={messages}
                    loading={loading}
                />

                <ChatInput
                    onSend={handleSend}
                />

            </div>

        </div>

    );
};

export default ChatPage;