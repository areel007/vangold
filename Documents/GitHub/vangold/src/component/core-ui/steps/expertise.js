import "./steps.css"
import {useState} from "react";
import {v4 as uuidv4} from "uuid"

const Expertise = (props) => {

    const [input, setInput] = useState("")

    const [addedSkills, setAddedSkills] = useState([])

    const [popularSkills] = useState([
        {
            skill: "Mobile App Development",
            id: 1
        },
        {
            skill: "Java",
            id: 2
        },
        {
            skill: "Ios",
            id: 3
        },
        {
            skill: "Web",
            id: 4
        },
        {
            skill: "User Experience Design",
            id: 5
        },
        {
            skill: "User Interface Design",
            id: 6
        },
        {
            skill: "Content Writing",
            id: 7
        }
    ])

    const onInputChange = (event) => {
        setInput(event.target.value)
    }

    const deleteSkill = ({id}) => {
        setAddedSkills(addedSkills.filter((skill) => skill.id !== id))
    }

    const addPopularSkill = (popularSkill) => {
        if (addedSkills.includes(popularSkill) === false) setAddedSkills([...addedSkills, popularSkill]);
    }

    const onFormSubmit = (event) => {
        event.preventDefault()
        setAddedSkills([...addedSkills, {skill: input, id: uuidv4()}])
        setInput("")

    }

    return (
        <div className="step">
            <p className="step-title">Expertise</p>
            <span className="step-subtitle">Select your skill or add your own</span>
            <div className="skills-expert__box">
                <form onSubmit={onFormSubmit}>
                    <input
                        type="text"
                        value={input}
                        onChange={onInputChange}
                        className="expertise__text-input"
                    />
                </form>
            </div>
            <div className="popular_skills__selected">
                {
                    addedSkills.length>0 ? <p className="skill-subtitle">Selected Skills</p> : null
                }
                <ul className="skill-selected-list">
                    {
                        addedSkills.map(
                            (addedSkill, index) => {
                                return (
                                    <li
                                        key={index}
                                        onClick={ () => deleteSkill(addedSkill) }
                                    >
                                        <div>
                                            <span>{addedSkill.skill}</span>
                                            <svg
                                                width="14"
                                                height="14"
                                                viewBox="0 0 14 14"
                                                fill="none"
                                            >
                                                <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41
                                                14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="white"/>
                                            </svg>
                                        </div>

                                    </li>
                                )
                            }
                        )
                    }
                </ul>
            </div>
            {
                popularSkills.length>0 ? <p className="skill-subtitle">Popular Skills</p> : null
            }
            <ul className="popular_skills__select">
                {
                    popularSkills.map(
                        (popularSkill, index) => {
                            return (
                                <li
                                    key={index}
                                    onClick={ () => addPopularSkill(popularSkill) }
                                >
                                    <div>
                                        <span>{popularSkill.skill}</span>
                                        <svg
                                            width="14"
                                            height="14"
                                            viewBox="0 0 14 14"
                                            fill="none"
                                        >
                                            <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#767676"/>
                                        </svg>

                                    </div>
                                </li>
                            )
                        }
                    )
                }
            </ul>
        </div>
    )
}

export default Expertise