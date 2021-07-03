import './TextList.css'
import TextComponent from './TextComponent.js'

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function TextList( {category, category_text_dict} ) {

    let components = [];

    for (let i = 0; i < category_text_dict[category].length; i++) {
        components.push(<TextComponent content={category_text_dict[category][i]} />);
    }

    return (
        <div className="TextList">
            <h2>have a random one</h2>
            <TextComponent content={category_text_dict[category][getRandomInt(category_text_dict[category].length)]} />

            <h2>here's all of 'em</h2>
            {components}
        </div>
    )
}

export default TextList;