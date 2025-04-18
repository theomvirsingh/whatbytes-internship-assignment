import React, { useState } from "react";

const UpdateModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    rank: "",
    percentile: "",
    score: "",
  });
  const [errors, setErrors] = useState({});

  if (!isOpen) return null;

  const validateInput = (name, value) => {
    let error = "";

    if (name === "rank") {
      if (isNaN(value) || value === "") {
        error = "Rank must be a number";
      }
    } else if (name === "percentile") {
      if (isNaN(value) || value === "") {
        error = "Percentile must be a number";
      } else if (value < 0 || value > 100) {
        error = "Percentile must be between 0-100";
      }
    } else if (name === "score") {
      if (isNaN(value) || value === "") {
        error = "Score must be a number";
      } else if (value < 0 || value > 15) {
        error = "Score must be between 0-15";
      }
    }

    return error;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    const error = validateInput(name, value);
    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const handleSave = () => {
    const newErrors = {
      rank: validateInput("rank", formData.rank),
      percentile: validateInput("percentile", formData.percentile),
      score: validateInput("score", formData.score),
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some((error) => error !== "")) {
      return;
    }

    localStorage.setItem(
      "userStats",
      JSON.stringify({
        rank: parseInt(formData.rank),
        percentile: parseInt(formData.percentile),
        score: parseInt(formData.score),
      })
    );

    const updateEvent = new CustomEvent("statsUpdated", {
      detail: {
        rank: parseInt(formData.rank),
        percentile: parseInt(formData.percentile),
        score: parseInt(formData.score),
      },
    });
    window.dispatchEvent(updateEvent);

    onClose();
  };

  const inputFields = [
    { name: "rank", label: "Rank", placeholder: "Rank" },
    {
      name: "percentile",
      label: "Percentile",
      placeholder: "Percentile",
    },
    {
      name: "score",
      label: "Current Score (out of 15)",
      placeholder: "Score",
    },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[500px] relative">
        <div className="flex justify-between items-start mb-5">
          <h2 className="text-2xl font-bold text-black">Update scores</h2>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
            alt="HTML5 Logo"
            className="w-10 h-10"
          />
        </div>

        <div className="space-y-5">
          {inputFields.map((item, idx) => (
            <div key={idx} className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#14208e] text-white font-bold text-sm">
                  {idx + 1}
                </div>
                <span className="text-black">
                  Update your <span className="font-bold">{item.label}</span>
                </span>
              </div>
              <div className="flex flex-col">
                <input
                  name={item.name}
                  placeholder={item.placeholder}
                  value={formData[item.name]}
                  onChange={handleInputChange}
                  className="border border-[#14208e] text-gray-900 rounded-md px-3 py-1.5 w-[150px] text-right font-medium outline-none"
                />
                {errors[item.name] && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors[item.name]}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-4 mt-8">
          <button
            className="border border-[#14208e] text-[#14208e] font-semibold px-4 py-2 rounded-lg hover:bg-gray-100"
            onClick={onClose}
          >
            cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-[#14208e] text-white font-semibold px-5 py-2 rounded-lg shadow-md flex items-center gap-2 hover:bg-[#0f1977]"
          >
            save <span className="text-lg">&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
