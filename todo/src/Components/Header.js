import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css';

export default function Header(props) {
    return (
        <nav style={props.design}>
            <div className="todo">TODO</div>
            <ul>
                <li><Link style={props.design} to="Todositem.js">Home</Link></li>
                <li><Link style={props.design} to="About.js">About</Link></li>
            </ul>
            <label htmlFor="dark">
                <input type="checkbox" id="dark" onClick={props.mode}/>Enable Dark Mode
            </label>
        </nav>
        )
}