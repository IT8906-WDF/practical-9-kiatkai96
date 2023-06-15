import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Age from '../src/Age.js';

it('Show hide by default', async () => {
    const age = 18;
    const { container } = render(<Age value={age} />);
    expect(container.textContent.includes(age)).toBeFalsy();
});

it('Show show when mouse in', async () => {
    const age = 18;
    const { container } = render(<Age value={age} />);
    await userEvent.hover(screen.getByText(/age/i));
    expect(container.textContent.includes(age)).toBeTruthy();
});

it('Show show hide when mouse out', async () => {
    const age = 18;
    const { container } = render(<Age value={age} />);
    await userEvent.hover(screen.getByText(/age/i));
    await userEvent.unhover(screen.getByText(/age/i));
    expect(container.textContent.includes(age)).toBeFalsy();
});

it('Should hide 🔞 when age is 18 and above', async () => {
    const emoji = '🔞';

    const { container } = render(<Age value={18} />);
    await userEvent.hover(screen.getByText(/age/i));
    expect(container.textContent.includes(emoji)).toBeFalsy();
});

it('Should show 🔞 when age is below 18', async () => {
    const emoji = '🔞';

    const { container } = render(<Age value={1} />);
    await userEvent.hover(screen.getByText(/age/i));
    expect(container.textContent.includes(emoji)).toBeTruthy();
});
