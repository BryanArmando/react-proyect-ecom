import { useState } from "react";

const Todo = ({item, onUpdate, onDelete}) => {
    const [isEdit, setIsEdit] = useState(false);

    function FormEdit(){

        const [newValue, setNewValue] = useState(item.title);

        function handleSubmit(e){
            e.preventDefault();
        }

        function handleChange(e){
            const value = e.target.value;
            setNewValue(value);
        }
        
        function handleClickUpdateTodo () {
            onUpdate(item.id, newValue);
            setIsEdit(false);
        }

        return(
            <form className="todoUpdateForm" onSubmit={handleSubmit}>
                <input type="text" className="todoInput" onChange={handleChange} value={newValue}/>
                <button className="button" onClick={handleClickUpdateTodo}>Update</button>
            </form>
        );
    };
    
    function TodoElement(){
        return(
            <div className="todoInfo">
            {item.title} <button className="buttoneditar" onClick={() => setIsEdit(true)} >Editar</button>
            <button className="buttoneliminar" onClick={(e) => onDelete(item.id)} >Eliminar</button>
        </div>
        );
    }

    return ( 
       
        <div className="todo">
            {isEdit ? <FormEdit/> : <TodoElement/>}
        </div>
     );
}
 
export default Todo;
