import RPSButton from './RPSButton.js';

const moves = ['Rock', 'Paper', 'Scissors'];

export default function RPSButtons(props) {
    return (
        <div>
            {moves.map((move) => (
                <RPSButton
                    key={move}
                    onClick={() => props.onButtonPressed(move)}
                    move={move}
                    records={props.records.filter((record) => record.move === move)}
                />
            ))}
        </div>
    );
}
