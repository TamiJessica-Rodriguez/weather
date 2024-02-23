// ListComponent.js

import React from "react";

interface Activity {
  id: number;
  title: string;
  text: string;
  date: string;
  imageUrl: string | null;
  showDetails: boolean;
}

interface Props {
  activities: Activity[];
  toggleDetails: (id: number) => void;
  detailText: string;
  handleDetailTextChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  saveDetailText: (id: number) => void;
}

const ListComponent: React.FC<Props> = ({
  activities,
  toggleDetails,
  detailText,
  handleDetailTextChange,
  saveDetailText,
}) => {
  return (
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
  );
};

export default ListComponent;
