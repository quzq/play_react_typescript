import React from 'react';
import TextInput from './TextInput'
interface ItemList {
  id: number
  text: string
}
// inputFormに文字を入力しているとき　　（TextInput(子)に渡したい）
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  alert(e.target.value)
}

const App: React.FC = () => {
  return (
    <div className="App">
       <TextInput text="hello" handleInputChange={handleInputChange}></TextInput>
   </div>
  );
}

export default App;
