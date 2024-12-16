import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ title }) => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState('');

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };

  const handleSave = () => {
    // Emit updateTask event here
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col space-y-4 w-full max-w-sm transform transition-all duration-300 ease-in-out">
        <h3 className="text-midnight-navy text-xl font-semibold border-2 border-loudy-slate p-3 rounded-lg text-center">
          {title}
        </h3>

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 border-2 border-loudy-slate rounded-lg focus:border-midnight-navy focus:ring-1 focus:ring-midnight-navy transition-colors"
          rows="4"
          placeholder="Enter task description..."
        />

        <button
          onClick={handleSave}
          className="bg-midnight-navy text-crisp-frost py-2 px-4 rounded hover:bg-opacity-90 transition-all duration-200 ease-in-out transform hover:scale-105"
        >
          Save
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col space-y-4 w-full max-w-sm transform transition-all duration-300 ease-in-out">
      <h3 className="text-midnight-navy text-xl font-semibold border-2 border-loudy-slate p-3 rounded-lg text-center">
        {title}
      </h3>

      <button
        onClick={() => setIsEditing(true)}
        className="text-loudy-slate hover:text-midnight-navy transition-colors transform hover:scale-105 duration-200"
      >
        View details
      </button>

      <div className="text-3xl font-mono text-midnight-navy text-center py-4">
        {formatTime(time)}
      </div>

      <div className="flex flex-col space-y-2">
        <button
          onClick={handleStart}
          className="bg-midnight-navy text-crisp-frost py-2 px-4 rounded hover:bg-opacity-90 transition-all duration-200 ease-in-out transform hover:scale-105"
        >
          Start
        </button>
        <button
          onClick={handlePause}
          className="bg-racing-red text-crisp-frost py-2 px-4 rounded hover:bg-opacity-90 transition-all duration-200 ease-in-out transform hover:scale-105"
        >
          Pause
        </button>
        <button
          onClick={handleReset}
          className="bg-loudy-slate text-crisp-frost py-2 px-4 rounded hover:bg-opacity-90 transition-all duration-200 ease-in-out transform hover:scale-105"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TodoItem;
