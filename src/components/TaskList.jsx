import TaskItem from "./TaskItem";

export default function TaskList({
  tasks,
  deleteTask,
  toggleComplete,
  editTask,
}) {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          editTask={editTask}
        />
      ))}
    </div>
  );
}
