import { useState } from "react";

const ChatInput = ({
    onSend,
}) => {

    const [message,
        setMessage
    ] = useState("");

    const handleSend = () => {

        if (!message.trim())
            return;

        onSend(message);

        setMessage("");
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSend();
        }
    };

    return (
        <div
            className="
 border-t
 bg-white
 p-4
 "
        >

            <div
                className="
  flex
  gap-3
  "
            >

                <input
                    type="text"
                    value={message}
                    onChange={(e) =>
                        setMessage(
                            e.target.value
                        )
                    }
                    onKeyDown={handleKeyDown}
                    placeholder="Type your message..."
                    className="
   flex-1
   border
   border-gray-300
   rounded-full
   px-5
   py-3
   focus:outline-none
   focus:ring-2
   focus:ring-blue-500
   "
                />

                <button
                    onClick={handleSend}
                    className="
   bg-blue-600
   hover:bg-blue-700
   text-white
   px-6
   rounded-full
   transition
   cursor-pointer
   "
                >
                    Send
                </button>

            </div>

        </div>
    );
};

export default ChatInput;