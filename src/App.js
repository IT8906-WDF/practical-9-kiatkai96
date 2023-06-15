import Age from './Age.js';
import Hello from './Hello.js';
import Hobby from './Hobby.js';
import TitleLi from './TitleLi.js';

export default function App(props) {
    const name = 'ENTER YOUR NAME';
    return (
        <div>
            <Hello name={name}></Hello>
            <div>
                <ol>
                    <TitleLi title="Name">{name}</TitleLi>
                    <Age value={18} />
                    <TitleLi title="Hobbies">
                        <ol>
                            {props.hobbies
                                .filter((hobby) => hobby.emoji)
                                .map(function (hobby) {
                                    return <Hobby title={hobby.title} emoji={hobby.emoji} key={hobby.title} />;
                                })}
                        </ol>
                    </TitleLi>
                </ol>
            </div>
        </div>
    );
}
