import { render } from '@testing-library/react';
import Age from '../src/Age.js';

it('Should hide 🔞 when age is 18 and above', async () => {
    const emoji = '🔞';

    const { container } = render(<Age value={18} />);
    expect(await container.textContent.includes(emoji)).toBeFalsy();
});

it('Should show 🔞 when age is below 18', async () => {
    const emoji = '🔞';

    const { container } = render(<Age value={1} />);
    expect(await container.textContent.includes(emoji)).toBeTruthy();
});
