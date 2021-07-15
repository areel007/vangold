import "./select-input-component.css"
import {useState} from "react";

const SelectInputComponent = props => {
    const [isActive, setIsActive] = useState(false)
    return (
        <div className="select-input-component">
            <div
                className="select-input-button"
                onClick={() => {
                    setIsActive(!isActive)
                }}
            >
                Select Category
                { isActive ? (
                    <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 5L5 4.37114e-07L0 5L10 5Z" fill="#141414"/>
                    </svg>
                ) : (
                    <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0L5 5L10 0H0Z" fill="#141414"/>
                    </svg>
                )}



            </div>
            { isActive && (
                <div className="select-input-dropdown-content">
                    <div className="select-input-dropdown-category">
                        <p className="select-input-dropdown-content-title">Select a Category</p>
                        <div className="select-input-dropdown-item">
                            React
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.99984 0L0.589844 1.41L5.16984 6L0.589844 10.59L1.99984 12L7.99984 6L1.99984 0Z" fill="#333333"/>
                            </svg>

                        </div>
                        <div className="select-input-dropdown-item">
                            Vue
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.99984 0L0.589844 1.41L5.16984 6L0.589844 10.59L1.99984 12L7.99984 6L1.99984 0Z" fill="#333333"/>
                            </svg>

                        </div>
                        <div className="select-input-dropdown-item">
                            Angular
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.99984 0L0.589844 1.41L5.16984 6L0.589844 10.59L1.99984 12L7.99984 6L1.99984 0Z" fill="#333333"/>
                            </svg>

                        </div>
                    </div>
                    <div className="select-input-dropdown-subcategory">
                        <p className="select-input-dropdown-content-title">Select a Subcategory</p>
                        <div className="select-input-dropdown-item">
                            React
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.99984 0L0.589844 1.41L5.16984 6L0.589844 10.59L1.99984 12L7.99984 6L1.99984 0Z" fill="#333333"/>
                            </svg>

                        </div>
                        <div className="select-input-dropdown-item">
                            Vue
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.99984 0L0.589844 1.41L5.16984 6L0.589844 10.59L1.99984 12L7.99984 6L1.99984 0Z" fill="#333333"/>
                            </svg>

                        </div>
                        <div className="select-input-dropdown-item">
                            Angular
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.99984 0L0.589844 1.41L5.16984 6L0.589844 10.59L1.99984 12L7.99984 6L1.99984 0Z" fill="#333333"/>
                            </svg>

                        </div>
                    </div>
                    <div className="select-input-dropdown-skill">
                        <p className="select-input-dropdown-content-title">Select a Skill</p>
                        <div className="select-input-dropdown-item">
                            React
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.99984 0L0.589844 1.41L5.16984 6L0.589844 10.59L1.99984 12L7.99984 6L1.99984 0Z" fill="#333333"/>
                            </svg>

                        </div>
                        <div className="select-input-dropdown-item">
                            Vue
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.99984 0L0.589844 1.41L5.16984 6L0.589844 10.59L1.99984 12L7.99984 6L1.99984 0Z" fill="#333333"/>
                            </svg>

                        </div>
                        <div className="select-input-dropdown-item">
                            Angular
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.99984 0L0.589844 1.41L5.16984 6L0.589844 10.59L1.99984 12L7.99984 6L1.99984 0Z" fill="#333333"/>
                            </svg>

                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SelectInputComponent