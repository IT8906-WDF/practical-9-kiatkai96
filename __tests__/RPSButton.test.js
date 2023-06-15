import '@testing-library/jest-dom';
import { jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RPSButton from '../src/RPSButton.js';

it('Should call the onClick props with respective text', async () => {
    const move = 'movemovemove';
    const onClick = jest.fn();

    const renderResult = render(<RPSButton move={move} onClick={onClick} records={[]} />);
    await userEvent.click(await renderResult.findByText(move));
    expect(onClick).toBeCalled();
});

it('Should display Win % when hovered', async () => {
    const move = 'movemovemove';
    const onClick = jest.fn();

    const renderResult = render(<RPSButton move={move} onClick={onClick} records={[{ result: 'Win' }]} />);
    expect(renderResult.queryByText(/100/)).toBeFalsy();
    await userEvent.hover(await renderResult.findByText(move));
    expect(await renderResult.findByText(/100/)).toBeInTheDocument();
});

it('Should display Win % correctly', async () => {
    const move = 'movemovemove';
    const onClick = jest.fn();

    const renderResult = render(
        <RPSButton
            move={move}
            onClick={onClick}
            records={[
                { result: 'Win' },
                { result: 'Lose' },
                { result: 'Lose' },
                { result: 'Win' },
                { result: 'Win' },
                { result: 'Win' },
            ]}
        />,
    );
    await userEvent.hover(await renderResult.findByText(move));
    expect(await renderResult.findByText(/66/)).toBeInTheDocument();
});

it('Should handle empty records correctly', async () => {
    const move = 'movemovemove';
    const onClick = jest.fn();

    const renderResult = render(<RPSButton move={move} onClick={onClick} records={[]} />);
    await userEvent.hover(await renderResult.findByText(move));
    expect(await renderResult.findByText(/0/)).toBeInTheDocument();
});
