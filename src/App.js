import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './Pages/Home';
import SignupPage from './Pages/Signup'
import LoginPage from './Pages/Login'
import CreatePage from './Pages/Create'
import ViewPostPage from './Pages/ViewPost'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage/>} />
          <Route exact path="/signup" element={<SignupPage/>} />
          <Route exact path="/login" element={<LoginPage/>} />
          <Route exact path="/create" element={<CreatePage/>} />
          <Route exact path="/viewPost'" element={<ViewPostPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
