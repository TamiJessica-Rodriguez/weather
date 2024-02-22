import { useState } from "react";

const App = () => {
  const [activities, setActivities] = useState([]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [date, setDate] = useState("");
  const [detailText, setDetailText] = useState("");
  const [errors, setErrors] = useState({
    title: false,
    text: false,
    date: false,
  }); // Håller reda på valideringsfel

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    if (errors.title) setErrors({ ...errors, title: false }); // Ta bort felmarkering när användaren börjar skriva
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
    if (errors.text) setErrors({ ...errors, text: false }); // Ta bort felmarkering när användaren börjar skriva
  };

  const handleImageChange = (e) => setImage(e.target.files[0]);

  const handleDateChange = (e) => {
    setDate(e.target.value);
    if (errors.date) setErrors({ ...errors, date: false }); // Ta bort felmarkering när användaren väljer ett datum
  };

  const handleDetailTextChange = (e) => setDetailText(e.target.value);

  const validateForm = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = true;
    if (!text.trim()) newErrors.text = true;
    if (!date.trim()) newErrors.date = true;
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Returnerar true om inga fel finns
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return; // Stoppa inlämningen om validering misslyckas

    const newActivity = {
      id: activities.length + 1,
      title,
      text,
      date,
      imageUrl: image ? URL.createObjectURL(image) : null,
      detailedText: "",
      showDetails: false,
    };

    setActivities([...activities, newActivity]);
    // Återställ fält efter inlämning
    setTitle("");
    setText("");
    setDate("");
    setImage(null);
    setDetailText("");
    setErrors({ title: false, text: false, date: false }); // Återställ fel
  };

  const toggleDetails = (id) => {
    const updatedActivities = activities.map((activity) => {
      if (activity.id === id) {
        return { ...activity, showDetails: !activity.showDetails };
      }
      return activity;
    });
    setActivities(updatedActivities);
  };

  const saveDetailText = (id) => {
    const updatedActivities = activities.map((activity) => {
      if (activity.id === id) {
        return { ...activity, detailedText: detailText, showDetails: false }; // Dölj detaljvyn när texten sparas
      }
      return activity;
    });
    setActivities(updatedActivities);
    setDetailText(""); // Återställ detaljtexten efter sparande
  };

  return (
    <div className="container mx-auto p-4 bg-gray-400 gap-2 rounded-md m-2">
      <form onSubmit={handleSubmit} className="mb-4">
        <div>
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder="Title"
            className={`input input-bordered w-full mb-2 ${
              errors.title ? "border-2 border-red-500" : ""
            }`}
          />
          {errors.title && (
            <p className="text-red-500 text-xs mt-1">
              Please fill in the title.
            </p>
          )}
        </div>
        <div>
          <textarea
            value={text}
            onChange={handleTextChange}
            placeholder="Text"
            className={`textarea textarea-bordered w-full mb-2 ${
              errors.text ? "border-2 border-red-500" : ""
            }`}
            maxLength="50"
          ></textarea>
          {errors.text && (
            <p className="text-red-500 text-xs mt-1">
              Please fill in the text.
            </p>
          )}
        </div>
        <div>
          <input
            type="date"
            value={date}
            onChange={handleDateChange}
            className={`input input-bordered w-full mb-2 ${
              errors.date ? "border-2 border-red-500" : ""
            }`}
          />
          {errors.date && (
            <p className="text-red-500 text-xs mt-1">Please choose a date.</p>
          )}
        </div>
        <input type="file" onChange={handleImageChange} className="file mb-2" />
        <button type="submit" className="btn btn-primary">
          Add Activity
        </button>
      </form>

      <div className="grid grid-cols-3 gap-4">
        {activities.map((activity) => (
          <div key={activity.id} className="card bg-base-100 shadow-xl">
            {activity.imageUrl && (
              <div className="image">
                <img src={activity.imageUrl} alt="Activity" />
              </div>
            )}
            <div className="text">
              <h2 className="card-title">{activity.title}</h2>
              <p>{activity.text}</p>
              <p>Date: {activity.date}</p>
              <button
                onClick={() => toggleDetails(activity.id)}
                className="btn btn-info"
              >
                Details
              </button>
              {activity.showDetails && (
                <div>
                  <textarea
                    value={detailText}
                    onChange={handleDetailTextChange}
                    placeholder="Detailed text about your activity"
                    className="textarea textarea-bordered w-full mb-2"
                  ></textarea>
                  <button
                    onClick={() => saveDetailText(activity.id)}
                    className="btn btn-primary"
                  >
                    Save
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
