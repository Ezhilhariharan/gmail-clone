import React from 'react'
import './Sections.css';

function Sections({ Icon, title, color, selected}) {
    return (
        <div className={`Sections ${selected && "section--selected"}`}
          style = {{
              borderBottom:`3px solid ${color}`,
              color:`${selected && color}`,
          }}
        >
           <Icon/>
           <h4>{title}</h4> 
        </div>
    )
}

export default Sections
