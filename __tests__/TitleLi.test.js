import { jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import TitleLi from '../src/TitleLi.js';
import userEvent from '@testing-library/user-event';

it('Should trigger props.onMouseEnter when hover', async () => {
    const title = 'Title-fslahsdiqwjkljs';
    const content = 'Content-kdsjflskhiisdghsl';
    const onMouseEnter = jest.fn();

    render(
        <TitleLi title={title} isHidden={true} onMouseEnter={onMouseEnter}>
            {content}
        </TitleLi>,
    );

    await userEvent.hover(screen.getByText(title));
    expect(onMouseEnter).toBeCalled();
});

it('Should trigger props.onMouseLeave when hover', async () => {
    const title = 'Title-fslahsdiqwjkljs';
    const content = 'Content-kdsjflskhiisdghsl';
    const onMouseLeave = jest.fn();

    render(
        <TitleLi title={title} isHidden={true} onMouseLeave={onMouseLeave}>
            {content}
        </TitleLi>,
    );

    await userEvent.hover(screen.getByText(title));
    await userEvent.unhover(screen.getByText(title));
    expect(onMouseLeave).toBeCalled();
});

it('Should hide children if isHidden', async () => {
    const title = 'Title-fslahsdiqwjkljs';
    const content = 'Content-kdsjflskhiisdghsl';

    const { container } = render(
        <TitleLi title={title} isHidden={true}>
            {content}
        </TitleLi>,
    );

    const b = container.querySelector('b');
    const li = container.querySelector('li');

    expect(b.textContent).toEqual(title);

    li.removeChild(b);
    expect(li.textContent).not.toContain(content);
});

it('Should render bolded title with children as content', async () => {
    const title = 'Title-fslahsdiqwjkljs';
    const content = 'Content-kdsjflskhiisdghsl';

    const { container } = render(<TitleLi title={title}>{content}</TitleLi>);

    const b = container.querySelector('b');
    const li = container.querySelector('li');

    expect(b.textContent).toEqual(title);

    li.removeChild(b);
    expect(li.textContent).toContain(content);
});
