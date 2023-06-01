import List from "../components/List"
import InputField from "../components/InputField"
import { useState } from "react"

let id = 0;
let initialList = [
    {
        id: id++,
        name: "Walk the cat",
        isDone: false,
        priority: "high"
    },
    {
        id: id++,
        name: "Feed the human",
        isDone: false,
        priority: "high"

    }, {
        id: id++,
        name: "Eat the cake",
        isDone: false,
        priority: "low"

    }
]

export default function TodoListParent() {
    let [todoList, setTodoList] = useState(initialList);
    let [todoText, setTodoText] = useState('');

    const addTodo = () => {
        let indexOfLastItem = todoList[todoList.length - 1].id;

        if (todoText.length > 0) {
            setTodoList(
                todoList.concat({
                    name: todoText,
                    id: indexOfLastItem += 1,
                    // id: todoList.length + 1,

                    // ++  => return THEN increment
                    // +1 = returns the increment value
                    // so if i wanted to use same logic, i need to pass the id 
                    isDone: false,
                    priority: "high"

                })
            )
            setTodoText('');
        }
    }

    const getTotalCompleted = () => {
        let completed = todoList.filter((task) => task.isDone === true)
        return completed.length;
    }

    return <>
        <div className="parent-container">
            <h1 className="text-xl">To Do List App </h1>
            <InputField
                todoText={todoText}
                setTodoText={setTodoText}
                addTodo={addTodo}
            />
            <List
                list={todoList}
                setList={setTodoList}
            />

            <div>
                <p className="text-xs py-2">Completed Tasks:  {getTotalCompleted()} / {todoList.length} </p>
            </div>

        </div>

        <style jsx>
            {`
            .parent-container {
                max-width: 500px;
                margin: 0 auto;
            }
      
            `}
        </style>
    </>





}
