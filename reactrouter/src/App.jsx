import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather]= useState(null);
  const handleChange = (event)=>{
    setCity(event.target.value;)
  }
  const handleSearch = ()=>{
    if (city ==""){
      alert("Enter City Name To Search")
    }
    else if (weather =="")
    {
      alert("Enter Valid City Name")

    }
    else{
      fetchWeather(city);
    }
  }
  const HandleClear = () => {
    setCity("");
    setWeather(null);
  };

  const fetchWeather = async (city)=>{
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ecbed1308dbefb3ca3d6fb8974e38015&units=metric`;
      const response = await fetch(url);
      if(!response.ok){
        throw new Error('Network Response was not ok');
      }
      const data = await response.json();
      setWeather(data)
    }catch(error){
      console.error('Error fetching Weathe:,'.error);
      alert("Enter Valid City Name")
    }
  }

  return (
    <div className="w- full h-screen bg-zinc-900 flex flex-col items-center justify-center">
      <div className="w-96 h-96 bg-white flex flex-col place-items-center gap-8 ">
        <h1 className="font-bold">Weather App</h1>
        <input
          className="w-48 h-10 "
          type="text"
          placeholder="Enter City Name"
        />
        <button className="w-20 h-8 bg-green-600 rounded-md">Search</button>
        {/* {weather ? (
          <div className="container flex flex-col place-items-center gap-2">
            <p className="font-bold gap-4">City</p>
            <p className="temp font-bold gap-4">
              TEMPERATURE
            </p>
            <p className="font-bold gap-4">
              WIND
            </p>
            <button
              className="w-20 h-8 bg-green-600 rounded-md"
            >
              Clear
            </button>
          </div>
        ) : (
          <div>No Data..</div>
        )} */}
      </div>
    </div>
  );
}

export default App;
