import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextContainer from './TextContainer'
interface ItemList {
  id: number
  text: string
}
// inputFormに文字を入力しているとき　　（TextInput(子)に渡したい）
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  alert(e)
}

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <TextContainer text="hello" handleInputChange={handleInputChange}></TextContainer>
      </header>
    </div>
  );
}

export default App;
