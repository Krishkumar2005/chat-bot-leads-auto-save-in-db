import { Bot } from "lucide-react";
const Navbar = () => {

    return (

        <div
            className="
      bg-gradient-to-r
      from-blue-600
      to-indigo-600
      text-white
      px-6
      py-4
      flex
      items-center
      justify-between
      "
        >

            <Bot size={30} />

            <div>

                <h1
                    className="
          text-xl
          font-bold
          "
                >
                    Loan Lead Assistant
                </h1>

                <p
                    className="
          text-xs
          text-blue-100
          "
                >
                    AI Powered Lead Collection
                </p>

            </div>

            <div
                className="
        flex
        items-center
        gap-2
        "
            >

                <div
                    className="
          h-3
          w-3
          bg-green-400
          rounded-full
          animate-pulse
          "
                />

                <span
                    className="
          text-sm
          "
                >
                    Online
                </span>

            </div>

        </div>

    );
};

export default Navbar;