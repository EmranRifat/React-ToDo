import React from 'react';
import "./Button.css"
import{v4 as uuidv4} from "uuid";

const Button = ({input,setInput,todos,setTodos,inputDes,setInputDes,editTodo,setEditTodo}) => {
   
    const updateTodo=(title,id,complated)=>{
      
        const newTodo=todos.map((todo)=>{
            // todo.id===id ? {title,id,complated} :todo;
        });
        setTodos(newTodo);
        setEditTodo("");


    }
    const handleSubmit1=(event)=>{
        setInput(event.target.value);
    }
    const handleSubmit2=(event)=>{
        setInputDes(event.target.value);
    }
const onFormSubmit=(event)=>{
    event.preventDefault();

    if(!editTodo){
    setTodos([...todos,{id:uuidv4(),title: input, description: inputDes,complated: false}])
    setInput("");
}
else{
    updateTodo(input,editTodo.id,editTodo.complated)
}
    
    
}
    return (
        <div>
<label for="my-modal-3" class="btn btn-primary btn1 mt-4">Add Todo</label>

<form  onSubmit={onFormSubmit} >
<input type="checkbox" id="my-modal-3" class="modal-toggle" />
<div class="modal ">
  <div class="modal-box relative">
    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 class="text-lg font-bold mb-4">Add to do</h3>
   
    <input type="text" value={input} onChange={handleSubmit1} placeholder="write task title"class="input input-bordered w-full max-w-sm " required />
    <textarea  value={inputDes} onChange={handleSubmit2} class="textarea textarea-bordered  w-full max-w-sm mt-2" placeholder="Write text note"></textarea><br />



<button class="btn btn-outline outline-gray btn-sm  text-xs w-40">17oct 2022 </button>
   <button class="btn btn-outline outline-gray btn-sm ml-16  text-xs  w-40">Start Time</button>

<br />
  <button class="btn btn-outline outline-gray-700 btn-sm mr-6  text-xs mt-2  w-40">17oct 2022 </button>
 <button class="btn btn-outline outline-gray ml-10 btn-sm  text-xs  w-40 ">End Time </button>

<br />
<button class="btn btn-accent btn-sm w-32 mt-4" type=''>ADD </button>




      </div>
</div>
</form>


        </div>
    );
};

export default Button;