import React from 'react'
import { NavLink } from 'react-router-dom'

let TableDown = (props) => {
    return (
        <div>
            <div className="dropdown">
                {props.id}
                {props.article}
                {props.name}
                
                <div className="dropdown-content">
                {props.name}
                    <NavLink to="/productView/"> View product {props.link} </NavLink>
                </div>
            </div>
        </div>
    )
}

export default TableDown 
