

function Form ({ onAddActivity }) {
const handleSubmit = (e) => {
    e.preverntDefault() 
    const form = e.target
    const activityName = form.activityName.value
    const goodWeather = form.goodWeather.checked
    const activity = {activityName, goodWeather}
    console.log(activity)
    form.reset()   
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

export default Form