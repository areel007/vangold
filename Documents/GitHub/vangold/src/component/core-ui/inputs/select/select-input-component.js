import "./select-input-component.css"
import {useState} from "react";

const SelectInputComponent = props => {

    const [isActive, setIsActive] = useState(false)
    const [isSubcategoryShow, setIsSubcategoryShow] = useState(false)
    const [isSkillsShow, setIsSkillsShow] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [selectedSubcategory, setSelectedSubcategory] = useState(null)

    const [designSubcategories] = useState([
        "Graphic Design",
        "Photography",
        "Product Design",
        "Painting",
        "Illustration",
        "Cartoons/Comic Art",
        "Fashion Design",
        "Brand Identity Design",
        "Digital Art",
        "General/Other Art"
    ])

    const [categories] = useState([
        "Programming & Development",
        "Design & Art",
        "Writing & Translation",
        "Business & Finance",
        "Sales & Marketing",
        "Engineering & Architecture",
        "Video & Animation",
        "Eduction & Training",
        "Lifestyle",
        "Other"
    ])

    const [illustrationSkills] = useState([
        "Cover Art",
        "Book Illustration",
        "Character Design",
        "Technical Drawing",
        "Line Art",
        "Product Illustration",
        "Nature Illustration",
        "Digital Illustration",
        "Pen & Ink Drawing",
        "Architectural Illustration",
        "Medical Illustration"
    ])

    const openSubcategories = (event) => {
        setIsSubcategoryShow(!isSubcategoryShow)
        setSelectedCategory(event.target.innerText)
    }

    const openSkills = (event) => {
        setIsSkillsShow(!isSkillsShow)
        setSelectedSubcategory(event.target.innerText)
    }

    return (
        <div className="select-input-component">
            <div
                className="select-input-button"
                onClick={() => {
                    setIsActive(!isActive)
                }}
            >
            <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.8125 0H1.40625V16.9688H0V21.1875H1.40625V24H2.8125V21.1875H4.21875V16.9688H2.8125V0Z" fill="#45B618"/>
                <path d="M19.7344 16.9688V0H18.3281V16.9688H16.9219V21.1875H18.3281V24H19.7344V21.1875H21.1406V16.9688H19.7344Z" fill="#45B618"/>
                <path d="M14.1094 0H12.7031V10.4062H11.2969V14.625H12.7031V24H14.1094V14.625H15.5156V10.4062H14.1094V0Z" fill="#45B618"/>
                <path d="M8.4375 0H7.03125V2.51494H5.625V6.73369H7.03125V24H8.4375V6.73369H9.84375V2.51494H8.4375V0Z" fill="#45B618"/>
            </svg>

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
                <div className="select-input-dropdown">
                    <div className="select-input__categories">
                        <div className="categories__category">
                            <p className="categories__title">Select a Category</p>
                            {
                                categories.map((category, index) => {
                                    return <ul
                                        key={index}
                                    >
                                        <li
                                            onClick={openSubcategories}
                                        >
                                            <span className="category__name">{category}</span>
                                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.99984 0L0.589844 1.41L5.16984 6L0.589844 10.59L1.99984 12L7.99984 6L1.99984 0Z" fill="#333333"/>
                                            </svg>

                                        </li>
                                    </ul>
                                })
                            }
                        </div>
                        {
                            isSubcategoryShow && (
                                <div className="categories__category subcategories">
                                    <p className="categories__title">Select a Subcategory</p>
                                    {
                                        designSubcategories.map(designSubcategory => {
                                            if (selectedCategory === 'Design & Art') {
                                                return <ul>
                                                    <li
                                                    onClick={openSkills}>
                                                        <span className="category__name">{designSubcategory}</span>
                                                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M1.99984 0L0.589844 1.41L5.16984 6L0.589844 10.59L1.99984 12L7.99984 6L1.99984 0Z" fill="#333333"/>
                                                        </svg>
                                                    </li>
                                                </ul>
                                            }
                                        })
                                    }
                                </div>
                            )
                        }
                        {
                            isSkillsShow && (
                                <div className="categories__category skills">
                                    <p className="categories__title">Select a Skills</p>
                                    {
                                        illustrationSkills.map(illustrationSkill => {
                                            if (selectedSubcategory === 'Illustration') {
                                                return <ul>
                                                    <li>
                                                        <span className="category__name">{illustrationSkill}</span>
                                                    </li>
                                                </ul>
                                            }
                                        })
                                    }
                                </div>
                            )
                        }

                    </div>
                    <div className="select-input__footer">
                        <div className="btns">Clear All</div>
                        <div className="btns">Apply</div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SelectInputComponent