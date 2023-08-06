
import Loading from "./component/loading/Loading";
import React from 'react';
import { BrowserRouter as  Router, Routes, Route  } from "react-router-dom";
import Main from "./pages/main/Main";

function App() {
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Loading />}/>
      </Routes>
    </Router>
  );
}

export default App;
