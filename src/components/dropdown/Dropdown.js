import React from "react";
import '../../styles/navbar.scss'
import ColorPicker from "../colorPicker/ColorPicker";

export default function Dropdown({children, title}){
    const handleClick =(e)=>{
        let isDropdownButton
        isDropdownButton = e.target.dataset.btn === 'data-dropdown-button';

        if(!isDropdownButton && e.target.closest('.dropdown') != null)
            return

        let currentDropDown
        if(isDropdownButton){
            currentDropDown = e.target.closest('.dropdown')
            console.log(currentDropDown)

            currentDropDown.classList.toggle('active')
        }

        document.querySelectorAll('.properties-item-container .active').forEach(dropdown =>{
            if (dropdown === currentDropDown) return
            dropdown.classList.remove('active')
        })

    }

    return(
        <div className="dropdown" data-btn={'data-dropdown'}
             onClick={(e)=>handleClick(e)}>
            <button className={'dropdown-btn'} data-btn={'data-dropdown-button'}>
                {title}
            </button>
            <div className="dropdown-menu">
                {children}
            </div>
        </div>
    )
}