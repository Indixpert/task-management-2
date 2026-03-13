import React from 'react';
import TaskCard from './TaskCard';

interface Task {
  id: string;
  content: string;
}

interface Column {
  id: string;
  title: string;
}

interface TaskColumnProps {
  column: Column;
  tasks: Task[];
}

const TaskColumn: React.FC<TaskColumnProps> = ({ column, tasks }) => {
  return (
    <div className="bg-gray-200 rounded-lg p-2 w-72 flex-shrink-0">
      <h3 className="font-bold mb-2 px-2">{column.title}</h3>
      <div className="space-y-2">
        {tasks.map(task => <TaskCard key={task.id} task={task} />)}
      </div>
    </div>
  );
};

export default TaskColumn;