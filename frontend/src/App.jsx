import Navbar from "./components/Navbar";
import ChatPage from "./pages/ChatPage";

function App() {

  return (

    <div
      className="
      h-screen
      flex
      flex-col
      bg-gradient-to-br
      from-slate-100
      to-blue-50
      "
    >

      <Navbar />

      <ChatPage />

    </div>

  );
}

export default App;