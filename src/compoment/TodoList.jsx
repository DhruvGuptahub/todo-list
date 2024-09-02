import React, { useState } from 'react'

function TodoList() {

    const [tasks, setTasks] = useState([])
    const [taskInputs, setTaskInputs] = useState('')

    const handleInputChange = (e) => {
        setTaskInputs(e.target.value)
    }

    const addTask = () => {
        if (taskInputs.trim() !== '') {
            setTasks([...tasks, { text: taskInputs, completed: false }])
            setTaskInputs('')

        }
    }

    const toggleTaskCompletion = (index) => {
        const newTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task)
        setTasks(newTasks)
    }

    const deletTask = (index) => {
        const newTasks = tasks.filter((task, i) => i !== index)
        setTasks(newTasks)
    }


    return (
        <div>
            <h1>Simple To-Do List</h1>
            <input type="text" value={taskInputs} onChange={handleInputChange} placeholder='Enter a new task' />
            <button onClick={addTask}>Add Task</button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                            onClick={() => toggleTaskCompletion(index)}>
                            {task.text}
                        </span>
                        <button onClick={() => deletTask(index)}>Delete Task</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList
