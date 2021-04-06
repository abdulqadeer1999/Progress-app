import './App.css';
import {initNotification } from './services/firebaseService'

function App() {
  return (
    <div className="App">
     
      <h1>Hello World</h1>
      <br />
      <button onClick = {initNotification}>Configure Notifications </button>
    </div>
  );
}

export default App;
