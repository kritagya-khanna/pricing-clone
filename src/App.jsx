import Pricing from './Pricing.jsx'
import Navbar from './Navbar.jsx'
import React, {useState} from "react"
function App() {
    const[theme, setTheme]=useState("dark");
    const toggleTheme=()=>{
      setTheme(Theme=>(Theme==="light"?"dark":"light"));
    }
  
    return(
      <div data-theme={theme==="dark"?"light":"dark"}>
        <Navbar/>
        <Pricing/>
        <button onClick={toggleTheme}>{theme}</button>
      </div>
      
    );

}

export default App;
