import { useState } from "react";
import type Task from "../../models/Task";
import Form from "../ui/Form";
import Input from "../ui/Input";
import TextArea from "../ui/TextArea";

type EditTaskFormProps = {
  task: Task;
  onClose: () => void;
  editTask: (taskId: string, updatedTask: Partial<Task>) => void;
};

export default function EditTaskForm({
  task,
  onClose,
  editTask,
}: EditTaskFormProps) {
  const [title, setTitle] = useState<string>(task.title);
  const [description, setDescription] = useState<string>(
    task.description || ""
  );
  const [pomodorosCompleted, setPomodorosCompleted] = useState<string>(
    String(task.pomodorosCompleted)
  );
  const [estimatedPomodoros, setEstimatedPomodoros] = useState<string>(
    String(task.estimatedPomodoros)
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleEditTask(title, description, pomodorosCompleted, estimatedPomodoros);
  };

  const handleEditTask = (
    title: string,
    description: string,
    pomodorosCompleted: string,
    estimatedPomodoros: string
  ) => {
    if (title.trim() === "") return;
    if (pomodorosCompleted.trim() === "") return;
    if (estimatedPomodoros.trim() === "") return;

    const updatedTask: Task = {
      id: task.id,
      title: title,
      description: description,
      pomodorosCompleted: Number(pomodorosCompleted),
      estimatedPomodoros: Number(estimatedPomodoros),
      completed: task.completed,
    };

    editTask(task.id, updatedTask);
    setTitle("");
    setDescription("");
    setPomodorosCompleted("");
    setEstimatedPomodoros("");
    onClose();
  };

  return (
    <Form
      className="w-full flex flex-col items-start gap-4 p-6 border-2 border-gray-600 hover:border-blue-400 rounded-md transition-colors"
      onSubmit={handleSubmit}
    >
      <Input
        label="Título"
        type="text"
        id="title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        required
        className=""
      />

      <TextArea
        label="Descrição"
        id="description"
        rows={5}
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className=""
      />

      <div className="flex flex-col gap-4 sm:flex-row w-full">
        <Input
          label="Pomodoros Completados"
          type="number"
          id="pomodorosCompleted"
          onChange={(e) => setPomodorosCompleted(e.target.value)}
          value={pomodorosCompleted}
          className="flex-1"
          min={0}
          required
        />

        <Input
          label="Meta Estimada"
          type="number"
          id="estimatedPomodoros"
          onChange={(e) => setEstimatedPomodoros(e.target.value)}
          value={estimatedPomodoros}
          min={1}
          required
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-4 w-full sm:flex-row">
        <button
          type="submit"
          className="bg-green-600 p-4 rounded-md flex-1 w-full hover:cursor-pointer hover:bg-green-700 transition-colors"
        >
          Salvar
        </button>
        <button
          type="button"
          onClick={onClose}
          className="bg-gray-500 p-4 rounded-md flex-1 w-full hover:cursor-pointer hover:bg-gray-600 transition-colors"
        >
          Cancelar
        </button>
      </div>
    </Form>
  );
}
