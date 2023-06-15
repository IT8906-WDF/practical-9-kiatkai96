import { jest } from '@jest/globals';
import { render } from '@testing-library/react';
import RPSRecords from '../src/RPSRecords.js';
import userEvent from '@testing-library/user-event';

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

test('Clicking on records tell me which index was clicked', async () => {
    const onDeleteRecord = jest.fn();
    const { container } = render(<RPSRecords records={records} onDeleteRecord={onDeleteRecord} />);

    await userEvent.click(container.querySelector('li:nth-of-type(3)'));
    expect(onDeleteRecord).toBeCalledWith(2);
});

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
