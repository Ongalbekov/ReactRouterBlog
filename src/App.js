import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './Components/Nav';
import Home from "./Pages/Home";
import Blog from "./Pages/Blog"
import DetailPage from "./Pages/DetailPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Nav/>
       
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/Blog' element={<Blog/>}/>
          <Route path="/:id" element={<DetailPage />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

