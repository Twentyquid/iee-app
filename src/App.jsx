import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter } from "react-router-dom";
import AuthWrapper from "./auth/AuthWrapper";
import "remixicon/fonts/remixicon.css";

function App() {
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [promptevent, setPromptevent] = useState({});
  const modelRef = useRef(null);

  const handler = (e) => {
    e.preventDefault();
    setPromptevent((prev) => e);
    console.log(e);
    setShowModal(true);
    console.log("install triggered");

    // setSupportsPWA(true);
    // setPromptInstall(e);
  };
  useEffect(() => {
    window.addEventListener("beforeinstallprompt", handler);
  }, []);

  return (
    <>
      <BrowserRouter>
        <div>
          <div className="max-w-[640px] h-screen bg-slate-50 mx-auto flex flex-col relative">
            {showModal ? (
              <div
                ref={modelRef}
                className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 w-full z-50 bg-black text-white"
              >
                <div className="w-full">
                  <button
                    className="ml-auto block text-4xl"
                    onClick={() => {
                      setShowModal(false);
                    }}
                  >
                    <div>
                      <i className="ri-close-line"></i>
                    </div>
                  </button>
                </div>
                <div className="p-4">
                  <p>Please install PWA for better experience</p>
                  <button
                    className="w-full bg-purple-400 p-2 mt-5"
                    onClick={() => {
                      promptevent.prompt();
                    }}
                  >
                    install App
                  </button>
                </div>
              </div>
            ) : null}
            <AuthWrapper />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
