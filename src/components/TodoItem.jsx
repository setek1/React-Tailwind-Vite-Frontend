import IconCross from "./icons/IconCross";
import IconCheck from "./icons/IconCheck";

const TodoItem = ({ todo, removeTodo, updateTodo }) => {
    // const{id, title, completed}=todo; Con esto nos podemos ahorrar el escribir todo.id , todo,tittle, todo.completed y solo escribimos la palabras solas como id, title, completed y lo tomara en cuenta igual

    return (
        <article className="flex gap-4 border-b border-b-gray-400  dark:bg-gray-800 ">
            {/* <button className="inline-block h-5 w-5 flex-none rounded-full border-2">
                
            </button> */}
            {/* Se puede centrar las cosas con grid o flex mas su componenten q son diferentes para los dos */}
            <button
                className={`h-5 w-5 flex-none rounded-full border-2 ${
                    todo.completed
                        ? "flex   items-center justify-center  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                        : "inline-block"
                }`}
                onClick={() => updateTodo(todo.id)}
            >
                {todo.completed && <IconCheck />}
            </button>
            <p
                className={`grow text-gray-600 dark:text-gray-400 ${
                    todo.completed && "line-through"
                }`}
            >
                {todo.title}
            </p>
            <button className="flex-none" onClick={() => removeTodo(todo.id)}>
                <IconCross />
            </button>
        </article>
    );
};

export default TodoItem;
