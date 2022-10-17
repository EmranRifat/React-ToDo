import "./App.css";
import Button from "./Components/Button";
import { useState } from "react";
import Todos from "./Components/Friends/Todos";

function App() {
  const[input,setInput]=useState("");
  const[inputDes,setInputDes]=useState("");
  const[todos,setTodos]=useState([]);
  const[editTodo,setEditTodo]=useState(null);



  return (

    <>
   
    <div className="App">
    

      <Button
      input={input}
      setInput={setInput}
      inputDes={inputDes}
      setInputDes={setInputDes}
      todos={todos}
      setTodos={setTodos}
      setEditTodo={setEditTodo}
      ></Button>
      
      <Todos
      todos={todos} 
      setTodos={setTodos}
      setEditTodo={setEditTodo}

      ></Todos>
     
    </div>
    </>
  );
}

export default App;
