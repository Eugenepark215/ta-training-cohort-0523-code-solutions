import React, { useState } from 'react';
/**
 * Manages outstanding and completed tasks.
 * Outstanding and completed tasks are displayed in separate lists.
 * Props:
 *   - tasks, an Array of { id: number, name: string }
 */
export default function TaskManager({ tasks }) {
  // An array of the completed tasks.
  const [completed, setCompleted] = useState([]);

  // All the tasks that are not completed.
  const outstanding = tasks.filter((task) => !completed.includes(task));

  function handleComplete(task) {
    setCompleted([...completed, task]);
  }

  return (
    <div>
      <OutstandingTasks outstanding={outstanding} onComplete={handleComplete} />
      <CompletedTasks completed={completed} />
    </div>
  );
}

/**
 * An array of tasks with a checkbox to indicate they are completed.
 * Props:
 *   - outstanding, the uncompleted tasks to display
 *   - onComplete, called with the task when it is marked as complete
 */
function OutstandingTasks({ outstanding, onComplete }) {
  if (outstanding.length === 0) return <div>No outstanding tasks.</div>;
  return (
    <div>
      <div>Outstanding Tasks</div>
      <ul style={{ listStyleType: 'none' }}>
        {outstanding.map((task) => (
          <li key={task.id}>
            <input type="checkbox" onChange={() => onComplete(task)} />
            <span>{task.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/**
 * An array of tasks.
 * Props:
 *   - tasks, the tasks to display
 */
function CompletedTasks({ completed }) {
  if (completed.length === 0) return <div>No completed tasks.</div>;
  return (
    <div>
      <div>Completed Tasks</div>
      <ul style={{ listStyleType: 'none' }}>
        {completed.map((task) => (
          <li key={task.id}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
}
