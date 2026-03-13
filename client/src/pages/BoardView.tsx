import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TaskColumn from '../components/TaskColumn';

// Mock data structure
const mockBoard = {
  id: '1',
  name: 'Project Phoenix',
  columns: [
    { id: 'col-1', title: 'To Do', taskIds: ['task-1', 'task-2'] },
    { id: 'col-2', title: 'In Progress', taskIds: ['task-3'] },
    { id: 'col-3', title: 'Done', taskIds: ['task-4'] },
  ],
  tasks: {
    'task-1': { id: 'task-1', content: 'Setup project structure' },
    'task-2': { id: 'task-2', content: 'Design database schema' },
    'task-3': { id: 'task-3', content: 'Develop API endpoints' },
    'task-4': { id: 'task-4', content: 'Create login page' },
  }
};

const BoardView: React.FC = () => {
  const { boardId } = useParams<{ boardId: string }>();
  const [board, setBoard] = useState<any>(null);

  useEffect(() => {
    // In a real app, you would fetch this data from an API
    // api.get(`/boards/${boardId}`).then(response => setBoard(response.data));
    setBoard(mockBoard);
  }, [boardId]);

  if (!board) return <div>Loading...</div>;

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">{board.name}</h1>
      <div className="flex space-x-4">
        {board.columns.map((column: any) => {
          const tasks = column.taskIds.map((taskId: string) => board.tasks[taskId]);
          return <TaskColumn key={column.id} column={column} tasks={tasks} />;
        })}
      </div>
    </div>
  );
};

export default BoardView;