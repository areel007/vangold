import "./style.css"
import React from "react";
import { TiArrowSortedDown } from 'react-icons/ti';
import MonthsSelectData from "../../steps/monthData.json";
import useOnclickOutside from "react-cool-onclickoutside";


const MonthsSelect = props => {
    
    const { useState } = React;
  
    const [isOpen, setOpen] = useState(false);
    const [items] = useState(MonthsSelectData);
    const [selectedItem, setSelectedItem] = useState(null);
    
    const toggleDropdown = () => setOpen(!isOpen);
    
    const handleItemClick = (id) => {
        selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
    }
    
    const ref = useOnclickOutside(() => {
        setOpen(false);
      });

    return (
        <div className="br-select-category-component lang-select-component">
           <div style={{width: "350px"}} className='b-category-dropdown'>
                <div style={{width: "350px"}} className='b-dropdown-header b-category-dropdown-header' onClick={toggleDropdown}>
                    {selectedItem ? items.find(item => item.id == selectedItem).label : "Month "}
                    <TiArrowSortedDown/>
                </div>
                <div ref={ref} style={{width: "350px", height: 300}} className={`b-category-dropdown-body b-language-dropdown-body ${isOpen && 'open'}`}>
                    {items.map(item => (
                    <div style={{width: "300px"}} className="b-dropdown-item b-category-dropdown-item" onClick={e => handleItemClick(e.target.id)} id={item.id}>
                        {item.label}
                    </div>
                    ))}
                </div>
                
            </div>
        </div>
    )
}

export default MonthsSelect