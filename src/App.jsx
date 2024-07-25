import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "@/components/ui/button";
import { BrowserRouter } from "react-router-dom";
import AuthWrapper from "./auth/AuthWrapper";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <div>
          <div className="max-w-[640px] h-screen bg-slate-50 mx-auto">
            <AuthWrapper />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
