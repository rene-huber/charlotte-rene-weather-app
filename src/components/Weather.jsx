import { useEffect, useState } from "react";

function Weather( ) {

    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
      const dataWeather = async () => {
        try {
          const res = await fetch(`https://example-apis.vercel.app/api/weather/`);
          const data = await res.json();
  
          setWeatherData(data);
  
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      };
      dataWeather();
    }, []);
  

  return (
   
<>
{weatherData && (
    <div>
      <h2>Temperature: {weatherData.temperature}</h2>
      <h2>Condition: {weatherData.condition}</h2>
    </div>
  )}
</>
  )
}

export default Weather