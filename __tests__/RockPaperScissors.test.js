import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RockPaperScissors from '../src/RockPaperScissors.js';

test('Should render records on press of buttons', async () => {
    const { container } = render(<RockPaperScissors />);

    await userEvent.click(container.querySelectorAll('button')[0]);
    await userEvent.click(container.querySelectorAll('button')[0]);
    await userEvent.click(container.querySelectorAll('button')[1]);
    await userEvent.click(container.querySelectorAll('button')[2]);

    const records = container.querySelectorAll('ol li');
    expect(records.length).toEqual(4);
});

test('Should render records on manual addition', async () => {
    const { container } = render(<RockPaperScissors />);

    const selectElement = container.querySelector('select');
    const addButton = selectElement.parentElement.querySelector('button');

    await userEvent.selectOptions(selectElement, ['Rock']);
    await userEvent.click(addButton);

    await userEvent.selectOptions(selectElement, ['Paper']);
    await userEvent.click(addButton);

    await userEvent.selectOptions(selectElement, ['Scissors']);
    await userEvent.click(addButton);

    await userEvent.click(container.querySelector('input'));

    await userEvent.selectOptions(selectElement, ['Rock']);
    await userEvent.click(addButton);

    await userEvent.selectOptions(selectElement, ['Paper']);
    await userEvent.click(addButton);

    await userEvent.selectOptions(selectElement, ['Scissors']);
    await userEvent.click(addButton);

    await userEvent.selectOptions(selectElement, ['Paper']);
    await userEvent.click(addButton);

    await userEvent.selectOptions(selectElement, ['Rock']);
    await userEvent.click(addButton);

    expect(await screen.findByText(/62\.5/)).toBeInTheDocument();
});
