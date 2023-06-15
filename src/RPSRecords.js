export default function RPSRecords(props) {
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
                            {record.result} ({record.move})
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}
