import React, { useState } from "react";
import FormComponent from "./FormComponent";
import ListComponent from "./ListComponent";

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
  const [activities, setActivities] = useState<Activity[]>([]);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState<File>();
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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setImage(e.target.files[0]);
    }
  };

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
    setImage(undefined);
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
    const newErrors = {
      title: !title.trim(),
      text: !text.trim(),
      date: !date.trim(),
    };
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="h-screen p-2 gap-2">
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
