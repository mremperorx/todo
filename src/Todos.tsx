import {Row} from './Row'
import {data} from "./components/todos"
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { AddTodo } from './components/AddTodos'
import { v4 as uuidv4} from "uuid"

type Todo = {
    id: string
    task: string
    isCompleted: boolean
}

export const Todos = () => {
    const [todos, setTodos] = useState<Todo[]>(data)
    const [task, setTask] = useState("")
    const todosLenght = todos.length
    const hasTodos = todos.length > 0
    const remainingTodos = todos.filter((todo) => !todo.isCompleted).length


    const handleAddTodo = (todo: Todo) => {
        const updatedTodo = [...todos, todo]
        setTodos(updatedTodo)
        setTask("")
    }
   
    const handleChange = (e: ChangeEvent) => {
        const {value} = e.target as HTMLInputElement
        setTask(value)
    }

    const handleSubmitTodo = (e : FormEvent) => {
        e.preventDefault()
        const todo = {
            id: uuidv4(),
            task: task,
            isCompleted: false,
        }
        task && handleAddTodo(todo)
    }


    const handleDeleteTodo = (id: string) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id)
        setTodos(updatedTodos)
    }
   
    const handleCheckTodo = (id: string) => {
        const updatedTodos = todos.map((todo) => {
            if(todo.id === id) {
                return{
                    ...todo, isCompleted: !todo.isCompleted,
                }
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    return (
        <section className='w-10/12 lg:w-1/2 max-w-2xl flex flex-col items-center'>
        <AddTodo task={task}
        handleChange={handleChange}
        handleSubmitTodo={handleSubmitTodo} />
         <div className='h-10' />
            {todos.map((todo) => (
                <Row 
                key={todo.id} 
                todo={todo}  
                handleDeleteTodo={handleDeleteTodo} 
                handleCheckTodo = {handleCheckTodo} />
            ))}

            {!hasTodos && <p className='mb-5 text-xl text-red-700 uppercase'>Please add a TODO!</p>}

            {hasTodos && (
                <p className='mb-3 text-xl text-white uppercase'>{`[${remainingTodos} of ${todosLenght}] todos reamining`}</p>
            )}
            
        </section>
    )
}

