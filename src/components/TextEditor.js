import React, { useState } from 'react';

const TextEditor = ({ initialText, onTextUpdate }) => {
  const [text, setText] = useState(initialText || '');
  const [isEditing, setIsEditing] = useState(false);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSave = () => {
    onTextUpdate(text);
    setIsEditing(false);
  };

  return (
    <div className="w-full border border-gray-300 rounded-lg bg-white mt-4">
      <div className="flex justify-between items-center px-4 py-2 border-b border-gray-300 bg-gray-50 rounded-t-lg">
        <h3 className="text-sm font-medium text-gray-700">Extracted Ingredients</h3>
        {isEditing ? (
          <div className="flex space-x-2">
            <button
              onClick={handleSave}
              className="bg-green-600 text-white px-3 py-1 rounded-md text-sm"
            >
              Save
            </button>
            <button
              onClick={() => {
                setText(initialText || '');
                setIsEditing(false);
              }}
              className="bg-gray-500 text-white px-3 py-1 rounded-md text-sm"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
          >
            Edit
          </button>
        )}
      </div>
      
      {isEditing ? (
        <textarea
          value={text}
          onChange={handleTextChange}
          className="w-full p-4 h-48 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-b-lg"
          placeholder="Edit the extracted ingredients text here..."
        />
      ) : (
        <div className="p-4 h-48 overflow-y-auto whitespace-pre-wrap">
          {text ? text : (
            <p className="text-gray-400 italic">No text extracted yet. Upload an image or use the camera to capture a food label.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default TextEditor; 