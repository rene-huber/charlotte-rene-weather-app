

export const Form = ({ onAddActivity }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    onAddActivity(data);
    event.target.reset();
    event.target.inputName.focus();
  };
    
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
        <input 
        type="checkbox" 
        id="goodWeather"
        name="goodWeather"
           />

      </div>


      <button type="submit">Add</button>
    </form>
  )
}

