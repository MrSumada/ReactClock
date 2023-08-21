import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  let time = new Date();
  let [hour, setHour] = useState((time.getHours()/12+time.getMinutes()/60/12)*360 - 90);
  let [minute, setMinute] = useState(time.getMinutes()/60*360 - 90);
  let [second, setSecond] = useState(time.getSeconds()/60*360 - 90);
  let [millisecond, setMillisecond] = useState(time.getMilliseconds())

  const hourStyle = { rotate: `${hour}deg`}
  const minStyle = { 
    rotate: `${minute}deg`,
  }
  const secStyle = { 
    rotate: `${second}deg`,
    // animation: `spin 60s linear infinite`
  }

  useEffect(() => {
    let timer = setInterval(() => {
      time = new Date();
      setHour((time.getHours()/12+time.getMinutes()/60/12)*360 - 90)
      setMinute(time.getMinutes()/60*360 -90)
      setSecond(time.getSeconds()/60*360 -90)
      setMillisecond(time.getMilliseconds())
    }, 1)



    // let newTimer = setInterval(() => {
    //   time = new Date();
    //   setSecond(time.getSeconds()/60*360 -90)
    // }, 60000)

    return function cleanup() {
      clearInterval(timer)
      // clearInterval(newTimer)
    }
})



  return (
    <div className='App'>
      <div className="container">
        <div className="nums">
          <p className="num" id="num12"><strong>12</strong></p>
          <p className="num" id="num1"><strong>1</strong></p>
          <p className="num" id="num2"><strong>2</strong></p>
          <p className="num" id="num3"><strong>3</strong></p>
          <p className="num" id="num4"><strong>4</strong></p>
          <p className="num" id="num5"><strong>5</strong></p>
          <p className="num" id="num6"><strong>6</strong></p>
          <p className="num" id="num7"><strong>7</strong></p>
          <p className="num" id="num8"><strong>8</strong></p>
          <p className="num" id="num9"><strong>9</strong></p>
          <p className="num" id="num10"><strong>10</strong></p>
          <p className="num" id="num11"><strong>11</strong></p>
        </div>
        <div className='centered'>
          <div className={(second > 260) ? "hrSpin hr" : "hr"} style={hourStyle}></div>
          <div className={(second > 260) ? "minSpin min" : "min"} style={minStyle}></div>
          <div className={(millisecond > 500) ? "secSpin sec" : "sec"} style={secStyle}></div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
