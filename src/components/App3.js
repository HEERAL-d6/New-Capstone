// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Pandash from './Panelist/Pandash';
import { useState } from 'react';
function App3() {
    const [number, setNumber]=useState(1)
    return (
        <>


            <div style={{ display: "flex" }}>
                <Router>
                    <Routes>
                        <Route exact path='/pandash' element={<Pandash  number={number} setNumber={setNumber}/>} />
                        
                    </Routes>
                </Router>
            </div>

        </>


    );
}

export default App3;
