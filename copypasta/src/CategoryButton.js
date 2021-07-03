import './CategoryButton.css';

function CategoryButton({ category, selected }) {

    let className = "CategoryButton ";

    if (selected) {
        className += "SelectedButton";
    }

    return (
        <div className={className}>{category}</div>
    )
}

export default CategoryButton;