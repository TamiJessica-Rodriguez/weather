import { useState } from "react";
import ActivityImage from "./assets/black.webp";

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
  const [showForm, setShowForm] = useState(false); // Tillståndsvariabel för att visa/dölja formuläret

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
    setShowForm(false); // Dölj formuläret efter inlämning
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
    <div
      className="bg-cover bg-center bg-fixed mx-auto p-4 gap-3 h-screen"
      style={{ backgroundImage: `url(${ActivityImage})` }}
    >
      <div>
        {!showForm && ( // Visa texten för att visa formuläret om formuläret inte redan visas
          <p
            className="text-white cursor-pointer border rounded-md w-1/6 p-2 font-bold"
            onClick={() => setShowForm(true)}
          >
            Lägg till din resa
          </p>
        )}
        {showForm && ( // Visa formuläret om showForm är true
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto mb-4 bg-white p-4 rounded-md shadow-md"
          >
            <div>
              <input
                type="text"
                value={title}
                onChange={handleTitleChange}
                placeholder="Title"
                className={`w-full mb-2 p-2 rounded-md border ${
                  errors.title ? "border-red-500" : ""
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
                className={`w-full mb-2 p-2 rounded-md border ${
                  errors.text ? "border-red-500" : ""
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
                className={`w-full mb-2 p-2 rounded-md border ${
                  errors.date ? "border-red-500" : ""
                }`}
              />
              {errors.date && (
                <p className="text-red-500 text-xs mt-1">
                  Please choose a date.
                </p>
              )}
            </div>
            <input type="file" onChange={handleImageChange} className="mb-2" />
            <button
              type="submit"
              className="btn btn-primary rounded-md p-2 flex border border-gray-300"
            >
              Add Activity
            </button>
          </form>
        )}
      </div>

      <div className="grid grid-cols-3 gap-4 p-4">
        {activities.map((activity) => (
          <div key={activity.id} className="bg-white shadow-md rounded-md p-4">
            {activity.imageUrl && (
              <div className="image">
                <img
                  src={activity.imageUrl}
                  alt="Activity"
                  className="w-1/2 h-auto rounded-md"
                />
              </div>
            )}
            <div className="text">
              <h2 className="font-bold text-xl mb-2">{activity.title}</h2>
              <p className="mb-2">{activity.text}</p>
              <p className="mb-2">Date: {activity.date}</p>
              <button
                onClick={() => toggleDetails(activity.id)}
                className="btn btn-info"
              >
                Details
              </button>
              {activity.showDetails && (
                <div className="mt-2">
                  <textarea
                    value={detailText}
                    onChange={handleDetailTextChange}
                    placeholder="Detailed text about your activity"
                    className="w-full p-2 rounded-md border"
                  ></textarea>
                  <button
                    onClick={() => saveDetailText(activity.id)}
                    className="btn btn-primary mt-2"
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
