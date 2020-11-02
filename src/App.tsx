import React from 'react';
import TextInput from './components/TextInput'
import AxiosTest from './components/AxiosTest'
import Rects from './components/Rects'

// inputFormに文字を入力しているとき　　（TextInput(子)に渡したい）
const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  alert(e.target.value)
}
const onSubmit = (text: string) => {
  if (text.match(/[^0-9]+/)) {
    alert('aaaa');
  }
}
const App: React.FC = () => {
  let text = 'foo'  // '123'に変更するとalert('aaaa')は出力されない
  return (
    <div className="App">
      <Rects/>
      {/* <AxiosTest/> */}
       {/* <TextInput text={text} handleInputChange={handleInputChange}  onSubmit={onSubmit} /> */}
   </div>
  );
}

export default App;
