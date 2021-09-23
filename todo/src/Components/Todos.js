import React from 'react';
import './Todositem.css';
import { useState } from 'react';
export default function Todos({addtodo,design})
{
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");
    // function funt(e)
    // {
    //     settitle(e.target.value);
    // }
    // function fund(e)
    // {
    //     setdesc(e.target.value);
    // }
    function submit(e)
    {
        e.preventDefault(); //To Prevent Loading Of Page
        if(!title&&!desc){
            alert("Title And Descrption Cannot Be Empty!");
        }
        else if(!title){
            alert("Title Cannot Be Empty!");
        }
        else{
            addtodo(title,desc);
            settitle("");
            setdesc("");
        }
    }
    return (
        <div className="contain" style={design}>
            <form >
                <label htmlFor="tits">Title: <br />
                    <input value={title} onChange={(e)=>{settitle(e.target.value)}} type="text" name="title" id="tits" />
                </label>
                <br/>
                <label htmlFor="desc"> Description: <br/>
                    <input value={desc} onChange={(e)=>{setdesc(e.target.value)}} type="text" name="description" id="desc" />
                </label>
                <button onClick={submit} className="list" >Add To List</button>
            </form>
        </div>
    )
}