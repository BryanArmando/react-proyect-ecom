import { useState } from "react";
import Todo from "./Todo";

const Compost = () => {
    const [title, setTitle] = useState("Hi");
    const [todos, setTodos] = useState([]);
/*
    function handleClick(e){
        e.preventDefault();
        setTitle("Bryan")
    }*/

    function handleChange(event){
        const value = event.target.value;

        setTitle(value)
    }

    function handleSubmit(e){
        e.preventDefault();//anulo el defecto de subir el formulario
        if(title===""){
            console.log("ingrese un valor");
        }else{
        const newTodo = {
            id: crypto.randomUUID,
            title: title,
            completed: false
        };
        const temp = [...todos];
        temp.unshift(newTodo);
        //setTodos(...todos, newTodo) puede simplificar
        setTodos(temp);

        setTitle("");
    }
    }

    function handleUpdate(id, value){
        const temp = [...todos];
        const item = temp.find((item) => item.id === id );
        item.title = value;
        setTodos(temp);
    }

    function handleDelete(id){
        const aux = todos.findIndex((todo)=>todo.id === id)
    todos.splice(aux, 1)
    setTodos([...todos])
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={title} />
                <input onClick={handleSubmit} type="submit" value= "Create todo"
                className="buttonCreate" />
                
            </form>
            <div className="todosContainer">
                {
                    todos.map((item) => (
                        <Todo key={item.id} item={item} 
                        onUpdate={handleUpdate} 
                        onDelete={handleDelete}
                        />
                    ))
                }
            </div>
        </div>
     );
}
 
export default Compost;