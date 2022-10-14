import React, { ChangeEvent, FormEvent } from "react"
import { ReactComponent as PlusIcon } from  "../assets/svg/plus.svg"

export type AddTodoProps = {
    task: string
    handleSubmitTodo: (e: FormEvent) => void
    handleChange: (e: ChangeEvent) => void
}

export const AddTodo : React.FC<AddTodoProps> = ({task, handleChange, handleSubmitTodo}) => {
    return( 
    <form className="flex justify-between w-full" onSubmit={handleSubmitTodo}>
        <input className="flex-1 rounded shadow p-2 text-gray-dark mr-2" type="text" name="task" value={task} onChange={handleChange} />
        <button type="submit" aria-label="Add Todo">
            <PlusIcon />
        </button>
    </form>
    )
}