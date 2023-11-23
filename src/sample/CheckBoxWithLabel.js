import { useState } from 'react';

export default function CheckBoxWithLabel(props) {
    const [isChecked, setIsChecked] = useState(false);
    const onChange = () => setIsChecked(!isChecked);
    return (
        <label>
            <input type="checkbox" checked={isChecked} onChange={onChange} />
            {isChecked ? props.labelOn : props.labelOff}
        </label>
    );
}
