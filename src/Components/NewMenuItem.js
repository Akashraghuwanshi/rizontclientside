import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewMenuItem() {
  const [formData, setFormData] = useState({
    enable_yn: "Y",
    menu_heading: "",
    menu_name: "",
    menu_under: "header"
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://rizonserverside.onrender.com/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      navigate('/dashboard'); // Navigate back to the menu list
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4">Add New Menu Item</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Enable:</label>
          <select
            name="enable_yn"
            value={formData.enable_yn}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="Y">Yes</option>
            <option value="N">No</option>
          </select>
        </div>
        <div>
          <label className="block mb-1">Menu Heading:</label>
          <input
            type="text"
            name="menu_heading"
            value={formData.menu_heading}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block mb-1">Menu Name:</label>
          <input
            type="text"
            name="menu_name"
            value={formData.menu_name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block mb-1">Menu Under:</label>
          <input
            type="text"
            name="menu_under"
            value={formData.menu_under}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        {error && <div className="text-red-500">Error: {error.message}</div>}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
        >
          Add Menu Item
        </button>
      </form>
    </div>
  );
}

export default NewMenuItem;

