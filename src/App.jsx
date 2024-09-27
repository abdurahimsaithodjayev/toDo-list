import React from 'react';
import AddListForm from './components/AddListForm';
import Lists from './components/Lists';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Trello Clone</h1>
      <AddListForm />
      <Lists />
    </div>
  );
}

export default App;