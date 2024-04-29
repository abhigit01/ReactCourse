import { useState } from "react";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const HandleChange = (event) => {
    setCity(event.target.value);
  };
  // const fetchWeather = async (city) => {
  //   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ecbed1308dbefb3ca3d6fb8974e38015&units=metric`;
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   setWeather(data);
  // };
  const fetchWeather = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ecbed1308dbefb3ca3d6fb8974e38015&units=metric`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error('Error fetching weather:', error);
      alert("enter valid city name")
    }
  };
  const HandleSearch = () => {
    if(city==""){
      // setCity("Enter City Name please")
      alert("Enter City Name for Search")
    }
    else if(weather==""){
      alert("Enter valid City Name for Search")
    }
    else{
    fetchWeather(city);
    }
  };
  const HandleClear = () => {
    setCity("");
    setWeather(null);
  };
  // console.log(weather);
  return (
    <div className="w- full h-screen bg-zinc-900 flex flex-col items-center justify-center">
      <div className="w-96 h-96 bg-white flex flex-col place-items-center gap-8 ">
        <h1 className="font-bold">Weather App</h1>
        <input
          className="w-48 h-10 "
          type="text"
          placeholder="Enter City Name"
          value={city}
          onChange={() => HandleChange(event)}
        />
        <button
          onClick={HandleSearch}
          className="w-20 h-8 bg-green-600 rounded-md"
        >
          Search
        </button>
        {weather ? (
          <div className="container flex flex-col place-items-center gap-2">
            <p className="font-bold gap-4">City Name:- {weather.name}</p>
            <p className="temp font-bold gap-4">
              TEMPERATURE:- {weather.main.temp}
            </p>
            <p className="font-bold gap-4">
              WIND:- {weather.weather[0].description}
            </p>
            <button onClick={HandleClear} className="w-20 h-8 bg-green-600 rounded-md">Clear</button>
          </div>
        ) : (
          <div>No Data..</div>
        )}
      </div>
    </div>
  );
};

export default App;



// using axios------------------------------------------------------------------------------------------------------------------------------------------------

// import { useState } from "react";
// import axios from "axios";

// const App = () => {
//   const [city, setCity] = useState("");
//   const [weather, setWeather] = useState(null);
  


//   const handleChange = (event) => {
//     setCity(event.target.value);
//   };

//   const fetchWeather = async (city) => {
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ecbed1308dbefb3ca3d6fb8974e38015&units=metric`;

//     axios.get(url).then((response)=>{
//       setWeather(response.data)
//     }).catch((error)=>{
//       alert("Enter Valid City Name")
//     })
//   };
//   console.log(weather)

//   const handleSearch = () => {
//     if (city === "") {
//       alert("Enter City Name for Search");
//     } else {
//       fetchWeather(city);
//     }
//   };

//   const handleClear = () => {
//     setCity("");
//     setWeather(null);
//   };

//   return (
//     <div className="w-full h-screen bg-zinc-900 flex flex-col items-center justify-center">
//       <div className="w-96 h-96 bg-white flex flex-col place-items-center gap-8 ">
//         <h1 className="font-bold">Weather App</h1>
//         <input
//           className="w-48 h-10"
//           type="text"
//           placeholder="Enter City Name"
//           value={city}
//           onChange={handleChange}
//         />
//         <button
//           onClick={handleSearch}
//           className="w-20 h-8 bg-green-600 rounded-md"
//         >
//           Search
//         </button>
//         {weather ? (
//           <div className="container flex flex-col place-items-center gap-2">
//             <p className="font-bold gap-4">City Name:- {weather.name}</p>
//             <p className="temp font-bold gap-4">
//               TEMPERATURE:- {weather.main.temp}
//             </p>
//             <p className="font-bold gap-4">
//               WIND:- {weather.weather[0].description}
//             </p>
//             <button
//               onClick={handleClear}
//               className="w-20 h-8 bg-green-600 rounded-md"
//             >
//               Clear
//             </button>
//           </div>
//         ) : (
//           <div>No Data..</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;

