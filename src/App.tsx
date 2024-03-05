import './App.css'
import Navbar from "./Components/Navbar.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./Components/Home.tsx";

function App() {

  return (
    <>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={(<Home />)}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
