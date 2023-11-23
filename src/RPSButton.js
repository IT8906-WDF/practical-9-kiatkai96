import { IsEmojiContext, emoji } from './IsEmojiContext.js';

export default function RPSButton(props) {
    const isEmoji = React.useContext(IsEmojiContext);
    const [isHovered, setIsHovered] = React.useState(false);
    const winCount = props.records.filter((record) => record.result === 'Win').length;
    const totalCount = props.records.length;
    const percentage = totalCount ? (winCount / totalCount) * 100 : 0;
    return (
        <button
            onClick={props.onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isEmoji ? emoji[props.move] : props.move} {isHovered && `(${percentage.toFixed(2)}%)`}
        </button>
    );
}
