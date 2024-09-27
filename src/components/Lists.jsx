import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, deleteList, saveItem } from '../features/listsSlice';

const Lists = () => {
  const [itemText, setItemText] = useState('');
  const [editing, setEditing] = useState(null);
  const lists = useSelector((state) => state.lists);
  const dispatch = useDispatch();

  const handleAddItem = (listId) => {
    if (itemText) {
      dispatch(addItem({ listId, item: itemText }));
      setItemText('');
    }
  };

  const handleDeleteList = (listId) => {
    dispatch(deleteList(listId));
  };

  const handleSaveItem = (listId, itemId) => {
    if (editing) {
      dispatch(saveItem({ listId, itemId, newText: editing.newText }));
      setEditing(null);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {lists.map((list) => (
        <div key={list.id} className="bg-white border border-gray-300 rounded-lg p-4 shadow-lg">
          <h2 className="font-bold text-xl text-gray-800 mb-4">{list.title}</h2>

          <button
            onClick={() => handleDeleteList(list.id)}
            className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 transition duration-200"
          >
            Delete List
          </button>

          <div className="mt-4">
            <input
              value={itemText}
              onChange={(e) => setItemText(e.target.value)}
              placeholder="Enter item"
              className="border border-gray-300 rounded-lg p-2 w-full shadow-sm focus:ring-2 focus:ring-green-500"
            />
            <button
              onClick={() => handleAddItem(list.id)}
              className="bg-green-600 text-white p-2 rounded-lg mt-2 w-full hover:bg-green-700 transition duration-200"
            >
              Add Item
            </button>
          </div>

          <ul className="mt-4">
            {list.items.map((item) => (
              <li key={item.id} className="flex justify-between items-center py-2">
                {editing?.itemId === item.id ? (
                  <>
                    <input
                      value={editing.newText}
                      onChange={(e) => setEditing({ ...editing, newText: e.target.value })}
                      className="border border-gray-300 rounded-lg p-2 w-full shadow-sm focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                      onClick={() => handleSaveItem(list.id, item.id)}
                      className="bg-blue-600 text-white p-2 rounded-lg ml-4 hover:bg-blue-700 transition duration-200"
                    >
                      Save
                    </button>
                  </>
                ) : (
                  <>
                    <span className="text-gray-800">{item.text}</span>
                    <button
                      onClick={() => setEditing({ itemId: item.id, newText: item.text })}
                      className="bg-yellow-500 text-white p-2 rounded-lg hover:bg-yellow-600 transition duration-200"
                    >
                      Edit
                    </button>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Lists;