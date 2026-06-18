import ChatMessage from "./ChatMessage";
import TypingLoader from "./TypingLoader";

const ChatWindow = ({
 messages,
 loading
}) => {

 return (
  <div
   className="
   flex-1
   overflow-y-auto
   p-6
   space-y-4
   bg-slate-50
   "
  >

   {messages.map(
    (message,index)=>(
      <ChatMessage
       key={index}
       message={message}
      />
    )
   )}

   {loading &&
     <TypingLoader />
   }

  </div>
 );
};

export default ChatWindow;