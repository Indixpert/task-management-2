import React from 'react';

interface Task {
  id: string;
  content: string;
}

interface TaskCardProps {
  task: Task;
}

const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
  return (
    <div className="bg-white p-3 rounded-md shadow-sm cursor-pointer hover:bg-gray-50">
      <p>{task.content}</p>
    </div>
  );
};

export default TaskCard;