import { useState, useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import Header from "./components/Header";

function App() {
  const [isGoodWeather, setIsGoodWeather] = useState({});
  const [activities, setActivities] = useLocalStorageState("activities", {
    defaultValue: [],
  });

  useEffect(() => {
    async function fetchWeather() {
      const response = await fetch(
        "https://example-apis.vercel.app/api/weather"
      );
      const weatherData = await response.json();

      setIsGoodWeather(weatherData);
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

  const goodWeatherActivities = activities.filter((activity) => {
    return activity.isForGoodWeather === isGoodWeather;
  });
  return (
    <main>
      <Header />

      <Form onAddActivity={handleAddActivity}></Form>

      <List
        viewList={activities}
        isGoodWeather={isGoodWeather}
        DeleteActivity={handleDeleteActivity}
      />
    </main>
  );
}

export default App;
