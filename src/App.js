import Hello from './Hello.js';
import Hobby from './Hobby.js';
import TitleLi from './TitleLi.js';

export default function App() {
    const name = 'ENTER YOUR NAME';
    return (
        <div>
            <Hello name={name}></Hello>
            <div>
                <ol>
                    <TitleLi title="Name">{name}</TitleLi>
                    <TitleLi title="Age">18</TitleLi>
                    <TitleLi title="Hobbies">
                        <ol>
                            <Hobby title="Swim" emoji="🏊" />
                            <Hobby title="Run" emoji="🏃" />
                            <Hobby title="Game" emoji="🎮" />
                        </ol>
                    </TitleLi>
                </ol>
            </div>
        </div>
    );
}
