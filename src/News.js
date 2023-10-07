/*
import React,{useState} from "react";
import style from "./styles.css";
function LoginForm(){
  const [isLogin,setisLogin]=useState(true);
  const[Username,setUsername]=useState("");
  const[Password,setPassword]=useState("");
  function HandleSubmit(event){
    event.preventDefault();
    if(isLogin){
      console.log("logging with username:",Username, 'and password',Password);
    }
    else{
      console.log("Registration with username",Username,'and with password',Password);
    }

  };
  return(
    <div>
      <h2>{isLogin ?'Login':'Register'}</h2>
      <form onSubmit={HandleSubmit}>
        <input type="text" placeholder="Username" value={Username} onChange={(e)=>setUsername(e.target.value)}/>
        <input type="password" placeholder="Password" value={Password} onChange={(e)=>setPassword(e.target.value)}/>
        <button  type="submit">{isLogin?"Login":"Register"}</button>
  </form>
  <p>{isLogin? "Dont have an accoun?":"Already have an account?"}
  <button onClick={()=>setisLogin(!isLogin)}>
    {isLogin?"Register":"Login"}
    </button>
    </p>
    </div>

  
  
  );
}
export default LoginForm;
*/
// Todo app
import React,{useState} from "react";
import style from "./styles.css";
function TodoApp(){
  const[Todos,setTodos]=useState([]);
  const[InputValue,setInputValue]=useState("");
  function AddTodo(){
    if(InputValue.trim()!==""){
      setTodos([...Todos,InputValue]);
      setInputValue("");
    }
  };

  const DeleteTodo=(index)=>{
    const UpdatedTodos=Todos.filter((_,i)=>i!==index);
    setTodos(UpdatedTodos);
  };
  
  return(
    <div>

      <h1>Todo App </h1>
      <input type="text"value={InputValue} onChange={(e)=>
      setInputValue(e.target.value)}/>
      <button onClick={AddTodo}>Add</button>
      <ul>
        {Todos.map((Todo,index)=>(
          <li key={index}>{Todo}<button onClick={()=>DeleteTodo(index)}>Delete</button>


          </li>
        ))}
        </ul>
        </div>
  );
}
export default TodoApp;