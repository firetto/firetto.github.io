import React, { useState } from 'react';

import TextList from './TextList.js'
import CategoryRow from './CategoryRow.js'
import './Page.css';
import { content } from './content.js';
function Page() {

    let category_set = new Set();

    let category_text_dict = {};

    for (let m = 0; m < content.length; m++) {
        category_set.add(content[m].category);
        if (!category_text_dict[content[m].category]) {
            category_text_dict[content[m].category] = [content[m].text]
        }
        else {
            category_text_dict[content[m].category].push(content[m].text)
        }
    }
        
    const categories = Array.from(category_set);

    const [selected_category, setCategory] = useState(categories[0]);

    return (
        <div className="Page">
            <CategoryRow categories={categories} setCategory={setCategory} selected_category={selected_category} />
            <TextList category={selected_category} category_text_dict={category_text_dict} />
        </div>
    )
}

export default Page;