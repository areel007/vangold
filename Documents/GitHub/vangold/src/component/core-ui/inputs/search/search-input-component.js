const SearchInputComponent = () => {
    const searchBox = {
        width: "100%",
        padding: "1.8rem 1.6rem",
        border: "1px solid rgba(0, 0, 0, .5)",
        height: "5.6rem",
        backgroundColor: "#fff",
        borderRadius: ".4rem",
        display: "flex",
        alignItems: "center"
    }
    const searchBoxInput = {
        width: "100%",
        height: "100%",
        border: "none",
        outline: "none",
        fontsize: "1.6rem",
        lineHeight: "1.9rem",
        color: "#000"
    }
    const searchSvg = {
        marginRight: ".75rem"
    }

    return(
        <div style={searchBox}>
            <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                style={searchSvg}
            >
                <path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="black"/>
            </svg>
            <input style={searchBoxInput} type="text"/>
        </div>
    )
}

export default SearchInputComponent