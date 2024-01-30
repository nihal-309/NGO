import './App.css';
// import Header from "./components/Headerr"
// import Hero from "./components/Hero";
// import Desc from "./components/Hero-desc";
// import Card from "./components/Card";
// import Effort from "./images/effort.png";
// import Cred from "./images/insignia.png";
// import Emp from "./images/empower.png";
// import Inn from "./images/innovation.png";
// import About from "./components/About";

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Project from './Pages/Project';
import Page1 from './Pages/Page1';
import Post1 from './Pages/Post1';
import Post2 from './Pages/Post2';
import Post3 from './Pages/Post3';
import Post4 from './Pages/Post4';
import Post5 from './Pages/Post5';
import Post6 from './Pages/Post6';
import Event1 from './Pages/Event1';
import Event2 from './Pages/Event2'
import Event3 from './Pages/Event3';
import Event4 from './Pages/Event4';
import Event5 from './Pages/Event5';
import 'react-multi-carousel/lib/styles.css'

function App() { 
  return (
    <>
      <Router>
        <Routes>
          <Route 
          path="/"
          element={<Page1 />}
          />
          <Route 
          path="/project"
          element={<Project />}
          />
          <Route 
          path="/post1"
          element={<Post1 />}
          />
          <Route 
          path="/post2"
          element={<Post2 />}
          />
          <Route 
          path="/post3"
          element={<Post3 />}
          />
          <Route 
          path="/post4"
          element={<Post4 />}
          />
          <Route 
          path="/post5"
          element={<Post5 />}
          />
          <Route 
          path="/post6"
          element={<Post6 />}
          />
          <Route 
          path="/event1"
          element={<Event1 />}
          />
          <Route 
          path="/event2"
          element={<Event2 />}
          />
          <Route 
          path="/event3"
          element={<Event3 />}
          />
          <Route 
          path="/event4"
          element={<Event4 />}
          />
          <Route 
          path="/event5"
          element={<Event5 />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
