import React, { useEffect, useState } from 'react';
import { useLocation, useParams, useNavigate, Link } from 'react-router-dom';

function MenuItemDetail() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { item } = location.state || {};

  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!item) {
      navigate('/dashboard'); // Navigate back to the dashboard if no item is found
    }
  }, [item, navigate]);

  const handleDelete = async () => {
    try {
      const response = await fetch(`https://rizonserverside.onrender.com/data/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete item');
      }
      navigate('/dashboard'); // Navigate back to the dashboard after successful deletion
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  if (!item) {
    return null; // Render nothing if item is not found
  }

  return (
    <div className='m-2'>
      <h1 className='text-xl font-bold mb-2'>{item.menu_heading}</h1>
      <p><strong>Menu Name:</strong> {item.menu_name}</p>
      <p><strong>Menu Under:</strong> {item.menu_under}</p>
      <p><strong>Enabled:</strong> {item.enable_yn === 'Y' ? 'Yes' : 'No'}</p>
      <Link to={`/menu/${id}/update`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2 inline-block mr-2">
        Update MenuItem
      </Link>
      <button onClick={() => setDeleting(true)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2 inline-block">
        Delete MenuItem
      </button>

      {deleting && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-md">
            <p className="text-xl font-bold mb-4">Are you sure you want to delete this item?</p>
            <div className="flex justify-end">
              <button onClick={() => setDeleting(false)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2">Cancel</button>
              <button onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MenuItemDetail;
