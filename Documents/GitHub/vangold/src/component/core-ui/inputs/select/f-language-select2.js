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
        <div style={{width: "740px"}} className="br-select-category-component lang-select-component">
           <div className='b-category-dropdown'>
                <div className='b-dropdown-header b-category-dropdown-header' onClick={toggleDropdown}>
                    {selectedItem ? items.find(item => item.id == selectedItem).label : "Select"}
                    <TiArrowSortedDown/>
                </div>
                <div className={`b-category-dropdown-body b-language-dropdown-body ${isOpen && 'open'}`}>
                    {items.map(item => (
                    <div className="b-dropdown-item b-category-dropdown-item" onClick={e => handleItemClick(e.target.id)} id={item.id}>
                        {item.label}
                    </div>
                    ))}
                </div>
                
            </div>
        </div>
    )
}

export default LanguageSelect