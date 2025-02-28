export const ButtonUi = (props) => {
    return (
        <button
            className={ props.className }
            type={ props.type }
        >
            { props.text }
        </button>
    )
}