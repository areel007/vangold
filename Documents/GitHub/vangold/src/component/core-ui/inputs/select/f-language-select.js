import "./style.css"
import React from "react";
import { TiArrowSortedDown } from 'react-icons/ti';
import LanguageSelectData from "../../steps/languageData.json";

const LanguageSelect = props => {
    
    const { useState } = React;
  
    const [isOpen, setOpen] = useState(false);
    const [items] = useState(LanguageSelectData);
    const [selectedItem, setSelectedItem] = useState(null);
    
    const toggleDropdown = () => setOpen(!isOpen);
    
    const handleItemClick = (id) => {
        selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
    }
    


    return (
        <div className="br-select-category-component lang-select-component">
           <div style={{width: "350px"}} className='b-category-dropdown'>
                <div style={{width: "350px"}} className='b-dropdown-header b-category-dropdown-header' onClick={toggleDropdown}>
                    {selectedItem ? items.find(item => item.id == selectedItem).label : "Select "}
                    <TiArrowSortedDown/>
                </div>
                <div style={{width: "350px"}} className={`b-category-dropdown-body ${isOpen && 'open'}`}>
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

export default LanguageSelect