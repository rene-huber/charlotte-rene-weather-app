function List({ viewList, isGoodWeather, DeleteActivity }) {
  return (
    <>
      {viewList.length === 0 ? (
        <h3>No activities yet! Add an activity with the form below</h3>
      ) : (
        <h3>
          {isGoodWeather.isGoodWeather
            ? "Good weather activities ☀️"
            : "Bad Weather 🌧️"}
        </h3>
      )}
      <ul className="list-container">
        {viewList
          .filter(
            (activity) =>
              activity.isForGoodWeather === isGoodWeather.isGoodWeather
          )
          .map((activity) => (
            <li key={activity.id}>
              {activity.name}
              <button
                className="button"
                onClick={() => DeleteActivity(activity.id)}
              >
                x
              </button>
            </li>
          ))}
      </ul>
    </>
  );
}

export default List;
