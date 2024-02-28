import React from "react";
import "./Header.css";

interface Props {
  title: string;
  handleTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  text: string;
  handleTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  date: string;
  handleDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  image?: File;
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  errors: {
    title: boolean;
    text: boolean;
    date: boolean;
  };
  showForm: boolean;
  setShowForm: (value: boolean) => void;
}

const FormComponent: React.FC<Props> = ({
  title,
  handleTitleChange,
  text,
  handleTextChange,
  date,
  handleDateChange,
  handleImageChange,
  handleSubmit,
  errors,
  showForm,
  setShowForm,
}) => {
  return (
    <div className="flex flex-row justify-between items-center">
      {!showForm && (
        <p
          className="text-slate-200 cursor-pointer border rounded-md p-2 font-bold"
          onClick={() => setShowForm(true)}
        >
          Lägg till din resa
        </p>
      )}
      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto mb-4 bg-white text-slate-400 p-4 rounded-md shadow-md"
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
              maxLength={50}
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
              <p className="text-red-500 text-xs mt-1">Please choose a date.</p>
            )}
          </div>
          <input type="file" onChange={handleImageChange} className="mb-2" />
          <button
            type="submit"
            className="btn btn-primary rounded-md p-2 flex border border-gray-400"
          >
            Add Activity
          </button>
        </form>
      )}
    </div>
  );
};

export default FormComponent;
