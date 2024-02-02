// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [ans, setAns] = useState("");
  const [temp, setTemp] = useState("");
  const [cal, setCal] = useState("");

  const plu = () => {
    if (cal === '+') {
      setAns(parseFloat(temp) + parseFloat(ans))
    }
    else if (cal === '-') {
      setAns(parseFloat(temp) - parseFloat(ans))
    }
    else if (cal === '*') {
      setAns(parseFloat(temp) * parseFloat(ans))
    }
    else if (cal === '/') {
      if(ans == '0'){
        setAns("Can't Divided Zero");
      }else{
        setAns(parseFloat(temp) / parseFloat(ans))
      }
    }
  }


  return (

    <div className="App">
      <div class="cal">

        <input type="text" placeholder="0" value={ans} readonly />
        <br />
        <br />
        <input type="button" onClick={(e) => { setAns('') }} value="clr" className="btn3"></input>
        <input type="button" onClick={(e) => { setAns(ans.substring(0, ans.length - 1)) }} value="C" className="btn1 btn3"></input>
        <input type="button" onClick={(e) => {
          setCal(e.target.value)
          setTemp(ans)
          setAns('');

        }} value="+" className="btn3"></input>
        <br /><br />
        <input type="button" onClick={(e) => { setAns(ans + e.target.value) }} value={1}></input>
        <input type="button" onClick={(e) => { setAns(ans + e.target.value) }} value={2}></input>
        <input type="button" onClick={(e) => { setAns(ans + e.target.value) }} value={3}></input>
        <input type="button" onClick={(e) => {
          setCal(e.target.value)
          setTemp(ans)
          setAns('');
        }} value="-" className="btn3" />
        <br /><br />
        <input type="button" onClick={(e) => { setAns(ans + e.target.value) }} value={4}></input>
        <input type="button" onClick={(e) => { setAns(ans + e.target.value) }} value={5}></input>
        <input type="button" onClick={(e) => { setAns(ans + e.target.value) }} value={6}></input>
        <input type="button" onClick={(e) => {
          setCal(e.target.value)
          setTemp(ans)
          setAns('');
        }} value={"*"} className="btn3"></input>
        <br /><br />
        <input type="button" onClick={(e) => { setAns(ans + e.target.value) }} value={7}></input>
        <input type="button" onClick={(e) => { setAns(ans + e.target.value) }} value={8}></input>
        <input type="button" onClick={(e) => { setAns(ans + e.target.value) }} value={9}></input>
        <input type="button" onClick={(e) => {
          setCal(e.target.value)
          setTemp(ans)
          setAns('');
        }} value={"/"} className="btn3"></input>
        <br /><br />

        <input type="button" class="btn3" value={"+/-"}></input>
        <input type="button" onClick={(e) => { setAns(ans + e.target.value) }} value={0}></input>
        <input type="button" onClick={(e) => { setAns(ans + e.target.value) }} value={"."} className="btn3"></input>
        <input type="button" onClick={plu} value={"="} className="btn2 btn3"></input>

      </div>


    </div>
  );
}

export default App;
