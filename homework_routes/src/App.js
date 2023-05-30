import Nav from "./components/nav/nav";
import { Route, Routes } from "react-router-dom";
import Home from './pages/home/Home';
import Posts from './pages/posts/Posts';
import Gallery from './pages/gallery/Gallery';
import Contacts from './pages/contacts/Contacts';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route exact index element={<Home/>}/>
        <Route path="/posts" element={<Posts/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
    </div>
  );
}

export default App;
