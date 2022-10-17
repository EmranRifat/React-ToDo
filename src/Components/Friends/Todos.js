import React from 'react';
import { AiFillCheckSquare, AiFillDelete,AiFillEdit } from 'react-icons/ai';
import {MdDone } from 'react-icons/md';

const Todos = ({todos,setTodos,setEditTodo}) => {
   
   const handleDelete=({id})=>{
    setTodos(todos.filter((todo)=>todo.id!==id))
   }

   const handleEdit=({id})=>{
    const findTodo=todos.find((todo)=>todo.id===id)
    setEditTodo(findTodo)

   }
  
    return (
        <div>
           <h2>Todo  List</h2> 
           <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Details</th>
              <th></th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
           {
            todos.map((t,index)=> (
                
                <tr key={t.id}>
                <th></th>
                <td>
                    <div className='font:semibold'>
                        {t.title}
                    </div>
                    <small>
                        {t.description}
                    </small>
                    <p><small>Start data: 18 Oct,2022 </small></p>
                </td>
                <td> </td>
                <td className='flex '> 
                <div><AiFillCheckSquare className='text-2xl text-[green]' /></div>
                <div><AiFillEdit onClick={()=>handleEdit(t)} className='text-2xl mx-3' /></div>
                <div><AiFillDelete className='text-2xl text-[red]' onClick={()=>handleDelete(t)}/></div>

                </td>
                
              </tr>

                ))}
              
            
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default Todos;