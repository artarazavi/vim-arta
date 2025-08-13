import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Experiencee from "./components/Experience/Experience";
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";
import Education from './components/Education/Education';
import Links from './components/Links/Links';
import AdMsg from './components/AdMsg/AdMsg';
import Blog from './components/Blog/Blog';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/blog/:blogId" element={<Blog />} />
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experiencee />} />
        <Route path="/education" element={<Education />} />
        <Route path="/links" element={<Links />} />
        <Route path="/admsg" element={<AdMsg />} />
        
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
};

export default App;
