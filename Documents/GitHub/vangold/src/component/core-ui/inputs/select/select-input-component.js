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
                    <div className="select-input__footer"></div>
                </div>
            )}
        </div>
    )
}

export default SelectInputComponent