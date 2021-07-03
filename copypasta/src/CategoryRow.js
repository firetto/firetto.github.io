import CategoryButton from "./CategoryButton";
import './CategoryRow.css';

function CategoryRow({ categories, setCategory, selected_category }) {
    let buttons = categories.map((c) => <div className="CategoryButtonWrapper" onClick={() => {setCategory(c)}}> <CategoryButton category={c} selected={c === selected_category} /></div>); 
       
    return (
        <div className="CategoryRow">
            {buttons}
        </div>
    )
}

export default CategoryRow;