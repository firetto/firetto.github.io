import {ReactComponent as CopyIcon} from './copy-solid.svg';
import './CopyButton.css';

function CopyButton() {
    return (
        <div className="CopyButton">
            <CopyIcon width="1.5em" className="copy-icon" />
        </div>
    )
}

export default CopyButton;