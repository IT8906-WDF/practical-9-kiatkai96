import '@testing-library/jest-dom';
import { jest } from '@jest/globals';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RPSInput from '../src/RPSInput.js';

it('Should add rock and lose', async () => {
    const move = 'Rock';
    const onAdd = jest.fn();
    const { container } = render(<RPSInput onAdd={onAdd} />);

    await userEvent.selectOptions(container.querySelector('select'), [move]);
    await userEvent.click(container.querySelector('button'));

    expect(onAdd).toBeCalledWith({ move: move, result: 'Lose' });
});

it('Should add paper and win', async () => {
    const move = 'Paper';
    const onAdd = jest.fn();
    const { container } = render(<RPSInput onAdd={onAdd} />);

    await userEvent.selectOptions(container.querySelector('select'), [move]);
    await userEvent.click(container.querySelector('input'));
    await userEvent.click(container.querySelector('button'));

    expect(onAdd).toBeCalledWith({ move: move, result: 'Win' });
});

it('Should add scissors and win', async () => {
    const move = 'Scissors';
    const onAdd = jest.fn();
    const { container } = render(<RPSInput onAdd={onAdd} />);

    await userEvent.selectOptions(container.querySelector('select'), [move]);
    await userEvent.click(container.querySelector('input'));
    await userEvent.click(container.querySelector('input'));
    await userEvent.click(container.querySelector('input'));
    await userEvent.click(container.querySelector('button'));

    expect(onAdd).toBeCalledWith({ move: move, result: 'Win' });
});
