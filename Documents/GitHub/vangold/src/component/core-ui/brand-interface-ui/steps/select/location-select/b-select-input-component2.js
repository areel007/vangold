import "../b-select-category-component.css"
import React from "react";
import { TiArrowSortedDown } from 'react-icons/ti';
import LocationDataJson from "./locationData.json";

const BrSelectInputComponentTwo = props => {
    const { useState } = React;

    const [isOpen, setOpen] = useState(false);
    const [items] = useState(LocationDataJson);
    const [selectedItem, setSelectedItem] = useState(null);
    
    const toggleDropdown = () => setOpen(!isOpen);
    
    const handleItemClick = (id) => {
        selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
    }
    

    return (
        <div className="br-select-input-component">
           <div className='b-dropdown'>
            <div className='b-dropdown-header' onClick={toggleDropdown}>
                {selectedItem ? items.find(item => item.id == selectedItem).label : "Select a State"}
                <TiArrowSortedDown/>
            </div>
            <div className={`b-dropdown-body ${isOpen && 'open'}`}>
                {items.map(item => (
                <div className="b-dropdown-item" onClick={e => handleItemClick(e.target.id)} id={item.id}>
                    {item.label}
                </div>
                ))}
            </div>
            </div>
        </div>
    )
}

export default BrSelectInputComponentTwo