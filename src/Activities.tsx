import { useState } from "react";

const App = () => {
  const [activities, setActivities] = useState([]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [date, setDate] = useState("");

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleTextChange = (e) => setText(e.target.value);
  const handleImageChange = (e) => setImage(e.target.files[0]);
  const handleDateChange = (e) => setDate(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newActivity = {
      id: activities.length + 1,
      title,
      text,
      date,
      imageUrl: image ? URL.createObjectURL(image) : null,
    };
    setActivities([...activities, newActivity]);
    setTitle("");
    setText("");
    setDate("");
    setImage(null);
  };

  return (
    <div className="container mx-auto p-4 bg-gray-400 gap-2 rounded-md m-2">
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Title"
          className="input input-bordered w-full mb-2"
        />
        <textarea
          value={text}
          onChange={handleTextChange}
          placeholder="Text"
          className="textarea textarea-bordered w-full mb-2"
          maxLength="50" // Maxlängd för text
        ></textarea>
        <input
          type="date"
          value={date}
          onChange={handleDateChange}
          className="input input-bordered w-full mb-2"
        />
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
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

// import { useState } from "react";

// const Activities = () => {
//   const [activities, setActivities] = useState([]);
//   const [title, setTitle] = useState("");
//   const [text, setText] = useState("");
//   const [image, setImage] = useState(null);
//   const [date, setDate] = useState(""); // Ny statlig variabel för datum

//   const handleTitleChange = (e) => setTitle(e.target.value);
//   const handleTextChange = (e) => setText(e.target.value);
//   const handleImageChange = (e) => setImage(e.target.files[0]);
//   const handleDateChange = (e) => setDate(e.target.value); // Hantera datumändringar

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newActivity = {
//       id: activities.length + 1,
//       title,
//       text,
//       date, // Inkludera datumet i ditt nya aktivitetsobjekt
//       imageUrl: image ? URL.createObjectURL(image) : null,
//     };
//     setActivities([...activities, newActivity]);
//     setTitle("");
//     setText("");
//     setDate(""); // Återställ datumfältet
//     setImage(null);
//   };

//   return (
//     <div className="container mx-auto p-4 bg-gray-400 gap-2 rounded-md m-2">
//       <form onSubmit={handleSubmit} className="mb-4">
//         <input
//           type="text"
//           value={title}
//           onChange={handleTitleChange}
//           placeholder="Title"
//           className="input input-bordered w-full mb-2"
//         />
//         <textarea
//           value={text}
//           onChange={handleTextChange}
//           placeholder="Text"
//           className="textarea textarea-bordered w-full mb-2"
//         ></textarea>
//         <input
//           type="date"
//           value={date}
//           onChange={handleDateChange} // Lägg till datumväljaren
//           className="input input-bordered w-full mb-2"
//         />
//         <input type="file" onChange={handleImageChange} className="file mb-2" />
//         <button type="submit" className="btn btn-primary">
//           Add Activity
//         </button>
//       </form>

//       <div className="grid grid-cols-3 gap-4">
//         {activities.map((activity) => (
//           <div key={activity.id} className="card bg-base-100 shadow-xl">
//             {activity.imageUrl && (
//               <figure>
//                 <img src={activity.imageUrl} alt="Activity" />
//               </figure>
//             )}
//             <div className="card-body">
//               <h2 className="card-title">{activity.title}</h2>
//               <p>{activity.text}</p>
//               <p>Date: {activity.date}</p>{" "}
//               {/* Visa datumet för varje aktivitet */}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Activities;

// import { useState } from "react";

// const App = () => {
//   const [activities, setActivities] = useState([]);
//   const [title, setTitle] = useState("");
//   const [text, setText] = useState("");
//   const [image, setImage] = useState(null);

//   const handleTitleChange = (e) => setTitle(e.target.value);
//   const handleTextChange = (e) => setText(e.target.value);
//   const handleImageChange = (e) => setImage(e.target.files[0]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newActivity = {
//       id: activities.length + 1,
//       title,
//       text,
//       imageUrl: image ? URL.createObjectURL(image) : null,
//     };
//     setActivities([...activities, newActivity]);
//     setTitle("");
//     setText("");
//     setImage(null);
//   };

//   return (
//     <div className="container mx-auto p-4 bg-gray-400 gap-2 rounded-md m-2">
//       <form onSubmit={handleSubmit} className="mb-4">
//         <input
//           type="text"
//           value={title}
//           onChange={handleTitleChange}
//           placeholder="Title"
//           className="input input-bordered w-full mb-2"
//         />
//         <textarea
//           value={text}
//           onChange={handleTextChange}
//           placeholder="Text"
//           className="textarea textarea-bordered w-full mb-2"
//         ></textarea>
//         <input type="file" onChange={handleImageChange} className="file mb-2" />
//         <button type="submit" className="btn btn-primary">
//           Add Activity
//         </button>
//       </form>

//       <div className="grid grid-cols-3 gap-4">
//         {activities.map((activity) => (
//           <div key={activity.id} className="card bg-base-100 shadow-xl">
//             {activity.imageUrl && (
//               <figure>
//                 <img src={activity.imageUrl} alt="Activity" />
//               </figure>
//             )}
//             <div className="card-body">
//               <h2 className="card-title">{activity.title}</h2>
//               <p>{activity.text}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;
