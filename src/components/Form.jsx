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
    <form onSubmit={handleSubmit}>
      <h2>Add Activity</h2>
      <div>
        <label htmlFor="activityName">Name of Activity:</label>
        <input
          type="text"
          id="activityName"
          name="activityName"
          placeholder="Name of Activity"
          required
        />

        <label htmlFor="goodWeather">Good Weather Activity:</label>
        <input type="checkbox" id="goodWeather" name="goodWeather" />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
