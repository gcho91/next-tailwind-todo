import { Dispatch, SetStateAction } from "react";
import Pill from "./Pill";

interface ListProps {
    list: {
        id: number;
        name: string;
        isDone: boolean;
        priority?: string;

    }[];
    setList: Dispatch<SetStateAction<{
        id: number;
        name: string;
        isDone: boolean;
        priority?: string;
    }[]>>;
}

export default function List({ list, setList }: ListProps) {

    const handleDelete = (itemId: number) => {
        setList(list.filter((todoItem) => {
            return todoItem.id !== itemId
        }))
    }

    const toggleCompleted = (index: number) => {
        const currentTasks = [...list]
        currentTasks[index].isDone = !currentTasks[index].isDone;

        console.log(currentTasks)
        setList(currentTasks)
    }

    const DisplayEmptyList = () => <h1>List is Empty :'(</h1>

    const PriorityPill = ({ level }) => {
        return <span
            className={`rounded-lg text-xs text-white p-0.5 bg-red-500 text-[8px] align-middle`}
        >{level}</span>
    }
    // custom style on checkbox
    // https://webdesign.tutsplus.com/tutorials/how-to-make-custom-accessible-checkboxes-and-radio-buttons--cms-32074
    return <>
        <ul >
            {list.length === 0 ? <DisplayEmptyList /> :
                list.map((item, ind) => {
                    return <li key={ind} className="flex justify-between border-solid border-0 border-b border-stone-300"
                    >
                        <div className="left-container py-2 ">

                            <input type="checkbox"
                                className="align-middle"
                                checked={item.isDone}
                                onChange={() => toggleCompleted(ind)}
                            />
                            <label
                                onClick={() => toggleCompleted(ind)}
                                className={item.isDone ? "todo-text todo-completed pl-1 text-sm" : "todo-text pl-1 text-sm"}
                            >{item.name} </label>
                            <PriorityPill level={item.priority} />
                        </div>
                        <button
                            onClick={() => handleDelete(item.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </li>
                })
            }
        </ul >
        <style jsx>
            {`

            @keyframes strike {
                0% {
                    width: 0;
                }
    
                100% {
                    width: 100%;
                }
            }

            .todo-completed {
                position: relative;
            }


            .todo-completed::after{
                    content: " ";
                    position: absolute;
                    width: 100%;
                    height: 1px;
                    top: 50%;
                    left: 0;
                    background: black;
                    animation-name: strike;
                    animation-duration: 0.2s;
                    // animation-timing-function: ease-in-out;
                    animation-iteration-count: 1;
                    animation-fill-mode: forwards;
                    // animation-delay: -0.5s;
            }

      
            `}
        </style>
    </>
}

// Add new items to the list
// Delete item when clicking button
// Delete Selected Item

// when clicking on checkbox, and/or clicking item, mark it as completed

// *am i gonna use ID or index???? change

// add in reverse order
