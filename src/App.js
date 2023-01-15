import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home'
import About from './components/About'
import SinglePost from './components/SinglePost'
import Project from './components/Project'
import Post from './components/Post'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";

function App() {
  return (

    <Router>
       <Navbar />
      {/* <Header/> */}
     <Routes> 
      <Route element = {<Home />} path='/' exact />
     <Route element = {<About />} path='/about' />
     <Route element = {<SinglePost />} path='/post/:slug' />
     <Route element = {<Post />} path='/post' />
    <Route element = {<Project />} path='/project' />
    </Routes>
    <Footer/>
</Router>

  )
}

export default App;
