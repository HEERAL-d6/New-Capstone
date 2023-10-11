// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Judgedash from './Judge/Judgedash';

import { useState } from 'react';
function App4() {
    const [number, setNumber] = useState(1)
    return (
        <>


            <div style={{ display: "flex" }}>
            
                <Router>
                    <Routes>
                        <Route exact path='/judgedash' element={<Judgedash number={number} setNumber={setNumber} />} />

                    </Routes>
                </Router>
            </div>

        </>


    );
}

export default App4;
