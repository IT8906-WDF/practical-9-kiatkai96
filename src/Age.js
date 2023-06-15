import TitleLi from './TitleLi.js';

export default function Age(props) {
    return (
        <TitleLi title="Age" isHidden={false}>
            {(props.value >= 18 ? '' : '🔞') + props.value}
        </TitleLi>
    );
}
