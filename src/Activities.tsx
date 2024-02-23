import React, { useState } from "react";
import FormComponent from "./FormComponent";
import ListComponent from "./ListComponent";
import ActivityImage from "./assets/pinkEarth.webp";

interface Activity {
  id: number;
  title: string;
  text: string;
  date: string;
  imageUrl: string | null;
  detailedText: string;
  showDetails: boolean;
}

const Activity = () => {
  const [activities, setActivities] = useState<Activity[]>([]); // Provide type annotation for activities
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [date, setDate] = useState("");
  const [detailText, setDetailText] = useState("");
  const [errors, setErrors] = useState({
    title: false,
    text: false,
    date: false,
  });
  const [showForm, setShowForm] = useState(false);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    if (errors.title) setErrors({ ...errors, title: false });
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    if (errors.text) setErrors({ ...errors, text: false });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setImage(e.target.files[0]);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
    if (errors.date) setErrors({ ...errors, date: false });
  };

  const handleDetailTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setDetailText(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

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
    setTitle("");
    setText("");
    setDate("");
    setImage(null);
    setDetailText("");
    setErrors({ title: false, text: false, date: false });
    setShowForm(false);
  };

  const toggleDetails = (id: number) => {
    const updatedActivities = activities.map((activity) => {
      if (activity.id === id) {
        return { ...activity, showDetails: !activity.showDetails };
      }
      return activity;
    });
    setActivities(updatedActivities);
  };

  const saveDetailText = (id: number) => {
    const updatedActivities = activities.map((activity) => {
      if (activity.id === id) {
        return { ...activity, detailedText: detailText, showDetails: false };
      }
      return activity;
    });
    setActivities(updatedActivities);
    setDetailText("");
  };

  const validateForm = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = true;
    if (!text.trim()) newErrors.text = true;
    if (!date.trim()) newErrors.date = true;
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  return (
    <div
      className="bg-cover bg-center bg-fixed mx-auto p-4 gap-3 h-screen"
      style={{ backgroundImage: `url(${ActivityImage})` }}
    >
      <FormComponent
        title={title}
        handleTitleChange={handleTitleChange}
        text={text}
        handleTextChange={handleTextChange}
        date={date}
        handleDateChange={handleDateChange}
        image={image}
        handleImageChange={handleImageChange}
        handleSubmit={handleSubmit}
        errors={errors}
        showForm={showForm}
        setShowForm={setShowForm}
      />
      <ListComponent
        activities={activities}
        toggleDetails={toggleDetails}
        detailText={detailText}
        handleDetailTextChange={handleDetailTextChange}
        saveDetailText={saveDetailText}
      />
    </div>
  );
};

export default Activity;
