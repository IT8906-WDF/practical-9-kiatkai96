import { render } from '@testing-library/react';
import TitleLi from '../src/TitleLi.js';

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
