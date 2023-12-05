/* eslint-disable react/prop-types */
import { uid } from "uid";

function Form({ onAddActivity }) {
  function handleSubmit(e) {
    e.preventDefault();

    const { activityName, goodWeather } = e.target.elements;

    const newActivity = {
      id: uid(),
      name: activityName.value,
      isForGoodWeather: goodWeather.checked,
    };

    e.target.reset();
    activityName.focus();
    onAddActivity(newActivity);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2 className="form-heading">Add Activity</h2>

      <div className="form-input">
        <label htmlFor="activityName">Name:</label>
        <input
          type="text"
          id="activityName"
          name="activityName"
          placeholder="Name of Activity"
          required
        />
      </div>
      <div className="form-input">
        <label htmlFor="goodWeather">Good Weather Activity:</label>
        <input type="checkbox" id="goodWeather" name="goodWeather" />
      </div>

      <button className="submit-button" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
