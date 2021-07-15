const SelectInputComponent = props => {
    const selectBox = {
        width: "100%",
        padding: "1.8rem 1.6rem",
        border: "1px solid rgba(0, 0, 0, .5)",
        height: "5.6rem",
        backgroundColor: "#fff",
        borderRadius: ".4rem",
        appearance: "none",
    }
    const selectBoxInput = {
        width: "100%",
        height: "100%",
        border: "none",
        outline: "none",
    }
    return (
        <div
            className="select-input-box"
            style={selectBox}
        >
            <select
                style={selectBoxInput}
            >
                <option>{ props.selectOptions }</option>
            </select>
        </div>
    )
}

export default SelectInputComponent