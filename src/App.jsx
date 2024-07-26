import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter } from "react-router-dom";
import AuthWrapper from "./auth/AuthWrapper";

function App() {
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [promptevent, setPromptevent] = useState({});

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
          <div className="max-w-[640px] h-screen bg-slate-50 mx-auto">
            {showModal ? (
              <div>
                <button
                  onClick={() => {
                    promptevent.prompt();
                  }}
                >
                  install App
                </button>
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
