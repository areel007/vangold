import FrSelectCategoryComponent from "../inputs/select/f-select-category-component";
import FrSelectCategoryComponentTwo from "../inputs/select/f-select-category-component2";

const Category = () => {
    return (
        <div className="freelancer-regs-step">
            <p className="step-title">Category</p>
            <span className="step-subtitle">What is the main service you offer?</span>
            <div className="f-select-category">
                <FrSelectCategoryComponent />
                <FrSelectCategoryComponentTwo />
            </div>
        </div>
    )
}

export default Category