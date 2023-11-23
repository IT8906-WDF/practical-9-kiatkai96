import { useState } from 'react';

export default function RPSInput(props) {
    const [selectedMove, setSelectedMove] = useState('Rock');
    const [isWin, setIsWin] = useState(false);
    return (
        <div>
            <select value={selectedMove} onChange={(e) => setSelectedMove(e.target.value)}>
                <option value="Rock">Rock</option>
                <option value="Paper">Paper</option>
                <option value="Scissors">Scissors</option>
            </select>
            <input type="checkbox" checked={isWin} onChange={(e) => setIsWin(e.target.checked)} /> Win?
            <button onClick={() => props.onAdd({ move: selectedMove, result: isWin ? 'Win' : 'Lose' })}>Add</button>
        </div>
    );
}
