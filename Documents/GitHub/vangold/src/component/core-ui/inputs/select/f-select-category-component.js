import "./style.css"
import React from "react";
import { TiArrowSortedDown } from 'react-icons/ti';
import CategoryDataJson from "../../steps/categoryData.json";
import useOnclickOutside from "react-cool-onclickoutside";


const FrSelectCategoryComponent = props => {
    const { useState } = React;

    const [isOpen, setOpen] = useState(false);
    const [items] = useState(CategoryDataJson);
    const [selectedItem, setSelectedItem] = useState(null);
    
    const toggleDropdown = () => setOpen(!isOpen);
    
    const handleItemClick = (id) => {
        selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
    }
    
    const ref = useOnclickOutside(() => {
        setOpen(false);
      });
 
    return (
        <div className="br-select-category-component">
           <div className='b-category-dropdown'>
                <div className='b-dropdown-header b-category-dropdown-header' onClick={toggleDropdown}>
                    {selectedItem ? items.find(item => item.id == selectedItem).label : "Select a Category"}
                    <TiArrowSortedDown/>
                </div>
                <div className={`b-category-dropdown-body ${isOpen && 'open'}`}>
                    {items.map(item => (
                    <div ref={ref} className="b-dropdown-item b-category-dropdown-item" onClick={e => handleItemClick(e.target.id)} id={item.id}>
                        <p>{item.label}</p>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
 
export default FrSelectCategoryComponent