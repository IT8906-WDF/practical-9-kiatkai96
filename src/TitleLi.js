export default function TitleLi(props) {
    return (
        <li
            onMouseEnter={function () {
                if (props.onMouseEnter) props.onMouseEnter();
            }}
            onMouseLeave={function () {
                if (props.onMouseLeave) props.onMouseLeave();
            }}
        >
            <b>{props.title}</b>: {!props.isHidden && props.children}
        </li>
    );
}
