import "./App.css";
import Articles from "./pages/articles/Articles";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { createContext, useState } from "react";

export const AppContext = createContext(null);

function App() {
   const [isLogin, setIsLogin] = useState(false);
  return (

      <AppContext.Provider value={{isLogin, setIsLogin}}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
        </Routes>
      </AppContext.Provider>
    
  );
}

export default App;
