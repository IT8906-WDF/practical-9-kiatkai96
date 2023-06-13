export default function TitleLi(props) {
    return (
        <li>
            <b>{props.title}</b>: {props.children}
        </li>
    );
}
