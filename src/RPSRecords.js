import { IsEmojiContext, emoji } from './IsEmojiContext.js';

export default function RPSRecords(props) {
    const isEmoji = React.useContext(IsEmojiContext);
    const winCount = props.records.filter((record) => record.result === 'Win').length;
    const totalCount = props.records.length;
    const winPercentage = totalCount ? ((winCount / totalCount) * 100).toFixed(2) : 0;
    return (
        <div>
            <p>Rounds (Win %: {winPercentage}):</p>
            <ol>
                {props.records.map(function (record, index) {
                    // Sample record: { result: "Win", move: "Rock" }
                    return (
                        <li onClick={() => props.onDeleteRecord(index)} key={index}>
                            {record.result} ({isEmoji ? emoji[record.move] : record.move})
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}
