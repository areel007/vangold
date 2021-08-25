import BrSelectCategoryComponent from "./select/b-select-category-component";

const Category = () => {
    return (
        <div style={{height: "450px"}} className="b-step">
            <p className="b-step-title">Category</p>
            <span className="b-step-subtitle">Give a brief description about yourself</span>
            <BrSelectCategoryComponent />
        </div>
    )
}

export default Category