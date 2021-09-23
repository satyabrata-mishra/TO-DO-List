import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Components/Header';
import React ,{useState,useEffect} from 'react';
import About from './Components/About';
import Footer from './Components/Footer';
import Todositem from './Components/Todositem';
import Todos from './Components/Todos';
function App() 
{
  const [design, setdesign] = useState
  (
    {
      backgroundColor:'white',
      color:'black'
    }
  );
  let [mode, setmode] = useState('light');
  mode=()=>{
    if(design.backgroundColor==='white')
    {
      setdesign
      (
        {
          backgroundColor:'rgb(71, 70, 70)',
          color:'white'
        }
      );
      setmode('dark');
    }
    else
    {
      setdesign
      (
        {
          backgroundColor:'white',
          color:'black'
        }
      );
      setmode('white');
    }
  }
  let initTodo;
  if (localStorage.getItem("todo") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todo"));
  }
  const[todo, settodo] = useState(initTodo);
  function add(title,desc)
  {
    let mytodo={
      title:title,
      desc:desc
    };
    settodo([...todo,mytodo]);
  }
  const onDelete=(temp)=>
  {
    settodo(todo.filter((value)=>{
      return value!==temp;
    }))
  };
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);
  return (
   <Router>
     <Header mode={mode} design={design} />
      <Switch>
        <Route path="/Todositem.js">
          <div style={design} className="minh">
            <Todos addtodo={add} design={design}/>
            <h2 style={design}>TODOS LIST</h2>
            {todo.length===0?<p style={design} className="notodo">NO TODOS TO DISPLAY!</p>:
            todo.map((value,index)=>
            {
              return  <Todositem design={design} index={index} todos={value} onDelete={onDelete}/>
            })}
          </div>
        </Route>
        <Route path="/About.js">
         <About design={design}/>
        </Route>
      </Switch>
      <Footer/>
   </Router>
  );
}
export default App;