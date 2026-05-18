import { useState } from "react";

export default function TaskItem({
  task,
  deleteTask,
  toggleComplete,
  editTask,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    editTask(task.id, newText);
    setIsEditing(false);
  };

  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />

      {isEditing ? (
        <input value={newText} onChange={(e) => setNewText(e.target.value)} />
      ) : (
        <span className={task.completed ? "completed" : ""}>{task.text}</span>
      )}

      {isEditing ? (
        <button onClick={handleEdit}>Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}

      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}
