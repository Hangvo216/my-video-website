import React, { useState } from 'react';

const VideoForm = ({ video, onChange }) => {
  const [newName, setNewName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call a function to send the updated video name to the backend
    onChange(newName);
    // Reset the form fields
    setNewName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button type="submit">Change Name</button>
    </form>
  );
};

export default VideoForm;
