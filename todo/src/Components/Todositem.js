import React from 'react'
import './Todos.css'
export default function Todos({design, todos ,onDelete, index}) {
    return (
            <div style={design}className="dis">
                <h4>{index+1}.{todos.title}</h4>
                <p>{todos.desc}</p>
                <button className="delbtn" onClick={()=>{onDelete(todos)}}>Delete</button>
                <hr style={design} />
            </div>
    )
}