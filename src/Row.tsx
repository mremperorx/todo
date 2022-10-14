import React from "react"

type Todo = {
    id: string
    task: string
    isCompleted: boolean
}

type TodoProps = {
    todo: Todo
    handleDeleteTodo: (id: string) => void
    handleCheckTodo: (id: string) => void
}


export const Row: React.FC<TodoProps> = ({todo:{task, isCompleted, id}, handleDeleteTodo,handleCheckTodo,}) =>  {
    return (
    <div className={`flex w-full p-4 md-2 justify-between items-center ${isCompleted ? "bg-gray-400" : "bg-green-300"}`}>
        <p className={`ml-2 text-xl font-sans font-medium ${isCompleted ? "text-white line-through" : "text-gray-700"}`}>{task}</p>
        <div className="w-1/6 flex justify-between item-center mr-2">
            <button className="h-7 w-7 flex justify-center items-center bg-red-400 hover:bg-red-500 text-white font-blod rounded" aria-label="Delete a todo" onClick={() => handleDeleteTodo(id)}>
                X
            </button>
            <input className="form-chechbox h-7 w-7 " type="checkbox" checked={isCompleted} onChange={() => handleCheckTodo(id)} />
        </div>

    </div>
    )
}