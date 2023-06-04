import { useState } from "react";
import Header from "./components/Header";
import TodoComputed from "./components/TodoComputed";
import TodoCreate from "./components/TodoCreate";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";

const initialStateTodos = [
    { id: 1, title: "Go to the gym", completed: false },
    { id: 2, title: "Complete the course", completed: true },
    { id: 3, title: "Is a test only", completed: false },
    { id: 4, title: "Other test ", completed: false },
    { id: 5, title: "Finish the App", completed: true },
];

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);
    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(), //Es una mala practica
            title,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const updateTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const computedItemsLeft = todos.filter((todo) => !todo.completed).length;
    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };

    const [filter, setFilter] = useState("all");
    const changeFilter = (filter) => setFilter(filter);

    const filteredTodos = () => {
        switch (filter) {
            case "all":
                return todos;
            case "active":
                return todos.filter((todo) => !todo.completed);
            case "completed":
                return todos.filter((todo) => todo.completed);
            default:
                return todos;
        }
    };

    return (
        <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')]   md:bg-[url('./assets/images/bg-desktop-light.jpg')] md:dark:bg-[url('./assets/images/bg-desktop-dark.jpg')]">
            <Header />
            <main className="container mx-auto mt-8  p-4 md:max-w-xl">
                {/* todoCreate */}

                <TodoCreate createTodo={createTodo} />

                {/* TodoList (TodoItem) (TodoUpdate) y (TodoDelete) */}
                <TodoList
                    todos={filteredTodos()}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                />

                {/* TodoComputed */}
                <TodoComputed
                    computedItemsLeft={computedItemsLeft}
                    clearCompleted={clearCompleted}
                />
                {/* TodoFilter */}
                <TodoFilter changeFilter={changeFilter} filter={filter} />
            </main>

            <footer className="mt-8 text-center dark:text-gray-400">
                Drag and drop to reorder list
            </footer>
        </div>
    );
};
export default App;
