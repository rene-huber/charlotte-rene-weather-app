/* eslint-disable react/prop-types */
function List({ viewList, isGoodWeather, DeleteActivity }) {
  return (
    <>
      {viewList.length === 0 ? (
        <h3 className="headline">
          Nothing to do? Submit your suggestions below!
        </h3>
      ) : (
        <h3 className="headline">
          {isGoodWeather
            ? "The weather is awesome! Go outside and:"
            : "Bad weather outside!  Here's what you can do now:"}
        </h3>
      )}
      <ul className="list-container">
        {viewList
          .filter((activity) => activity.isForGoodWeather === isGoodWeather)
          .map((activity) => (
            <li className="list-item" key={activity.id}>
              {activity.name}
              <button
                className="delete-button"
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
