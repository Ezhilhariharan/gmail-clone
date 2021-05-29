import React from 'react'
import './SideBarOption.css';

function SideBarOption({Icon,title,number,selected}) {
    return (
        <div className={`SideBarOption ${selected && "SideBarOption--active"}`}>
            <Icon/>
            <h3>{title}</h3>
            <p>{number}</p>
      </div>
    )
}

export default SideBarOption;
