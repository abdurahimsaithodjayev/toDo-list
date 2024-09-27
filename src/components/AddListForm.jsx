import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../features/listsSlice';

const AddListForm = () => {
  const [listTitle, setListTitle] = useState('');
  const dispatch = useDispatch();

  const handleAddList = () => {
    if (listTitle) {
      dispatch(addList(listTitle));
      setListTitle('');
    }
  };

  return (
    <div className="mb-6 flex flex-col sm:flex-row items-center justify-center">
      <input
        value={listTitle}
        onChange={(e) => setListTitle(e.target.value)}
        placeholder="Enter list title"
        className="border border-gray-300 rounded-lg p-2 w-full sm:w-1/2 shadow-sm focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleAddList}
        className="bg-blue-600 text-white p-2 rounded-lg ml-0 sm:ml-4 mt-2 sm:mt-0 w-full sm:w-auto hover:bg-blue-700 transition duration-200"
      >
        Add List
      </button>
    </div>
  );
};

export default AddListForm;