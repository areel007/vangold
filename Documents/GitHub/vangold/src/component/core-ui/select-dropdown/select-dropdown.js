import "./select-dropdown.css"

 
const SelectDropdown = props => {
    return <div className="select-dropdown-component">
        <div
            onClick={props.toggleDropdown}
            className="select-dropdown-header"
        >
            <p>{props.selectDropdownHeader}</p>
            <svg
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
            >
                <path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/>
                <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/>
            </svg>
        </div>
        {
            props.showDropdown ? <div
                className="select-dropdown-dropdown"
                onClick={props.upDateDropdownHeader}
            >
                {
                    props.dataToDisplay.map((_data, index) => {
                        return <div className="select-dropdown-item" key={index}>
                            <p>{_data.label}</p>
                        </div>
                    })
                }
            </div> : null
        }
    </div>
}

export default SelectDropdown