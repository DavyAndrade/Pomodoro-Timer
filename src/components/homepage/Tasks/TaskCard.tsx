import { Pencil, Trash2 } from "lucide-react";
import type Task from "./Task";

type TaskCardProps = {
  task: Task;
  onRemoveTask: (taskId: string) => void;
  onEditTask: (taskId: string) => void;
};

export default function TaskCard({ task, onRemoveTask, onEditTask }: TaskCardProps) {

  function removeTask() {
    onRemoveTask(task.id);
  }

  function editTask() {
    onEditTask(task.id);
  }

  return (
    <article className="w-full flex flex-col gap-2 p-6 border-2 border-gray-600 rounded-md">
      <div className="flex justify-between items-start gap-2">
        {/* Botão de Switch de Concluído */}
        <button className="h-6 w-6 rounded-sm border-2 border-gray-600 hover:border-green-400 hover:cursor-pointer"></button>

        <div className="flex flex-col gap-1 items-center">
          {/* Título e Descrição */}
          <div className="flex flex-col gap-1">
            <h3 className="font-bold text-xl">{task.title}</h3>

            {task.description && (
              <p className="text-gray-500 text-sm max-w-[200px]">
                {task.description}
              </p>
            )}
          </div>

          <div>
            <p>
              {task.pomodorosCompleted}/{task.estimatedPomodoros} pomodoros
              completados
            </p>
            <p>{task.completed ? "Concluído" : "Pendente"}</p>
          </div>
          <div></div>
        </div>

        <div className="flex gap-1">
          {/* Botão de Editar */}
          <button className="text-blue-400 hover:bg-gray-700 p-2 rounded-sm hover:cursor-pointer">
            <Pencil size={20} />
          </button>

          {/* Botão de Remover */}
          <button
            className="text-red-400 hover:bg-gray-700 p-2 rounded-sm hover:cursor-pointer"
            onClick={removeTask}
          >
            <Trash2 size={20} />
          </button>
        </div>
      </div>
    </article>
  );
}
