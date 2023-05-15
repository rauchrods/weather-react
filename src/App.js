import { useState } from 'react';
import './App.css';



function App() {
  let [coods, setCoods] = useState({ latitude: "", longitude: "" });
  let { latitude, longitude } = coods;
  let [month, setMonth] = useState(new Date().getMonth() + 1);
  let [ans, setAns] = useState("");

  let montharr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  function setcoodsfunc() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let obj = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
        console.log(position);
        setCoods(obj);
        setansfunc(obj.latitude);
      });
    }
  }

  function setansfunc(latitude) {
      if(latitude>0){
        if(month>=10 || month<=3){
          setAns("Its chilly in Northern Hemisphere");
        }
        else if(month>=3 && month<=10){
          setAns("Lets hit the beach in Northern Hemisphere");
        }
      }
      else{
        if(month>=10 || month<=3){
          setAns("Lets hit the beach in Southern Hemisphere");
        }
        else if(month>=3 && month<=10){
          setAns("Its chilly in Southern Hemisphere");
        }
      }
  }



  return (
    <>
      <h1>lat: {latitude}, long: {longitude}</h1>
      <button onClick={setcoodsfunc}>Find Loction</button>

      <h2>{latitude > 0 ? "Northern Hemisphere" : latitude == "" ? "Equator" : "Southern Hemisphere"}</h2>
      <h2>{montharr[month - 1]}</h2>
      <h2>{ans}</h2>
    </>
  );
}

export default App;
