import './App.css';
import {useState,useEffect}from'react'

export default function App() {
  const [clockTime, setClockTime] = useState("00:00:00");
  const [alarmTime, setAlarmTime] = useState("0");
  const [status, setStatus] = useState(false);


  //displaying current time
  const updateClockTime = () => {
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    //to add 0 in front of single digit number
    if (hours.toString().length === 1) hours = "0" + hours;
    if (minutes.toString().length === 1) minutes = "0" + minutes;
    if (seconds.toString().length === 1) seconds = "0" + seconds;

    let clockFormat = `${hours}:${minutes}:${seconds}`;
    //console.log("Clock: ", clockFormat);
    setClockTime(clockFormat);
  };   
    useEffect(() => {
    setInterval(updateClockTime, 1000);
  }, []);

  //displaying alarm time
  const handleAlarmTimeChange = (e) => {
    console.log("alarm time: ", e.target.value);
    setAlarmTime(e.target.value);
  };

  //to toggle the status
  const handleToggle = () => {
    setStatus(!status);
  };

    //to check the current time and alarm time is equal or not,,
    useEffect(() => {
      if  (status && clockTime === alarmTime) {
      alert("Wake upp", clockTime, alarmTime);
      window.location.reload();
        setStatus(false);
      }
    }, [clockTime, alarmTime, status]);

    
  return (
    <div className='first'>
      <div className="wrapper">
        <h1>Alarm Clock</h1>

        <div className="containt">
          <h2>{clockTime}</h2>
          <input
            type="time"
            step="1"
            value={alarmTime}
            onChange={handleAlarmTimeChange}
          />
        </div>
        <button onClick={handleToggle}>
          {status ? "Stop Alarm" : "Start Alarm"}
        </button>
      </div>
    </div>
    );
};

