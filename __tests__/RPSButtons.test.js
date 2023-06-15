import '@testing-library/jest-dom';
import { jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RPSButtons from '../src/RPSButtons.js';

it('Should render 3 buttons: Rock, Paper, and Scissors', async () => {
    const onButtonPressed = jest.fn();

    const renderResult = render(<RPSButtons onButtonPressed={onButtonPressed} />);

    expect(await renderResult.findByText(`Rock`)).toBeInTheDocument();
    expect(await renderResult.findByText(`Paper`)).toBeInTheDocument();
    expect(await renderResult.findByText(`Scissors`)).toBeInTheDocument();
});

it('Should call the onButtonPressed props with respective text', async () => {
    const onButtonPressed = jest.fn();

    const renderResult = render(<RPSButtons onButtonPressed={onButtonPressed} />);

    await userEvent.click(await renderResult.findByText(`Rock`));
    expect(onButtonPressed).toBeCalledWith('Rock');

    await userEvent.click(await renderResult.findByText(`Paper`));
    expect(onButtonPressed).toBeCalledWith('Paper');

    await userEvent.click(await renderResult.findByText(`Scissors`));
    expect(onButtonPressed).toBeCalledWith('Scissors');
});
