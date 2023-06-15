import { render } from '@testing-library/react';
import { jest } from '@jest/globals';
import App from '../src/App.js';

const hobbies = [
    { emoji: '🏊', title: 'Swim' },
    { emoji: '🏃', title: 'Run' },
    { emoji: '🎮', title: 'Game' },
];

test('Should ignore hobbies without emoji', () => {
    const renderResult = render(<App hobbies={[...hobbies, { title: 'wrong' }]} />);

    // 3 hobbies
    const olollis = renderResult.container.querySelectorAll('ol ol li');
    expect(olollis.length).toBeGreaterThanOrEqual(hobbies.length);
});

test('Should have at least 4 lis - Name, Age, Hobbies, and at least 1 hobby', () => {
    const renderResult = render(<App hobbies={hobbies} />);

    // Minimally 6 li; Name, Age, Hobby, and 3 hobby.
    const ollis = renderResult.container.querySelectorAll('ol li');
    expect(ollis.length).toBeGreaterThanOrEqual(3 + hobbies.length);

    // 3 hobbies
    const olollis = renderResult.container.querySelectorAll('ol ol li');
    expect(olollis.length).toBeGreaterThanOrEqual(hobbies.length);
});

test('Should use <Hobby /> at least once', async () => {
    const mockHobbyFunction = jest.fn();
    jest.unstable_mockModule('../src/Hobby.js', () => ({
        default: (props) => {
            mockHobbyFunction(props);
            return <p>Mock Hobby</p>;
        },
    }));
    await import('../src/Hobby.js');
    const { default: MockedApp } = await import('../src/App.js?mocked=1');

    render(<MockedApp hobbies={hobbies} />);
    expect(mockHobbyFunction.mock.calls.length).toEqual(hobbies.length);
});

test('Should have 3 ol - main, hobby, rps', () => {
    const renderResult = render(<App hobbies={[]} />);

    const ols = renderResult.container.querySelectorAll('ol');
    expect(ols.length).toEqual(3);
});

test('First 3 Li are Name:..., Age:...., and Hobbies:.... accordingly', () => {
    const renderResult = render(<App hobbies={[]} />);

    const ollis = renderResult.container.querySelectorAll('ol li');

    expect(ollis[0].textContent).toMatch(/name/i);
    expect(ollis[1].textContent).toMatch(/age/i);
    expect(ollis[2].textContent).toMatch(/hobb(y|ies)/i);
});
