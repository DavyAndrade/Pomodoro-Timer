import { EllipsisVertical } from "lucide-react";

export default function Tasks() {
  /* 
    TODO: 
    - Adicionar tarefa
    - Remover tarefa
    - Editar tarefa
    - Marcar tarefa
    - Salvar tarefas no localStorage
  */
  return (
    <article className="w-full flex flex-col justify-between items-center gap-8">
      {/* Cabeçalho */}
      <div className="flex justify-between w-full border-b-2 border-gray-600 pb-4">
        <h2 className="text-xl font-bold">Tarefas</h2>
        <button className="flex justify-center items-center p-1 bg-gray-700 rounded-md hover:bg-gray-600 hover:cursor-pointer transition-colors">
          <EllipsisVertical size={20} />
        </button>
      </div>

      {/* Container de Tarefas */}
      <div className="w-full flex flex-col justify-center items-center gap-8">
        {/* Botão de Adicionar Tarefa */}
        <button className="flex justify-center items-center px-6 py-8 bg-gray-800/75 text-gray-500 w-full rounded-md border-2 border-dashed border-gray-700 hover:bg-gray-700 hover:border-blue-500 hover:text-white hover:cursor-pointer focus:bg-gray-700 focus:text-white transition-colors">
          + Adicionar tarefa
        </button>

        {/* Lista de Tarefas */}
        <div>
          <p className="text-gray-500 text-center text-lg">
            Nenhuma tarefa adicionada ainda.
          </p>
          <p className="text-gray-500 text-center text-lg">
            Comece adicionando sua primeira tarefa acima!
          </p>
        </div>
      </div>
    </article>
  );
}
