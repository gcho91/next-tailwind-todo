import { Dispatch, SetStateAction } from "react";

interface InputFieldProps {
    todoText: string;
    addTodo: () => void;
    setTodoText: Dispatch<SetStateAction<string>>;
}

export default function InputField({ todoText, addTodo, setTodoText }: InputFieldProps) {

    return <div className="flex justify-between">
        <input
            className="input-field rounded-full pl-2.5"
            placeholder="Create a new task"
            type="text"
            value={todoText}
            name={todoText}
            onKeyDown={(e) => {
                if (e.key === "Enter") addTodo();
            }}
            onChange={(e) => {
                setTodoText(e.target.value)
            }}
        />
        <button
            // className="rounded-full bg-cyan-500 hover:bg-cyan-600 text-white"
            className="px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full"
            onClick={addTodo}
            disabled={!todoText.length}
        >+</button>

        <style jsx>
            {`
            .input-field {
                width: calc(100% - 42px)
            }
            `}
        </style>
    </div>

}
