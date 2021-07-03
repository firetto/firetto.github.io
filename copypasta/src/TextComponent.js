import './TextComponent.css';
import CopyButton from './CopyButton.js'

export default function TextComponent( {content} ) {
    return (
        <div className="TextComponent">
            <div className="TextWrapper">
                    {content}
            </div>
            <div onClick={
                    () =>  navigator.clipboard.writeText(content)
                } 
                className="CopyButtonWrapper">
                <CopyButton />
            </div>
        </div>
    )
}