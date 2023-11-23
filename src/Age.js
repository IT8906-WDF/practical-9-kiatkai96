import { useState } from 'react';
import TitleLi from './TitleLi.js';

export default function Age(props) {
    const [isHidden, setIsHidden] = useState(true); // Add state
    const emoji = props.value >= 18 ? '' : '🔞';
    return (
        <TitleLi
            title="Age"
            isHidden={isHidden}
            onMouseEnter={function () {
                setIsHidden(false);
            }}
            onMouseLeave={function () {
                setIsHidden(true);
            }}
        >
            {emoji} {props.value}
        </TitleLi>
    );
}
