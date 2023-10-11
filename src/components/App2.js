// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Editpan from './Admin/Editpan';
import Editdead from './Admin/Editdead';
import Question from './Admin/Question';
import { useState } from 'react';
function App2() {
    const [number, setNumber]=useState(1)
    return (
        <>


            <div style={{ display: "flex" }}>
                <Router>
                    <Routes>
                        <Route exact path='/editpan' element={<Editpan  number={number} setNumber={setNumber}/>} />
                        <Route exact path='/editdead' element={<Editdead  number={number} setNumber={setNumber}/>} />
                        <Route exact path='/question' element={<Question  number={number} setNumber={setNumber}/>} />
                    </Routes>
                </Router>
            </div>

        </>


    );
}

export default App2;
