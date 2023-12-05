import { useState, useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import Header from "./components/Header";

function App() {
  const [weather, setWeather] = useState({});
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  const weatherApiUrl = "https://example-apis.vercel.app/api/weather";

  useEffect(() => {
    async function fetchWeather() {
      const response = await fetch(weatherApiUrl);
      const weatherData = await response.json();

      setWeather(weatherData);
    }

    fetchWeather();
    const interval = setInterval(() => {
      fetchWeather();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  function handleAddActivity(newActivity) {
    setActivities([...activities, newActivity]);
  }

  function handleDeleteActivity(id) {
    setActivities(activities.filter((activity) => activity.id !== id));
  }

  return (
    <main>
    <div className="main-section">
      <Header condition={weather.condition} temperature={weather.temperature} />

      <List
        viewList={activities}
        isGoodWeather={weather.isGoodWeather}
        DeleteActivity={handleDeleteActivity}
      />
      <Form onAddActivity={handleAddActivity}></Form>
      </div>
    </main>
  );
}

export default App;
