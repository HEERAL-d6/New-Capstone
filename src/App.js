import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import MyRouter from './components/MyRouter';
import App1 from './components/App1';
import App2 from './components/App2';
import App3 from './components/App3';
import App4 from './components/App4';

function App() {
  return (
    <div className="App">
      <MyRouter/>
      <App2/>
      <App1/>
      <App3/>
      <App4/>

    </div>
  );
}

export default App;
