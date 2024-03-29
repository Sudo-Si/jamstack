import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home'
import About from './components/About'
import SinglePost from './components/SinglePost'
import Project from './components/Project'
import Post from './components/Post'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFound from "./components/404";
// import Header from "./components/Header";

function App() {
  return (

    <Router>
       <Navbar />
  
     <Routes> 
      <Route element = {<Home />} path='/' exact />
     <Route element = {<About />} path='/about' />
     <Route element = {<SinglePost />} path='/post/:slug' />
     <Route element = {<Post />} path='/post' />
     <Route element = {<Project />} path='/project'  />
     
     <Route path='*' element={<NotFound />}/>
    </Routes>
    
    <Footer/>
</Router>

  )
  
}

export default App;
