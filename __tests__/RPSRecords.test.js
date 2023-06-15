import { render } from '@testing-library/react';
import RPSRecords from '../src/RPSRecords.js';

const records = [
    { move: 'Rock', result: 'Win' },
    { move: 'Paper', result: 'Lose' },
    { move: 'Scissors', result: 'Win' },
    { move: 'Rock', result: 'Lose' },
    { move: 'Paper', result: 'Lose' },
    { move: 'Rock', result: 'Lose' },
    { move: 'Paper', result: 'Win' },
    { move: 'Scissors', result: 'Win' },
    { move: 'Paper', result: 'Win' },
];

test('Should render records li', () => {
    const renderResult = render(<RPSRecords records={records} />);

    const recordsLi = renderResult.container.querySelectorAll('ol li');

    expect(recordsLi.length).toEqual(records.length);
});

test('Should render Win %', () => {
    const renderResult = render(<RPSRecords records={records} />);

    const recordsLi = renderResult.container.querySelector('p');

    const percentage = ((records.filter(({ result }) => result.match(/win/i)).length / records.length) * 100).toFixed(
        0,
    );
    expect(recordsLi.textContent).toContain(percentage);
});
