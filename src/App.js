import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pageSize=6;
  const country='in';
  const apiKey=process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0);

    return (
      <Router>
      <div>
      <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <Navbar />
        
          <Routes>
            <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="General" pageSize={pageSize} country={country} category="general"/>}/>
          </Routes>
          <Routes>
            <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="Business" pageSize={pageSize} country={country} category="business"/>}/>
          </Routes>
          <Routes>
            <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="Entertainment" pageSize={pageSize} country={country} category="entertainment"/>}/>
          </Routes>
          <Routes>
            <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="Health" pageSize={pageSize} country={country} category="health"/>}/>
          </Routes>
          <Routes>
            <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="Science" pageSize={pageSize} country={country} category="science"/>}/>
          </Routes>
          <Routes>
            <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="Sports" pageSize={pageSize} country={country} category="sports"/>}/>
          </Routes>
          <Routes>
            <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="Technology" pageSize={pageSize} country={country} category="technology"/>}/>
          </Routes>
      </div>
        </Router>
    )
}

export default App;
