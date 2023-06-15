export default function RPSButtons(props) {
    return (
        <div>
            <button onClick={() => props.onButtonPressed('Rock')}>Rock</button>
            <button onClick={() => props.onButtonPressed('Paper')}>Paper</button>
            <button onClick={() => props.onButtonPressed('Scissors')}>Scissors</button>
        </div>
    );
}