import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/data");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // console.log(data);
        setMenuItems(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold">Menu Items:</h1>
      <ul className="text-xl font-mono">
        {menuItems.map((item) => (
          <li key={item.menuid} className="mb-1">
            <Link to={`/menu/${item.menuid}`} state={{ item }}>
              {item.menu_heading}
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/menu/new">
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Add New MenuItem
        </button>
      </Link>
    </div>
  );
}

export default Menu;

