export default function RPSButton(props) {
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
            {props.move} {isHovered && `(${percentage.toFixed(2)}%)`}
        </button>
    );
}
